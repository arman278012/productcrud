import { getData, deleteDatas, getUpdateData, postData } from './actionType'
import axios from 'axios'

/* For fetching the API link */

const url = 'http://localhost:8090/item'

export const fetchData = () => async (dispatch) => {
    try {
        const result = await axios.get(url)
        dispatch({ type: getData, payload: result.data })
    }
    catch (err) {
        console.log("Any error is found here")
    }
}

export const deleteData = (id) => async (dispatch) => {
    try {
        await axios.delete(`${url}/${id}`)
        dispatch({ type: deleteDatas })
        // console.log(result)
    }
    catch (err) {
        console.log("Any error is found here")
    }
}

export const POST_DATA = (payload) => async (dispatch) => {
    try {
        const POST_DATA = await axios.post(url, payload)
        dispatch({ type: postData })
    }
    catch (err) {
        console.log("Any error to handle here...")
    }
}

export const updateData = (id, payloads) => async (dispatch) => {
    try {
        await axios.put(`${url}/${id}`, payloads)
        dispatch({ type: getUpdateData})
    }
    catch (err) {
        console.log("Any error is found here...")
    }
}


