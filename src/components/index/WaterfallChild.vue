<template>
  <div class="container-water-fall">
    <el-row>
      <el-col :span="12">
        <el-card v-if="noData" shadow="hover" style="background-color: rgb(245,255,255); margin: 20px">
          暂无数据
        </el-card>
        <div v-for="(item,index) in list1" :key="index">
          <el-card v-if="item.blogRecommend.imageUrl != null" shadow="hover" style="background-color: rgb(245,255,255); margin: 20px">
            <div class="image_div">
              <div class="background">
              </div>
              <img :src="item.blogRecommend.imageUrl" class="image" v-on:click="toDetail(item)">
            </div>
            <div style="padding: 14px; text-align: left">
              <div class="title" v-on:click="toDetail(item)">{{item.title}}</div>
              <div class="bottom clearfix">
                <i class="el-icon-date"></i>
                <time class="time">{{getDate(item.lastModifiedTime)}}</time>
                <div style="display: inline-block; margin-right: 15px; margin-top: 10px">
                  <div class="icon-my" style="margin-left: 25px; width: 18px; height: 18px; display: inline-block"/>
                  <span style="margin-left: 5px;">{{item.blogPublicInfos.readings}}</span>
                </div>
                <div style="display: inline-block; margin-right: 15px;margin-top: 10px">
                  <i class="el-icon-star-off"></i>
                  <span style="margin-left: 5px;">{{item.blogPublicInfos.goods}}</span>
                </div>
                <div style="display: inline-block;margin-right: 15px;margin-top: 10px">
                  <i class="el-icon-chat-line-square" style="cursor: pointer" v-on:click="toDetail(item)"></i>
                  <span style="margin-left: 5px; cursor: pointer" v-on:click="toDetail(item)">{{item.blogPublicInfos.comments}}</span>
                </div>
              </div>
              <div class="card_body">
                {{item.summary}}
              </div>
              <el-button type="text" class="button" v-on:click="toDetail(item)">阅读全文 - ></el-button>
            </div>
          </el-card>
          <el-card v-if="item.blogRecommend.imageUrl == null" shadow="hover" style="background-color: rgb(245,255,255); margin: 20px">
            <div style="padding: 14px; text-align: left">
              <div class="title" v-on:click="toDetail(item)">{{item.title}}</div>
              <div class="bottom clearfix">
                <i class="el-icon-date"></i>
                <time class="time">{{getDate(item.lastModifiedTime)}}</time>
                <div style="display: inline-block; margin-right: 15px; margin-top: 10px">
                  <div class="icon-my" style="margin-left: 25px; width: 18px; height: 18px; display: inline-block"/>
                  <span style="margin-left: 5px;">{{item.blogPublicInfos.readings}}</span>
                </div>
                <div style="display: inline-block; margin-right: 15px;margin-top: 10px">
                  <i class="el-icon-star-off"></i>
                  <span style="margin-left: 5px;">{{item.blogPublicInfos.goods}}</span>
                </div>
                <div style="display: inline-block;margin-right: 15px;margin-top: 10px">
                  <i class="el-icon-chat-line-square" style="cursor: pointer" v-on:click="toDetail(item)"></i>
                  <span style="margin-left: 5px; cursor: pointer" v-on:click="toDetail(item)">{{item.blogPublicInfos.comments}}</span>
                </div>
              </div>
              <div class="card_body">
                {{item.summary}}
              </div>
              <el-button type="text" class="button" v-on:click="toDetail(item)">阅读全文 - ></el-button>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div v-for="(item,index) in list2" :key="index">
          <el-card v-if="item.blogRecommend.imageUrl != null" shadow="hover" style="background-color: rgb(245,255,255); margin: 20px">
            <div class="image_div">
              <div class="background">
              </div>
              <img :src="item.blogRecommend.imageUrl" class="image" v-on:click="toDetail(item)">
            </div>
            <div style="padding: 14px; text-align: left">
              <div class="title" v-on:click="toDetail(item)">{{item.title}}</div>
              <div class="bottom clearfix">
                <i class="el-icon-date"></i>
                <time class="time">{{getDate(item.lastModifiedTime)}}</time>
                <div style="display: inline-block; margin-right: 15px; margin-top: 10px">
                  <div class="icon-my" style="margin-left: 25px; width: 18px; height: 18px; display: inline-block"/>
                  <span style="margin-left: 5px;">{{item.blogPublicInfos.readings}}</span>
                </div>
                <div style="display: inline-block; margin-right: 15px;margin-top: 10px">
                  <i class="el-icon-star-off"></i>
                  <span style="margin-left: 5px;">{{item.blogPublicInfos.goods}}</span>
                </div>
                <div style="display: inline-block;margin-right: 15px;margin-top: 10px">
                  <i class="el-icon-chat-line-square" style="cursor: pointer" v-on:click="toDetail(item)"></i>
                  <span style="margin-left: 5px; cursor: pointer" v-on:click="toDetail(item)">{{item.blogPublicInfos.comments}}</span>
                </div>
              </div>
              <div class="card_body">
                {{item.summary}}
              </div>
              <el-button type="text" class="button" v-on:click="toDetail(item)">阅读全文 - ></el-button>
            </div>
          </el-card>
          <el-card v-if="item.blogRecommend.imageUrl == null" shadow="hover" style="background-color: rgb(245,255,255); margin: 20px">
            <div style="padding: 14px; text-align: left">
              <div class="title" v-on:click="toDetail(item)">{{item.title}}</div>
              <div class="bottom clearfix">
                <i class="el-icon-date"></i>
                <time class="time">{{getDate(item.lastModifiedTime)}}</time>
                <div style="display: inline-block; margin-right: 15px; margin-top: 10px">
                  <div class="icon-my" style="margin-left: 25px; width: 18px; height: 18px; display: inline-block"/>
                  <span style="margin-left: 5px;">{{item.blogPublicInfos.readings}}</span>
                </div>
                <div style="display: inline-block; margin-right: 15px;margin-top: 10px">
                  <i class="el-icon-star-off"></i>
                  <span style="margin-left: 5px;">{{item.blogPublicInfos.goods}}</span>
                </div>
                <div style="display: inline-block;margin-right: 15px;margin-top: 10px">
                  <i class="el-icon-chat-line-square" style="cursor: pointer" v-on:click="toDetail(item)"></i>
                  <span style="margin-left: 5px; cursor: pointer" v-on:click="toDetail(item)">{{item.blogPublicInfos.comments}}</span>
                </div>
              </div>
              <div class="card_body">
                {{item.summary}}
              </div>
              <el-button type="text" class="button" v-on:click="toDetail(item)">阅读全文 - ></el-button>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {parameter} from "@/api/parameter";
