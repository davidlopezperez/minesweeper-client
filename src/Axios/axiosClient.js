import axios from 'axios'


const clientAxios = axios.create({

    baseURL:"https://97muqg8wkk.execute-api.us-east-1.amazonaws.com/dev"
})

export default clientAxios