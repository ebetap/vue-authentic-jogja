<template>
    <div class="header-nav">
        <div class="header-nav-container">
            <div class="logo">
                <img src="@/assets/logo-auth-1.png">
            </div>
            <div class="navs">
                <ul>
                    <li @mouseover="showMenu()">
                        <router-link to="/">
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
                <div v-if="subMenu" class="sub-menu" @mouseleave="showMenu">
                    <div v-on:click="discoverCulinary" class="listmenu">Culinary <i class="fa fa-angle-right"></i></div>
                    <div v-on:click="discoverCrafts" class="listmenu">Handcraft <i class="fa fa-angle-right"></i></div>
                    <div v-on:click="discoverEvents" class="listmenu">Event <i class="fa fa-angle-right"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        data(){
            return{
                subMenu: false
            }
        },
        methods:{
            showMenu: function(){
                this.subMenu = !this.subMenu
            },
            discoverCulinary: function(){
              this.$router.push({path: '/discover',query:{category:'culinary'}})
            },
            discoverEvents: function(){
              this.$router.push({path: '/discover',query:{category:'events'}})
            },
            discoverCrafts: function(){
              this.$router.push({path: '/discover',query:{category:'craft'}})
            }
        }
    }
</script>

<style scoped>
    .header-nav{
        position: relative;
        height: 70px;
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
        width: 215px;
        margin-left: 30px;
        margin-top: 5px;
    }

    .navs{
        flex: 30%;
        position: relative;
    }

    .navs ul{
        list-style: none;
        display: flex;
    }

    .navs li{
        flex: 30%;
    }
    ul.sub-menu {
        width: 170px;
        height: auto;
        background: #fff;
        color: #000;
        display:none;
    }
    .sub-menu li.listmenu{
        flex: 1;
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
    .sub-menu{
        text-align: center;
        position: absolute;
        width: 150px;
        left: -40px;
    }
    .listmenu{
        position :relative;
        margin: 15px 0;
        cursor: pointer;
    }
    .listmenu:hover{
        color: #cf000f;
    }
    .listmenu i{
        position: absolute;
        right: 26px;
        top: 3px;
    }
</style>