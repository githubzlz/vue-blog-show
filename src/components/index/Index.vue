<template>
  <div class="index">
    <div class="header" id="header_top1" style="position: fixed">
      <v-header></v-header>
    </div>
    <div class="body" style="position: relative; top: 90px">
      <div class="body_top">
        <div class="background_left">
          <div class="info">
            <div style="height: 130px; width: 2px; background-color: rgba(0,0,0,0.5); position: absolute; right: 15px; bottom: 450px" >
            </div>
            <div style="height: 300px">
              <div style="position: absolute; right: 8px; bottom: 360px">
                <span style="writing-mode: vertical-lr">Share Me</span>
              </div>
              <div style="position: absolute; right: 3px; bottom: 320px; cursor: pointer; background-color: white; border-radius: 30px; width: 23px; height: 23px">
                <img class="icon" src="../../assets/image/icon_qq.png" alt="" style="margin-left: -1px; margin-top: -1px">
              </div>
              <div style="position: absolute; right: 3px; bottom: 280px; cursor: pointer">
                <img class="icon" src="../../assets/image/icon_wechat.png" alt="">
              </div>
              <div style="position: absolute; right: 3px; bottom: 240px; cursor: pointer; background-color: white; border-radius: 30px; width: 23px; height: 23px">
                <img class="icon" src="../../assets/image/icon_qq.png" alt="" style="margin-left: -1px; margin-top: -1px">
              </div>
            </div>
            <div style="height: 150px; width: 2px; background-color: rgba(0,0,0,0.5); position: absolute; right: 15px; bottom: 80px">
            </div>
          </div>
        </div>
        <div class="background_right">
          <div class="cover">

          </div>
        </div>
        <div class="image">
          <div class="interval">
            <el-carousel :interval="5000"
                         type="card"
                         height="630px"
                         trigger="click"
                         arrow="never"
                         id="carousel"
                         indicator-position="none"
                         ref="carousel"
                         v-on:change="((pre) => {change(pre)})">
              <el-carousel-item v-for="(item, index) in carouselData" :key="index">
                <img :src="item.url" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div id="inner_word" v-if="carouselData[0] !== undefined">
            <div id="inner_word_top" v-if="carouselData[0].description !== undefined">
              {{carouselData[0].description}}
            </div>
            <div id="inner_word_bottom">
              {{carouselData[0].subDescription}}
            </div>
          </div>
          <div id="inner_word2">
            <div id="inner_word_top2" v-if="carouselData[0].description !== undefined">
              {{carouselData[0].description}}
            </div>
            <div id="inner_word_bottom2">
              {{carouselData[0].subDescription}}
            </div>
          </div>
          <div class="inner_number">
            <div v-for="index in carouselData.length" :key="index" class="number" v-on:click="setActiveItem(index-1)" :id="'numItem'+index">
              {{index}}
            </div>
          </div>
        </div>
      </div>
      <el-row style="margin-top: 30px; margin-bottom: 20px">
        <el-col :span="4" > <br> </el-col>
        <el-col :span="11" id="body_middle_left">
          <WaterfallChild :plant.sync="searchInputC"></WaterfallChild>
        </el-col>
        <el-col :span="5  ">
          <div style="width: 100%;">
            <el-card  shadow="hover" style="background-color: rgb(245,247,252); margin: 20px">
              <div style="padding: 14px; text-align: left">
                <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="searchInput"
                    @keyup.enter="search()">
                  <el-button slot="append" icon="el-icon-search" v-on:click="search"></el-button>
                </el-input>
              </div>
            </el-card>
            <el-card  shadow="hover" style="background-color: rgb(245,247,252); margin: 20px">
              <div style="padding: 14px; text-align: left">
                <div class="title">
                  <el-icon class="el-icon-notebook-1" style="margin-right: 10px; "></el-icon>
                  热门文章
                </div>
                <div class="divider_self"></div>
                <div class="articleBack" v-for="(item,index) in sideList">
                  <img class="articleBackImg" :src="item.imgSrc" alt="">
                  <div class="articleBackGround">
                    <div class="read_button" >阅读</div>
                  </div>
                  <div class="articleTop">
                    Top {{index+1}}
                  </div>
                  <div class="articleTitle">
                    {{item.title}}
                  </div>
                  <div class="articleTag">
                    {{item.type}}
                  </div>
                  <div class="articleTime">
                    {{getDate(item.lastModifiedTime)}}
                  </div>
                </div>
              </div>
            </el-card>
            <el-card  shadow="hover" style="background-color: rgb(245,247,252); margin: 20px">
              <div style="padding: 14px; text-align: left">
                <div class="title">
                  <el-icon class="el-icon-collection" style="margin-right: 10px"></el-icon>
                  博文分类
                </div>
                <div class="divider_self" style="background-color: #baa667"></div>
                <div class="sort_title" v-for="item in typeList">
                  <div class="sort_title_left">{{ item.type }}</div>
                  <div class="sort_title_right">{{ item.number }}</div>
                </div>
              </div>
            </el-card>
            <el-card  shadow="hover" style="background-color: rgb(245,247,252); margin: 20px">
              <div style="padding: 14px; text-align: left; position: relative">
                <div class="title">
                  <el-icon class="el-icon-price-tag" style="margin-right: 10px"></el-icon>
                  标签云
                  <i v-on:click="setTagStyle()">
                    <el-icon class="el-icon-refresh" style="position: absolute; right: 10px; cursor: pointer; z-index: 999">
                    </el-icon>
                  </i>
                </div>
                <div class="divider_self" style="background-color: coral"></div>
                <div class="cloud">
                  <div v-for="(item) in tagList" class="tag">
                    {{ item }}
                  </div>
                </div>
              </div>
            </el-card>
            <el-card  shadow="hover" style="background-color: rgb(245,247,252); margin: 20px">
              <div style="padding: 14px; text-align: left">
                <div class="title">
                  <el-icon class="el-icon-monitor" style="margin-right: 10px"></el-icon>
                  留言
                </div>
                <div class="divider_self" style="background-color: #bdbd77;"></div>
                <div>
                  <el-input style="margin-top: 10px; margin-bottom: 20px"
                            placeholder="请输入称呼"
                            v-model="searchInput">
                    <template slot="prepend">称呼</template>
                  </el-input>
                </div>
                <div>
                  <el-input style="margin-top: 10px; margin-bottom: 20px"
                            placeholder="请输入联系方式"
                            v-model="searchInput">
                    <el-select v-model="select" slot="prepend" style="width: 80px">
                      <el-option label="QQ" value="1"></el-option>
                      <el-option label="微信" value="2"></el-option>
                      <el-option label="邮箱" value="3"></el-option>
                    </el-select>
                  </el-input>
                </div>
                <div>
                  <el-input
                      type="textarea"
                      placeholder="请输入留言内容"
                      v-model="textarea"
                      maxlength="100"
                      show-word-limit>
                  </el-input>
                </div>
                <div style="margin-top: 10px; text-align: center">
                  <el-button round>清空</el-button>
                  <el-button round>提交</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="4">
          <br>
        </el-col>
      </el-row>
      <el-backtop :bottom="100">
        <div>
          <el-icon class="el-icon-arrow-up"></el-icon>
        </div>
      </el-backtop>
      <div v-if="upToShow" style="width: 40px; font-size: 18px; position: fixed; bottom: 50px; left: 50px; text-align: center; color: #36b1b1; border: 1px solid #58ad66; border-radius: 5px; background-color: #f2faf4; z-index: 999 ">
        向上显示导航
      </div>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import WaterfallChild from './WaterfallChild.vue';
