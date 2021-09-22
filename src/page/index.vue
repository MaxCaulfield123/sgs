<template>
  <div class="bg">
    <div class="container">
      <h1>三国杀</h1>
      <router-link to="/game">开始游戏</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .bg{
    background-image: url('../img/bg/xinsha_bg.jpg');
    height: 100%;width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .container{
    position: relative;
    top:50%;left:50%;
    width: 300px;height: 300px;
    transform: translate(-50%,-50%);
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
  }
</style>