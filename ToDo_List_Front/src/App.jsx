
import { useEffect, useState } from 'react';
import './App.css'
import { get, post, axiosPut} from './axios/axios';
import { Card } from './components/Cards/index';
import { Register } from './components/register';
import { LeftOptions } from './components/LeftOptions';

function App() {
  const [ data, setData] = useState([])
  const [ AlertModal,setAlert] = useState('')
 
  async function getInfo() {
    const data = await get();
    setData(data)
  }



  async function functionEditTaskWithNewData(newDatas) {
    await axiosPut(newDatas)
  }
 

  async function postToDoList(obj){
    if(obj.inputToDo == "Nome da Task" || obj.description == "Descrição" || obj.status == "Severidade") {
      setAlert("Error")
      return
    }
    setAlert("Success")
    await post(obj)
  } 


  useEffect(() => {
    getInfo()
  },[])

  return (
    <div className='Home'>
      <div className='Fixed'>
        <LeftOptions/>
        <Register onSubmit={postToDoList} AlertModal={AlertModal}/>
      </div>
      <div className='cardsGrid'>
        {data.map((e) =>{
          return(
            <div className='tester' key={e.id}>
              <Card data={e} editTaskWithNewData={functionEditTaskWithNewData}/>
            </div>
            )
        })}
      </div>

    </div>
  )
}

export default App
