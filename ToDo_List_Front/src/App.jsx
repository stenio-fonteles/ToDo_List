
import { useEffect, useState } from 'react';
import './App.css'
import { axiosDelete, axiosPut, get, post,registerReport,getReport} from './axios/axios';
import { Card } from './components/Cards/index';
import { Home } from './components/Home';
import { Register } from './components/register';
import {Example} from './components/Dialog'
import { Report } from './components/reports';

function App() {
  const [ data, setData] = useState([])
  const [reports, setReports] = useState([])
  const [ showModal,setShowModal] = useState(false)


  async function getInfo() {
    const data = await get();
    setData(data)
  }

  async function deleteToDoList(id){
    await axiosDelete(id)
    setData(data.filter((task) =>{
      return task.id !== id
    }))
  }

async function putToDoList(id){
  seeModal()
  await axiosPut(id)
}

function seeModal(){
  setShowModal(!showModal)
}

async function postToDoList(obj){
  if(obj.inputToDo == "" || obj.description == "" || obj.status == "") {
    alert("Preencha todas as informações")
    return
  }
  await post(obj)
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
    <div>
      <div className='register'>
        <Register onSubmit={postToDoList} />
      </div>
      <div className='division'>
      <div className='sectionCard'>
        {
          data.map((e)=>{
            return(
              <div key={e.id}>
                {e.old == "New"?(
                  <div className='cards' >
                    <Example showModal={showModal} onActive={seeModal} onSubmitReport={sendReport} idTask={e}/>
                    <Card data={e}   onDelete={deleteToDoList} onFinish={putToDoList}/>
                  </div>
                ):(
                 <></>
                )}
              </div>
            )
          })
        }
      </div>
      <div style={{marginTop:"300px"}}>
      {reports.map((report) =>{
        console.log(report)
        return(
          <Report data={report} />
        )
      })}
      </div>
      <div>
      {
          data.map((e)=>{
            return(
              <div key={e.id}>
                {e.old == "Concluído"?(
                  <div className='cards' >
                    <Card data={e}  onDelete={deleteToDoList} onFinish={putToDoList}/>
                  </div>
                ):(
                 <></>
                )}
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default App
