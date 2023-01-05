
import { useEffect, useState } from 'react';
import './App.css'
import { axiosDelete, axiosPut, get, post } from './axios/axios';
import { Card } from './components/Cards/index';
import { Home } from './components/Home';
import { Register } from './components/register';

function App() {
  const [ data, setData] = useState([])

  async function getInfo() {
    const data = await get();
    setData(data)
  }

  async function deleteToDoList(id){
    console.log(id)
    await axiosDelete(id)
    setData(data.filter((task) =>{
      return task.id !== id
    }))
  }

async function putToDoList(id){
   await axiosPut(id)
}

async function postToDoList(obj){
  if(obj.inputToDo == "" || obj.description == "" || obj.status == "") {
      alert("Preencha todas as informações")
      return
  }
      await post(obj)
} 

useEffect(() => {
  getInfo()
},[deleteToDoList,postToDoList, putToDoList])

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
              <>
                {e.old == "New"?(
                  <div className='cards' >
                    <Card data={e}  key={e.id} onDelete={deleteToDoList} onFinish={putToDoList}/>
                  </div>
                ):(
                 <></>
                )}
              </>
            )
          })
        }
      </div>
      <Home/>
      <div>
      {
          data.map((e)=>{
            return(
              <>
                {e.old == "Concluído"?(
                  <div className='cards' >
                    <Card data={e}  key={e.id}  onDelete={deleteToDoList} onFinish={putToDoList}/>
                  </div>
                ):(
                 <></>
                )}
              </>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default App
