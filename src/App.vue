<template>
<div id="app">
    <!-- <open></open> -->
    <div :class="{'mask-hidden':this.mask}" class="mask" @click="setMask(true)"></div>
    <div :class="{'mask-animation':!this.mask}" class="sidebar">
        <div class="sidebar-title">
            <font-awesome-icon icon="bars" class="sidebar-icon" @click="setMask(true)" />
            <span>animeFilter</span>
        </div>
        <div class="categori">
            <h2>カテゴリー</h2>
            <div v-for="(item,index) in options" :key="index" :class="{'active':getActiveType(item.value)}" @click="setValue(item.value)">
                <span>{{item.label}}</span>
            </div>
            <h2>マイコレクション</h2>
            <font-awesome-icon icon="heart" class="icon-favorite" :class="{'icon-active':favorite}" @click="setMyFavorite()" />
        </div>
    </div>
    <div id="navbar">
        <font-awesome-icon icon="bars" class="icon-hamburger" @click="setMask(false)" />
        <h1 id="navbarTitle">animeFilter</h1>
        <font-awesome-icon icon="search" class="icon-search" />
        <input type="text" v-model="search" placeholder="Find your favorite anime!">
        <font-awesome-icon icon="user-circle" class="icon-user" @click="login" />
        <div v-if="loginTog"></div>
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
import card from './components/Card.vue'
import open from './components/Open.vue'

export default {
    name: 'app',
    components: {
        card,
        open
    },
    data() {
        return {
            loginTog:false,
            profile:'',
            mask: true,
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
        getActiveType(value) {
            if (value === this.value) return true;
            else return false;
        },
        setValue(value) {
            this.value = value;
            this.mask = true;
        },
        setMyFavorite() {
            this.favorite = !this.favorite;
        },
        getProfile() {
            FB.api('/me?fields=name,id,email', function (response) {
                this.profile=response;
                console.log(this.profile)
            })
        },
        profilePicture() {
            return (this.profile.id) ? `https://graph.facebook.com/${this.profile.id}/picture?width=300` : `/static/man.gif`
        },
        login() {
            let vm = this
            FB.login(function (response) {
                vm.getProfile()
            }, {
                scope: 'email, public_profile',
                return_scopes: true
            })
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
            console.log('fbAsyncInit')
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
@import url(https://fonts.googleapis.com/css?family=Finger+Paint);

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

#navbarTitle {
    font-weight: 600;
    font-family: "Finger Paint"
}

#navbar {
    position: relative;
    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    height: 70px;
    background-color: #7828B4;
    display: flex;
    align-items: center;

    h1 {
        color: white;
    }

    input {
        max-width: 388px;
        width: 100%;
        height: 37px;
        padding-left: 10px;
        background-color: #7828B4;
        color: white;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
}
.account{
    height:100px;
    width:100px;
    position:absolute;
    right:16px;
    top:100px;
}

/* tag */
.icon-hamburger {
    color: white;
    font-size: 24px;
    margin-left: 8px;
    margin-right: 14px;
    cursor: pointer;
}

.icon-user {
    color: white;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    right: 28px;
    top: 23px;
}

.icon-search {
    margin-left: 6%;
    margin-right: 14px;
    color: white;
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

.mask {
    height: 100VH;
    width: 100VW;
    position: fixed;
    z-index: 12;
    background: rgba(0, 0, 0, 0.5);
}

.sidebar {
    transition: all .3s ease;
    transform: translateX(-240px);
    width: 240px;
    height: 100VH;
    position: absolute;
    left: 0;
    background: #F2F2F2;
    z-index: 13;

    .sidebar-title {
        color: #7828B4;
        box-sizing: border-box;
        padding: 20px 20px;
        width: 100%;
        height: 70px;
        font-size: 24px;
        border-bottom: 1px solid darken(#F2F2F2, 10%);
        font-weight: 600;
        font-family: "M PLUS Rounded 1c";
        text-align: left;

        span {
            font-family: "Finger Paint";
        }

        .sidebar-icon {
            cursor: pointer;
            padding-right: 14px;
            padding-left: 8px;
        }
    }
}

.mask-hidden {
    display: none;
}

.categori {
    text-align: left;

    h2 {
        padding-left: 28px;
        font-size: 20px;
    }

    div {
        cursor: pointer;
        padding-left: 36px;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        font-weight: 600;
        font-family: "M PLUS Rounded 1c";
        transition: all .3s ease-in-out;

        &:hover {
            color: white;
            background: #7828B4;
        }

    }

    .icon-favorite {
        padding-left: 36px;
        font-size: 40px;
        color: lighten(#2c3e50, 55%);
        transition: all .3s ease-in-out;
    }
}

.active {
    color: white;
    background: #7828B4;

    &:hover {
        color: white;
        background: #7828B4;
    }
}

.icon-active {
    color: #9013FE !important;
}

.mask-animation {
    position: fixed;
    transform: translateX(0) !important;
}

@media only screen and (max-width: 780px) {
    #body {
        box-sizing: border-box;
        padding: 0 30px;
        width: 100%;
        height: auto;
    }

    #navbarTitle {
        display: none;
    }

    .icon-hamburger {
        color: white;
        font-size: 24px;
        cursor: pointer;
    }

    .icon-search {
        margin-left: 28px;
        margin-right: 14px;
        color: white;
    }

    #navbar input {
        width: 60%;
        max-width: 300px;
    }
}

@media only screen and (max-width: 440px) {
    #body {
        padding: 0 20px;
    }

    #navbar input {
        max-width: 220px;
    }

    .icon-search {
        margin-left: 14px;
    }
}
</style>
