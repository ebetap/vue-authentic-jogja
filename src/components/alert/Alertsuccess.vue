<template>
	<div id="success" class="alert-success">
		<p class="alert-message">{{message}}</p>
		<div v-on:click="close" id="close" class="close">x</div>
	</div>
</template>

<script>
	export default {
		name: 'Alertsuccess',
		props:['message','path'],
		data(){
			return{
				endpath: this.path
			}
		},
		methods:{
			close: function(){
				document.getElementById('success').remove()
				this.$router.replace(this.endpath)
			}
		}
	}
</script>

<style scoped>
	.alert-success{
		padding-right: 8px;
		border-color: #b8f0d1;
    	background-color: #e3f9ed;
    	position: relative;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    width: 100%;
	    padding: 8px 16px;
	    color: #53664a;
	    line-height: 1.5;
	    border: 1px solid #ccc;
	    border-radius: 4px;
	    -webkit-transition: opacity .3s;
	    transition: opacity .3s;
	    overflow: hidden;
	    opacity: 1;
	    margin: 10px 0;
	}
	.alert-message{
		font-size: 14px;
		color: #53664a;
		text-align: center;
	}
	.close{
		position: absolute;
		right: 20px;
		top: 4px;
		cursor: pointer;
	}
</style>