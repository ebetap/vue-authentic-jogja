<template>
	<div class="dash-home">
		<div class="container">
<!-- 			<h1 class="text-center">Dashboard Home</h1> -->
			<div class="box-statistic flex">
				<div class="box">
					<div class="card">
						<div class="card-title">
							<h3 class="text-center">Total Events</h3>
							<h1 class="text-center total">{{totalEvents}}</h1>
						</div>
					</div>
				</div>
				<div class="box">
					<div class="card">
						<div class="card-title">
							<h3 class="text-center">Total Culinary</h3>
							<h1 class="text-center total">{{totalCulinary}}</h1>
						</div>
					</div>
				</div>
				<div class="box">
					<div class="card">
						<div class="card-title">
							<h3 class="text-center">Total Handycraft</h3>
							<h1 class="text-center total">{{totalHandyCraft}}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	export default{
		name: 'DashHome',
		data(){
			return{
				totalEvents: 0,
				totalCulinary: 0,
				totalHandyCraft: 0
			}
		},
		methods:{
			fetchEvents: function(){
				Auth.getEvents()
				.then((response) => {
					this.totalEvents = response.data.length
				})
				.catch(err => {
					alert(err)
				})
			},
			fetchCulinary: function(){
				Auth.getCulinary()
				.then(response => {
					this.totalCulinary = response.data.length
				})
				.catch(err => {
					alert(err)
				})
			},
			fetchCrafts: function(){
				Auth.getCraft()
				.then(response => {
					this.totalHandyCraft = response.data.length
				})
				.catch(err => {
					alert(err)
				})
			}
		},
		created: function(){
			this.fetchEvents()
			this.fetchCulinary()
			this.fetchCrafts()
		}
	}
</script>

<style scoped>
	.container{
		width: 90%;
		margin: auto;
	}
	.text-center{
		text-align: center;
	}
	.flex{
		display: flex;
		flex-wrap: wrap;
	}
	.box{
		flex: 3;
		padding: 15px 10px;
	}
	.card{
		padding: 5px;
		position: relative;
	    overflow: hidden;
	    border-radius: 5px;
	    background-color: #fff;
	    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
	    height: 150px;
	    background: #cf000f;
    	color: #fff;
	}
	h1.total{
		font-size: 6em;
	}
	@media screen and (max-width: 767px){
		.box-statistic .box{
			flex: 100%;
		}
		.container{
			width: 100%;
		}
	}
</style>