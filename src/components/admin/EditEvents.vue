<template>
	<div class="edit-events">
		<div class="container">	
			<h1>EditEvents</h1>
			<div class="box-form-edit">
				<div v-if="isLoading" class="load">
					<Loader />
				</div>
				<div class="form-edit">
					<form v-on:submit.prevent="editEvent" autocomplete="off">
						<div class="event-name">
							<input type="text" name="event-name" placeholder="event name" v-model="dataEvents.name">
						</div>
						<div class="event-date">
							<input type="text" name="event-name" placeholder="date. ex: 29 may 2018" v-model="dataEvents.date">
						</div>
						<div class="event-description">
							<input type="text" name="event-description" placeholder="event description" v-model="dataEvents.description">
						</div>
						<div class="event-address">
							<input type="text" name="event-address" placeholder="event address" v-model="dataEvents.address">
						</div>
						<div class="trivia">
							Trivia: 
							<div class="total-trivia" v-for="item in dataEvents.trivia">
								<div class="edit">
									<div v-on:click="editExisting(item)" class="trvas">
										{{item.name}}
									</div>
									<i v-on:click="removeTrivia(item)" class="fa fa-trash"></i>
								</div>
								<input v-on:keyup.enter="editExisting" v-if="target == item.id" type="text" name="edited" v-model="item.name">
							</div>
						</div>
						<div class="event-group-month">
							<input type="number" name="group-month" placeholder="group month id" v-model="dataEvents.group_month.id">
						</div>
							<div class="event-group-month">
								<input type="file" accept="image/*" v-on:change="onFileSelected">
							</div>
						<button class="btn-authjog">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import router from '@/router/index.js'
	import Loader from '@/components/loader/Loader.vue'
	import Auth from '@/services/Auth.js'
	export default {
		name: 'EditEvents',
		data(){
			return{
				dataEvents: {},
				isLoading: false,
				imageFile:null
			}
		},
		methods:{
			onFileSelected: function(event){
				this.imageFile = event.target.files[0]
			},
			editEvent: function(){
				let token = Auth.getToken()
				var data = new FormData()
				data.append('name',this.dataEvents.name)
				data.append('date',this.dataEvents.date)
				data.append('description',this.dataEvents.description)
				data.append('address',this.dataEvents.address)
				data.append('trivia',this.dataEvents.trivia)
				data.append('group_month_id',this.dataEvents.group_month.id)
				data.append('image',this.imageFile)
				Auth.editEventsById(this.$route.params.id,token,data)
				.then(response => {
					console.log(response)
					this.$router.push({path: '/admin/dashboard/events',query:{alert:response.data.message}})
				})
				.catch(err => {
					alert('Failed to update! Try again!')
				})
			},
			fetchEvents: function(){
				Auth.getEventsById(this.$route.params.id)
				.then(response => {
					this.dataEvents = response.data
					console.log(this.dataEvents)
				})
			}
		},
		components:{
			Loader
		},
		created(){
			this.fetchEvents()
		}
	}
</script>

<style scoped>
	.container{
		width: 90%;
		margin: auto;
		text-align: center;
	}
	.load{
		position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: #0000004d;
	}
	.box-form-edit{
		width: 500px;
		height: auto;
		background: #cf000f;
		margin: auto;
		padding: 20px 80px;
		border-radius: 10px;
		position: relative;
	}
	.form-edit input{
		width: 100%;
		line-height: 30px;
    	margin-bottom: 10px;
    	background: #cf000f;
    	border: unset;
    	border-bottom: 2px solid #fff;
    	color: #fff;
    	font-size: 16px;
    	text-align: center;
    	font-weight: bold;
	}

	.form-edit form > div{
		margin-top: 5px;
	}


	::placeholder{
		color: #fff;
		opacity: 1;
	}

	.form-edit input:focus,.sign-in:focus{
		outline: none;
	}

	.btn-authjog{
		padding: 12px 20px;
	   	background: #660000;
	    width: auto;
	    der-radius: 7px;
	    -webkit-box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.5);
	    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.5);
	    cursor: pointer;
	    color: #fff;
	    border: none;
	    border-radius: 5px;
	    position: relative;
	    transition: all 0.5s;
	}

	.trivia{
		position: relative;
	}

	.trivia i.fa-plus{
		position: absolute;
	    right: 5px;
	    top: 0px;
	    cursor: pointer;
	}
	.total-trivia{
		text-align:left;
		overflow-x: hidden;
		color: #fff;
		font-size: 12px;
	}

	.edit{
		cursor: pointer;
	    padding: 3px 0;
	    position: relative;
	    display: flex;
	}
	.edit .trvas:hover{
		font-weight: bold;
	}

	.edit .fa-trash {
    	font-size: 15px;
    	padding: 0 10px;
	}
</style>