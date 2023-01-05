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
          "data_finish":e.data_finish,
          "description": e.description,
          "priority":e.priority,
          "old":e.old
        }
      )
}

export async function axiosDelete(e) {
  const {id} = await axios.delete(`http://localhost:3000/${e}`)
}

export async function axiosPut(e) {
  const id = await axios.put(`http://localhost:3000/${e}`)
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