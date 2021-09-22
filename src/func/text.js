confirm() {
  // 身份选择,随机位置
  // 1选将界面隐藏
  this.chooseHidden = true;

  // 2创建人类玩家对象
  for (let i = 0; i < characterObj.length; i++) {
    playerArr.push(new Player(characterObj[i]));
  }
  // console.log(playerArr);
  // this.ownRole=new Player(this.characterObj[this.roleActive])
  this.ownRole = playerArr[this.roleActive];
  playerArr[this.roleActive].mankind = true; //设置人类玩家minkind
  playerArr[this.roleActive].instance = this; //人类玩家对应的组件为this

  // 3开始游戏,创建玩家对象,所有人摸四张牌
  playerArr.forEach((item) => {
    item.ownCards = this.allCards.splice(0, 4);
  });
  // console.log(this.ownRole);
  // 放到操作栏上,用nextTick是防止上方赋值后,视图未更新,refs找不到元素插入
  this.$nextTick(() => {
    for (let i = 0; i < 4; i++) {
      this.$refs.cardTable.appendChild(this.ownRole.ownCards[i].div);
    }
  });
  // 其他ai玩家
  this.objData = playerArr.filter((item) => item.mankind != true);

  // 开始游戏,随机使一位玩家的回合开始
  changePlayer();
  // playerArr[this.roleActive].operating=true;
},


operate() {

}
aiOperate() {

}
endRound(resolve) {
  resolve()
}
// 确定触发移交操作权-->直接打出手牌(ai)-->遍历被动手牌添加事件打出(人类)--->操作权回调
set operating(val) {
  // 当前玩家可以操作时
  // console.log(this,val+'开始操作');
  // if (this.passive === false && val === true) {//主动出牌时
  //   if (this.mankind == true) {//人类玩家出牌
  //     console.log(this.ownCards);
  //     this.ownCards.forEach((item) => {
  //       console.log(!item.div.isPassive);
  //       if (!item.div.isPassive) {
  //         console.log(item);
  //         // item.div.onclick=item.chooseCard(item)
  //         item.div.addEventListener('click', item.chooseCard)
  //       }
  //     })
  //   } else {// ai回合开始时

  //   }
  // } else {//被动响应时
  //   // 应该在这里操作
  //   if (this.mankind === true) {//人类被动响应

  //   } else {//ai被动响应

  //   }
  // }




  // 已经在每个player对象添加组件属性,可以修改组件的onclick事件了

// 一个玩家的任何操作应该绑定在player类之上
// player下需要需要一个函数表示自己返回的卡牌
// 任何卡牌的自带效果,应该赋值给(对象或自身的)确定取消按钮?
// function re(resolve,bool,card){
//   if(bool){//点击确定
//     //将card放入弃牌堆
//     //resolve
//   }
//   else{

//   }
// }

// function func() {
//   combineObj.targetPlayer.obj.blood-=1;
// 这里但凡修改player实例中obj和card的数据就会报循环引用,超出任务队列内存的错,因为vue会stringify所有相关组件
// combineObj.targetPlayer.obj.blood-=1;
// let pro = new Promise((resolve) => {
//   function response() {
//     console.log('alreadyChooseArr', alreadyChooseArr);
//     for(let i=0;i<combineObj.targetPlayer.ownCards.length;i++){
//       if(combineObj.targetPlayer.ownCards[i].stringify()===combineObj.card.stringify()){
//         combineObj.targetPlayer.ownCards.splice(i,1);
//         // 执行动画
//       }
//     }
//     resolve()
//   }
//   if (combineObj.targetPlayer.mankind) {//是人类时
//     console.log('人类玩家响应');
//     combineObj.nowPlayer.operating = false;
//     combineObj.targetPlayer.passive = true;
//     combineObj.targetPlayer.operating = true;
//     //在这里为闪添加事件
//     combineObj.targetPlayer.instance.$refs.confirm.onclick = response;

//   } else {//是ai时不用响应,直接删一个闪否则掉血
//     console.log(combineObj.targetPlayer);
//     for(let i=0;i<combineObj.targetPlayer.ownCards.length;i++){
//       if(combineObj.targetPlayer.ownCards[i].div.innerHTML==='闪'){
//         // combineObj.targetPlayer.ownCards.splice(i, 1);
//         // 执行动画
//         return;
//       }
//     }
//     // // 如果ai没有闪
//     combineObj.targetPlayer.obj.blood-=1;
//   }
// })
// pro.then(() => {
//   console.log('响应结束,返回操作权');
//   combineObj.nowPlayer.operating = true;
//   combineObj.targetPlayer.operating = false;
//   combineObj.targetPlayer.passive = false;
// })
// }
function clickCard(self) {
  self.style.marginBottom = '50px'
  self.isChoosen = true;
  combineObj.card = self;
  alreadyChooseArr.push(self);
}
function cancelCard(item) {
  item.style.marginBottom = '0px'
  item.isChoosen = false;
  combineObj.card = null
}
let chooseCharacter;//保存点击武将时的事件监听函数
function cc() {//选中卡牌后选中武将触发此函数
  console.log(this);
  combineObj.targetPlayer = this;
}
// let sha;







// 选择卡牌后的效果
chooseCard() {
  if (this.isChoosen === false && alreadyChooseArr.length < 1) {
    // console.log(1);
    clickCard(this)
    playerArr.forEach((item) => {
      if (item.component) {//选中卡牌后对于ai的操作
        item.component.style.border = '5px solid grey'
        console.log(item.component);
        chooseCharacter = cc.bind(item)
        item.component.addEventListener('click', chooseCharacter)
      } else {
        console.log(combineObj.nowPlayer.instance.$refs);
        // 这里需要对卡牌类型进行判断,来决定组件的确定触发哪个函数
        // sha=this.func.bind(this,combineObj,playerArr,alreadyChooseArr)
        combineObj.nowPlayer.instance.$refs.confirm.addEventListener("click", combineObj.nowPlayer.instance.func);
      }
    })
  } else if (this.isChoosen === false && alreadyChooseArr.length >= 1) {
    // console.log(2);
    alreadyChooseArr.forEach((item, index) => {
      cancelCard(item)
      alreadyChooseArr.splice(index, 1)
    })
    clickCard(this);
    combineObj.nowPlayer.instance.$refs.confirm.onclick = this.func;
  } else {
    // console.log(3);
    cancelCard(this);
    combineObj.nowPlayer.instance.$refs.confirm.onclick = '';
  }
}






// 切换当前操作玩家
function turn(i) {
  let num = Math.floor(Math.random() * i)
  return function () {
    if (playerArr[num + 1]) {
      playerArr[num].operating = false;
      playerArr[++num].operating = true;
      combineObj.nowPlayer = playerArr[num];
    } else {
      playerArr[num].operating = false;
      playerArr[0].operating = true
      combineObj.nowPlayer = playerArr[0];
    }
  }
}
export let changePlayer = turn(3)