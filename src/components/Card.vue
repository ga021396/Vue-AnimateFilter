<template>
        <div>
         <div class="card" v-for="(item,index) in list" :key="index">
            <div class="img" @click="getAPi(2018)">
                 <img src="Images/001.jpg">
            </div>
            <div class="introduction">
                <h2 class="name">hello world</h2>
                <p class="purpose">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <span class="aut">Ethan Foster</span>
                <span class="cardResult">Entertainment</span>
                <div class="loc">
                    <span ><font-awesome-icon icon="coffee" /><span class="address">Taipei city</span></span>
                    <span ><font-awesome-icon icon="coffee" /><span class="opentime">2018/06/07-2018/06/17</span></span>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    msg: String
  },
  data(){
    return{
      list:[1,2,3,4,5]
    }
  },
  mounted:function(){
      this.getAPi(2017)
  },
  created:function(){  
  },
  methods:{
    getAPi(year){
        let url = `http://api.moemoe.tokyo/anime/v1/master/${year}/1`
        this.$axios({
        methods: 'get',
        url: url
        })
        .then((resp) => {
        console.log(resp)
        }) .catch(function (error) {
        console.log(error);
        });;
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
    margin: 25px 0 ;
    width: 100%;
    display: flex;
    height: 220px;
}
.card img{
    width: 220px;
    height: 100%;
}
.card .introduction{
    text-align: left;
    padding-left: 20px;
    width:100%;
    background-color:white;
}
.introduction h2{
     color: #9013FE;
}
.aut{
    font-weight: 600;
    margin-right: 10px;
}
.cardResult{
    color: white;
    background-color: #D7D7D7; 
    padding:2px 15px;
    border-radius: 15px;    
    font-style: italic;
}
.loc{
    color: #9B9B9B;
    margin-top: 15px;
}
.loc i{
    color:black;
    margin-right: 8px;
}
.loc span{
    margin-right: 20px;
}
</style>
