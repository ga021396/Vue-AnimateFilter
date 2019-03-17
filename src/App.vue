<template>
<div id="app">
    <!-- <open></open> -->
    <sidebar @setValue="setValue" @setMyFavorite="setMyFavorite" @setMask="setMask" :mask="mask" @setUserStatus="setUserStatus" />
    <navbar @setMask="setMask" :search="search" @setSearch="setSearch" />
    <div class="container">
        <div id="body">
            <h2 class="howmany">カテゴリー：{{getTypeName(value)}}</h2>
            <card :filterType="value" :searchContent="search" :myFavorite="favorite" :userStatus="UserStatus"></card>
        </div>
    </div>
</div>
</template>

<script>
import card from './components/Card.vue'
import open from './components/Open.vue'
import sidebar from './components/SideBar.vue'
import navbar from './components/navbar.vue'
import db from './assets/firebase.js'

export default {
    name: 'app',
    components: {
        card,
        open,
        sidebar,
        navbar
    },
    data() {
        return {
            mask: true,
            favorite: false,
            search: '',
            value: 'All',
            UserStatus: false,
        }
    },
    methods: {
        getTypeName(value) {
            switch (value) {
                case 'comedy':
                    return "コメディ"
                case 'mystery':
                    return '推理/サスペンス'
                case 'school':
                    return '青春/ドラマ'
                case 'sports':
                    return 'スポーツ/競技'
                case 'romance':
                    return '恋愛/ラブコメ'
                case 'adventure':
                    return 'SF/ファンタジー/バトル'
                default:
                    return "全部";
            }
        },
        setMask(mask) {
            this.mask = mask;
        },
        setValue(value) {
            this.value = value;
        },
        setMyFavorite(value) {
            this.favorite = value;
        },
        setSearch(value) {
            this.search = value;
        },
        setUserStatus(value) {
            this.UserStatus = value;
        }
    },
    mounted() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '254177898799310',
                cookie: true,
                xfbml: true,
                version: 'v3.2'
            });
            FB.AppEvents.logPageView();
            // Get FB Login Status
            FB.getLoginStatus(response => {
                console.log('res', response) // 這裡可以得到 fb 回傳的結果
            })
        };
    }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c");
@import url("https://fonts.googleapis.com/earlyaccess/kokoro.css");
@import url("https://fonts.googleapis.com/css?family=Finger+Paint");
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

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

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
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

@media only screen and (max-width: 780px) {
    #body {
        box-sizing: border-box;
        padding: 0 30px;
        width: 100%;
        height: auto;
    }
}

@media only screen and (max-width: 440px) {
    #body {
        padding: 0 20px;
    }
}
</style>
