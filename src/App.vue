<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');

  *{
    box-sizing: border-box;
    padding: 0;
    margin:0;
  }

  body{
    font-family: 'Lato',sans-serif;
  }

  a{
    color: #fff;
    text-decoration: none;
  }
</style>
