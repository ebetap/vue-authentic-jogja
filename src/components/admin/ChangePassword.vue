<template>
	<div class="change-password">
		<div class="container">
			<div class="box-update-pass">
				<div class="form-update">
					<form v-on:submit.prevent="loginAdmin">
						<div class="email">
							<input type="email" name="email" id="email" placeholder="email" v-model="email">
						</div>
						<div class="password">
							<input type="password" name="password" id="password" placeholder="password" v-model="password">
						</div>
						<div class="password new">
							<input type="password" name="newpassword" id="newpassword" placeholder="new password" v-model="newpassword">
						</div>

						<button class="sign-in">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'ChangePassword',
		data(){
			return{
				email: '',
				password: '',
				newpassword: ''
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 80%;
		margin: auto;
		text-align: center;
	}

	.box-update-pass{
		width: 400px;
		height: auto;
		background: #cf000f;
		margin: 100px auto;
		padding: 20px 80px;
		border-radius: 10px;
	}

	.login-admin{
		color: #fff;
	}

	.form-update input{
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

	.form-update form > div{
		margin-top: 5px;
	}

	.form-update form{
		padding-top: 5px;
	}

	.form-update input:focus,.sign-in:focus{
		outline: none;
	}

	.form-update{
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

		.box-update-pass{
			width: 100%;
			padding: 20px 20px;
		}
	}
</style>