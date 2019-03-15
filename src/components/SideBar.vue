<template>
<div>
    <div :class="{'mask-hidden':this.mask}" class="mask" @click="setMask()"></div>
    <div :class="{'mask-animation':!this.mask}" class="sidebar">
        <div class="sidebar-title">
            <font-awesome-icon  icon="bars" class="sidebar-icon" @click="setMask()" />
            <span>animeFilter</span>
        </div>
        <div class="categori">
            <font-awesome-icon v-if="!profile.id" icon="user-circle" class="icon-user" @click="login"/>
            <img v-show="profile.name" :src="profilePicture" alt="profile" class="myIcon" />
            <h3>{{profile.name||guest}}</h3>
            <h2>カテゴリー</h2>
            <div v-for="(item,index) in options" :key="index" :class="{'active':getActiveType(item.value)}" @click="setValue(item.value)">
                <span>{{item.label}}</span>
            </div>
            <h2>マイコレクション</h2>
            <font-awesome-icon icon="heart" class="icon-favorite" :class="{'icon-active':favorite}" @click="setMyFavorite()" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'sidebar',
    props: ['mask'],
    data() {
        return {
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
            value: 'All',
            favorite: false,
            profile: {}
        }
    },
    computed:{
        profilePicture() {
            return (this.profile.id) ? `https://graph.facebook.com/${this.profile.id}/picture?width=300` : `/static/man.gif`
        },
    },
    methods: {
        setMask() {
            this.$emit('setMask', true);
        },
        getActiveType(value) {
            if (value === this.value) return true;
            else return false;
        },
        setValue(value) {
            this.value = value;
            this.$emit('setMask', true);
            this.$emit('setValue', value);
        },
        setMyFavorite() {
            this.favorite = !this.favorite;
            this.$emit('setMyFavorite', this.favorite);
        },
        login() {
            FB.login( (response) => {
                this.getProfile()
            }, {
                scope: 'email, public_profile',
                return_scopes: true
            })
        },
        getProfile() {
            FB.api('/me?fields=name,id,email', (response)=> {
                this.profile = response;
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.icon-hamburger {
    color: white;
    font-size: 24px;
    margin-left: 8px;
    margin-right: 14px;
    cursor: pointer;
}

.icon-user {
    color: #7828B4;
    font-size: 100px;
    margin: 0 auto;
    cursor: pointer;
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
.myIcon{
    height:100px;
    width:100px;
    margin:0 auto;
    border-radius: 50%;
}

.mask-hidden {
    display: none;
}

.categori {
    padding-top: 16px;
    text-align: left;
    display: flex;
    flex-direction: column;

    h2 {
        padding-left: 28px;
        font-size: 20px;
    }

    h3 {
        color: #7828B4;
        text-align: center;
        padding: 0;
        margin: 0;
        padding-top:8px;
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
    .icon-hamburger {
        color: white;
        font-size: 24px;
        cursor: pointer;
    }
}
</style>
