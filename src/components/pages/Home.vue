<template>
  <div class="home">
    <HomeHeader />
    <section id="what-interest" class="what-interest">
        <div class="what-containers">
            <div class="title"> 
                <h1> What are you interested in? </h1>
                <div class="sub-title">
                  Choose destination by categories.
                </div>
            </div>
            
            <div class="what-cards">
              <div class="cards-container">
                  <div class="card culinary" v-on:click="discoverCulinary">
                      <div class="overlay"></div>
                      <div class="card-content">
                        <img src="@/assets/culinary icon 240.png" alt="culinary icon">
                        <div class="name">Culinary</div>
                      </div>
                  </div>

                  <div class="card event" v-on:click="discoverEvents">
                    <div class="overlay"></div>
                    <div class="card-content">
                        <img src="@/assets/event icon 240.png" alt="event icon">
                        <div class="name">Event</div>
                    </div>
                  </div>

                  <div class="card hand-craft" v-on:click="discoverCrafts">
                    <div class="overlay"></div>
                    <div class="card-content">
                        <img src="@/assets/icon craft 240.png" alt="craft icon">
                        <div class="name">Handycraft</div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </section>

    <section id="best-thing" class="best-thing">
      <div class="what-containers">
        <div class="title">
          <h1>Best thing to do in the City</h1>
          <div class="sub-title">
            Top rated destination suggested by our local expert.
          </div>
        </div>
        <div class="best-thing-cards">
          <div class="best-thing-cards-container">
            <div class="best-cards-box cclink" v-for="(best,key) in bestThingToDo">
              <router-link v-bind:to="'/details/event/'+best.id">
                <div class="best-card">
                  <div class="card-thumb">
                    <div class="overlay"></div>
                    <img v-bind:src="best.image.url" alt="card-thumb">
                    <!-- <div class="card-price">IDR 50K</div> -->
                  </div>
                  <div class="card-content">
                    <div class="card-title">{{best.name}}</div>
                    <!-- <div class="card-date">{{best.date}}</div>
                    <div class="card-info">{{best.description}}</div> -->
                    <div class="card-address">{{best.address}}</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="how-it-works">
      <div class="what-containers">
        <div class="title">
          <h1>See How It Works</h1>
          <div class="sub-title">
            Discover how Auth YK help you find everything you want
          </div>
        </div>
        <div class="best-thing-cards">
          <div class="best-thing-cards-container">
            <div class="best-cards-box">
              <div class="best-card">
                <div class="card-thumb">
                  <img src="@/assets/see-1.png" alt="card-thumb">
                </div>
              </div>
            </div>
            <div class="best-cards-box">
              <div class="best-card">
                <div class="card-thumb">
                  <img src="@/assets/see-2.png" alt="card-thumb">
                </div>
              </div>
            </div>
            <div class="best-cards-box">
              <div class="best-card">
                <div class="card-thumb">
                  <img src="@/assets/see-3.png" alt="card-thumb">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="get-in-touch" class="get-in-touch">
      <div class="what-containers">
        <div class="title">
          <h1>Get in touch with us</h1>
        </div>
        <div class="andro">
          <div class="ssandro">
            <img src="@/assets/dl1.png" alt="ss1">
          </div>
          <div class="ssandro">
            <img src="@/assets/dl2.png" alt="ss2">
          </div>
          <div class="ssandro">
            <img src="@/assets/dl3.png" alt="ss2">
          </div>
        </div>
        <div class="goole-play-button">
          <img src="@/assets/gplay.png" alt="GooglePlay">
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/header/HomeHeader'
import Footer from '@/components/footer/Footer'
import Auth from '@/services/Auth.js'
export default {
  name: 'Home',
  data () {
    return {
      bestThingToDo: []
    }
  },
  methods:{
    fetchData: function(){
      Auth.getEvents()
      .then((resp) => {
        this.bestThingToDo = resp.data.slice(0,3)
      })
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

  },
  mounted: function(){
    this.fetchData()
  },
  components:{
    HomeHeader,Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.what-containers{
  width: 80%;
  margin: auto;
  padding: 20px;
}
.title{
  text-align: center;
}

.title h1{
  font-weight: 400;
}
.sub-title{
  color: #aeaeae;
  font-size: 14px;
  margin-top:8px;
}
a {
  color: #42b983;
}
.what-interest,.how-it-works{
  background: #faefef;
}
.cards-container{
    padding: 20px;
    width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}

.cards-container .card{
  flex: 30%;
  text-align: center;
}

.card{
  width: 100%;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index:10;
}

.what-cards .overlay{
  border-radius: 20px;
}

#best-thing .overlay{
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.culinary{
  background: url('https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
}

.event{
  background: url('https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
}

.hand-craft{
  background: url('https://images.pexels.com/photos/243059/pexels-photo-243059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
}

.overlay{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius: 10px;
  background:rgba(0, 0, 0, 0.5);
}

.best-card .overlay{
  transition: all ease-out 0.5s;
  -moz-transition:all 0.5s;
  -webkit-transform:all 0.5s;
}

.card-content{
  position: relative;
}

.card-content img{
  width: 115px;
  height: auto;
  display: block;
  margin: 40px auto;
}

.best-thing-cards-container{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 20px 0;
}

.best-cards-box{
  width: 33.33%;
  padding: 15px 30px;
}

.best-card{
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  height: 315px;
}

.card-thumb{
  overflow:hidden;
  position: relative;
}

.card-thumb .overlay{
  margin-bottom: 3px;
}

.card-info, .card-url{
  font-size: 12px;
}

.card-info{
    font-size: 12px;
    height: 60px;
    overflow: hidden;
    margin-bottom: 10px;
}

.best-card{
  cursor: pointer;
}

.card-url{
  padding-top: 15px;
}

.card-thumb img{
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.cclink img{
  transition: all 0.5s;
  -moz-transition:all 0.5s;
  -webkit-transform:all 0.5s;
}

.cclink:hover img{
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

.card-content{
  padding: 5px 10px;
}

.card-title{
  font-weight: bold;
  color: #cf000f;
}

.card-date{
  padding: 3px 0;
  font-size: 14px;
}

.card-address{
  font-size: 11px;
  font-weight: bold;
  margin-top:25px;
  color: #000!important;
}

.card-price{
    position: absolute;
    color: #fff;
    bottom: 10px;
    right: 10px;
}

#how-it-works .card-thumb img{
  height: unset;
}

#how-it-works .best-card{
  box-shadow: unset; 
}

.andro{
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.ssandro{
  flex: 30%;
}

.andro img{
  display: block;
  margin: auto;
  width: 100%;
}

.goole-play-button{
  text-align: center;
  padding-top: 20px;
}

.name{
  margin-top: -25px;
  font-weight: bold;
  font-size: 1.2em;
}

.goole-play-button img{
	width: 135px;
	height: auto;
}

@media screen and (max-width: 767px){
  .what-containers{
    padding: 20px 0;
  }

  .cards-container .card{
    flex: 100%;
  }

  .best-cards-box{
    flex: 100%;
    padding: 15px 6px;
  }

  .what-containers{
    width: 90%;
  }

  .ssandro{
    flex: 100%;
  }
}

@media screen and (max-width:992px){
  .cards-container{
    width: 100%;
    padding: 0;
  }

  .andro img{
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .what-containers{
    width: 100%;
  }
  .best-cards-box{
    padding: 15px 10px;
  }
}
</style>
