<template>
	<div class="edit-events">
		<div class="container">	
			<h1>Add Crafts</h1>
			<div class="box-form-add">
				<div v-if="isLoading" class="load">
					<Loader />
				</div>
				<div class="form-add">
					<form id="form-events" enctype="multipart/form-data" autocomplete="off">
						<div class="event-name">
							<input type="text" name="craft-name" placeholder="craft name" v-model="name">
						</div>
						<div class="event-description">
							<textarea name="craft-description"  v-model="description"></textarea>
						</div>
						<div class="event-address">
							<input type="text" name="craft-address" placeholder="craft address" v-model="address">
						</div>
						<div class="trivia">
							<input type="text" name="trivias" placeholder="Trivia" v-on:keyup.enter="pushTriviaToArray" v-model='trivia'>
							<div class="btn-trivia">
								<i class="fa fa-plus fa-2x" style="color: #fff;" v-on:click="pushTriviaToArray"></i>
							</div>
							<ol v-for="(trv,key) in trivias" class="total-trivia">
								<li>{{trv.name}}</li>
							</ol>
						</div>
						<div class="event-group-month">
							<input type="file" accept="image/*" v-on:change="onFileSelected">
						</div>
						<button type="button" v-on:click.prevent="addCraft" class="btn-authjog">Add Crafts</button>
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
		name: 'AddCrafts',
		data(){
			return{
				name: '',
				date: '',
				description: 'Description',
				address: '',
				imageFile: null,
				trivia: null,
				trivias: [],
				isLoading: false
			}
		},
		methods:{
			onFileSelected: function(event){
				this.imageFile = event.target.files[0]
			},
			addCraft: function(){
				this.isLoading = true
				var data = new FormData()
				data.append('name',this.name)
				data.append('description',this.description)
				data.append('address',this.address)
				data.append('craft_trivia_attributes',this.trivias)
				data.append('image',this.imageFile)
				let token = Auth.getToken()
				Auth.addCrafts(data,token)
				.then((resp) => {
					this.$router.push({path: '/admin/dashboard/crafts',query:{alert:resp.data.message}})
				})
				.catch(err => {
					alert(err)
					this.isLoading = false
				})
			},
			pushTriviaToArray:function(){
				if(this.trivia == null || this.trivia == ''){
					alert('Trivia harus di isi')
				}else{
					this.trivias.push({
						name: this.trivia
					})
					this.trivia = null
				}
			}
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
    	text-align: left;
    	font-weight: bold;
	}

	.form-add form > div{
		margin-top: 5px;
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
	    text-align: left;
	    font-size: 0.8em;
	}

	.total-trivia{
		text-align:left;
		overflow-x: hidden;
		color: #fff;
		font-size: 12px;
	}
</style>