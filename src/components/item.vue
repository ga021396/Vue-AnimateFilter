<template>
  <div @click="showItem()">item</div>
</template>

<script>
export default {
  name: "item",
  props: [],
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    showItem() {
      this.$emit("showItem", false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
</style>
