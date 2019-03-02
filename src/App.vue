<template>
<div id="app">
    <div id="nav">
        <h1 id="hav">アニ図鑑</h1>
        <font-awesome-icon icon="coffee" class="icon" />
        <input type="text" v-model="search" placeholder="Explore your own activites">
    </div>
    <div id="search">
            <div id="location">
                <h2>カテゴリー</h2>
                <el-select v-model="value" placeholder="select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                </el-select>
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
                    <h2 class="howmany">カテゴリー：{{value}}</h2>
                    <card :filterType="value" :searchContent="search"></card>
                </div>
        </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
    name: 'app',
    components: {
        Card
    },
    data() {
        return {
            search: "",
            options: [{
                value: 'comedy',
                label: 'comedy'
            }, {
                value: 'horror',
                label: 'horror'
            }, {
                value: 'romance',
                label: 'romance'
            }, {
                value: 'adventure',
                label: 'adventure'
            }, {
                value: 'school',
                label: 'school'
            ,}, {
                value: 'mystery',
                label: 'mystery'
            }],
            value: 'all'
        }
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c");
@import url("https://fonts.googleapis.com/earlyaccess/kokoro.css");

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body,
html {
    background-color: #F2F2F2;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
#hav{
    font-weight: 600;
    font-family: "M PLUS Rounded 1c";
}
#nav {
    width: 100%;
    height: 92px;
    background-color: #7828B4;
    display: flex;
    align-items: center;

}

#nav h1 {
    color: white;
    margin-left: 7%;
}

#nav input {
    width: 388px;
    height: 37px;
    padding-left: 10px;
    margin-left: 10px;
    background-color: #7828B4;
    color: white;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.icon {
    color: white;
    margin-left: 12%;
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.5);
}

/*search*/
#search {
    float: left;
    width: 25%;
    height: auto;
    margin-left: 3%;
    background-color: #EBEBEB;
    max-width: 300px;
}

#search div {
    padding: 0 12px;
}

#location .filter {
    margin-bottom: 20px;
}

#location{
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


#categories ul {
    text-align: left;
}

#categories ul li {
    list-style: none;
}

#body {
    float: left;
    width: 65%;
    max-width: 780px;
    height: auto;
    padding-left: 5%;
}

#body h2 {
    font-weight: 400;
    text-align: left;
      font-weight: 600;
    font-family: "M PLUS Rounded 1c";
}
.el-input__suffix {
    right: 20px!important;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.el-select{
    margin-bottom: 20px;
    margin-right:18px;
}
</style>
