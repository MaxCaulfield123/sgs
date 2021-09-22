export var combineObj={
  targetPlayer:'',
  nowPlayer:'',
  card:''
};
export function combine(player,card){
  card.func(player)
}
// 选择的卡牌,用于传给最终点击确定后调用的receive函数;
export var alreadyChooseArr = [];
// 玩家 mankind component:dom元素 instance:vue组件
// 创建公共变量,用于管理回合,操作权,箭头指向,与各个ai的出牌
export var playerArr = []