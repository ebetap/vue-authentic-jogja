<template>
	<div class="edit-content">
		<h2 class="title text-center">Crafts</h2>
		<div class="container">
			<router-link to="/admin/dashboard/addcrafts"> <button class="add-event btn-authjog">Add New Craft</button></router-link>
			<Alertsuccess v-if="alert" v-bind:message="alert" path="/admin/dashboard/crafts" />
			<div class="table">
				<div class="row header">
					<div class="cell">ID</div>
					<div class="cell">Name</div>
					<div class="cell">Address</div>
					<div class="cell">Action</div>
				</div>
				<div class="row" v-for="(craf,key) in crafts" :key="key">
					<div class="cell">{{craf.id}}</div>
					<div class="cell">{{craf.name}}</div>
					<div class="cell">{{craf.address}}</div>
					<div class="cell action">
						<router-link v-bind:to="'/details/craft/'+craf.id">
							<button class="btn-authjog">View</button>
						</router-link> 
						<router-link v-bind:to="'/admin/dashboard/editcraft/'+craf.id">
							<button class="btn-authjog">Edit</button>
						</router-link> 
						<button class="btn-authjog" v-on:click="deleteCrafts(craf)">
							<span v-bind:style="{opacity:(btnIsLoading == craf.id) ? '0' : '1'}" class="text">
								Delete
							</span>
							<span v-if="btnIsLoading == craf.id" class="load">
								<LoaderButton />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import LoaderButton from '@/components/loader/LoaderButton.vue'
	import Alertsuccess from '@/components/alert/Alertsuccess.vue'
	import Auth from '@/services/Auth.js'
	export default{
		name: 'Crafts',
		data(){
			return{
				crafts:[],
				alert: '',
				btnIsLoading: false
			}
		},
		methods:{
			fetchCrafts: function(){
				Auth.getCraft()
				.then(response => {
					this.crafts = response.data
					console.log(this.crafts)
				})
			},
			deleteCrafts: function(event){
				this.btnIsLoading = event.id
				let token = Auth.getToken()
				Auth.deleteCraftById(event.id,token)
				.then(response => {
					alert(response.data.message)
					this.fetchCrafts()
				})
				.catch(err => {
					alert(err)
				})
			}
		},
		created: function(){
			this.fetchCrafts()
			if(this.$route.query.alert){
				this.alert = this.$route.query.alert
				setTimeout(()=>{
					this.alert = ''
					this.$router.replace('/admin/dashboard/crafts')
				},5000)
			}
		},
		components:{
			Alertsuccess,LoaderButton
		}
	}
</script>

<style scoped>
	.load{
		position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: #0000002b;
	}
	.loader-button{
		position: relative;
    	margin: 10px auto;
	}
	.title{
		font-size: 2.5em;
	}
	.add-event{
		margin: 10px 0;
	}
	.action > *{
		margin-left: 5px;
	}
	.btn-authjog{
		padding: 12px 20px;
	    background: #cf000f;
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
	.btn-authjog:hover{
		background: #660000;
	}
	.container{
		width: 90%;
		margin: auto;
	}
	.text-center{
		text-align: center;
	}
	@media screen and (max-width: 580px) {
  body {
    font-size: 16px;
    line-height: 22px;
  }
}

.action{
	display : flex !important;
}


.table {
  margin: 0 0 40px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: table;
}
@media screen and (max-width: 580px) {
  .table {
    display: block;
  }
}

.row {
  display: table-row;
  background: #f6f6f6;
}
.row:nth-of-type(odd) {
  background: #e9e9e9;
}
.row.header {
  font-weight: 900;
  color: #ffffff;
  background: #ea6153;
}
.row.green {
  background: #27ae60;
}
.row.blue {
  background: #2980b9;
}
@media screen and (max-width: 580px) {
  .row {
    padding: 14px 0 7px;
    display: block;
  }
  .row.header {
    padding: 0;
    height: 6px;
  }
  .row.header .cell {
    display: none;
  }
  .row .cell {
    margin-bottom: 10px;
  }
  .row .cell:before {
    margin-bottom: 3px;
    content: attr(data-title);
    min-width: 98px;
    font-size: 10px;
    line-height: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: #969696;
    display: block;
  }
}

.cell {
  padding: 6px 12px;
  display: table-cell;
}
@media screen and (max-width: 580px) {
  .cell {
    padding: 2px 16px;
    display: block;
  }
}
</style>