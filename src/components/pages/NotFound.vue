<template>
	<div class="not-found-404">
		<div class="container-404">
			<div class="content">
				<div class="image">
					<img src="../../assets/404-icon.png" alt="404">
				</div>
				<div class="text-404">
					<h1 class="text">Oops sorry ! looks like you<br/> were lost..</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NotFound'
	}
</script>

<style scoped>
	.container-404{
		width: 80%;
		margin: auto;
		text-align: center;
	}

	.content{
		max-width: 100%;
		margin: auto;
		position: absolute;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%,-60%);

	}

	.text{
		font-size: 1.6em;
		letter-spacing: 1px;
	}
</style>