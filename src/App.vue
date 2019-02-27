<template>
  <div id="app">
     <div id="nav">
        <h1 id="hav">HaveFun</h1>
        <font-awesome-icon icon="coffee" class="icon"/>
        <input type="text" placeholder="Explore your own activites">
    </div>
    <div id="search">
        <div id="location">
             <h2>Location</h2>
             <form>
                 <select class="YourLocation">
                 <option value="0">ALL</option>
                 <option value="1">中正</option>
                 <option value="2">大同</option>
                 <option value="3">中山</option>
                 <option value="4">松山</option>
                 <option value="5">大安</option>
                 <option value="6">萬華</option>
                 <option value="7">信義</option>
                 <option value="8">士林</option>
                 <option value="9">內湖</option>
                 <option value="10">南港</option>
                 </select>
            </form>
        </div>
        <div id="date">
             <h2>Date</h2>
            <div class="date">
                <span>from</span>
                <input id="date" type="date" value="2017-06-01">
            </div>
            <div class="date">
                <span style="margin-left: 18px;">to</span>
                <input id="date" type="date" value="2017-06-01">
            </div>
        </div>
        <div id="categories">
            <h2>Categories</h2>
            <ul>
                <li><input type="checkbox" id="all">All</li>
                <li><input type="checkbox">Entertainment</li>
                <li><input type="checkbox">Food</li>
                <li><input type="checkbox">Learing</li>
                <li><input type="checkbox">Outdoors</li>
            </ul>
        </div>
    </div>
    <div id="body">
        <h2 class="howmany">Showing 15 results by...</h2>
        <div class="result">
            <span class="locaTag">taipei<i class="far fa-times-circle"></i></span>
            <span>Sports<i class="far fa-times-circle"></i></span>
        </div>
        <card></card>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Card
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,html{
    background-color: #F2F2F2;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
#nav{
    width:100%;
    height:92px;
    background-color: #7828B4;
    display: flex;
    align-items: center;
    
    
}
#nav h1{
    color: white;
    margin-left: 7%;
}
#nav input{
    width: 388px;
    height: 37px;
    padding-left: 10px;
    margin-left: 10px;
    background-color: #7828B4;
    color: white;
    border: none;
    border-bottom:1px solid rgba(255,255,255,0.5);
}
.icon{
     color: white;
     margin-left: 12%;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color:rgba(255,255,255,0.5);
}
/*search*/
#search{
    float: left;
    width: 25%;
    height: auto;
    margin-left: 3%;
    background-color: #EBEBEB ;
    max-width: 300px;
}
#search div{
    padding: 0 12px;
}
#location select{
    width:80%;
    height: 30px;
    margin-bottom: 20px;
}
#location,#date{
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
#date .date{
    margin-left: -20px;
}
#date input{
    border: none;
    width: 58%;
    margin-bottom: 20px;
    margin-right: 10%;
    margin-left: 5%;
    height: 30px;
}
#categories ul{
    text-align: left;
}
#categories ul li{
    list-style: none;
}

#body{
    float: left;
    width:65%;
    max-width: 780px;
    height:auto;
    padding-left: 5%;
}
#body h2{
    font-weight: 400;
    text-align: left;
}
.result{
  display: flex;
}
.result span{
    border: 1px solid #9013FE;;
    padding:5px 10px;
    border-radius: 15px;
    color: #9013FE;
    margin-right: 8px;
}
.result i{
    padding-left: 5px;
    color: #9013FE;
}
</style>
