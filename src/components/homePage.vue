<template>
  <div>
    <item v-if="hiddenItem" @showItem="showItem"></item>
    <div class="box" v-if="!hiddenItem">
      <div class="title">
        <div class="back" @click="setGallery">
          <font-awesome-icon icon="arrow-left"/>
          <span class="tag">FILTER</span>
        </div>
        <span class="txt">WINTER SELECTIONS</span>
      </div>
      <div class="container1">
        <h1>{{this.animation[0].title}}</h1>
        <div class="img" @click="showItem(true)"></div>
        <div class="border"></div>
        <h2>01</h2>
        <div class="patt"></div>
        <p class="outfit">{{this.animation[0].summary}}</p>
      </div>
      <div class="container2">
        <div class="border"></div>
        <div class="img"></div>
        <div class="backpatt"></div>
        <h2 class="t03">03</h2>
        <h2 class="patt">{{this.animation[2].summary}}</h2>
        <h2 class="super">{{this.animation[2].title}}</h2>
      </div>
      <div class="container3">
        <h1>{{this.animation[4].title}}</h1>
        <div class="img"></div>
        <div class="border"></div>
        <h2>05</h2>
        <div class="patt"></div>
        <p class="jacket">{{this.animation[4].summary}}</p>
      </div>
      <div class="container4">
        <div class="border"></div>
        <div class="img"></div>
        <div class="backpatt"></div>
        <h2 class="t07">07</h2>
        <h2 class="shirt">{{this.animation[6].summary}}</h2>
        <h2 class="edi">{{this.animation[6].title}}</h2>
      </div>
      <div class="container5">
        <div class="border"></div>
        <div class="img"></div>
        <div class="backpatt"></div>
        <h2 class="t02">02</h2>
        <h2 class="basic">{{this.animation[1].summary}}</h2>
        <h2 class="free">{{this.animation[1].title}}</h2>
      </div>
      <div class="container6">
        <h1>{{this.animation[3].title}}</h1>
        <div class="img"></div>
        <div class="border"></div>
        <h2>04</h2>
        <div class="patt"></div>
        <p class="cadual">{{this.animation[3].summary}}</p>
      </div>
      <div class="container7">
        <div class="border"></div>
        <div class="img"></div>
        <div class="backpatt"></div>
        <h2 class="t06">06</h2>
        <h2 class="classic">{{this.animation[5].summary}}</h2>
        <h2 class="vin">{{this.animation[5].title}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import item from "./item.vue";

export default {
  name: "homePage",
  components: { item },
  props: [],
  data() {
    return {
      hiddenItem: false,
      animation: [
        {
          title: "かぐや様は告らせたい",
          summary: "ラブコメ"
        },
        {
          title: "五等分の花嫁",
          summary: "ラブコメ"
        },
        {
          title: "約束のネバーランド",
          summary: "サスペンス"
        },
        {
          title: "盾の勇者の成り上がり",
          summary: "バトル"
        },
        {
          title: "賭ケグルイ××",
          summary: "サスペンス"
        },
        {
          title: "モブサイコ100 Ⅱ",
          summary: "ファンタジー"
        },
        {
          title: "どろろ",
          summary: "バトル"
        }
      ]
    };
  },
  mounted: function() {
    console.log(this.hiddenItem);
  },
  methods: {
    showItem(val) {
      this.hiddenItem = val;
    },
    setGallery() {
      this.$emit("setGallery", false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$img1: url(https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1acdd78f34ee75aade9e313251bb1695&auto=format&fit=crop&w=1868&q=80);
$img2: url(https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&s=50945fdb784e64361154c62785542531&auto=format&fit=crop&w=1868&q=80);
$img3: url(https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=1050&q=80);
$img4: url(https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-0.3.5&s=593101f82127d40025c1d27fa186ccc7&auto=format&fit=crop&w=687&q=80);
$img5: url(https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=1050&q=80);
$img7: url(https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=634&q=80);
$img6: url(https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=634&q=80);
$mainColor: #7828b4;
$title1: "かぐや様は告らせたい";
$title2: "五等分の花嫁";
$title3: "約束のネバーランド";
$title4: "盾の勇者の成り上がり";
$title5: "賭ケグルイ××";
$title6: "モブサイコ100Ⅱ";
$title7: "どろろ";

body,
html,
h1 {
  padding: 0;
  margin: 0;
  background-color: none;
  font-weight: 600;
  font-family: "Finger Paint";
}
.box {
  text-align: left;
  color: black;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 960px;
  height: 2000px;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: auto;
  grid-template-areas:
    "title title"
    "container1 container5"
    "container1 container5"
    "container1 container5"
    "container1 container5"
    "container1 container5"
    "container1 container5"
    "container2 container6"
    "container2 container6"
    "container2 container6"
    "container2 container6"
    "container3 container6"
    "container3 container6"
    "container3 container7"
    "container3 container7"
    "container4 container7"
    "container4 container7"
    "container4 container7"
    "container4 container7"
    "container4 container7";
  div {
    position: relative;
    z-index: 0;
  }
}
.title {
  grid-area: title;
  .back {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .tag {
    font-size: 20px;
    position: absolute;
    width: auto;
    padding: 0 10px;
    text-align: center;
    color: white;
    background-color: black;
    left: 8%;
    transform: translate(-50%, 0);
  }
  .txt {
    width: 100%;
    text-align: center;
    position: absolute;
    font-size: 72px;
    font-weight: 700;
    transform: translate(0, 40%);
  }
}
.container1 {
  grid-area: container1;
  .img {
    height: 400px;
    width: 480px;
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-image: $img1;
    transform: translateY(100px);
  }
  h1 {
    z-index: 2;
    position: absolute;
    font-size: 36px;
    transform: translateY(80px);
  }
  h1::before {
    position: absolute;
    content: $title1;
    transform: translateY(-10px);
    color: rgba(0, 0, 0, 0.3);
  }
  .border {
    z-index: -1;
    position: absolute;
    border: 20px solid $mainColor;
    box-sizing: border-box;
    width: 240px;
    height: 200px;
    transform: translate(300px, 50px);
  }
  h2 {
    position: absolute;
    font-size: 36px;
    transform: translateY(460px);
  }
  .patt {
    position: absolute;
    width: 240px;
    height: 100px;
    transform: translate(60px, 460px);
    background-image: linear-gradient(
      to bottom right,
      $mainColor,
      lighten($mainColor, 30%)
    );
  }
  .outfit {
    font-weight: 700;
    position: absolute;
    font-size: 24px;
    font-style: italic;
    transform: translate(445px, 410px) rotate(90deg);
  }
}
.container2 {
  grid-area: container2;
  div,
  h2 {
    position: absolute;
  }
  .img {
    background-size: cover;
    background-position: center center;
    width: 480px;
    height: 200px;
    background-image: $img3;
    transform: translate(0, 100px);
  }
  .backpatt {
    z-index: -1;
    width: 240px;
    height: 200px;
    background-color: $mainColor;
    transform: translate(0, 50px);
  }
  .border {
    z-index: -1;
    width: 240px;
    height: 200px;
    border: 20px solid $mainColor;
    box-sizing: border-box;
    transform: translate(300px, 150px);
  }
  .t03 {
    font-size: 36px;
    transform: translate(480px, 260px);
  }
  .patt {
    font-size: 24px;
    font-style: italic;
    transform: translate(25px, 280px);
  }
  .super {
    z-index: 2;
    font-size: 36px;
    transform: translate(150px, 25px);
  }
  .super::before {
    position: absolute;
    content: $title3;
    transform: translateY(-10px);
    color: rgba(0, 0, 0, 0.3);
  }
}
.container3 {
  grid-area: container3;
  .img {
    height: 200px;
    width: 240px;
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-image: $img5;
    transform: translate(240px, 100px);
  }
  h1 {
    z-index: 2;
    position: absolute;
    font-size: 36px;
    transform: translate(0, 150px);
  }
  h1::before {
    position: absolute;
    content: $title5;
    transform: translateY(-10px);
    color: rgba(0, 0, 0, 0.3);
  }
  .border {
    z-index: -1;
    position: absolute;
    border: 20px solid $mainColor;
    box-sizing: border-box;
    width: 240px;
    height: 100px;
    transform: translate(120px, 250px);
  }
  h2 {
    position: absolute;
    font-size: 36px;
    transform: translate(120px, 260px);
  }
  .patt {
    position: absolute;
    width: 240px;
    height: 100px;
    transform: translate(60px, 50px);
    background-image: linear-gradient(
      to bottom right,
      $mainColor,
      lighten($mainColor, 30%)
    );
  }
  .jacket {
    font-weight: 700;
    position: absolute;
    font-size: 24px;
    font-style: italic;
    transform: translate(480px, 70px);
  }
}
.container4 {
  grid-area: container4;
  div,
  h2 {
    position: absolute;
  }
  .img {
    background-size: cover;
    background-position: center center;
    width: 240px;
    height: 400px;
    background-image: $img7;
    transform: translate(0, 100px);
  }
  .backpatt {
    z-index: -1;
    width: 120px;
    height: 200px;
    background-color: $mainColor;
    transform: translate(240px, 300px);
  }
  .border {
    z-index: -1;
    width: 240px;
    height: 300px;
    border: 20px solid $mainColor;
    box-sizing: border-box;
    transform: translate(50px, 50px);
  }
  .t07 {
    font-size: 36px;
    transform: translate(300px, 400px);
  }
  .shirt {
    font-size: 24px;
    font-style: italic;
    transform: translate(0, 50px);
  }
  .edi {
    z-index: 2;
    font-size: 36px;
    transform: translate(200px, 95px) rotate(90deg);
  }
  .edi::before {
    position: absolute;
    content: $title7;
    transform: translateY(-10px);
    color: rgba(0, 0, 0, 0.3);
  }
}
.container5 {
  grid-area: container5;
  div,
  h2 {
    position: absolute;
  }
  .img {
    background-size: cover;
    background-position: center center;
    width: 240px;
    height: 200px;
    background-image: $img2;
    transform: translate(120px, 200px);
  }
  .backpatt {
    z-index: -1;
    width: 240px;
    height: 200px;
    background-color: $mainColor;
    transform: translate(180px, 150px);
  }
  .border {
    z-index: -1;
    width: 240px;
    height: 200px;
    border: 20px solid $mainColor;
    box-sizing: border-box;
    transform: translate(240px, 100px);
  }
  .t02 {
    font-size: 36px;
    transform: translate(425px, 50px);
  }
  .basic {
    font-size: 24px;
    font-style: italic;
    transform: translate(120px, 150px);
  }
  .free {
    z-index: 2;
    font-size: 36px;
    transform: translate(240px, 370px);
  }
  .free::before {
    position: absolute;
    content: $title2;
    transform: translateY(-10px);
    color: rgba(0, 0, 0, 0.3);
  }
}
.container6 {
  grid-area: container6;
  .img {
    height: 400px;
    width: 240px;
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-image: $img4;
    transform: translate(240px, 100px);
  }
  h1 {
    z-index: 2;
    position: absolute;
    font-size: 36px;
    transform: translate(40px, 100px) rotate(-90deg);
  }
  h1::before {
    position: absolute;
    content: $title4;
    transform: translateY(-10px);
    color: rgba(0, 0, 0, 0.3);
  }
  .border {
    z-index: -1;
    position: absolute;
    border: 20px solid $mainColor;
    box-sizing: border-box;
    width: 240px;
    height: 200px;
    transform: translate(180px, 0);
  }
  h2 {
    position: absolute;
    font-size: 36px;
    transform: translate(180px, 400px);
  }
  .patt {
    position: absolute;
    width: 240px;
    height: 100px;
    transform: translate(240px, 460px);
    background-image: linear-gradient(
      to top left,
      $mainColor,
      lighten($mainColor, 30%)
    );
  }
  .cadual {
    font-weight: 700;
    position: absolute;
    font-size: 24px;
    font-style: italic;
    transform: translate(380px, 15px) rotate(90deg);
  }
}
.container7 {
  grid-area: container7;
  div,
  h2 {
    position: absolute;
  }
  .img {
    background-size: cover;
    background-position: center center;
    width: 480px;
    height: 400px;
    background-image: $img6;
    transform: translate(0, 100px);
  }
  .backpatt {
    z-index: -1;
    width: 240px;
    height: 200px;
    background-color: $mainColor;
    transform: translate(-50px, 300px);
  }
  .border {
    z-index: -1;
    width: 480px;
    height: 200px;
    border: 20px solid $mainColor;
    box-sizing: border-box;
    transform: translate(0, 350px);
  }
  .t06 {
    font-size: 36px;
    transform: translate(-55px, 210px);
  }
  .classic {
    font-size: 24px;
    font-style: italic;
    transform: translate(180px, 480px);
  }
  .vin {
    z-index: 2;
    font-size: 36px;
    transform: translate(200px, 25px);
  }
  .vin::before {
    position: absolute;
    content: $title6;
    transform: translateY(-10px);
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
