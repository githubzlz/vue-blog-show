<template>
  <div class="website">
    <div class="header" id="header_top5" style="position: fixed">
      <v-header></v-header>
    </div>
    <div class="body" style="position: relative; top: 90px">
      <div class="body_top">
        <div class="title">留言板</div>
        <div class="sub_title">2020-09/03至今,共{{count.user}}人留言,总计{{count.num}}条!</div>
      </div>
      <el-row>
        <el-col :span="4"><br></el-col>
        <el-col :span="16">
          <el-card style="margin: 20px; text-align: left">
            <comment v-bind:comments-data="comments" v-bind:blogId="'0'" v-bind:type="1"></comment>
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
      count:{
        user:0,
        num:0
      }
    }
  },
  methods:{
    getComments(){
      api.getWebComments().then(res=>{
        this.comments = res.entity;
      })
    },
    getCount(){
      api.getCommentCount().then(res =>{
        if(res.code === 1){
          this.count.user = res.entity.commentUserCount;
          this.count.num = res.entity.commentCount;
        }
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
    this.getCount()
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
    line-height: 200px;
    height: 400px;
    color: white;
    font-size: 30px;
    font-family: test_zlz;
  }
  .title{
    margin-top: 50px;
    line-height: 250px;
    height: 200px;
    font-size: 80px;
    letter-spacing: 50px;
    color: white;
    font-family: test_zlz;
  }
  .body_top{
    height: 600px;
    overflow: hidden;
    background-image: linear-gradient(to right, #7ab8c2 0%, #bab8ae 100%);
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
