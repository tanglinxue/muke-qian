<script>
export default {
  name: 'Home'
}
</script>

<template>
 <div class="welcome">
   <h1>欢迎来到主界面</h1>
  <router-link to="/login">去登录</router-link>
 </div>
</template>

<style scoped>
.welcome{
  background: #fff;
  height:100%
}
</style>
