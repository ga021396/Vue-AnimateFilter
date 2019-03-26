<template>
  <div>
    <div :class="{'mask-hidden':this.mask}" class="mask" @click="setMask()"></div>
    <div :class="{'mask-animation':!this.mask}" class="sidebar">
      <div class="sidebar-title">
        <font-awesome-icon icon="bars" class="sidebar-icon" @click="setMask()"/>
        <span>animeFilter</span>
      </div>
      <div class="categori">
        <span v-if="profile.id" class="setting">
          <font-awesome-icon
            icon="star"
            class="icon"
            :class="{'icon-active':favorite}"
            @click="setMyFavorite()"
          />
          <font-awesome-icon icon="sign-out-alt" class="icon" @click="logout"/>
        </span>
        <font-awesome-icon v-if="!profile.id" icon="user-circle" class="icon-user" @click="login"/>
        <img v-show="profile.name" :src="profilePicture" alt="profile" class="myIcon">
        <h3>{{profile.name}}</h3>
        <h2>カテゴリー</h2>
        <div
          v-for="(item,index) in options"
          :key="index"
          :class="{'active':getActiveType(item.value)}"
          @click="setValue(item.value)"
        >
          <span>{{item.label}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: ["mask"],
  data() {
    return {
      options: [
        {
          value: "All",
          label: "全部"
        },
        {
          value: "comedy",
          label: "コメディ"
        },
        {
          value: "sports",
          label: "スポーツ/競技"
        },
        {
          value: "romance",
          label: "恋愛/ラブコメ"
        },
        {
          value: "adventure",
          label: "SF/ファンタジー/バトル"
        },
        {
          value: "school",
          label: "青春/ドラマ"
        },
        {
          value: "mystery",
          label: "推理/サスペンス"
        }
      ],
      value: "All",
      favorite: false,
      profile: {}
    };
  },
  computed: {
    profilePicture() {
      return this.profile.id
        ? `https://graph.facebook.com/${this.profile.id}/picture?width=300`
        : `/static/man.gif`;
    }
  },
  methods: {
    setMask() {
      this.$emit("setMask", true);
    },
    setUserStatus(val) {
      this.$emit("setUserStatus", val);
    },
    getActiveType(value) {
      if (value === this.value) return true;
      else return false;
    },
    setValue(value) {
      this.value = value;
      this.$emit("setMask", true);
      this.$emit("setValue", value);
    },
    setMyFavorite() {
      this.favorite = !this.favorite;
      this.$emit("setMyFavorite", this.favorite);
    },
    login() {
      FB.login(
        response => {
          this.statusChangeCallback(response);
        },
        {
          scope: "email, public_profile",
          return_scopes: true
        }
      );
    },
    logout() {
      FB.logout(response => {
        this.profile = {};
        this.statusChangeCallback(response);
      });
    },
    statusChangeCallback(response) {
      let vm = this;
      if (response.status === "connected") {
        vm.getProfile();
      } else if (response.status === "not_authorized") {
        this.setUserStatus({});
      } else if (response.status === "unknown") {
        vm.profile = {};
        this.setUserStatus({});
      } else {
        this.setUserStatus({});
      }
    },
    getProfile() {
      FB.api("/me?fields=name,id,email", response => {
        this.profile = response;
        this.setUserStatus(this.profile);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$mainColor: #7828b4;
.icon-hamburger {
  color: white;
  font-size: 24px;
  margin-left: 8px;
  margin-right: 14px;
  cursor: pointer;
}

.icon-user {
  color: $mainColor;
  font-size: 100px;
  margin: 0 auto;
  cursor: pointer;
}

.mask {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 12;
  background: rgba(0, 0, 0, 0.5);
}

.sidebar {
  transition: all 0.3s ease;
  transform: translateX(-240px);
  width: 240px;
  height: 100vh;
  position: absolute;
  left: 0;
  background: #f2f2f2;
  z-index: 13;

  .sidebar-title {
    color: $mainColor;
    box-sizing: border-box;
    padding: 20px 20px;
    width: 100%;
    height: 70px;
    font-size: 24px;
    border-bottom: 1px solid darken(#f2f2f2, 10%);
    font-weight: 600;
    font-family: "M PLUS Rounded 1c";
    text-align: left;

    span {
      font-family: "Finger Paint";
    }

    .sidebar-icon {
      cursor: pointer;
      padding-right: 14px;
      padding-left: 8px;
    }
  }
}
.myIcon {
  height: 100px;
  width: 100px;
  margin: 0 auto;
  border-radius: 50%;
}

.mask-hidden {
  display: none;
}

.categori {
  padding-top: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  .setting {
    padding: 0;
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .icon {
      font-size: 20px;
      color: lighten(#2c3e50, 55%);
      transition: all 0.3s ease-in-out;
      &:hover {
        color: $mainColor;
      }
    }
  }

  h2 {
    padding-left: 28px;
    font-size: 20px;
  }

  h3 {
    font-family: "Noto Sans TC", sans-serif;
    color: $mainColor;
    text-align: center;
    padding: 0;
    margin: 0;
    padding-top: 8px;
  }

  div {
    cursor: pointer;
    padding-left: 36px;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    font-weight: 600;
    font-family: "M PLUS Rounded 1c";
    transition: all 0.3s ease-in-out;

    &:hover {
      color: white;
      background: $mainColor;
    }
  }

  .icon-favorite {
    padding-left: 36px;
    font-size: 40px;
    color: lighten(#2c3e50, 55%);
    transition: all 0.3s ease-in-out;
  }
}

.active {
  color: white;
  background: $mainColor;

  &:hover {
    color: white;
    background: $mainColor;
  }
}

.icon-active {
  color: #9013fe !important;
}

.mask-animation {
  position: fixed;
  transform: translateX(0) !important;
}

@media only screen and (max-width: 780px) {
  .icon-hamburger {
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
