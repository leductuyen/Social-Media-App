import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_BACKEND_BASE_URL}`

const sendRequest = async (api, data, headers, ...rest) => {
    const { method, url } = api

    const axiosConfig = {
        method,
        url: `${baseUrl}/${url}`,
        data: data || {},
        headers: headers || {},
        ...rest,
    }
    try {
        const response = await axios(axiosConfig)
        return response.data
    } catch (error) {
        console.error(`Api error : ${error.message}`)
        throw error
    }
}

export default sendRequest