import {api} from "@/api/api";
import { Loading } from 'element-ui';

export default {
  props: ['plant'],
  watch:{
    plant : function (a){
      this.searchContent = a.trim();
      let para = parameter.getBlogList;
      para.search = this.searchContent;
      //this.getList(JSON.stringify(para));
    }
  },
  name: "WaterfallChild",
  data(){
    return{
      searchContent:'',
      noData: true,
      list1:[
        {
          imgShow:'',
          lastModifiedTime:'',
          summary:'',
          imgSrc:'',
          blogPublicInfos:{
            comments: 0,
            goods: 0,
            readings: 0
          },
          blogRecommend:{
            imageUrl: null
          },
        }
      ],
      list2:[
        {
          imgShow:'',
          summary:'',
          imgSrc:'',
          blogPublicInfos:{
            comments: 0,
            goods: 0,
            readings: 0
          },
          blogRecommend:{
            imageUrl: null
          },
          lastModifiedTime:''
        }
      ],
      show2: true,
      data:[
        {
          title:'title1',
          img:'../../../public/image/icon_qq.png',
          liked:'../../../public/image/icon_qq.png'
        },{
          title:'title2',
          img:'../../../public/image/icon_qq.png',
          liked:"../../../public/image/icon_qq.png"
        }
      ],
    }
  },
  created() {
    // let loadingInstance1 = Loading.service({ fullscreen: true });
    // window.onload = function (){
    //   loadingInstance1.close();
    // }
  },
  methods:{
    toDetail(item){
      this.$router.push({name:'detail',params: {id:item.id}})
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
    scroll(scrollData){
      console.log(scrollData)
    },
    getList(){
      this.list1 = [];
      this.list2 = [];
      api.getBlogList().then(res =>{
        const list = res.entity;
        if(list.length === 0){
          this.noData = true;
          console.log(this.list1)
        }else {
          this.noData = false;
          let i = 0;
          list.forEach(item =>{
            if(i%2 === 0){
              this.list1.push(item);
            }else if(i%2 === 1){
              this.list2.push(item)
            }
            i++;
          })
        }
      })
    }
  },
  mounted() {
    this.getList(JSON.stringify(parameter.getBlogList));
  }
}
</script>

<style scoped>

  .icon-my{
    background-image: url("../../assets/image/icon_eye.png");
    background-size: 18px 18px;
    background-position-y: 2px;
  }
  .image_div:hover .background{
    transform: translate(140%, 0);
  }

  .background{
    position: absolute;
    width: 80%;
    height: 100%;
    z-index: 12;
    background-color: rgba(255,255,255,0.3);
    transition: all 800ms;
    transform: translate(-100%, 0);
  }
  .image{
    cursor: pointer;
    border-radius: 5px;
    transition: all 700ms;
    width: 100%;
    height: 230px;
  }
  .image_div{
    width: 100%;
    height: 230px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    border-radius: 5px
  }
  .card_body{
    margin:20px 0;
    line-height: 30px;
    color: rgba(0,0,0,0.5);
  }
  .time{
    margin-left: 10px;
  }
  .title{
    cursor: pointer;
    font-family: 华文楷体;
    font-weight: bolder;
    margin:20px 0;
    text-align: left;
    font-size: 23px;
  }
</style>
