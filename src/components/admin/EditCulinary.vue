<template>
	<div class="edit-events">
		<div class="container">	
			<h1>Edit Culinary</h1>
			<div class="box-form-add">
				<div v-if="isLoading" class="load">
					<Loader />
				</div>
				<div class="form-add">
					<form id="form-events" enctype="multipart/form-data" autocomplete="off">
						<div class="event-name category-food">
							<input type="text" name="category_food_id" placeholder="Category food id" v-model="culinary.category_food.id">
						</div>
						<div class="event-name">
							<input type="text" name="event-name" placeholder="event name" v-model="culinary.name">
						</div>
						<div class="event-description">
							<textarea v-model="culinary.description"></textarea>
						</div>
						<div class="event-address">
							<input type="text" name="event-address" placeholder="event address" v-model="culinary.address">
						</div>
						<div class="trivia">
							<input type="text" name="trivias" placeholder="Trivia" v-on:keyup.enter="pushTriviaToArray" v-model="trivia">
							<div class="btn-trivia">
								<i class="fa fa-plus fa-2x" style="color: #fff;" v-on:click="pushTriviaToArray"></i>
							</div>
							<div class="total-trivia" v-for="item in culinary.trivia">
								<div class="edit">
									<div v-on:click="editExisting(item)" class="trvas">
										{{item.name}}
									</div>
									<i v-on:click="removeTrivia(item)" class="fa fa-trash"></i>
								</div>
								<input v-on:keyup.enter="editExisting" v-if="target == item.id" type="text" name="edited" v-model="item.name">
							</div>
							<div class="event-group-month">
								<input type="file" accept="image/*" v-on:change="onFileSelected">
							</div>
						</div>
						<button type="button" v-on:click.prevent="EditCulinary" class="btn-authjog">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	import router from '@/router/index.js'
	import Loader from '@/components/loader/Loader.vue'
	export default {
		name: 'EditCulinary',
		data(){
			return{
				culinary: {},
				trivia: null,
				isLoading: false,
				target: null,
				imageFile:null
			}
		},
		methods:{
			onFileSelected: function(event){
				this.imageFile = event.target.files[0]
			},
			EditCulinary: function(){
				this.isLoading = true
				var data = new FormData()
				data.append('category_food_id', this.culinary.category_food.id)
				data.append('name',this.culinary.name)
				data.append('description',this.culinary.description)
				data.append('address',this.culinary.address)
				data.append('trivia_attributes',this.culinary.trivia)
				data.append('image',this.imageFile)
				let token = Auth.getToken()
				Auth.editCulinaryById(this.$route.params.id,token,data)
				.then((resp) => {
					this.$router.push({path: '/admin/dashboard/culinary',query:{alert:resp.data.message}})
				})
				.catch(err => {
					console.log(err)
				})
			},
			getData: function(){
				Auth.getCulinaryById(this.$route.params.id)
				.then(response => {
					this.culinary = response.data
					console.log(this.culinary)
				})
				.catch(err =>{
					alert(err)
				})
			},
			pushTriviaToArray:function(){
				if(this.trivia == null || this.trivia == ''){
					alert('Trivia harus di isi')
				}else{
					this.culinary.trivia.push({
						name: this.trivia
					})
					this.trivia = null
				}
			},
			editExisting:function(item){
				this.target = item.id
				console.log(this.culinary)
			},
			removeTrivia:function(item){
				this.culinary.trivia.splice(this.culinary.trivia.indexOf(item),1)
				console.log(this.culinary)
			}
		},
		created(){
			this.getData()
		},
		components:{
			Loader
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
	.box-form-add{
		width: 500px;
		height: auto;
		background: #cf000f;
		margin: auto;
		padding: 20px 80px;
		border-radius: 10px;
		position: relative;
	}
	.form-add input{
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

	.form-add form > div{
		margin-top: 5px;
	}


	::placeholder{
		color: #fff;
		opacity: 1;
	}

	.form-add input:focus,.sign-in:focus{
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
	.event-description textarea{
		width: 100%;
	    height: 100px;
	    border: 1px solid #fff;
	    background: #cf000f;
	    color: #fff;
	    padding: 5px;
	    font-family: Lato;
	    font-weight: bold;
	    text-align: center;
	    font-size: 0.8em;
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