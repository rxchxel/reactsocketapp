import axios from 'axios';

const getRequest = () => {
    return(
    axios.get('http://localhost:3001')
    )
}

export default getRequest;