import axios from 'axios'

export default () => {
	
	return axios.create({
		baseURL : 'https://api-authentic.herokuapp.com'
	})
}