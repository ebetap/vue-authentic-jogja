<template>
	<div class="footer">
		<div class="footer-container">
			<div class="copy">
				Copyright &copy; 2018 Company Inc
			</div>
			<div class="company-info">
				<ul>
					<li>Address</li>
					<li>Phone</li>
					<li>Mail</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
		<div class="foot-bottom">
			<div class="logo-container">
				<div class="logo-item-2">
					<img class="logo-auth-1" src="@/assets/logo-auth-1.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style scoped>
	.footer{
		background: #cf000f;
		height: 60px;
		color: #fff;
	}

	.footer-container{
		margin: auto;
		width: 80%;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
	}

	.copy{
		text-align: right;
	}

	.company-info{
		text-align: left;
	}

	.company-info ul{
		display: flex;
	}

	.company-info li{
		margin: 0 15px;
		padding: 0;
		list-style: none;
	}

	.footer-container > div {
		flex: 50%;
		padding: 20px 8px;
	}

	.foot-bottom{
		background: #000;
		padding: 20px;
		text-align: center;
		padding-bottom: 15px;
	}

	.foot-bottom .logo-auth{
		width: 30px;
		height: auto;
		margin-bottom: 5px;
	}

	.logo-container > div{
		display: block;
	}

	.foot-bottom .logo-auth-1{
		width: 150px;
		height: auto;
	}

	@media screen and (max-width: 992px){
		.footer{
			height: unset;
		}

		.footer-container > div{
			text-align: center;
			flex: 100%;
		}
		
		.footer-container .company-info{
			padding-top: 0;
		}

		.company-info ul{
			flex-direction: column;
		}
	}
</style>