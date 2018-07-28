<template>
	<div class="loader"></div>
</template>

<script>
	export default {
		name: 'Loader',
	}
</script>

<style scoped>
	.loader {
	  border: 7px solid #f3f3f3;
	  border-radius: 50%;
	  border-top: 7px solid #cf000f;
	  width: 40px;
	  height: 40px;
	  -webkit-animation: spin 2s linear infinite; 
	  animation: spin 2s linear infinite;
	  position: absolute;
	  left: 46%;
	  top: 42%;
	}

	@-webkit-keyframes spin {
	  0% { -webkit-transform: rotate(0deg); }
	  100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin {
	  0% { transform: rotate(0deg); }
	  100% { transform: rotate(360deg); }
	}
</style>