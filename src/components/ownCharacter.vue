<template >
  <div>
    <div class="operatetable" v-if="ownRole.obj">
      <div class="equipment">
        <div>装备</div>
        <div>装备</div>
        <div>装备</div>
        <div>装备</div>
      </div>
      <div class="card">
        <div ref="cardTable" class="cardTable" v-if="ownRole.cards">
          <div v-for="(item,index) of ownRole.cards" 
          class="handleCard"
          @click="handleCardClick($event,item,index)"
          :key='index'>{{item.card.name}}</div>
        </div>
        <div class="confirm">
          <div>
            <div ref="confirm">确定</div>
            <div ref="cancel">取消</div>
          </div>
          <div>
            <div
              v-for="(item, index) in ownRole.obj.skill"
              :title="ownRole.obj.description[index]"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="character" ref="character">
        <div>{{ ownRole.obj.blood }}</div>
        <!-- <div>{{ ownRole.ownCards.length }}</div> -->
        <img :src="ownRole.obj.img" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    ownRole:Object
  },
  data(){
    return{
      ownPlayer:this.ownRole
    }
  },
  mounted(){
   
  },
  methods:{
    handleCardClick(e,item,index){
      console.log(e,item,index);
    }
  }
}
</script>
<style scoped>
  /* 操作台样式 */
.operatetable {
  position: absolute;
  bottom: 1px;
  height: 250px;
  width: 100%;
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.operatetable > .card {
  flex-basis: 70%;
}
/* 左侧装备栏样式 */
.equipment {
  flex-basis: 15%;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.equipment div {
  width: 100%;
  height: 25%;
}
.equipment > div:not(:last-child) {
  border-bottom: 1px solid white;
}
.character {
  flex-basis: 15%;
  height: 100%;
  overflow: hidden;
}
.character img {
  width: 100%;
  vertical-align: top;
  object-fit: cover;
}
.card {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
/* 技能确定栏样式 */
.confirm {
  display: flex;
  flex-direction: row-reverse;
}
.confirm > div:first-child div {
  width: 100px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: brown;
  background-color: white;
}
.confirm > div:first-child div:hover,
.confirm > div:last-child:hover {
  font-size: 40px;
  color: gold;
  box-shadow: 0 0 20px 5px red inset;
}
.confirm > div:first-child div:first-child {
  border-bottom: 1px solid #000;
}
.confirm > div:last-child {
  width: 100px;
  color: chocolate;
  font-size: 30px;
  background-color: white;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* 卡牌布局,样式 */
.cardTable {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
    .handleCard {
      border: 1px solid green;
      height: 95%;
      width: 150px;
      margin: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;font-weight: 800;
      color:black;
      background-color: beige;
      transition:all .1s linear;
    }
    .handleCard:hover{
      box-shadow: 5px 5px 10px 5px green inset;
    }
/* 操作台样式结束 */
</style>