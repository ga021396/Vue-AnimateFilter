<template>
  <div class="open">
    <span>A</span>
    <span>n</span>
    <span>i</span>
    <span>m</span>
    <span>e</span>
    <span>&nbsp;</span>
    <span>F</span>
    <span>i</span>
    <span>l</span>
    <span>t</span>
    <span>e</span>
    <span>r</span>
  </div>
</template>

<script>
export default {
  name: "open",
  props: [],
  data() {
    return {};
  },
  mounted: function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 6000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Finger+Paint);

.open {
  pointer-events: none;
  z-index: 13;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #7828b4;
  overflow: hidden;
  font: 5vw/100vh "Finger Paint";
  text-align: center;
  color: transparent;
  backface-visibility: hidden;
  animation-name: hidden;
  animation-duration: 1s;
  animation-delay: 6s;
  animation-fill-mode: forwards;

  span {
    display: inline-block;
    text-shadow: 0 0 0 whitesmoke;
    animation: smoky 4s 1s both;
  }

  span:nth-child(even) {
    animation-name: smoky-mirror;
  }
}

@keyframes hidden {
  0% {
    opacity: 1;
  }

  99% {
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
  }
}

@keyframes smoky {
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }

  to {
    transform: translate3d(15rem, -8rem, 0) rotate(-40deg) skewX(70deg)
      scale(1.5);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@keyframes smoky-mirror {
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }

  to {
    transform: translate3d(18rem, -8rem, 0) rotate(-40deg) skewX(-70deg)
      scale(2);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@for $item from 1 through 12 {
  span:nth-of-type(#{$item}) {
    animation-delay: #{(3 + ($item/10))}s;
  }
}
</style>
