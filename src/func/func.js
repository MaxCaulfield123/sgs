
import { card,characterObj } from "../js/data"




class cardElement {
  constructor(card) {
    // let div = document.createElement('div');
    // div.isChoosen = false;
    // div.isPassive = card.isPassive;
    // div.point = card.point;
    // div.innerHTML = card.name;
    // div.func = card.func;
    // div.addEventListener('click',()=>{
    //   this.chooseCard(div);
    // })
    // div.classList.add('handleCard');
    this.card =card ;
  }
}
// 创建卡牌dom元素并导出
let domArr = [];
for (let i = 0; i < 10; i++) {
  let arr = card.map((item) => {
    return new cardElement(item)
  });
  domArr = domArr.concat(arr);
}
// 导出卡牌管理对象{cards:总卡牌,abandonCards:弃牌堆}
// 数组打乱
Array.prototype.shuffle = function () {
  var array = this;
  var m = array.length,
    t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
export const cards = { cards: domArr.shuffle() };


// 创建玩家对象,放入上方公共变量
class Player {
  constructor(obj) {
    this.obj = obj//将武将对象放入玩家对象中
    this.cards=[];
    //console.log(position);//储存图片位置offset,用于箭头指向
    this.operating = false;//是否当前操作
    this.passive = false;//是否为响应操作
    // 在每个组件中监听operating,为true时ai自动遍历手牌并打出.
    //如果玩家为true则遍历手牌给主动打出的手牌设置控制参数,并返回promise,resolve时操作权移交下一位玩家        
    // this.ownCards = ownCards;
  }
}
let arr=[];
for(let i=0;i<characterObj.length;i++){
  arr.push(new Player(characterObj[i]))
}
export let characterArr=arr;

