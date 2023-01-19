
import { useEffect, useState } from 'react';
import './App.css'
import { get, post, FilterTasksForStatus,axiosPut,getAllMessenger,registerNewTechAndNewCategory,getAllTechs} from './axios/axios';
import { Card } from './components/Cards/index';
import { LeftOptions } from './components/LeftOptions';
import AlertDialogSlide from './components/Dialog';
import AccountMenu from './components/Dialog_Config';
import Register from './components/Registere';

function App() {
  const [ data, setData] = useState([])
  const [ idTaskSelected, setIdTask] = useState()
  const [ AlertModal,setAlert] = useState('')
  const [ showModal,setShowModal] = useState(false)
  const [ allMessageHistory, setAllMessageHistory] = useState([])

  const [ reload,setReload] = useState(true)


 
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
    setReload(!reload)
  } 

  async function filterStatus(dataForFilterStatus) {
    console.log(dataForFilterStatus)
    if(dataForFilterStatus == 'All'){
      setReload(!reload)
    }
    const tableFilteresForStatus = await FilterTasksForStatus(dataForFilterStatus)
    setData(tableFilteresForStatus)

  }


  async function functionEditTaskWithNewData(newDatas) {
    await axiosPut(newDatas)
  }
 


  async function function_task_details(idTask){
    const {data} = await getAllMessenger(idTask)
    setIdTask(idTask)
    setShowModal(!showModal)
    setAllMessageHistory(data)
  }

  async function registerNewCategoryAndTech(categoryAndTech){
    await registerNewTechAndNewCategory(categoryAndTech)
    setReload(!reload)
  }

  async function functionGetAllTechnology(){
    const data = await getAllTechs()
    return data
  }
  useEffect(() => {
    getInfo()
  },[])

  useEffect(() => {
    getInfo()

  },[reload])

  return (
    <div className='Home'>
      <div className='grid'>

        <div className='cardsGrid'>
        <p>Pessoal</p>
          {data.map((e) =>{
            return(
              <div className='cardPosition' key={e.id} onClick={() => function_task_details(e.id)}>
                <Card datasForCreateCard={e}  />
              </div>
              )
            })}
            <AlertDialogSlide informationOfTask={idTaskSelected} getMessengers={allMessageHistory} showModal={showModal} notShowModal={setShowModal} allTasks={data} editTaskWithNewData={functionEditTaskWithNewData}/>
        </div>

      <div className='cardsGrid'>
        <p>Selletiva</p>
          {data.map((e) =>{
            return(
              <div className='cardPosition' key={e.id} onClick={() => function_task_details(e.id)}>
                <Card datasForCreateCard={e}  />
              </div>
              )
            })}
            <AlertDialogSlide informationOfTask={idTaskSelected} getMessengers={allMessageHistory} showModal={showModal} notShowModal={setShowModal} allTasks={data} editTaskWithNewData={functionEditTaskWithNewData}/>
        </div>

        <div className='cardsGrid'>
        <p>Plataforma</p>
          {data.map((e) =>{
            return(
              <div className='cardPosition' key={e.id} onClick={() => function_task_details(e.id)}>
                <Card datasForCreateCard={e}  />
              </div>
              )
            })}
            <AlertDialogSlide informationOfTask={idTaskSelected} getMessengers={allMessageHistory} showModal={showModal} notShowModal={setShowModal} allTasks={data} editTaskWithNewData={functionEditTaskWithNewData}/>
        </div>
      </div>
      

      
      <div className='config'>
        <Register onSubmit={postToDoList} AlertModal={AlertModal} getAllTechnology={functionGetAllTechnology}/>
        <AccountMenu registerNewCategoryAndTech={registerNewCategoryAndTech}/>
      </div>
      <div className='Fixed'>
        <LeftOptions functionFilter={filterStatus}/>
      </div>
    </div>
  )
}

export default App
