<template>
  <div class="game">
    <div class="choose" :class="{ chooseHidden: chooseHidden }">
      <h3>选择自己要玩的武将</h3>
      <div ref="choose">
        <img :class="{ roleActive: roleActive === 0 }" src="" alt="" />
        <img :class="{ roleActive: roleActive === 1 }" src="" alt="" />
        <img :class="{ roleActive: roleActive === 2 }" src="" alt="" />
      </div>
      <div>
        <button @click="confirm">确定</button>
      </div>
    </div>
    <ownCharacter :ownRole="ownRole"></ownCharacter>
    <character
      v-for="(item, index) of objData"
      :key="index"
      :total="{ total: objData.length, index: index }"
      :objData="item"
      ref="cha"
      >{{ item }}</character
    >
  </div>
</template>

<script>
import {characterArr,cards} from '../func/func'
// 其他角色组件
import character from "../components/character.vue";
import ownCharacter from "../components/ownCharacter.vue";
export default {
  components: {
    character,
    ownCharacter
  },
  watch: {
    // objData:{
    //   immediate:true,
    //   deep:true,
    //   handler:function(){
    //     this.$nextTick(()=>{
    //       console.log(character);
    //     })
    //   }
    // }
  },
  data() {
    return {
      // 获取的武将数据
      allPlayer:[],
      // 选择武将时的激活样式
      roleActive: "",
      // 选择武将框是否隐藏
      chooseHidden: false,
      ownRole: {},
      // 其他人的武将,组件遍历的数组
      objData: [],
      // ai组件
      aiObj:{
        aiOne:{},
        aiTwo:{}
      },
      combine:{
        allCards:cards.cards,
        nowPlayer:'',
        targetPlayer:'',
        choosenCard:''
      }
    };
  },
  mounted() {
    console.log(characterArr);
    this.chooseRole();
  },
  methods: {
    
    // 选择武将
    chooseRole() {
      // 选择武将框
      for (let i = 0; i < characterArr.length; i++) {
        let self = this;
        // 选择武将样式
        this.$refs.choose.children[i].onclick = function () {
          self.roleActive === i
            ? (self.roleActive = "")
            : (self.roleActive = i);
        };
        this.$refs.choose.children[i].src = characterArr[i].obj.headerImg;
        this.$refs.choose.children[i].title =
          characterArr[i].obj.name + "     " + characterArr[i].obj.description[0];
      }
    },

    // 选择武将确定,开始游戏
    confirm() {
      // 取出每个玩家对象
      this.ownRole=characterArr[this.roleActive];
      for(let i=0;i<characterArr.length;i++){
        this.allPlayer.push(characterArr[i])
      }
      characterArr.splice(this.roleActive,1)
      this.aiObj.aiOne=characterArr[0]
      this.aiObj.aiTwo=characterArr[1]
      this.objData=characterArr;
      this.chooseHidden=true;
      // 分发卡牌
      this.allPlayer.forEach((item)=>{
        item.cards.push(...this.combine.allCards.splice(0,4))
      })
    },
  },
};
</script>

<style scoped>
.game {
  background-image: url("../img/bg/zhulin_bg.jpg");
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}



/* 选将框样式 */
.choose {
  position: relative;
  top: 40%;
  left: 50%;
  width: 500px;
  height: 300px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
}
.choose h3 {
  font-size: 30px;
  position: absolute;
  top: 20px;
}
.choose::after {
  content: "";
  display: table;
  clear: both;
}
.choose img {
  border: 1px solid green;
  transition: all 0.2s linear;
  cursor: pointer;
  margin-top: 70px;
}
.choose img:hover {
  margin: 70px 5px 0px;
  border: 3px solid red;
  box-shadow: -5px -5px 5px red inset;
}
.choose .roleActive {
  border: 3px solid gold;
}
.choose button {
  widows: 60px;
  height: 30px;
}

.chooseHidden {
  display: none;
}
</style>