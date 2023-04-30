import axios from "axios"

const BACKEND_URL = 'localhost'
const PORT = '3001'
const BACKEND_URL_WITH_PORT = `${BACKEND_URL}:${PORT}`

const DRINKS_URL = `${BACKEND_URL_WITH_PORT}/posts/getDrinks`

export function getAllDrinks(){
    const params = {}

    return axios.get(
        DRINKS_URL, 
        {params}
    );
}