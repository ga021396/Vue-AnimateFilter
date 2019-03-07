<template>
<div>
    <div class="card" v-for="(item,index) in getData(filterType,searchContent)" :key="index">
        <iframe width="auto" height="100%" :src="item.PV" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="introduction">
            <div class="name">
                <span @click="openWebSite(item.web)">{{item.title}}</span>
                <font-awesome-icon icon="heart" class="icon" :class="{'icon-active':getMyFavorite(item)}" @click="setMyFavorite(item)" />
            </div>
            <div class="story">{{fakeStory(item.story)}}</div>
            <div class="TypeSection">
                <span class="Typetag" v-for="(type,index) in getType(item.type) " :key="index">{{getTypeName(type)}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import animeData from '../../data.js'
export default {
    name: 'card',
    props: ['filterType', 'searchContent', 'myFavorite'],
    data() {
        return {
            MylocalStorage: [],
        }
    },
    mounted: function () {},
    created: function () {
        localStorage.clear()
    },
    computed: {
        getLocalStorage() {
            //this function get localstorage
            this.MylocalStorage = (localStorage.getItem('content')) ? JSON.parse(localStorage.getItem('content')) : {
                content: []
            };
            return this.MylocalStorage;
        }
    },
    methods: {
        getData(type, searchContent) {
            //this function render card and filter anime data when search and choose anime type
            let filterList = [...animeData[0]];
            if (this.myFavorite) {
                filterList = this.getLocalStorage.content;
            }
            if (searchContent.trim() !== '') {
                filterList = filterList.filter(item => item.title.toLowerCase().indexOf(searchContent.toLowerCase()) > -1)
            }
            switch (type) {
                case 'comedy':
                    return filterList.filter(item => {
                        return item.type.comedy === true
                    });
                    break;
                case 'mystery':
                    return filterList.filter(item => {
                        return item.type.mystery === true
                    });
                    break;
                case 'school':
                    return filterList.filter(item => {
                        return item.type.school === true
                    });
                    break;
                case 'sports':
                    return filterList.filter(item => {
                        return item.type.sports === true
                    });
                    break;
                case 'romance':
                    return filterList.filter(item => {
                        return item.type.romance === true
                    });
                    break;
                case 'adventure':
                    return filterList.filter(item => {
                        return item.type.adventure === true
                    });
                    break;
                default:
                    return filterList;
            }
        },
        getType(item) {
            //this function return anime's type
            //item is a object have a lot type ex:{romace:true,adventure,false}
            if (item) {
                let keys = Object.keys(item);

                let filtered = keys.filter(function (key) {
                    return item[key]
                });
                return filtered;
            } else return
        },
        fakeStory(story) {
            //this function give which dont have story 
            if (story.length === 0) return　'ストーリーはまだ見つかりません、少々お待ちください。ストーリーはまだ見つかりません、少々お待ちください。';
            else return story;
        },
        setMyFavorite(anime) {
            //this function save/remove your favorite anime to localstorage 
            const isMyName = this.getLocalStorage.content.findIndex(item => item.title === anime.title);
            if (isMyName !== -1) {
                this.getLocalStorage.content.splice(isMyName, 1)
            } else {
                this.getLocalStorage.content.push(anime)
            }
            localStorage.setItem('content', JSON.stringify(this.getLocalStorage));
        },
        getMyFavorite(anime) {
            //this function return your favorite anime
            const isMyName = this.getLocalStorage.content.findIndex(item => item.title === anime.title);
            if (isMyName !== -1) {
                return true
            } else {
                return false;
            }
        },
        openWebSite(url){
            window.open(url);
        },
        getTypeName(value){
             switch (value) {
                case 'comedy':
                    return　"コメディ"
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
                    return'SF/ファンタジー/バトル'
                    break;
                default:
                    return "全部";
        }}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang='scss'>
.card {
    margin: 25px 0;
    width: 100%;
    display: flex;
    height: 220px;
    font-family: "Kokoro";
    position: relative;
}

.icon {
    color: #dddddd;
    float: right;
    font-size: 36px;
    z-index: 5;
    margin-right: 20px;
    transition: .3s all ease-in-out;
}

.icon-active {
    color: #9013FE;
}

.card .introduction {
    width:480px;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding:0 20px;
    background-color: white;
}

.introduction .name {
    max-width: 440px;
    height:36px;
    color: #9013FE;
    margin: 10px 0;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    transition: 3ms all ease-in-out;
    span{
        overflow : hidden;
        text-overflow : ellipsis;
        white-space : nowrap;
         cursor: pointer;
        &:hover{
            transition: .3s all ease-in-out;
            color: lighten( #9013FE,15%);
        }
    }
}
.story {
    max-width: 440px;
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.TypeSection {
    max-width: 440px;
    display: flex;
    margin-top: 20px;
    .Typetag{
      overflow : hidden;
        text-overflow : ellipsis;
        white-space : nowrap;
    }
}

.TypeSection span {
    padding: 0 15px;
    border-radius: 15px;
    font-size: 16px;
    line-height: 16px;
    font-style: italic;
    border: 1px solid #9013FE;
    border-radius: 15px;
    color: #9013FE;
    margin-right: 8px;
    padding-bottom: 7px;
}
@media only screen and (max-width: 780px) {
.card {
  height:440px;
  flex-direction: column;
  .introduction{
   width:auto;
   height:66px;
       .story{display: none;}
       .TypeSection{display: none;}
       .icon{float: right;font-size: 32px; margin-right: 0}
       .name{width:100%;max-width:100%;line-height: 28px;}
    }
 }
}
@media only screen and (max-width: 440px) {
.card {
  height:280px;
  flex-direction: column;
  .introduction{
   width:auto;
   height:60px;
   .icon{font-size: 26px}
   .name{font-size: 20px;line-height: 20px;}
    }
 }
}
</style>
