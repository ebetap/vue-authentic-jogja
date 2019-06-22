<template>
	<div id="list-auth-jog" class="discover"> 
		<div class="header-nav">
	        <div class="header-nav-container">
	            <div class="logo">
	                <router-link to="/">
	                	<img src="@/assets/logo@3x.png" alt="logo">
	                </router-link>
	                <div class="search">
	                	<form>
	                		<input type="text" name="search" class="inp-search" placeholder="What are you looking for?" v-model="search">
	                	</form>
	                </div>
	            </div>
	            <div class="navs">
	                <ul class="red">
	                    <li class="hide">
	                        <router-link to="/discover">
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
		<div class="discover-container">
			<div id="left">
				<div class="search-by">
					<div class="region">
						<select v-model="regionSelected">
							<option value="all">All Region</option>
							<option value="sleman">Sleman</option>
							<option value="jogja">Yogyakarta</option>
						</select>
					</div>
					<div class="type">
						<select v-model="display" v-on:change="updateCategory">
							<option value="events">Events</option>
							<option value="culinary">Culinary</option>
							<option value="craft">Craft</option>
						</select>
					</div>
					<div class="all-culinary">
						<select>
							<option value="all">All Food</option>
							<option value="sate">Sate</option>
							<option value="gudeg">Gudeg</option>
							<option value="belalangrg">Belalang Goreng</option>
						</select>
					</div>
				</div>
				<div class="list-container">
					<div v-if="display == 'events'" class="card-box" v-for="(event, key) in filterBy(events,search)" :key="key">
						<router-link v-bind:to="'/details/event/'+event.id">
							<div class="card">
								<div v-if="event.image.url != null" class="card-thumb has-image">
									<div class="overlay"></div>
									<img v-bind:src="event.image.url" alt="card-thumb">
								</div>
								<div v-if="event.image.url == null" class="card-thumb noimage">
									<div class="overlay"></div>
									<img src="@/assets/event icon 240.png" alt="event icon">
								</div>
								<div class="card-content">
									<div class="card-title">{{event.name}}</div>
									<!-- <div class="card-date">{{event.date}}</div> -->
									<!-- <div class="card-info">{{event.description}}</div> -->
									<div class="card-address">{{event.address}}</div>
								</div>
							</div>
						</router-link>
					</div>
					<div v-if="display == 'culinary'" class="card-box" v-for="(culiner, key) in filterBy(culinary,search)" :key="key">
						<router-link v-bind:to="'/details/culinary/'+culiner.id">
							<div class="card">
								<div v-if="culiner.image.url != null" class="card-thumb has-image">
									<div class="overlay"></div>
									<img v-bind:src="culiner.image.url" alt="card-thumb">
								</div>
								<div v-if="culiner.image.url == null" class="card-thumb noimage">
									<div class="overlay"></div>
									<img src="@/assets/culinary icon 240.png" alt="culinary icon">
								</div>
								<div class="card-content">
									<div class="card-title">{{culiner.name}}</div>
									<!-- <div class="card-info">{{culiner.description}}</div> -->
									<div class="card-address">{{culiner.address}}</div>
								</div>
							</div>
						</router-link>
					</div>
					<div v-if="display == 'craft'" class="card-box" v-for="(craft, key) in filterBy(handycraft,search)" :key="key">
						<router-link v-bind:to="'/details/craft/'+craft.id">
							<div class="card">
								<div v-if="craft.image.url != null" class="card-thumb has-image">
									<div class="overlay"></div>
									<img v-bind:src="craft.image.url" alt="card-thumb">
								</div>
								<div v-if="craft.image.url == null" class="card-thumb noimage">
									<div class="overlay"></div>
									<img src="@/assets/icon craft 240.png" alt="craft icon">
								</div>
								<div class="card-content">
									<div class="card-title">{{craft.name}}</div>
									<!-- <div class="card-date">{{craft.date}}</div> -->
									<!-- <div class="card-info">{{craft.description}}</div> -->
									<div class="card-address">{{craft.address}}</div>
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
			<div id="right">
				<div id="maps"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	import culinaryMapIcon from '@/assets/map_icon_culinary_on.png'
	import eventMapIcon from '@/assets/map_icon_event_on.png'
	import craftMapIcon from '@/assets/map_icon_craft_on.png'
	export default {
		name : 'Authjoglist',
		data(){
			return{
				search: '',
				events: [],
				culinary: [],
				handycraft: [],
				regionSelected: 'all',
				display: ''
			}
		},
		methods:{
			filterBy:function(list,value){
				value = value.charAt(0).toUpperCase() + value.slice(1)
				return list.filter(function(data){
					return data.name.indexOf(value) > -1
				})
			},
			fetchEvents: function(){
				Auth.getEvents()
				.then(response => {
					this.events = response.data
				})
				.then(() => {
					this.initMap()
				})
				.catch(err => {
					alert(err)
				})
			},
			fetchCulinary: function(){
				Auth.getCulinary()
				.then(response => {
					this.culinary = response.data
				})
			},
			fetchCraft: function(){
				Auth.getCraft()
				.then(response => {
					this.handycraft = response.data
				})
			},
			updateCategory: function(){
				if(this.display == 'culinary'){
					this.$router.push({path: '/discover',query:{category:'culinary'}})
				}else if(this.display == 'craft'){
					this.$router.push({path: '/discover',query:{category:'craft'}})	
				}else if(this.display == 'events'){
					this.$router.push({path: '/discover',query:{category:'events'}})
				}
			},
			initMap: function(){
				var config = {
					//latitude & longitude Yogyakarta
					center:{lat: -7.78278,lng: 110.36083},
					zoom: 12,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}
				var elemen = document.getElementById('maps')
				var maps = new google.maps.Map(elemen,config)
				this.setMarkers(elemen,this.events,this.culinary,this.handycraft)
			},
			setMarkers: function(maps,events,culinary,craft){
				var eventMarker = {
					url: eventMapIcon,
					scaledSize: new google.maps.Size(45, 57) // scaled size
				}
				var culinaryMarker = {
					url: culinaryMapIcon,
					scaledSize: new google.maps.Size(45, 57) // scaled size
				}
				var craftMarker = {
					url: craftMapIcon,
					scaledSize: new google.maps.Size(45, 57) // scaled size
				}
				for(var i=0;i<events.length;i++){
					var event = events[i]
					var marker = new google.maps.Marker({position: {
					lat: event.latitude == null ? -7.78278 : event.latitude,lng: event.longitude == null ? 110.36083 : event.longitude
					},icon: eventMarker, setMap: maps});
				}
				for(var j=0;j<culinary.length;j++){
					var culiner = culinary[j]
					var marker = new google.maps.Marker({position: {
					lat: culiner.latitude == null ? -7.78278 : culiner.latitude,lng: culiner.longitude == null ? 110.36083 : culiner.longitude
					},icon: culinaryMarker, setMap: maps});
				}
			}
		},
		created: function(){
			if(this.$route.query.category == 'culinary'){
				this.display = 'culinary'
			}else if(this.$route.query.category == 'events'){
				this.display = 'events'
			}else if(this.$route.query.category == 'craft'){
				this.display = 'craft'
			}else if(this.$route.query.search){
				var keyword = this.$route.query.search
				keyword == 'culinary' ? this.display = 'culinary' : keyword == 'events' ? this.display = 'events': keyword == 'craft' ? this.display = 'craft' : this.display = 'culinary'
			}
		},
		mounted(){
			this.fetchEvents()
			this.fetchCulinary()
			this.fetchCraft()
		},
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
	    width: 60px;
	    position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	    left: 10px;
    }
	.search-by{
		display: flex;
		flex-wrap: wrap;
		padding: 0 30px;
		padding-top: 15px;
	}

	.search-by > div{
		width: 33.33%;
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

	.card{
		cursor: pointer;
	}

	.card:hover .has-image img{
		-moz-transform: scale(1.2);
	    -webkit-transform: scale(1.2);
	    transform: scale(1.2);
	}

	.noimage .overlay{
		position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: #0000004a;
	}

	.card-box .card{
		position: relative;
	    overflow: hidden;
	    border-radius: 10px;
	    background-color: #fff;
	    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
	    height: 280px;
	}

	.hide{
		opacity:0;
	}

	.card-thumb{
		overflow: hidden;
    	position: relative;
    	height: 200px;
	}
	.card-thumb img{
		width: 100%;
	    height: 100%;
	    object-fit: cover;
	    transition: all 0.5s;
	    -moz-transition:all 0.5s;
	    -webkit-transform:all 0.5s;
	}
	.card-thumb.noimage {
    	background: #cf000f;
	}
	.card-content{
		padding: 5px 10px;
		position: relative;
		text-align: center;
	}
	.card-title{
		font-weight: bold;
    	color: #cf000f;
    	height: 23px;
    	overflow-y: hidden;
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
		font-size: 11px;
		font-weight: bold;
		color: #000!important;
	}

	.noimage img {
	    width: 120px !important;
	    height: auto !important;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	    transition: none !important;
	}

	.search-by > div{
		padding: 0 15px;
	}
	.search-by select{
		width: 100%;
		height: 30px;
	    border: 0;
	    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
	    background: #fff;
	    border-radius: 5px;
		font-size: 0.9em;
		cursor: pointer;
		text-align-last:center;
	}
	.search-by select:focus{
		outline:none;
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