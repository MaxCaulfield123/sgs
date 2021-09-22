// import { combineObj,playerArr } from "../func/global"
// alreadyChooseArr

export const characterObj = [
  {
    name: '孙权',
    blood: 4,
    country: '吴',
    skill: ['制衡'],
    description: ['出牌阶段限一次,选择你的任意张牌放入弃牌堆,然后摸等量的牌'],
    // require是为了能用js动态的添加为img元素的src
    headerImg: require('../img/character/sunquan.png'),
    img: require('../img/character/re_sunquan.jpg')

  },
  {
    name: '刘备',
    blood: 4,
    country: '蜀',
    skill: ['仁德'],
    description: ['出牌阶段你可以将你的手牌给一名角色,若给出的牌不小于两张则你回复一点体力'],
    headerImg: require('../img/character/liubei.png'),
    img: require('../img/character/re_liubei.jpg')
  },
  {
    name: '曹操',
    blood: 4,
    country: '魏',
    skill: ['奸雄'],
    description: ['你可以获得对你造成伤害的牌'],
    headerImg: require('../img/character/caocao.png'),
    img: require('../img/character/re_caocao.jpg')

  }
]



export const card = [
  {
    name: '杀',
    description: '出牌阶段将一名其他角色指定为杀的目标',
    point: '1',
    color: '',
    type: 'basic',
    isPassive: false,
  },
  {
    name: '杀',
    description: '出牌阶段将一名其他角色指定为杀的目标',
    point: '13',
    color: '',
    type: 'basic',
    isPassive: false,
  },
  {
    name: '杀',
    description: '出牌阶段将一名其他角色指定为杀的目标',
    point: '12',
    color: '',
    type: 'basic',
    isPassive: false,
  },
  {
    name: '闪',
    description: '被指定为杀的目标后,使用闪来抵消',
    point: '',
    color: '',
    type: 'basic',
    isPassive: true,
    func() { }
  },
  {
    name: '桃',
    description: '使用后恢复一点体力',
    point: '',
    color: '',
    type: 'basic',
    isPassive: false,
    func() { }
  }
]