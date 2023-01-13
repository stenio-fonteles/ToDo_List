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

export async function FilterTasksForStatus(newStatus) {
  const {data} = await axios.post("http://localhost:3000/status/",
    { 
      headers: {'Content-Type': 'application/json'},
      body: newStatus
    }
  )  
  return data
}

export async function axiosPut(newStatusAndNewDescriptio) {
  await axios.put("http://localhost:3000/",newStatusAndNewDescriptio)
}

export async function getAllMessenger(idTask) {
  await axios.get(`http://localhost:3000/:${idTask}`)
}