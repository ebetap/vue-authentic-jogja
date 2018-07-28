<template>
	<div class="events-details">
		<div class="container">
			<h1>{{events.name}}</h1>
			<ul>
				<li>{{events.date}}</li>
				<li>{{events.description}}</li>
				<li>{{events.address}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	export default {
		name: 'EventsDetails',
		data(){
			return{
				events: []
			}
		},
		methods: {
			fetchEvents: async function(id){
				Auth.getEventsById(id)
				.then(response => {
					this.events = response.data
				})
			}
		},
		created: function(){
			this.fetchEvents(this.$route.params.id)
		}
	}
</script>

<style scoped>
	.container{
		width: 90%;
		margin: auto;
	}
</style>