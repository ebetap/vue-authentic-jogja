<template>
	<div class="login-admin">
		<div class="container">
			<div class="box-login">
				<div v-if="isLoading" class="load">
					<Loader />
				</div>
				<div class="box-admin-title">
					<div class="img-box">
						<img src="@/assets/logo@3x.png" alt="logo-auth">
					</div>
				</div>
				<div class="form-login">
					<form v-on:submit.prevent="loginAdmin" autocomplete="off">
						<div class="email">
							<input type="email" name="email" id="email" placeholder="email" v-model="email" >
						</div>
						<div class="password">
							<input type="password" name="password" id="password" placeholder="password" v-model="password">
						</div>

						<button class="sign-in">Sign In</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	import Loader from '@/components/loader/Loader'
	export default {
		name: 'AdminLogin',
		data(){
			return{
				email: '',
				password: '',
				error: null,
				isLoading: false
			}
		},
		methods:{
			loginAdmin : function(){
				this.isLoading = true
				Auth.login({
					"auth":{
						"email": this.email,
						"password": this.password
					}
				}).then(response => {
					localStorage.setItem('token',response.data.jwt);
					if(localStorage.getItem('token')){
						localStorage.setItem('isAuth',true)
					}
					if(localStorage.getItem('isAuth')){
						this.$router.push('/admin/dashboard')
					}
					this.isLoading = false
				})
				.catch(err => {
					alert("User not found!")
					this.isLoading = false
				})
			}
		},
		components:{
			Loader
		}
	}
</script>

<style scoped>
	.container{
		width: 80%;
		margin: auto;
		text-align: center;
	}

	.img-box img{
		max-width: 115px;
		height: auto;
	}

	.box-login{
		width: 400px;
		height: auto;
		background: #cf000f;
		margin: 100px auto;
		padding: 20px 80px;
		border-radius: 10px;
		position: relative;
	}

	.load{
		position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: #0000004d;
	}

	.login-admin{
		color: #fff;
	}

	.form-login input{
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

	.form-login form > div{
		margin-top: 5px;
	}

	.form-login form{
		padding-top: 5px;
	}

	.form-login input:focus,.sign-in:focus{
		outline: none;
	}

	.form-login{
		margin-top: 30px;
	}

	.sign-in{
		margin-top: 30px;
		background: #fff;
	    border: 0;
	    padding: 7px 40px;
	    color: #cf000f;
	    font-size: 18px;
	    border-radius: 8px;
	    cursor: pointer;
	}

	::placeholder{
		color: #fff;
		opacity: 1;
	}

	.forgot-pass{
		font-size: 11px;
	}

	input:focus::-webkit-input-placeholder{color:transparent}

	@media screen and (max-width: 767px){
		.container{
			width: 90%;
		}

		.box-login{
			width: 100%;
			padding: 20px 20px;
		}
	}

</style>