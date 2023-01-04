
import { useEffect, useState } from 'react';
import './App.css'
import { get } from './axios/axios';
import { Card } from './components/Cards';
import { Home } from './components/Home';
import { Register } from './components/register';

function App() {
  const [ data, setData] = useState([])

  async function getInfo() {
    const data = await get();
    setData(data)
  }

  
  useEffect(() => {
    getInfo()
  },[])
  
  return (
    <div>
      <div className='register'>
        <Register/>
      </div>
      <div className='division'>
      <div className='sectionCard'>
        {
          data.map((e)=>{
            return(
              <>
                {e.old == "New"?(
                  <div className='cards' >
                    <Card data={e} key={e.id}/>
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
                    <Card data={e} key={e.id}/>
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
