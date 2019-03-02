<template>
<div>
    <div class="card" v-for="(item,index) in getData(filterType)" :key="index">
        <iframe width="auto" height="auto" :src="item.PV" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="introduction">
            <h2 class="name">{{item.title}}</h2>
            <div class="purpose">{{limitStory(item.story)}}</div>
            <div class="result" @click="console.log(filterType)">
                <span class="cardResult" v-for="(type,index) in getType(item.type) " :key="index">{{type}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import animeData from '../../data.js'
export default {
    name: 'card',
    props: ['filterType'],
    data() {
        return {
            list: []
        }
    },
    mounted: function () {
        this.getType(animeData[0][0].type)
    },
    created: function () {},
    computed: {
    },
    methods: {
        getData(type) {
            let filterList = [...animeData[0]].splice(0,3);
            switch(type)
            {
            case 'comedy':
                return filterList.filter(item=>{
                    return item.type.comedy === true
                  }); 
            break;
            case 'mystery':
                return filterList.filter(item=>{
                    return item.type.mystery === true
                  }); 
            break;
            case 'school':
                return filterList.filter(item=>{
                    return item.type.school === true
                  }); 
            break;
            case 'adventure':
                return filterList.filter(item=>{
                    return item.type.adventure === true
                  }); 
            break;
            default: 
                return filterList;
            }
        },
        getType(item) {
            if (item) {
                let keys = Object.keys(item);

                let filtered = keys.filter(function (key) {
                    return item[key]
                });
                return filtered;
            } else return
        },
        limitStory(story) {
            if (story) {
                let trimmedString = story.substring(0, 100);
                return trimmedString + '...'
            } else return;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.card {
    margin: 25px 0;
    width: 100%;
    display: flex;
    height: 220px;
}

.card img {
    width: 220px;
    height: 100%;
}

.card .introduction {
    text-align: left;
    padding-left: 20px;
    width: 100%;
    background-color: white;
}

.introduction h2 {
    color: #9013FE;
}

.aut {
    font-weight: 600;
    margin-right: 10px;
}

.cardResult {
    color: white;
    padding: 2px 15px;
    border-radius: 15px;
    font-style: italic;
}

.purpose {
    height: 100px;
    width: 460px;
    overflow: hidden;
}

.result {
    display: flex;
}

.result span {
    border: 1px solid #9013FE;
    ;
    padding: 5px 10px;
    border-radius: 15px;
    color: #9013FE;
    margin-right: 8px;
}

.result i {
    padding-left: 5px;
    color: #9013FE;
}
</style>