import {api} from '@/api/api'

export default {
  name: "Index",
  components:{WaterfallChild},
  data () {
    return{
      searchInputC:'',
      upToShow: false,
      scrollIndex: 0,
      textarea: '',
      select: 'QQ',
      searchInput: '',
      my: this,
      leftWidth : document.documentElement.clientWidth,
      sideList:[],
      typeList:[],
      tagList:[],
      carouselData:[
        {
          url: '',
          description:'Make The World a Better Place',
          subDescription:'With Camera！',
        }
      ],
    }
  },
  created() {
    api.getBanner(3).then(res =>{
      this.carouselData = res.entity;
    });
    api.getBlogListSide().then(res =>{
      this.sideList = res.entity;
    });
    api.getBlogTypeList().then(res =>{
      this.typeList = res.entity;
    });
    api.getBlogTags().then(res =>{
      this.tagList = res.entity;

      //设置tag标签
      setTimeout(()=>{
        this.setTagStyle();
      }, 100)
    })
  },
  mounted(){
    this.change(0);
    window.addEventListener('scroll', this.handleScroll, false);
  },
  methods: {
    setTagStyle(){
      const tags = document.getElementsByClassName("tag");
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];

        const random = Math.floor(Math.random()*10) + 15;
        tag.style.fontSize = random+"px";

        const color1 = Math.floor(Math.random()*255);
        const color2 = Math.floor(Math.random()*255);
        const color3 = Math.floor(Math.random()*255);
        tag.style.color = `rgb(${color1},${color2},${color3})`;

        const marginLeft = Math.floor(Math.random()*10);
        tag.style.marginLeft = marginLeft+"px";

        const marginBottom = Math.floor(Math.random()*5);
        tag.style.marginBottom = marginBottom+"px";
      }
    },
    getDate(date){
      let dt = new Date(date);
      let m = dt.getMonth() + 1;
      let d = dt.getDate();
      let h = dt.getHours();
      let mi = dt.getMinutes();
      return `${m}/${d} ${h}:${mi}`
    },
    search(){
      this.searchInputC = this.searchInput;
      if(this.searchInput !== undefined){
        if(this.searchInput.substring(0,1) === " "){
          this.searchInput = this.searchInput.trim();
        }else {
          this.searchInput = " " + this.searchInput;
        }
      }
    },
    handleScroll: function () {
      let scrollTop = window.pageYOffset || document.getElementById("header_top1").scrollTop  || document.body.scrollTop;
      if(scrollTop >= 180){
        if(scrollTop > this.scrollIndex){
          this.upToShow = true;
          document.getElementById("header_top1").style.position = "";
        }else {
          this.upToShow = false;
          document.getElementById("header_top1").style.position = "fixed";
        }
      }
      this.scrollIndex = scrollTop;
    },
    change: function (pre){
      //this.img = require(this.carouselData[pre].img);
      this.changeWord(pre);
      let i = 1;
      for (i; i<= this.carouselData.length; i++){
        const id = "numItem"+ i;
        if(i === pre+1){
          document.getElementById(id).style.border = "1px solid #c1b8b8";
        }else {
          document.getElementById(id).style.border = "none";
        }
      }
    },
    setActiveItem:function (index){
      this.$refs.carousel.setActiveItem(index);
    },
    changeWord(current){
      document.getElementById("inner_word").style.left = "0";
      document.getElementById("inner_word2").style.left = "900px";
      let pre = current -1;
      if(pre < 0){
        pre += this.carouselData.length;
      }
      document.getElementById("inner_word_top").innerText = this.carouselData[pre].description;
      document.getElementById("inner_word_bottom").innerText = this.carouselData[pre].subDescription;
      document.getElementById("inner_word_top2").innerText = this.carouselData[current].description;
      document.getElementById("inner_word_bottom2").innerText = this.carouselData[current].subDescription;
      this.outImage("inner_word");
      this.intoImage("inner_word2");
    },
    outImage: function (id) {
      const style = document.getElementById(id).style;
      let px = 0;
      const interval = setInterval(() => {
        style.left = px + "px"
        px -= 15;
        if (px <= -900) {
          clearInterval(interval);
          style.left = "900px"
        }
      }, 6);
    },
    intoImage: function (id){
      const style = document.getElementById(id).style;
      let px = 900;
      const interval = setInterval(() => {
        style.left = px + "px"
        px -= 15;
        if (px <= 0) {
          clearInterval(interval);
          style.left = "0"
        }
      }, 6);
    }
  },
  destroyed() {
    window.removeEventListener("scroll",  this.handleScroll, false);
  }
}

