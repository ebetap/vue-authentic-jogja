<template>
	<div id="list-auth-jog" class="discover"> 
		<div class="header-nav">
	        <div class="header-nav-container">
	            <div class="logo">
	                <router-link to="/">
	                	<img src="@/assets/logo-auth.png" alt="logo">
	                </router-link>
	                <div class="search">
	                	<form v-on:submit.prevent="searching">
	                		<input type="text" name="search" class="inp-search" placeholder="What are you looking for?" v-model="search">
	                	</form>
	                </div>
	            </div>
	            <div class="navs">
	                <ul class="red">
	                    <li>
	                        <router-link to="/discover">
                            	Discover <i class="fa fa-angle-down"></i>
                        	</router-link>
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
		<div class="details">
			
		</div>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	import iconEvent from '@/assets/map_icon_event_off.png'

	export default {
		name : 'Authjoglist',
		data(){
			return{
				search: '',
				events: [],
				culinary: [],
				handycraft: [],
			}
		},
		methods:{
			fetchEvents: function(){
				Auth.getEvents()
				.then(response => {
					this.events = response.data
				})
			},
			initMap: function(){
				var config = {
					//latitude & longitude Yogyakarta
					center:{lat: -7.78278,lng: 110.36083},
					zoom: 12
				}
				var elemen = document.getElementById('maps')
				var maps = new google.maps.Map(elemen,config)
				var marker = new google.maps.Marker({
					position: {
						lat: config.center.lat,
						lng: config.center.lng
					},
					map: elemen
				})
			}
		},
		mounted(){
			this.fetchEvents()
			this.initMap()
		}
	}
</script>

<style scoped>
	.discover-container{
		display: flex;
		width: 100%;
		margin: auto;
		flex-wrap: wrap;
		height: calc(100vh - 66px);
	}

	.discover-container > div{
		flex: 50%;
	}

	.header-nav{
        position: relative;
        height: 66px;
        background: #cf000f;
    }
    
    .header-nav-container{
        margin: auto;
        height: 100%;
        display: flex;
    }

    .red li a{
    	position: absolute;
	    top: 50%;
	    transform: translateY(-70%);
    }

    #left{
    	overflow-y: scroll;
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
	    padding: 10px 15px 10px 10px;
	    border-radius: 4px;
	    width: 297px;
    }
	.inp-search:focus{
		outline: none;
	}

	#right,#maps{
		width: 100%;
		height: calc(100vh - 66px);
	}

	.list-container{
		position: relative;
		padding: 0 20px;
		display: flex;
		flex-wrap: wrap;
	}
	.card-box{
		width: 50%;
		padding: 15px 10px;
	}

	.card-box .card{
		position: relative;
	    overflow: hidden;
	    border-radius: 10px;
	    background-color: #fff;
	    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
	}

	.card-thumb{
		overflow: hidden;
    	position: relative;
	}
	.card-thumb img{
		width: 100%;
	    height: 150px;
	    object-fit: cover;
	}
	.card-content{
		padding: 5px 10px;
		position: relative;
		text-align: center;
	}
	.card-title{
		font-weight: bold;
    	color: #cf000f;
	}
	.card-date{
		font-size: 14px;
		font-weight: bold;
	}
	.card-info{
		font-size: 12px;
		height: 60px;
	    overflow: hidden;
	    margin-bottom: 10px;
	}
	.card-address{
		font-size: 14px;
		font-weight: bold;
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
        #left,#right{
        	flex: 100%;
        }
        .card-box{
        	width: 100%;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px){
        .logo{
            flex: 50%;
        }

        #left,#right{
        	flex: 100%;
        }
    }
</style>