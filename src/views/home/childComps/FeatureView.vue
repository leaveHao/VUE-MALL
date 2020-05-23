<template>
  <div class="feature">
    <a href="javascript:;" @click="errorMessage">
      <img src="~assets/img/home/recommend_bg.jpg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: 'FeatureView',
  methods:{
    errorMessage(){
      this.$toast.show('抱歉,该页面尚未完善', 1500)
    }
  }
}
</script>

<style>
  .feature img{
    width: 100%;
  }
</style>