</script>

<style scoped>
  .tag{
    cursor: pointer;
    padding: 2px;
    margin: 4px;
    border-radius: 5px;
    color: #baa667;
    display: inline-block;
    float: top;
  }
  .el-card:hover .divider_self{
    width: 100%;
  }

  .divider_self{
    background-color: #58ad66;
    width: 40%;
    height: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    transition: width 800ms;
  }
  .sort_title_right{
    position: absolute;
    right: 10px;
    bottom: 16px;
  }
  .sort_title_left{
    line-height: 50px;
    margin-left: 10px;
    letter-spacing: 1px;
  }
  .sort_title:hover{
    background-color: #bdbd77;
    color: white;
  }
  .sort_title{
    border: 3px solid #faf8f8;
    border-radius: 5px;
    transition: color,background-color 500ms;
    cursor: pointer;
    color: rgba(0,0,0,0.5);
    position: relative;
    width: 100%;
    height: 50px;
    background-color: white;
    margin: 15px auto;
  }
  .read_button{
    cursor: pointer;
    transition: color,background-color 800ms;
    width: 50px;
    height: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: rgba(255,255,255,0);
    background-color: rgba(255,255,255,0);
    border-radius: 5px;
    text-align: center
  }
  .articleTop{
    color: #f6f8f5;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .articleBack:hover .articleBackGround{
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .articleBack:hover .read_button{
    color: rgb(80, 5, 5);
    background-color: rgba(255,255,255,0.8);
  }
  .articleTime{
    z-index: 8;
    position: absolute;
    color: #eae2e2;
    bottom: 10px;
    right: 20px;
    font-size: 13px;
    padding: 2px;
    border-radius: 5px;
    background-color: rgba(83, 80, 80, 0.8);
  }

  .articleTag{
    z-index: 8;
    position: absolute;
    color: #eae2e2;
    bottom: 10px;
    left: 20px;
    font-size: 13px;
    padding: 2px;
    border-radius: 5px;
    background-color: rgba(83, 80, 80, 0.8);
  }
  .articleTitle{
    z-index: 8;
    color: white;
    position: absolute;
    bottom: 40px;
    left: 10px;
  }
  .articleBackGround{
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 1s;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .articleBackImg{
    z-index: 9;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .articleBack{
    position: relative;
    width: auto;
    height: 150px;
    background-size: 100%;
    margin-top: 5px;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .title{
    font-family: 华文彩云;
    font-size: 20px;
    padding: 5px 5px 5px 0;
  }

  .icon{
    width: 25px;
    height: 25px;
  }
  .inner_number{
    font-family: test_zlz;
    position: absolute;
    right: 120px;
    bottom: 30px;
  }
  .number{
    cursor: pointer;
    display: inline-block;
    line-height: 22px;
    height: 20px;
    width: 20px;
    border-radius: 30px;
    margin: 0 10px;
  }
  #inner_word{
    font-family: test_zlz;
    position: absolute;
    text-align: left;
    color: white;
    font-size: 45px;
    left: 0;
    bottom: 20px;
    width: 750px;
  }
  #inner_word2{
    font-family: test_zlz;
    position: absolute;
    text-align: left;
    color: white;
    font-size: 45px;
    left: 900px;
    bottom: 20px;
    width: 750px;
  }
  .interval{
    overflow: hidden;
    margin-left: -480px;
    margin-top: 0px;
  }
  .index{
    height: 100%;
  }
  .header{
    z-index: 999;
    width: 100%;
    height:90px;
  }
  .body_top{
    position: relative;
    height:85%;
  }
  .background_left{
    overflow: hidden;
    display: inline-block;
    height: 780px;
    width: 70%;
    background-color: #2a7197;
  }
  .background_right{
    position: relative;
    display: inline-block;
    height: 780px;
    width: 30%;
  }
  .info{
    position: relative;
    margin-left: 28%;
    width: 30px;
    height: 100%;
  }

  .image{
    overflow: hidden;
    width: 75%;
    height: 780px;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
