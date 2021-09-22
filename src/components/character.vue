<template>
  <div class="outer" ref="ai" :class="position" v-if="objData.obj">
    <div
      class="role"
      :style="{ backgroundImage: 'url(' + objData.obj.img + ')' }"
    >
      <div>
        <!-- <img :src="objData.img" alt=""> -->
      </div>
      <div class="equipment">
        <div>
          <div>装备</div>
          <div>装备</div>
          <div>装备</div>
          <div>装备</div>
        </div>
        <div>{{ objData.obj.blood }}血</div>
      </div>
    </div>
    <div class="country">
      <span :style="{ color: countryColor }">{{ objData.obj.country }}</span>
      <span>{{ objData.obj.name }}</span>
    </div>
    <div>{{objData.cards.length}}</div>
  </div>
</template>

<script>
export default {
  props: {
    // 武将数据
    objData: Object,
    // 人数布局
    total: Object,
  },
  data() {
    return {
      img: "../img/character/re_caocao.jpg",
      // 布局类
      position: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
      }
    };
  },
  mounted() {
    this.positionSort();
  },
  watch: {
    // objData: {
    //   deep: true,
    //   immediate: true,
    //   handler: function () {
    //     this.$nextTick(()=>{
    //       // 当传来玩家数据时,给玩家赋予自身dom元素,方便添加click事件
    //       this.objData.component=this.$refs.ai
    //       this.objData.instance=this;
    //       this.objData.instance.img='waibiwaibi'
    //       console.log(this.objData.instance.img);
    //     })
    //   },
    // },
  },
  methods: {
    // 布局
    positionSort() {
      switch (this.total.total) {
        case 1:
          this.position.four = true;
          break;
        case 2:
          if (this.total.index === 0) {
            this.position.three = true;
          } else {
            this.position.five = true;
          }
          break;
        case 3:
          switch (this.total.index) {
            case 0:
              this.position.two = true;
              break;
            case 1:
              this.position.four = true;
              break;
            case 2:
              this.position.five = true;
              break;
          }
          break;
        case 4:
          switch (this.total.index) {
            case 0:
              this.position.one = true;
              break;
            case 1:
              this.position.three = true;
              break;
            case 2:
              this.position.five = true;
              break;
            case 3:
              this.position.seven = true;
              break;
          }
          break;
        case 5:
          switch (this.total.index) {
            case 0:
              this.position.one = true;
              break;
            case 1:
              this.position.three = true;
              break;
            case 2:
              this.position.four = true;
              break;
            case 3:
              this.position.five = true;
              break;
            case 4:
              this.position.seven = true;
              break;
          }
          break;
        case 6:
          switch (this.total.index) {
            case 0:
              this.position.one = true;
              break;
            case 1:
              this.position.two = true;
              break;
            case 2:
              this.position.three = true;
              break;
            case 3:
              this.position.five = true;
              break;
            case 4:
              this.position.six = true;
              break;
            case 5:
              this.position.seven = true;
              break;
          }
          break;
        case 7:
          switch (this.total.index) {
            case 0:
              this.position.one = true;
              break;
            case 1:
              this.position.two = true;
              break;
            case 2:
              this.position.three = true;
              break;
            case 3:
              this.position.four = true;
              break;
            case 4:
              this.position.five = true;
              break;
            case 5:
              this.position.six = true;
              break;
            case 6:
              this.position.seven = true;
              break;
          }
          break;
      }
    },
  },
  computed: {
    countryColor: function () {
      return this.objData.obj.country === "蜀"
        ? "red"
        : this.objData.obj.country === "魏"
        ? "blue"
        : "green";
    },
  },
};
</script>

<style scoped>
/* 位置,后面如果其他设备显示异常就换成rem试试 */
.one {
  left: 0px;
  top: 500px;
}
.two {
  left: 0px;
  top: 0px;
}
.three {
  top: 0px;
  left: 400px;
}
.four {
  top: 0px;
  left: 900px;
}
.five {
  top: 0px;
  left: 1400px;
}
.six {
  right: 0px;
  top: 0px;
}
.seven {
  right: 0px;
  top: 500px;
}

/* 外层样式 */
.outer {
  border: 1px solid black;
  width: 200px;
  height: 300px;
  position: absolute;
}
.role {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-position: -50px 0px;
}
.role > div:first-child {
  flex-basis: 60%;
  overflow: hidden;
}
/* 装备栏样式 */
.equipment {
  display: flex;
  flex-basis: 40%;
}
.equipment > div:first-child {
  flex-basis: 85%;
  height: 100%;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
}
.equipment > div:first-child > div {
  flex-basis: 25%;
  border-top: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.equipment > div:last-child {
  flex-basis: 15%;
  border-top: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
  color: red;
  background-color: cornsilk;
}

/* 势力名称 */
.country {
  width: 50px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.country span:first-child {
  text-align: center;
  font-size: 30px;
}
.country span:last-child {
  font-size: 20px;
  text-align: center;
  writing-mode: vertical-lr;
}
</style>