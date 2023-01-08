
import { useEffect, useState } from 'react';
import './App.css'
import { axiosDelete, getFilterArr, get, post,registerReport,getReport, axiosPut} from './axios/axios';
import { Card } from './components/Cards/index';
import { Register } from './components/register';
import { LeftOptions } from './components/LeftOptions';
import {AlertDialogSlide } from './components/Dialog'

function App() {
  const [ data, setData] = useState([])
  const [reports, setReports] = useState([])
  const [ showModal,setShowModal] = useState(false)
  const [ AlertModal,setAlert] = useState('')
  const [ idModal,setIdModal]= useState()
 


  async function getInfo() {
    const data = await get();
    setData(data)
    console.log(data)
  }


  async function putToDoList(data){
    seeModal()
    await axiosPut(data)
  }

  function seeModal(id){
    setIdModal(id)
    setShowModal(!showModal)
  }

  async function postToDoList(obj){
    if(obj.inputToDo == "Nome da Task" || obj.description == "Descrição" || obj.status == "Severidade") {
      setAlert("Error")
      return
    }
    setAlert("Success")
    await post(obj)
  } 


  async function filterStatus(e){
    const {data} = await getFilterArr(e)
  }


// area report

async function sendReport(e){
  await registerReport(e)
}

async function getReportDatas(){
  const data = await getReport()
  setReports(data)
}

useEffect(() => {
  getInfo()
  getReportDatas()
},[])

  return (
    <div className='Home'>
      <div className='Fixed'>
        <LeftOptions functionFilterStatus={filterStatus}/>
        <Register onSubmit={postToDoList} AlertModal={AlertModal}/>
      </div>
      <AlertDialogSlide showModal={showModal} claseModal={setShowModal} datas={data} editTask={putToDoList} idModal={idModal}/>
      <div className='cardsGrid'>
        {data.map((e) =>{
          return(
            <div className='tester' key={e.id}>
              <Card data={e} onFinish={seeModal} />
            </div>
            )
        })}
      </div>

    </div>
  )
}

export default App
