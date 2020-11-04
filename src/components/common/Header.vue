<template>
  <div class="header" style="margin: 0 auto">
    <div style="background-color: white; height: 90px;overflow: hidden">
      <img style="width: 163px; height: 36px; margin-top: 30px;margin-left: 50px; display: inline-block; cursor: pointer"
           v-if="!complete"
           alt="" src="../../assets/image/logo.png" >
      <ul v-if="complete2" id="header2" style="display: inline-block">
        <li >
          <router-link :to="'/home'" class="router-link">
            首页
          </router-link>
        </li>
        <li >
          <router-link :to="'/classify'" class="router-link">
            技术博文
          </router-link>
        </li>
        <li >
          <router-link :to="'/classify'" class="router-link">
            情感博文
          </router-link>
        </li>
        <li >
          <router-link :to="'/time'" class="router-link">
            时间轴
          </router-link>
        </li>
        <li >
          <router-link :to="'/website'" class="router-link">
            留言板
          </router-link>
        </li>
        <li>
          <router-link :to="'/about'" class="router-link">
            关于我
          </router-link>
        </li>
      </ul>
      <ul id="header1" v-if="complete">
        <li class="li1">
          <router-link :to="'/home'" class="router-link">
              首页
          </router-link>
        </li>
        <li class="li1">
          <router-link :to="{name:'classify', query:{type:0}}" class="router-link">
            技术博文
          </router-link>
        </li>
        <li class="li1">
          <router-link :to="{name:'classify', query:{type:1}}" class="router-link">
            情感博文
          </router-link>
        </li>
        <li class="li1 main">
          <router-link :to="'/about'" >
            <div class="line" style="margin-right: 20px" >
              <div style="width: 60px; height: 1px; background-color: black; margin-bottom: 5px; margin-left: 20px"></div>
              <div style="width: 80px; height: 1px; background-color: black"></div>
            </div>
            <img class="logo" alt="" src="../../assets/image/logo.png" style="width: 163px; height: 36px">
            <div class="line" style="margin-left: 20px">
              <div style="width: 60px; height: 1px; background-color: black; margin-bottom: 5px"></div>
              <div style="width: 80px; height: 1px; background-color: black"></div>
            </div>
          </router-link>
        </li>
        <li class="li1">
          <router-link :to="'/time'" class="router-link">
            时间轴
          </router-link>
        </li>
        <li class="li1">
          <router-link :to="'/website'" class="router-link">
            留言板
          </router-link>
        </li>
        <li class="li1">
          <router-link :to="'/about'" class="router-link">
            关于我
          </router-link>
        </li>
      </ul>
    </div>
    <div class="header_bottom"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import {api} from '../../api/api';

export default {
  name: "Header",
  data(){
    return{
      complete: false,
      complete2: false,
    }
  },
  created() {
    this.resize();
    api.visit().then();
  },
  mounted() {
    this.resize();
    window.onresize = ()=>{
      this.resize();
    }

  },
  methods:{
    resize :function (){
      const width = document.documentElement.clientWidth;
      const header = document.getElementById("header1");
      if(width < 1600){
        if(header){
          header.style.marginLeft = "5%";
          header.style.marginRight = "5%";
        }
      }else {
        if(header){
          header.style.marginLeft = "16%";
          header.style.marginRight = "16%";
        }
      }
      if(width < 1120){
        this.complete = false;
        this.complete2 = true;
        // header.style.visibility = "hidden";
      }else {
        this.complete = true;
        this.complete2 = false;
        // header.style.visibility = "visible";
      }
    }
  }
}
</script>

<style scoped>

  li:hover .router-link{
    border: 2px solid black;
    border-radius: 15px;
    background-color: #dbe9ef;
  }
  .router-link{
    border-radius: 10px;
    transition: all 800ms;
    border: 2px solid rgba(0,0,0,0);
    padding: 10px;
  }
  .header_bottom{
    width: 100%;
    height: 50px;
    background: linear-gradient(to bottom, rgba(180, 171, 171, 0.3), rgba(0, 0, 0, 0));
  }
  a {
    text-decoration: none;
    font-weight: 600;
    color: black;
    font-size: 20px;
    font-family: test_zlz;
  }
  #header2{
    height: 90px;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
  }
  #header1{
    height: 90px;
    margin: 0 16%;
    display: flex;
    justify-content: space-between;
  }
  li{
    display: inline-block;
    line-height: 115px;
    height: 100%;
    margin: 0 auto;
  }
  .main{
    margin: 0;
    width: 400px;
  }
  .logo{
   margin-top: 30px;
  }
  .line{
    margin-bottom: -10px;
    display: inline-block;
  }
</style>
