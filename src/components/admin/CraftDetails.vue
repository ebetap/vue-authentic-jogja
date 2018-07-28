<template>
	<div class="events-details">
		<div class="container">
			<h1>{{crafts.name}}</h1>
			<ul>
				<li>{{crafts.date}}</li>
				<li>{{crafts.description}}</li>
				<li>{{crafts.address}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	export default {
		name: 'CraftsDetails',
		data(){
			return{
				crafts: []
			}
		},
		methods: {
			fetchCraft: function(id){
				Auth.getCraftById(id)
				.then(response => {
					this.crafts = response.data
				})
			}
		},
		created: function(){
			this.fetchCraft(this.$route.params.id)
		}
	}
</script>

<style scoped>
	.container{
		width: 90%;
		margin: auto;
	}
</style>