
import { useEffect, useState } from 'react';
import './App.css'
import { get, post, FilterTasksForStatus,axiosPut,getAllMessenger} from './axios/axios';
import { Card } from './components/Cards/index';
import { Register } from './components/register';
import { LeftOptions } from './components/LeftOptions';

function App() {
  const [ data, setData] = useState([])
  const [ AlertModal,setAlert] = useState('')

  const [historyMesssager, setHistoryMessage] = useState([])
 
  async function getInfo() {
    const data = await get();
    setData(data)
  }

  async function postToDoList(obj){
    if(obj.inputToDo == "Nome da Task" || obj.description == "Descrição" || obj.status == "Severidade") {
      setAlert("Error")
      return
    }
    setAlert("Success")
    await post(obj)
  } 

  async function filterStatus(dataForFilterStatus) {
    const tableFilteresForStatus = await FilterTasksForStatus(dataForFilterStatus)
    setData(tableFilteresForStatus)

  }


  async function functionEditTaskWithNewData(newDatas) {
    await axiosPut(newDatas)
  }
 

  async function getMessengerHistory(idTask){
    const allMessage = await getAllMessenger(idTask)
    return allMessage
  }



  useEffect(() => {
    getInfo()
  },[])

  return (
    <div className='Home'>
      <div className='Fixed'>
        <LeftOptions functionFilter={filterStatus}/>
        <Register onSubmit={postToDoList} AlertModal={AlertModal}/>
      </div>
      <div className='cardsGrid'>
        {data.map((e) =>{
          return(
            <div className='tester' key={e.id}>
              <Card datasForCreateCard={e} editTaskWithNewData={functionEditTaskWithNewData} getMessengers={getMessengerHistory}/>
            </div>
            )
        })}
      </div>

    </div>
  )
}

export default App
