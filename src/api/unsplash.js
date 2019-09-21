import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a4d247377b8b78dfbb737202532b20a582262ea4c1afbd274f85ea14eab41a5c'
    }
})