<template>
	<div class="admin-dashboard">
		<div class="admin-navbar" id="admin-navbar">
			<div class="open-side-bar">
				<span class="open-slide" id="open-slide">
	                <a>
	                    <svg id="menuopen" width="30" height="30">
	                        <path d="M0,5 29,5" stroke="#fff" stroke-width="2"/>
	                        <path d="M0,14 29,14" stroke="#fff" stroke-width="2"/>
	                        <path d="M0,23 29,23" stroke="#fff" stroke-width="2"/>
	                    </svg>
	                </a>
		        </span>
			</div>
			<h2 class="dash-title" style="opacity: 0;">{{viewState}}</h2>
		</div>
		<!-- <div class="sub-sidebar" v-if="sideBarIsOpen"></div> -->
		<div class="sidebar" v-if="sideBarIsOpen">
			<!-- <div class="open-side-bar">
				<span class="open-slide" id="open-slide">
	                <a>
	                    <svg id="menuopen" v-on:click="openSlideMenu" width="30" height="30">
	                        <path d="M0,5 29,5" stroke="#fff" stroke-width="2"/>
	                        <path d="M0,14 29,14" stroke="#fff" stroke-width="2"/>
	                        <path d="M0,23 29,23" stroke="#fff" stroke-width="2"/>
	                    </svg>
	                </a>
		        </span>
			</div> -->
			<div class="hr-box"></div>
			<router-link to="/admin/dashboard/">
				<div class="logo">
					<div class="logo-container">
						<!-- <div class="logo-item-1">
							<img class="logo-auth" src="@/assets/logo-auth.png" alt="logoAuth">
						</div> -->
						<div class="logo-item-2">
							<img class="logo-auth-1" src="@/assets/logo-auth-1.png" alt="">
						</div>
					</div>
				</div>
			</router-link>

			<div class="side-menu-nav">
				<ul class="menu-nav">
					<li>
						<router-link exact to="/admin/dashboard/">Dashboard</router-link>
					</li>
					<li>
						<router-link to="/admin/dashboard/events">Events</router-link>
						<!-- <img src="@/assets/icon-edit-copy.png" alt="icon"> -->
					</li>
					<li>
						<router-link to="/admin/dashboard/crafts">Crafts</router-link>
						<!-- <img src="@/assets/icon-edit-copy.png" alt="icon"> -->
					</li>
					<li>
						<router-link to="/admin/dashboard/culinary">Culinary</router-link>
						<!-- <img src="@/assets/icon-edit-copy.png" alt="icon"> -->
					</li>
<!-- 					<li v-on:click="openSlideMenu">
						<router-link to="/admin/dashboard/change-password">Change Password</router-link>
					</li> -->
					<li>
						<a v-on:click="logout" href="#">Logout</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="admin-dash-container">
			<div class="app-container">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import Auth from '@/services/Auth.js'
	export default {
		name: 'AdminDashboard',
		data(){
			return{
				viewState: 'Dashboard',
				isActive: true,
				sideBarIsOpen: true
			}
		},
		methods:{
			openSlideMenu: function(){
				this.sideBarIsOpen = !this.sideBarIsOpen
			},
			logout: function(){
				Auth.logout()
				this.$router.go({path: '/'})
			}
		}
	}
</script>

<style scoped>
	.sub-sidebar{
		position: absolute;
		left: 250px;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
	} 
	.admin-navbar{
		padding: 15px;
		background: #cf000f;
		text-align: center;
		color: #fff;
	}

	.open-side-bar{
		position: relative;
	}

	.open-slide{
		position: absolute;
		left: 0;
		cursor: pointer;
	}

	.sidebar{
		width: 250px;
		height: 100vh;
		background: #660000;
		color: #fff;
		position: absolute;
		margin-top: -59px;
		z-index: 50;
	}

	.menu-nav li {
    	position: relative;
	    cursor: pointer;
	    list-style: none;
	    height: 40px;
	    padding-left: 25px;
	    padding-top: 10px;
	}

	.menu-nav li .router-link-active{
		color: #f7000b;
		font-weight: bold;
	}

	.menu-nav li img{
		position: absolute;
		right: 10px;
    	top: -5px;
	}

	.dash-title{
		display: inline;
	}

	.side-menu-nav{
		margin-top: 150px;
	}

	.logo-container{
		text-align: center;
		position: absolute;
    	left: 33%;
    	transform: translateX(-50%);
    	top: 20px;
	}

	.logo-auth{
		width: 30px;
		height: auto;
	}

	.logo-auth-1{
		width: 190px;
	    height: auto;
	    margin-left: 31px;
	    margin-top: 12px;
	}

	.hr-box{
		width: 50px;
		height: 100vh;
		background: rgba(207, 0, 15, 0.5);
		position: absolute;
    	right: 0;
	}

	.sidebar .open-slide {
	    right: 9px;
	    left: unset;
	    z-index: 99;
	    top: 10px;
	}

	.app-container{
		margin: auto;
		width: 90%;
	}

	.admin-dash-container{
		margin-left: 250px;
	}
	
</style>