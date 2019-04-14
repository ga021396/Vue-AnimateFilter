<template>
  <div class="mask" @click.stop="showItem()">
    <div class="container" @click.stop="myConsole">
      <div class="section">
        <iframe
          width="auto"
          height="100%"
          src="https://www.youtube.com/embed/7FtgXtNPQGY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="introduction">
          <h2>mytitle</h2>
          <p>
            <span>caterogu:</span>
            <span>myCaterogu</span>
          </p>
        </div>
      </div>
      <div class="story"></div>
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
  position: absolute;
  height: 80vh;
  width: 80vw;
  background: white;
  padding: 20px;
  box-sizing: border-box;
}
.section {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  .introduction {
    background: burlywood;
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
      }
    }
  }
}
</style>
