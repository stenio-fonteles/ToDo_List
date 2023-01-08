import axios from 'axios';

export async function get(){
  const {data} = await axios({
        method: 'GET',
        url: 'http://localhost:3000/',
        headers: { 
          'Content-Type': 'application/json'
        }
    })
    return data
} 

export async function post(e) {
  const { data } = await axios.post('http://localhost:3000/',{
          "name": e.nameTask, 
          "description": e.description,
          "priority":e.priority,
          "career":e.career,
          "tool":e.tool,
        }
      )
}



export async function axiosPut(data) {
  const reposeDatas = await axios.put(`http://localhost:3000/${data.id}`,data)
  console.log(data,"oi")
}

























export async function axiosDelete(e) {
  const {id} = await axios.delete(`http://localhost:3000/${e}`)
}



export async function getFilterArr(e) {
  const {data} = await axios( 
    {
      method: 'GET',
      url: `http://localhost:3000/status/${e}`,
      headers: { 
        'Content-Type': 'application/json'
      }
    })  
  console.log(data)
}































// area de envio de relatório

export async function registerReport(e){
  const {data} = await axios.post('http://localhost:3000/report',{
    "id":e.id,
    "content":e.report,
    "name":e.name
  })
}

export async function getReport(){
  const {data} = await axios({
    method: 'GET',
    url: 'http://localhost:3000/report',
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  return data
}