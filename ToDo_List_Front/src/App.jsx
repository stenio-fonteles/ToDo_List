
import { useEffect, useState } from 'react';
import './App.css'
import { get, post, FilterTasksForStatus,axiosPut,getAllMessenger,registerNewTechAndNewCategory} from './axios/axios';
import { Card } from './components/Cards/index';
import { Register } from './components/register';
import { LeftOptions } from './components/LeftOptions';
import AlertDialogSlide from './components/Dialog';
import AccountMenu from './components/Dialog_Config';

function App() {
  const [ data, setData] = useState([])
  const[idTaskSelected, setIdTask] = useState()
  const [ AlertModal,setAlert] = useState('')
  const [ showModal,setShowModal] = useState(false)
  const [allMessageHistory, setAllMessageHistory] = useState([])


 
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
 


  async function function_task_details(idTask){
    setIdTask(idTask)
    setShowModal(!showModal)
    const {data} = await getAllMessenger(idTask)
    setAllMessageHistory(data)
  }

  async function registerNewCategoryAndTech(categoryAndTech){
    await registerNewTechAndNewCategory(categoryAndTech)
  }

  useEffect(() => {
    getInfo()
  },[])

  return (
    <div className='Home'>
      <div className='config'>
        <AccountMenu registerNewCategoryAndTech={registerNewCategoryAndTech}/>
      </div>
      <div className='Fixed'>
        <LeftOptions functionFilter={filterStatus}/>
        <Register onSubmit={postToDoList} AlertModal={AlertModal}/>
      </div>
      <div className='cardsGrid'>
        {data.map((e) =>{
          return(
            <div className='cardPosition' key={e.id} onClick={() => function_task_details(e.id)}>
              <Card datasForCreateCard={e}  task_details={function_task_details} />
            </div>
            )
          })}
          <AlertDialogSlide informationOfTask={idTaskSelected} getMessengers={allMessageHistory} showModal={showModal} notShowModal={setShowModal}allTasks={data} editTaskWithNewData={functionEditTaskWithNewData}/>
      </div>
    </div>
  )
}

export default App
