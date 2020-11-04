<template>
  <div>
    <div class="header" id="header_top3" style="position: fixed">
      <v-header></v-header>
    </div>
    <div class="body" style="position: relative; top: 90px">
      <div class="body_top">
        <div class="title">时间轴</div>
        <div class="sub_title">{{title}}</div>
      </div>
      <el-row style="margin-top: 30px; margin-bottom: 100px; ">
          <el-col :span="4" > <br> </el-col>
          <el-col :span="16" class="timeline">
            <div class="timelines">
              <div>
                <div v-for="(item, index) in blogs" :key="index">
                  <div class="litime_left" v-if="item.direction === 0" :id="item.title">
                    <div class="time_point_left"></div>
                    <div class="litime_text_left">
                      <div style="margin-bottom: 10px">
                        {{ getDate(item.createdTime) }}
                      </div>
                      <span style="font-weight: bolder; font-size: 18px; cursor: pointer" v-on:click="toDetail(item.id)">
                        {{ item.title }}
                      </span>
                    </div>
                  </div>
                  <div class="litime_right" v-if="item.direction === 1" :id="item.title">
                    <div class="time_point_right"></div>
                    <div class="litime_text_right">
                      <div style="margin-bottom: 10px">
                        {{ getDate(item.createdTime) }}
                      </div>
                      <span style="font-weight: bolder; font-size: 18px; cursor: pointer" v-on:click="toDetail(item.id)">
                        {{ item.title }}
                      </span>
                    </div>
                  </div>
                </div>
                <div style="float: left; width: 100%; margin-top: 20px">
                  <el-button type="text" v-on:click="getTimeShaft()">{{operate}}</el-button>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="4" > <br> </el-col>
        </el-row>
    </div>
    <el-backtop :bottom="100">
      <div>
        <el-icon class="el-icon-arrow-up"></el-icon>
      </div>
    </el-backtop>
    <div v-if="upToShow" style="width: 40px; font-size: 18px; position: fixed; bottom: 50px; left: 50px; text-align: center; color: #36b1b1; border: 1px solid #58ad66; border-radius: 5px; background-color: #f2faf4; z-index: 999 ">
      向上显示导航
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import {api} from '@/api/api';
export default {
  name: "TimeShaft",
  data(){
    return{
      totalBlog: 0,
      operate:'没有更多啦！',
      title:'',
      upToShow: false,
      scrollIndex: 0,
      param:{
        pageInfo:{
          pageSize:10,
          pageNum:1
        }
      },
      blogs:[],
    }
  },
  methods:{
    toDetail(blogId){
      this.$router.push({name:'detail',params: {id:blogId}})
    },
    setTitle(){
      api.getDate().then(res =>{
        const startTime =  new Date('2020/08/01');
        const endTime = new Date(res.entity);
        let y = startTime.getFullYear();
        let m = startTime.getMonth() + 1;
        let d = startTime.getDate();
        let y1 = endTime.getFullYear();
        let m1 = endTime.getMonth() + 1;
        let d1 = endTime.getDate();
        const date = (y1-y)*365+(m1-m)*30+d1-d;
        const cov = Math.round(date/this.totalBlog);
        let content = '';
        if(cov >= 1){
          content = `每${cov}天一篇`
        }else {
          content = `每天${Math.round(this.totalBlog/date)}篇`
        }
        const time = this.getDate2('2020/08/01');
        this.title =  `${time}至今,平均${content}博客,总计${this.totalBlog}篇`;
      })
    },
    getDate(date){
      let dt = new Date(date);
      let y = dt.getFullYear();
      let m = dt.getMonth() + 1;
      let d = dt.getDate();
      let h = dt.getHours();
      let time = '';
      if(h>18 || h < 6 ){
        time = '晚上';
      }else if(h > 6 && h < 12){
        time = '上午';
      }else if(h > 12 && h < 14){
        time = '中午';
      }else if(h > 14 && h < 18){
        time = '下午';
      }
      return `${y}/${m}/${d} ${time}`
    },
    getDate2(date){
      let dt = new Date(date);
      let y = dt.getFullYear();
      let m = dt.getMonth() + 1;
      let d = dt.getDate();
      return `${y}年${m}/${d}日`
    },
    getTimeShaft(){
      if(this.operate === '没有更多啦！'){
        return ;
      }
      this.param.pageInfo.pageNum += 1;
      api.getTimeShaft(this.param).then(res =>{
        if(res.code !== 1 || res.entity.list === undefined || res.entity.list.length === 0){
          this.param.pageInfo.pageNum -= 1;
          return;
        }
        if(res.entity.list.length !== 10){
          this.operate = '没有更多啦！'
        }
        res.entity.list.forEach(item =>{
          this.blogs.push(item);
        })
        this.setTitle();
        setTimeout(()=>{
          location.href = `#${res.entity.list[0].title}`;
        },100)
      });

    },
    handleScroll3: function () {
      let scrollTop = window.pageYOffset || document.getElementById("header_top3").scrollTop  || document.body.scrollTop;
      if(scrollTop >= 180){
        if(scrollTop > this.scrollIndex){
          this.upToShow = true;
          document.getElementById("header_top3").style.position = "";
        }else {
          this.upToShow = false;
          document.getElementById("header_top3").style.position = "fixed";
        }
        this.scrollIndex = scrollTop;
      }
    },
  },
  created() {
    api.getTimeShaft(this.param).then(res =>{
      this.blogs = res.entity.list;
      this.totalBlog = res.entity.count;
      if(this.blogs.length === this.param.pageInfo.pageSize){
        this.operate = '更多...';
      }
      this.setTitle();
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll3, false);
  },
  destroyed() {
    window.removeEventListener("scroll",  this.handleScroll3, false);
  }
}
</script>

<style scoped>
  .timeline{
    position: relative;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .litime_text_right{
    padding: 20px;
    text-align: left;
    margin-left: 20px
  }
  .litime_text_left{
    padding: 20px;
    text-align: right;
    margin-right: 20px
  }
  .line{
    height: 100%;
    width: 5px;
    background-color: #438943;
    position: absolute;
    left: 50%;
    z-index: 99;
    transform: translate(-50%,-50%);
  }
  .litime_right:hover .time_point_right{
    box-shadow: 0 0 0 5px rgba(0,0,0,.1);
  }
  .time_point_right{
    box-shadow: 0 0 0 2px rgba(0,0,0,.1);
    transition: all 400ms;
    border: 1px solid rgba(0,0,0,.1);
    z-index: 100;
    top: 50%;
    left: 0;
    transform: translate(calc(-50% + 1px),-50%);
    background-color: white;
    height: 20px;
    width: 20px;
    position: absolute;
    border-radius: 20px;
  }
  .litime_left:hover .time_point_left{
    box-shadow: 0 0 0 5px rgba(0,0,0,.1);
  }
  .time_point_left{
    box-shadow: 0 0 0 2px rgba(0,0,0,.1);
    transition: all 400ms;
    border: 1px solid rgba(0,0,0,.1);
    z-index: 100;
    top: 50%;
    right: 0;
    transform: translate(calc(50% - 1px),-50%);
    background-color: #cec8ca;
    height: 20px;
    width: 20px;
    position: absolute;
    border-radius: 20px;
  }
  .litime_right:hover{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .litime_right{
    transition: all 400ms;
    border-radius: 10px;
    background-color: white;
    position: relative;
    border: 1px solid rgba(0,0,0,0.1);
    float: right;
    width: calc(50% + 1px);
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .litime_left:hover{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .litime_left{
    transition: all 400ms;
    border-radius: 10px;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.1);
    width: calc(50% + 1px);
    position: relative;
    float: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }
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
    background-image: linear-gradient(to right, #7ab8c2 0%, #b6b5ac 100%);
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
