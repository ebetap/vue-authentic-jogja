import Api from '@/services/Api'
export default {
	login(credentials){
		return Api().post('/user_token', credentials)
	},
	getToken(){
		return localStorage.getItem('token')
	},
	getEvents(){
		return Api().get('/api/v1/events')
	},
	getCulinary(){
		return Api().get('/api/v1/culinaries')
	},
	getCraft(){
		return Api().get('/api/v1/crafts')
	},
	getEventsById(id){
		return Api().get('/api/v1/events/'+id)
	},
	getCulinaryById(id){
		return Api().get('/api/v1/culinaries/'+id)
	},
	getCraftById(id){
		return Api().get('/api/v1/crafts/'+id)
	},
	deleteEventsById(id,token){
		return Api().delete('/api/v1/events/'+id,{
			headers:{
				Authorization: "Bearer " + token
			}
		})
	},
	deleteCraftById(id,token){
		return Api().delete('/api/v1/crafts/'+id,{
			headers:{
				Authorization: "Bearer " + token
			}
		})
	},
	deleteCulinaryById(id,token){
		return Api().delete('/api/v1/culinaries/'+id,{
			headers:{
				Authorization: "Bearer " + token
			}
		})
	},
	editEventsById(id,token,editedEvents){
		return Api().put('/api/v1/events/'+id,editedEvents,{
			headers:{
				Authorization: "Bearer " + token,
				'Content-Type': 'multipart/form-data',
				'Accept': 'multipart/form-data'
			}
		})
	},
	editCraftById(id,token,editedCraft){
		return Api().put('/api/v1/crafts/'+id,editedCraft,{
			headers:{
				Authorization: "Bearer " + token,
				'Content-Type': 'multipart/form-data',
				'Accept': 'multipart/form-data'
			}
		})
	},
	editCulinaryById(id,token,editedCulinary){
		return Api().put('/api/v1/culinaries/'+id,editedCulinary,{
			headers:{
				Authorization: "Bearer " + token,
				'Content-Type': 'multipart/form-data',
				'Accept': 'multipart/form-data'
			}
		})
	},
	addEvents(newEvents,token){
		return Api().post('/api/v1/events',newEvents,{
			headers:{
				Authorization: "Bearer " + token,
				'Content-Type': 'multipart/form-data',
				'Accept': 'multipart/form-data'
			}
		})
	},
	addCrafts(newCraft,token){
		return Api().post('/api/v1/crafts',newCraft,{
			headers:{
				Authorization: "Bearer " + token,
				'Content-Type': 'multipart/form-data',
				'Accept': 'multipart/form-data'
			}
		})
	},
	addCulinary(newCulinary,token){
		return Api().post('/api/v1/culinaries',newCulinary,{
			headers:{
				Authorization: "Bearer " + token,
				'Content-Type': 'multipart/form-data',
				'Accept': 'multipart/form-data'
			}
		})
	},
	logout(){
		localStorage.removeItem('token')
		localStorage.removeItem('isAuth')
	}
}