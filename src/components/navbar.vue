<template>
  <div id="navbar">
    <font-awesome-icon icon="bars" class="icon-hamburger" @click="setMask()"/>
    <h1 id="navbarTitle">animeFilter</h1>
    <font-awesome-icon icon="search" class="icon-search"/>
    <input type="text" v-model="handleSearch" placeholder="Find your favorite anime!">
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: ["search"],
  data() {
    return {};
  },
  computed: {
    handleSearch: {
      get() {
        return this.search;
      },
      set(val) {
        this.$emit("setSearch", val);
      }
    }
  },
  methods: {
    setMask() {
      this.$emit("setMask", false);
    },
    setSearch() {
      this.$emit("setSearch", this.search);
    },
    setGallery() {
      this.$emit("setGallery", true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#navbarTitle {
  font-weight: 600;
  font-family: "Finger Paint";
}

#navbar {
  position: relative;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  height: 70px;
  background-color: #7828b4;
  display: flex;
  align-items: center;

  h1 {
    color: white;
  }

  input {
    max-width: 365px;
    width: 100%;
    height: 37px;
    padding-left: 10px;
    background-color: #7828b4;
    color: white;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
}

.account {
  height: 100px;
  width: 100px;
  position: absolute;
  right: 16px;
  top: 100px;
}

/* tag */
.icon-hamburger {
  color: white;
  font-size: 24px;
  margin-left: 8px;
  margin-right: 14px;
  cursor: pointer;
}
.icon-home {
  color: white;
  font-size: 24px;
  position: absolute;
  right: 28px;
  cursor: pointer;
}
.icon-user {
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 28px;
  top: 23px;
}

.icon-search {
  margin-left: 6%;
  margin-right: 14px;
  color: white;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(255, 255, 255, 0.5);
}

@media only screen and (max-width: 780px) {
  .icon-home {
    display: none;
  }
  #navbarTitle {
    display: none;
  }

  .icon-hamburger {
    color: white;
    font-size: 24px;
    cursor: pointer;
  }

  .icon-search {
    margin-left: 28px;
    margin-right: 14px;
    color: white;
  }

  #navbar input {
    width: 60%;
    max-width: 300px;
  }
}

@media only screen and (max-width: 440px) {
  #navbar input {
    max-width: 220px;
  }

  .icon-search {
    margin-left: 14px;
  }
}
</style>
