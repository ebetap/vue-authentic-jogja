<template>
    <div class="header-nav">
        <div class="header-nav-container">
            <div class="logo">
                <img src="@/assets/logo-auth.png">
                <div class="search">
                	<form v-on:submit.prevent="searching">
                		<input type="text" name="search" class="inp-search" placeholder="What are you looking for?" v-model="search">
                	</form>
                </div>
            </div>
            <div class="navs">
                <ul>
                    <li>
                        <a href="#">Discover <i class="fa fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Download</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RedNavigation',
        data(){
        	return{
        		search: ''
        	}
        },
        components: {
            
        }
    }
</script>

<style scoped>
    .header-nav{
        position: relative;
        height: 70px;
        background: #cf000f;
    }
    
    .header-nav-container{
        margin: auto;
        height: 100%;
        display: flex;
    }

    .logo{
        flex: 70%; 
    }

    .logo img:hover{
        cursor: pointer;
    }

    .logo img{
        height: auto;
	    width: 40px;
	    position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	    left: 10px;
    }

    .navs{
        flex: 30%;
    }

    .navs ul{
        list-style: none;
        display: flex;
    }

    .navs li{
        flex: 30%;
    }

    .search{
    	position: absolute;
	    left: 15%;
	    top: 50%;
	    transform: translateY(-50%);
    }

    .inp-search{
    	border: 0;
	    padding: 10px 15px 10px 5px;
	    border-radius: 4px;
	    width: 230px;
    }

    @media screen and (max-width: 767px){
        .navs{
            display: none;
        }
        .logo img{
            display:block;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px){
        .logo{
            flex: 50%;
        }
    }
    
</style>