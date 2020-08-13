<template>
  <div class="website">
    <div class="header" id="header_top5" style="position: fixed">
      <v-header></v-header>
    </div>
    <div class="body" style="position: relative; top: 90px">
      <div class="body_top">
        <div class="title">留言板</div>
        <div class="sub_title">2019-08/03至今,共360人留言,总计2324条!</div>
      </div>
      <el-row>
        <el-col :span="4"><br></el-col>
        <el-col :span="16">
          <el-card style="margin: 20px; text-align: left">
            <comment v-bind:comments-data="comments"></comment>
          </el-card>
        </el-col>
        <el-col :span="4"><br></el-col>
      </el-row>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/common/Comment";
import {api} from '@/api/api'

export default {
  name: "Website",
  components: {Comment},
  data(){
    return{
      scrollIndex: 0,
      comments:[],
    }
  },
  methods:{
    getComments(){
      api.getWebComments().then(res=>{
        this.comments = res.entity;
      })
    },
    handleScroll5: function () {
      let scrollTop = window.pageYOffset || document.getElementById("header_top5").scrollTop  || document.body.scrollTop;
      if(scrollTop >= 180){
        if(scrollTop > this.scrollIndex){
          document.getElementById("header_top5").style.position = "";
        }else {
          document.getElementById("header_top5").style.position = "fixed";
        }
        this.scrollIndex = scrollTop;
      }
    },
  },
  created() {
    this.getComments()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll5, false);
  },
  destroyed() {
    window.removeEventListener("scroll",  this.handleScroll5, false);
  }
}
</script>

<style scoped>
  .sub_title{
    line-height: 100px;
    height: 300px;
    color: white;
    font-size: 30px;
    font-family: test_zlz;
  }
  .title{
    margin-top: 50px;
    line-height: 200px;
    height: 200px;
    font-size: 80px;
    letter-spacing: 50px;
    color: white;
    font-family: test_zlz;
  }
  .body_top{
    height: 500px;
    overflow: hidden;
    background: #050000;
    background-size: 100%;
  }
  .body{
  }
  .header{
    z-index: 999;
    width: 100%;
    height:90px;
  }
</style>
