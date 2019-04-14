<template>
  <div class="mask" @click.stop="showItem()">
    <div class="container" @click.stop="myConsole">
      <div class="section">
        <iframe
          width="auto"
          height="100%"
          :src="animationData.link"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="introduction">
          <h2>{{animationData.title}}</h2>

          <p>
            <span>監督 :</span>
            <span>{{animationData.director}}</span>
          </p>
          <p>
            <span>放送局 :</span>
            <span>{{animationData.player}}</span>
          </p>
          <p>
            <span>カテゴリー :</span>
            <span>{{animationData.summary}}</span>
          </p>
          <p>
            <span>アニメーション制作 :</span>
            <span>{{animationData.maker}}</span>
          </p>
        </div>
      </div>
      <div class="story">
        <h2>ストーリー</h2>
        <p>{{animationData.story}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["animationData"],
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    showItem() {
      this.$emit("showItem", false);
    },
    myConsole() {
      console.log(this.animationData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.mask {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 12;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 800px;
  position: absolute;
  height: 90vh;
  width: 90vw;
  background: darken(white, 5%);
  padding: 20px;
  box-sizing: border-box;
  font-family: "Kokoro";
  display: inline;
}
.section {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  .introduction {
    flex-grow: 1;
    width: auto;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;
    h2 {
      margin: 0;
      padding: 0;
    }
    p {
      span {
        margin-right: 8px;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
}
.story {
  width: 100%;
  height: 50%;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
  h2 {
    margin: 0;
    padding: 0;
    padding-bottom: 8px;
  }
  p {
    margin: 0;
    span {
      margin-right: 8px;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
