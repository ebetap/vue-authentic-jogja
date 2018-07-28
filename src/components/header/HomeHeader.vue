<template>
    <div class="home-header">
        <div class="my-container">
            <div class="overlay"></div>
            <Navigation />
            <div class="header-content">
                <div class="title">
                    <h1>Discover authentic place around you.</h1>
                    <div class="subtitle">
                        find great place to visit, eat, drink and shop for your local experience.
                    </div>
                </div>
                <div class="search">
                    <form class="form-search" v-on:submit.prevent="searching">
                        <div class="inp-search">
                            <input type="text" name="search" id="search" placeholder="Craft,Culinary,Event" v-model="search">
                        </div>
                        <div class="button-search">
                            <ButtonSearch />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation  from './nav/Navigation'
    import ButtonSearch from '../button/ButtonSearch'
    export default {
        name: 'HomeHeader',
        data(){
            return{
                search: ''
            }
        },
        components: {
            Navigation, ButtonSearch
        },
        methods:{
            searching: function(){
                this.$router.push({path: '/discover',query:{search:this.search}})
            }
        }
    }
</script>

<style scoped>
    .home-header{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        background: url('../../assets/tugu/tugu.jpg');
        background-size: cover;
        background-position-y: bottom;
        color: #fff;
    }

    .my-container{
        width: 100%;
        margin: auto;
        padding-top: 10px;
    }
    
    .overlay{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: rgba(0, 0, 0, 0.75);
    }

    .header-content{
        text-align: center;
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-38%);
    }

    .title{
        padding: 15px;
    }

    .title h1{
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 2.6em;
    }

    .subtitle{
        margin-top: 7px;
        font-size: 1.2em;
    }

    #search{
        padding: 15px 14px;
        width: 200px;
        border: 0;
        border-radius: 7px;
    }

    .search{
        margin: 40px auto;
        width: 350px;
    }

    .form-search{
        display: flex;
    }

    .form-search > div{
        flex: auto;
    }
    input:focus{
        outline: none;
    }

    @media screen and (min-width: 768px) and (max-width:992px){
        .home-header{
            height: 50vh;
        }
    }
</style>