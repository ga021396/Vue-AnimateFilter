<template>
  <div class="container">
    <item v-if="hiddenItem" @showItem="showItem" :animationData="animationData"></item>
    <div class="box">
      <div class="title">
        <div class="back" @click="setGallery">
          <font-awesome-icon icon="arrow-left"/>
          <span class="tag">FILTER</span>
        </div>
        <span class="txt">WINTER SELECTIONS</span>
      </div>
      <div class="container1">
        <h1>{{this.animation[0].title}}</h1>
        <img src="../assets/img/kaguya.jpg" class="img" @click="showItem(true,0)">
        <div class="border"></div>
        <h2>01</h2>
        <div class="patt"></div>
        <p class="outfit">{{this.animation[0].summary}}</p>
      </div>
      <div class="container2">
        <div class="border"></div>
        <img src="../assets/img/tateno.png" class="img" @click="showItem(true,2)">
        <div class="backpatt"></div>
        <h2 class="t03">03</h2>
        <h2 class="patt">{{this.animation[2].summary}}</h2>
        <h2 class="super">{{this.animation[2].title}}</h2>
      </div>
      <div class="container3">
        <h1>{{this.animation[4].title}}</h1>
        <img src="../assets/img/kake.jpg" class="img" @click="showItem(true,4)">
        <div class="border"></div>
        <h2>05</h2>
        <div class="patt"></div>
        <p class="jacket">{{this.animation[4].summary}}</p>
      </div>
      <div class="container4">
        <div class="border"></div>
        <img src="../assets/img/dororo.jpg" class="img" @click="showItem(true,6)">
        <div class="backpatt"></div>
        <h2 class="t07">07</h2>
        <h2 class="shirt">{{this.animation[6].summary}}</h2>
        <h2 class="edi">{{this.animation[6].title}}</h2>
      </div>
      <div class="container5">
        <div class="border"></div>
        <img src="../assets/img/gotoubun.jpg" class="img" @click="showItem(true,1)">
        <div class="backpatt"></div>
        <h2 class="t02">02</h2>
        <h2 class="basic">{{this.animation[1].summary}}</h2>
        <h2 class="free">{{this.animation[1].title}}</h2>
      </div>
      <div class="container6">
        <h1>{{this.animation[3].title}}</h1>
        <img src="../assets/img/yakusou.jpg" class="img" @click="showItem(true,3)">
        <div class="border"></div>
        <h2>04</h2>
        <div class="patt"></div>
        <p class="cadual">{{this.animation[3].summary}}</p>
      </div>
      <div class="container7">
        <div class="border"></div>
        <img src="../assets/img/mobu.jpg" class="img" @click="showItem(true,5)">
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
      animationData: "",
      hiddenItem: false,
      animation: [
        {
          title: "かぐや様は告らせたい",
          summary: "ラブコメ",
          link: "https://www.youtube.com/embed/IRBB7wU0wm0",
          maker: "A-1 Pictures",
          director: "畠山守",
          player: "毎日放送、TOKYO MXほか",
          story:
            "家柄も人柄も良し!!将来を期待された秀才が集う秀知院学園!!その生徒会で出会った、副会長・四宮かぐやと会長・白銀御行は互いに惹かれているはずだが…何もないまま半年が経過!!プライドが高く素直になれない2人は、面倒臭いことに、”如何に相手に告白させるか”ばかりを考えるようになってしまった!？恋愛は成就するまでが楽しい!!新感覚”頭脳戦”ラブコメ、開戦!!"
        },
        {
          title: "五等分の花嫁",
          summary: "ラブコメ",
          link: "https://www.youtube.com/embed/pCwfEB6PbFk",
          maker: "手塚プロダクション",
          director: "桑原智",
          player: "TBSほか",
          story:
            "貧乏な生活を送る高校２年生・上杉風太郎のもとに、好条件の家庭教師アルバイトの話が舞い込む。 ところが教え子はなんと同級生！！ しかも五つ子だった！！ 個性豊かな中野家の五つ子は全員美少女、 だけど「落第寸前」「勉強嫌い」の問題児！ 最初の課題は彼女たちからの信頼を勝ち取ること･･･！？ 毎日がお祭り騒ぎ！ 中野家の五つ子が贈る、かわいさ５００％の五人五色ラブコメ開演！！"
        },
        {
          title: "盾の勇者の成り上がり",
          summary: "バトル",
          link: "https://www.youtube.com/embed/uipcsm9IKoQ",
          maker: "キネマシトラス",
          director: "阿保孝雄",
          player: "	AT-X・TOKYO MXほか",
          story:
            "ごく平凡なオタク大学生・岩谷尚文は、図書館で出会った1冊の本に導かれ異世界へと召喚されてしまう。与えられた使命は、剣、槍、弓、盾をまとう四聖勇者の一人「盾の勇者」として、世界に混沌をもたらす災い「波」を振り払うこと。大冒険に胸を膨らませ、仲間とともに旅立った尚文。ところが、出発から数日目にして裏切りに遭い、金も立場もすべて失ってしまう。他人を信じられなくなった尚文は奴隷の少女・ラフタリアを使役し、波に、世界に、立ち向かおうとするが―。果たして、この絶望的状況を打破することはできるのか"
        },
        {
          title: "約束のネバーランド",
          summary: "サスペンス",
          link: "https://www.youtube.com/embed/0FcVh79iQws",
          maker: "CloverWorks",
          director: "神戸守",
          player: "フジテレビほか",
          story:
            "グレイス＝フィールドハウスは親の居ない子供たちが住むところ。血の繋がりはなくても、ママと38人の兄弟はささやかながら幸せな日々を送っている。11歳のエマ・ノーマン・レイはハウスの年長者であり、毎朝のテストでそろって満点をとる優秀さをほこる。ある夜、里親のもとへ旅立つコニーを見送った子供たちだが、忘れ物に気付いたエマとノーマンは近づくことが禁じられている門へ向かう。そこで2人は衝撃の真実を目撃する―――"
        },
        {
          title: "賭ケグルイ××",
          summary: "サスペンス",
          link: "https://www.youtube.com/embed/8fCIcho7N4k",
          maker: "MAPPA",
          director: "松田清",
          player: "毎日放送・TOKYO MXほか",
          story:
            "良家の子女が集う名門、私立百花王学園。 ギャンブルで支配されたこの学園の頂点に君臨するのは、 弱者の人生を支配し、政財界にすら影響力を持つ絶対的な支配者、生徒会だった。 しかし、生徒会長の桃喰綺羅莉は突然、生徒会の解散・総選挙を宣言する。 選挙のルールは一人一票。全生徒に学園の頂点を目指すチャンスが与えられる。 カオスと悦楽を求める綺羅莉の思惑による選挙戦。 さらに、その機に乗じ、新たな脅威が訪れる。 百喰一族――綺羅莉と夢子に連なる者たちが。 蛇喰夢子と友情を深めてきた鈴井涼太、早乙女芽亜里、皇 伊月の４名は、 この仕組まれた総選挙の中、自らの信念をかけた闘いを迫られる。 弱肉強食の学園で「餌」となるか、他を喰らい生態系の「長」となるか。 ギリギリの選択が心を揺さぶる「究極の選挙バトルロイヤル」がいま始まる！"
        },
        {
          title: "モブサイコ100 Ⅱ",
          summary: "ファンタジー",
          link: "https://www.youtube.com/embed/Pr43Sayk37s",
          maker: "ボンズ",
          director: "立川譲",
          player: "TOKYO MXほか",
          story:
            "霊幻新隆が営む「霊とか相談所」にかかってきた、一本の電話。依頼主は畑に現れた不気味な黒い影の正体を突き止めてほしいというのだが……。一方、モブが通う塩中学校では、生徒会長を務める神室がいきなりの辞任。新たな生徒会長を決めるための、選挙が開かれることに。モブを「人の上に立つ人間」に成長させようと、クラスメイトの米里はモブを焚きつけ、生徒会長に立候補させるのだが…"
        },
        {
          title: "どろろ",
          summary: "バトル",
          link: "https://www.youtube.com/embed/Fuph-DDesSA",
          maker: "MAPPA、手塚プロダクション",
          director: "古橋一浩",
          player: "TOKYO MXほか",
          story:
            "時は戦国。醍醐の国の主である景光は、ある寺のお堂で十二体の鬼神像に領土の繁栄を願い出た。それと引き換えに生まれた景光の世継ぎは身体のあちこちが欠けており、忌み子としてそのまま川に流され、捨てられてしまう。時は流れ、鬼神は景光との約定を果たし、国には平安が訪れた。そんなある日〝どろろ〟という幼い盗賊は、ある男に出会う。それは、鬼か人か両腕に刀を仕込む全身作り物の男〝百鬼丸〟は、その見えない瞳で襲い来る化け物を見据えていた。"
        }
      ]
    };
  },
  mounted: function() {},
  methods: {
    showItem(val, which) {
      this.setAnimationData(which);
      this.hiddenItem = val;
    },
    setGallery() {
      this.$emit("setGallery", false);
    },
    setAnimationData(which) {
      this.animationData = this.animation[which];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$mainColor: #7828b4;
$title1: "かぐや様は告らせたい";
$title2: "五等分の花嫁";
$title3: "盾の勇者の成り上がり";
$title4: "約束のネバーランド";
$title5: "賭ケグルイ××";
$title6: "モブサイコ100Ⅱ";
$title7: "どろろ";
.container {
  height: 100vh;
}
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
  img {
    cursor: pointer;
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
    position: absolute;
    width: 100%;
    transform: translateY(200px);
  }
  h1 {
    z-index: 2;
    position: absolute;
    font-size: 36px;
    transform: translateY(150px);
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
    position: absolute;
    height: 230px;
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
    transform: translate(300px, 180px);
  }
  .t03 {
    font-size: 36px;
    transform: translate(480px, 290px);
  }
  .patt {
    font-size: 24px;
    font-style: italic;
    transform: translate(25px, 310px);
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
    z-index: 2;
    width: 240px;
    position: absolute;
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
    transform: translate(140px, 260px);
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
    position: absolute;
    height: 400px;
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
    transform: translate(310px, 400px);
  }
  .shirt {
    font-size: 24px;
    font-style: italic;
    transform: translate(0, 50px);
  }
  .edi {
    z-index: 2;
    font-size: 36px;
    transform: translate(265px, 95px) rotate(90deg);
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
    width: 240px;
    position: absolute;
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
    transform: translate(420px, 85px);
  }
  .basic {
    font-size: 24px;
    font-style: italic;
    transform: translate(120px, 150px);
  }
  .free {
    z-index: 2;
    font-size: 36px;
    transform: translate(240px, 400px);
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
    z-index: 2;
    height: 400px;
    position: absolute;
    transform: translate(220px, 100px);
  }
  h1 {
    z-index: 2;
    position: absolute;
    font-size: 36px;
    transform: translate(35px, 100px) rotate(-90deg);
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
    transform: translate(220px, 460px);
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
    transform: translate(370px, -10px) rotate(90deg);
  }
}
.container7 {
  grid-area: container7;
  div,
  h2 {
    position: absolute;
  }
  .img {
    height: 400px;
    transform: translate(40px, 100px);
    position: absolute;
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
    transform: translate(-20px, 230px);
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
