<template>
<div>
    <div class="card" v-for="(item,index) in showData()" :key="index">
        <iframe width="auto" height="100%" :src="item.PV" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="introduction">
            <div class="name">
                <span @click="openWebSite(item.web)">{{item.title}}</span>
                <font-awesome-icon v-if="userStatus" icon="star" class="icon-heart" :class="{'icon-active':getMyFavorite(item)}" @click="setMyFavorite(item)" />
            </div>
            <div class="story">{{checkStory(item.story)}}</div>
            <div class="TypeSection">
                <span class="Typetag" v-for="(type,index) in getType(item.type) " :key="index">{{getTypeName(type)}}</span>
            </div>
        </div>
    </div>
    <div class="pageBox">
        <div :class="{'active':currentPage===index+1}" class="page" v-for="(item,index) in this.pageSize" :key="index" @click="setCurrentPage(index)">{{index+1}}</div>
    </div>
</div>
</template>

<script>
import animeData from '../../data.js'
export default {
    name: 'card',
    props: ['filterType', 'searchContent', 'myFavorite', 'userStatus'],
    data() {
        return {
            MylocalStorage: [],
            pageSize: 0,
            currentPage: 1,
            userFireData: {favorites:[]},
        }
    },
    watch: {
        //reset current page when animeData have any change 
        filterType() {
            this.setCurrentPage(0)
        },
        searchContent() {
            this.setCurrentPage(0)
        },
        myFavorite() {
            this.setCurrentPage(0)
        },
        userStatus(value) {
            //when props get fb login , link to firebase by fbID 
            if(value.id){
            let myFirstPromise = new Promise((resolve, reject) => {
                const doc = $firestore.doc(`users/${value.id}`)
                doc.get().then((doc) => {
                    if(!doc.data().favorites)resolve(this.userFireData);
                    else{ this.userFireData = doc.data()}
                });
            });
            //If no any data in firebase set a empty [] for init
            myFirstPromise.then((data) => {
                if (!!data) {
                    this.setUserData([]);
                }
            });
            }else{
                this.userFireData={favorites:[]};
            }
        },
    },
    methods: {
        setUserData(value) {
            //save data to firebase
            if (this.userStatus.id) {
                const doc = $firestore.doc(`users/${this.userStatus.id}`)
                doc.set({
                    favorites: value
                });
            }
        },
        setCurrentPage(index) {
            this.currentPage = index + 1;
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        showData() {
            //this function render the animeData and count the pageSize
            const list = this.getData()
            this.pageSize = Math.ceil(list.length / 10)
            let showTenItem = [...list].slice(10 * (this.currentPage - 1), 10 * this.currentPage);
            if (showTenItem.length === 0) {
                showTenItem = [...list].slice(0, 10);
                this.currentPage = 1;
            }
            return showTenItem;
        },
        getData() {
            //this function return animeData which though filter (by type,favorite,search)
            let filterList = [...animeData[0]];
            if (this.myFavorite) {
                filterList = this.userFireData.favorites;
            }
            if (this.searchContent.trim() !== '') {
                filterList = filterList.filter(item => item.title.toLowerCase().indexOf(this.searchContent.toLowerCase()) > -1)
            }
            switch (this.filterType) {
                case 'comedy':
                    return filterList.filter(item => {
                        return item.type.comedy === true
                    });
                case 'mystery':
                    return filterList.filter(item => {
                        return item.type.mystery === true
                    });
                case 'school':
                    return filterList.filter(item => {
                        return item.type.school === true
                    });
                case 'sports':
                    return filterList.filter(item => {
                        return item.type.sports === true
                    });
                case 'romance':
                    return filterList.filter(item => {
                        return item.type.romance === true
                    });
                case 'adventure':
                    return filterList.filter(item => {
                        return item.type.adventure === true
                    });
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
        checkStory(story) {
            //this function give which dont have story 
            if (story.length === 0) return 'ストーリーはまだ見つかりません、少々お待ちください。ストーリーはまだ見つかりません、少々お待ちください。';
            else return story;
        },
        setMyFavorite(anime) {
            //this function save/remove your favorite anime to firebase 
            const isMyfire = this.userFireData.favorites.findIndex(item => item.title === anime.title);
            if (isMyfire !== -1) {
                this.userFireData.favorites.splice(isMyfire, 1)
            } else {
                this.userFireData.favorites.push(anime)
            }
            this.setUserData(this.userFireData.favorites);
        },
        getMyFavorite(anime) {
            //this function return your favorite anime
            if (this.userFireData.favorites) {
                const isMyfire = this.userFireData.favorites.findIndex(item => item.title === anime.title);
                if (isMyfire !== -1) {
                    return true
                } else {
                    return false;
                }
            }
        },
        openWebSite(url) {
            window.open(url);
        },
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
                    return "全部"
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.card {
    margin: 25px 0;
    width: 100%;
    display: flex;
    height: 220px;
    font-family: "Kokoro";
    position: relative;
}

.icon-heart {
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
    width: 480px;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 20px;
    background-color: white;
}

.introduction .name {
    max-width: 440px;
    height: 36px;
    color: #9013FE;
    margin: 10px 0;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    transition: 3ms all ease-in-out;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;

        &:hover {
            transition: .3s all ease-in-out;
            color: lighten(#9013FE, 15%);
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

    .Typetag {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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

.page {
    border-radius: 5px;
    font-size: 16px;
    padding: 4px;
    text-align: center;
    height: 24px;
    width: 24px;
    color: #9013FE;
    border: 1px solid #9013FE;
    line-height: 24px;
    margin: 0 10px;
    transition: 3ms all ease-in-out;

    &:hover {
        transition: 3ms all ease-in-out;
        color: white;
        background: #9013FE;
    }
}

.active {
    color: white;
    background: #9013FE;
}

.pageBox {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
}

@media only screen and (max-width: 780px) {
    .card {
        height: 440px;
        flex-direction: column;

        .introduction {
            width: auto;
            height: 66px;

            .story {
                display: none;
            }

            .TypeSection {
                display: none;
            }

            .icon-heart {
                float: right;
                font-size: 32px;
                margin-right: 0
            }

            .name {
                width: 100%;
                max-width: 100%;
                line-height: 28px;
            }
        }
    }
}

@media only screen and (max-width: 440px) {
    .card {
        height: 280px;
        flex-direction: column;

        .introduction {
            width: auto;
            height: 60px;

            .icon-heart {
                font-size: 26px
            }

            .name {
                font-size: 20px;
                line-height: 20px;
            }
        }
    }
}
</style>
