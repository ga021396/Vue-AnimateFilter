<template>
<div id="app">
    <div :class="{'hidden':this.mask}" class="mask" @click="setMask(true)"></div>
    <div :class="{'animation':!this.mask}" class="sidebar">
        <div class="Stitle">
            <font-awesome-icon icon="bars" class="Sicon" @click="setMask(true)"/>
            <span>アニ図鑑</span>
        </div>
        <div class="cate">
            <h2>カテゴリー</h2>
            <div v-for="(item,index) in options" :key="index" :class="{'active':getActiveType(item.value)}"
            @click="setValue(item.value)">
                <span>{{item.label}}</span>
            </div>
            <h2>マイコレクション</h2>
            <font-awesome-icon icon="heart" class="iconFavor" :class="{'icon-active':favorite}" @click="setMyFavorite(item)" />
        </div>
    </div>
    <div id="nav">
        <font-awesome-icon icon="bars" class="ham" @click="setMask(false)"/>
        <h1 id="hav">アニ図鑑</h1>
        <font-awesome-icon icon="coffee" class="icon" />
        <input type="text" v-model="search" placeholder="Explore your own activites">
    </div>
    <div class="container">
            <div id="body">
                <h2 class="howmany">カテゴリー：{{getTypeName(value)}}</h2>
                <card :filterType="value" :searchContent="search" :myFavorite="favorite"></card>
            </div>
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
            mask:true,
            favorite: false,
            search: "",
            options: [{
                value: 'All',
                label: '全部'
            }, {
                value: 'comedy',
                label: 'コメディ'
            }, {
                value: 'sports',
                label: 'スポーツ/競技'
            }, {
                value: 'romance',
                label: '恋愛/ラブコメ'
            }, {
                value: 'adventure',
                label: 'SF/ファンタジー/バトル'
            }, {
                value: 'school',
                label: '青春/ドラマ',
            }, {
                value: 'mystery',
                label: '推理/サスペンス'
            }, ],
            value: 'All'
        }
    },
    methods: {
        getTypeName(value) {
            switch (value) {
                case 'comedy':
                    return "コメディ"
                    break;
                case 'mystery':
                    return '推理/サスペンス'
                    break;
                case 'school':
                    return '青春/ドラマ'
                    break;
                case 'sports':
                    return 'スポーツ/競技'
                    break;
                case 'romance':
                    return '恋愛/ラブコメ'
                    break;
                case 'adventure':
                    return 'SF/ファンタジー/バトル'
                    break;
                default:
                    return "全部";
            }
        },
        setMask(mask){
            this.mask=mask;
        },
        getActiveType(value){
            if(value===this.value)return true;
            else return false;
        },
        setValue(value){
            this.value=value;
            this.mask=true;
        },
        setMyFavorite(){
            this.favorite=!this.favorite;
        }
    }
}
</script>

<style lang="scss">
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

#hav {
    font-weight: 600;
    font-family: "M PLUS Rounded 1c";
}

#nav {
    width: 100%;
    height: 70px;
    background-color: #7828B4;
    display: flex;
    align-items: center;

}

#nav h1 {
    color: white;
    margin-left: 40px;
}

#nav input {
    max-width: 388px;
    width: 100%;
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

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
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

#location {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

#body {
    width: 780px;
    height: auto;
}

#body h2 {
    font-weight: 400;
    text-align: left;
    font-weight: 600;
    font-family: "M PLUS Rounded 1c";
}

.el-input__suffix {
    right: 20px !important;
    -webkit-transition: all .3s;
    transition: all .3s;
}

.el-select {
    margin-bottom: 20px;
    margin-right: 15px;
}
.mask{
    height:100VH;
    width:100VW;
    position: fixed;
    z-index: 12;
    background: rgba(0, 0, 0, 0.5);
}
.sidebar{
    transition: all .3s ease;
    transform: translateX(-240px);
    width:240px;
    height:100VH;
    position: absolute;
    left: 0;
    background:#F2F2F2;
    z-index: 13;
    .Stitle{
        color:#7828B4;;
        box-sizing: border-box;
        padding: 20px 20px;
        width:100%;
        height:70px;
        font-size: 24px;
        border-bottom: 1px solid darken(#F2F2F2,10%);
        font-weight: 600;
        font-family: "M PLUS Rounded 1c";
        text-align: left;
        .Sicon{
            cursor:pointer;
            padding-right: 28px;
            padding-left:8px;
        }
    }
}   
.hidden{
    display:none;
}
.cate{
    text-align: left;
    h2{
        padding-left: 28px;
        font-size: 20px;
    }
    div{
        cursor: pointer;
        padding-left: 36px;
        font-size:16px;
        height:40px;
        line-height: 40px;
        font-weight: 600;
        font-family: "M PLUS Rounded 1c";
        transition: all .3s ease-in-out;
        &:hover{
            color:white;
            background:#7828B4;
        }

    }
    .iconFavor{
        padding-left: 36px;
        font-size: 40px;
        color:lighten(#2c3e50,40%);
        transition: all .3s ease-in-out;
    }
}
.active{
    color:white;
    background:#7828B4;
    &:hover{
        color:white;
        background:#7828B4;
    }
}
.icon-active {
    color: #9013FE!important;
}
/* tag */
.ham {
        color: white;
        font-size: 24px;
        margin-left: 32px;
        cursor:pointer;
}
.animation{
    position:fixed;
    transform: translateX(0) !important;
}
@media only screen and (max-width: 780px) {
#body {
    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    height: auto;
}
#hav{
    display: none;
}
.ham {
        color: white;
        font-size: 24px;
        margin-left: 20px;
        cursor:pointer;
}
#nav input {
    max-width: 200px;
}
}
</style>
