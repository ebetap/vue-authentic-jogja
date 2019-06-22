<template>
	<div id="list-auth-jog" class="discover"> 
		<div class="header-nav">
	        <div class="header-nav-container">
	            <div class="logo">
	                <router-link to="/">
	                	<img src="@/assets/logo@3x.png" alt="Logo">
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
	                        <router-link class="hide" to="/discover">
                            	Discover <i class="fa fa-angle-down"></i>
                        	</router-link>
	                    </li>
	                    <li>
	                        <a href="#">About Us</a>
	                    </li>
	                    <li>
	                        <a href="https://play.google.com/store?hl=in">Download</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
	    </div>
		<div id="details">
			<div id="image" class="image-preview">
				<div class="my-images">
					<img v-bind:src="events.image.url" alt="image">
				</div>
			</div>
			<div class="wrapper">
				<div id="breadcrumbs">
					Discover > Event > {{events.name}}
				</div>
			</div>
			<div id="details-content">
				<div class="wrapper dtls">
					<div id="dt-left">
						<img v-bind:src="eventMapIcon" />
						<h1 class="title">{{events.name}}</h1>
						<!-- <div class="sub-title">
							sensation of eating gudeg in 'pawon'
						</div> -->
						<!-- <div class="contact">
							<i class="fa fa-phone"></i>(0274)8725566
						</div> -->
						<div class="description">
							{{events.description}}
						</div>
					</div>
					<div id="dt-right">
						<div class="top-map">
							<div id="maps"></div>
							<div class="map-address">
								<i class="red fa fa-map-marker fa-3x"></i>
								{{events.address}}
							</div>
						</div>

						<div class="trivia">
							<div class="ttl">Trivia</div>
							<ol>
								<li class="trv" v-for="(trv,key) in events.trivia" :key="key">{{trv.name}}</li>
							</ol>
						</div>
					</div>
				</div>
				<div id="share-fav">
					<div class="wrapper flex" style="text-align: center;">
						<div class="share">
							<i class="fa fa-share"></i>
							Share To Friend
						</div>
						<div class="add-to-fav">
							<i class="fa fa-heart"></i>
							Add to Favourite
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	import eventMapIcon from '@/assets/map_icon_event_on.png'
	import Footer from '@/components/footer/Footer'
	export default {
		name : 'DetailsEvents',
		data(){
			return{
				events:{},
				search: null,
				latitude: null,
				longitude: null
			}
		},
		methods:{
			fetchEvents: function(){
				Auth.getEventsById(this.$route.params.id)
				.then(response => {
					this.events = response.data
					this.latitude = response.data.latitude
					this.longitude = response.data.longitude
				})
				.then(() => {
					this.initMap()
				})
				.catch(err => {
					alert(err)
				})
			},
			initMap: function(){
				var icon = {
				    url: eventMapIcon, // url
				    scaledSize: new google.maps.Size(45, 57) // scaled size
				}
				var config = {
					center:{lat: this.latitude,lng: this.longitude},
					zoom: 15
				}
				var elemen = document.getElementById('maps')
				var maps = new google.maps.Map(elemen,config)
				var marker = new google.maps.Marker({position: {
					lat: this.latitude,lng: this.longitude
				},icon: icon, map: maps});
			}
		},
		mounted(){
			
		},
		created(){
			this.fetchEvents()
		}
	}
</script>

<style scoped>
	.red{
		color: #cf000f;
	}
	*{
		box-sizing: border-box;
	}

	#maps{
		width: 100%;
		height: 300px;
	}
	#image{
		overflow-y: hidden;
		overflow-x: hidden;
		height: 65vh;
		width: 100vw;
		background-size: cover;
	}

	#details-content{
		background: #faefef;
		height: 100%;
		padding-bottom: 30px;
	}

	.hide{
		opacity:0;
	}

	#breadcrumbs{
		padding: 20px 14px;
		font-weight:400;
	}

	#dt-left{
		width: 62%;
		margin: 15px;
		background: #fff;
		box-shadow: 0px 0px 10px rgba(0,0,0,0.21);
		border-radius: 2px;
		padding: 20px;
	}
	.description{
		font-weight:300;
	}
	.title{
		color: #cf000f;
   		margin-bottom: 25px;
	}

	.contact{
		padding: 30px 0;
	}

	.map-address{
		display: flex;
		margin-top: 10px;
	}

	#dt-right{
		width: 33%;
		margin: 15px;
	}

	#dt-right .trivia, #dt-right .top-map {
	    background: #fff;
	    box-shadow: 0px 0px 10px rgba(0,0,0,0.21);
	    border-radius: 2px;
	    padding: 20px;
	}

	.dtls{
		display: flex;
		flex-wrap: wrap;
	}

	.flex{
		display: flex;
		flex-wrap: wrap;
	}

	.share,.add-to-fav{
		color: #cf000f;
		width: 50%;
	}
	
	.fa-map-marker{
		margin-right: 10px;
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

    #share-fav a{
    	color: #000!important;
    }

    .wrapper{
    	width: 90%;
    	margin: auto;
    }

    .logo{
        flex: 70%; 
    }

    .logo img:hover{
        cursor: pointer;
    }

    .image-preview{
    	display: flex;
    	flex-wrap: wrap;
    }
	
	.my-images{
		width: 100%;
	}

    .my-images img{
    	height: 65vh;
	    object-fit: cover;
	    width: 100%;
    }

    .logo img{
        height: auto;
	    width: 60px;
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

    .hide{
    	opacity:0;
    }

    .navs li{
        flex: 30%;
    }
	#list-auth-jog{
		overflow-x: hidden;
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
        #dt-right,#dt-left{
        	width: 100%;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px){
        .logo{
            flex: 50%;
        }
    }

    .trivia {
    	position: relative;
	    margin-top: 25px;
	    padding: 1px 20px;
	    font-size: 14px;
	}

	.trivia .trv{
		margin-top: 10px;
	}

	.ttl{
		position: absolute;
	    top: -9px;
	    left: -6px;
	    background: #d8d8d8;
	    padding: 5px 15px;
	    color: #cf000f;
	    font-weight: bold;
	    border-radius: 4px;
	}
</style>