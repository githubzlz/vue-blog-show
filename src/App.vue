<template>
  <div id="app">
    <router-view v-if="routerAlive" v-on:click="routerRefresh"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      routerAlive:true
    }
  },
  methods:{
    routerRefresh(){
      this.routerAlive = false;
      this.$nextTick(()=>{
        this.routerAlive = true;
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
