import { cards } from "../func/func";


export var mixin = {
  data(){
    return {
      allCards:[],
      abandonCards:[],
      // ownCards:[],
      // // 自己的武将
      // ownRole: {
      //   cards:''
      // },
    }
  },
  mounted() {
    this.allCards=cards.cards;
  },
  methods:{
    // 选中卡牌点击确定后执行receive函数
    receive(target,card){
      console.log(target,card);
      card.func(target)
    }
  }
}