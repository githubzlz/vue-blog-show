<template>
 <div class="blogDetail">
   <div class="header" id="header_top4" style="position: fixed">
     <v-header></v-header>
   </div>
    <div class="body" style="position:relative; top: 90px">
      <el-row v-if="1 === 2">
        <el-col :span="4"> <br> </el-col>
        <el-col :span="16">
          <div class="top_title">
            <img src="http://192.168.233.101/group1/M00/00/00/wKjpZV8rZoCAPZtvAA5lGWi2HMU866.jpg" alt="" style="width: 100%;">
            <div class="inner_title">
              这是标题。。这个是标题!
              <br>
              这是标题。。这个是标题!
            </div>
          </div>
        </el-col>
        <el-col :span="4"><br></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"> <br> </el-col>
        <el-col :span="5">
          <el-card style="margin: 20px">
            <div style="padding: 14px; text-align: left">
              <div class="class_title">
                <el-icon class="el-icon-menu" style="margin-right: 10px"></el-icon>
                <span>目录</span>
                <div class="divider_self" style="background-color: #deea6c;"></div>
              </div>
            </div>
          </el-card>
          <el-card style="margin: 20px">
            <div style="padding: 14px; text-align: left">
              <div class="class_title">
                <el-icon class="el-icon-collection" style="margin-right: 10px"></el-icon>
                <span>推荐</span>
                <div class="divider_self" style="background-color: #b12424;"></div>
              </div>
              <div class="recommend" v-for="item in 6">
                <div class="recommend_title">
                  好吃的汉堡
                </div>
                <div class="recommend_type">
                  美食
                </div>
              </div>
            </div>
          </el-card>
          <el-card style="margin: 20px">
            <div style="padding: 14px; text-align: left">
              <div class="class_title">
                <el-icon class="el-icon-date" style="margin-right: 10px"></el-icon>
                归档
                <div class="divider_self" style="background-color: #baa667"></div>
              </div>
              <div class="sort_title">
                <div class="sort_title_left">
                  2020年7月
                </div>
                <div class="sort_title_right">30</div>
              </div>
              <div class="sort_title">
                <div class="sort_title_left">
                  2020年6月
                </div>
                <div class="sort_title_right">30</div>
              </div>
              <div class="sort_title">
                <div class="sort_title_left">
                  2020年5月
                </div>
                <div class="sort_title_right">30</div>
              </div>
              <div class="sort_title">
                <div class="sort_title_left">
                  2020年4月
                </div>
                <div class="sort_title_right">30</div>
              </div>
              <div class="sort_title">
                <div class="sort_title_left">more...</div>
                <div class="sort_title_right">300</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="11">
          <el-card class="detail-blog" style="margin-top: 20px">
            <div class="detail-blog-title">
              <el-tag>
                原创
              </el-tag>
              <div class="title">&nbsp;&nbsp;&nbsp;
                这是标题。。这个是标题!这是标题。。这个是标题!
              </div>
              <div class="line-title"></div>
              <div class="detail-blog-info">
                <el-icon class="el-icon-user" style="margin-right: 5px; margin-left: 10px;"></el-icon>朱林忠
                <el-icon class="el-icon-reading" style="margin-right: 5px; margin-left: 10px;"></el-icon>800万阅读
                <el-icon class="el-icon-star-off" style="margin-right: 5px; margin-left: 10px;"></el-icon>35.8万星
                <el-icon class="el-icon-time" style="margin-right: 5px; margin-left: 10px;"></el-icon>2019/12/18
              </div>
            </div>
            <div class="detail-blog-body">
              这个地方是富文本编辑器的展示
            </div>
            <div class="detail-blog-footer">
              <el-icon class="el-icon-reading" style="margin-right: 5px; margin-left: 10px;"></el-icon>800万阅读
              <el-icon class="el-icon-star-off" style="margin-right: 5px; margin-left: 10px;"></el-icon>35.8万星
              <a href=""><span style="position: absolute; right: 20px;">举报</span></a>
            </div>
          </el-card>
          <el-card style="margin-top: 10px">
            <Comment></Comment>
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
export default {
  name: "BlogDetail",
  components: {Comment},
  data(){
    return{
      testI:'22222',
      textarea:'',
      searchInput:'',
      scrollIndex: 0,
    }
  },
  methods:{
    test: function(){
      console.log(MessageTree)
    },
    handleScroll4: function () {
      let scrollTop = window.pageYOffset || document.getElementById("header_top4").scrollTop  || document.body.scrollTop;
      if(scrollTop >= 150){
        if(scrollTop > this.scrollIndex){
          document.getElementById("header_top4").style.position = "";
        }else {
          document.getElementById("header_top4").style.top = "0";
          document.getElementById("header_top4").style.position = "fixed";
        }
        this.scrollIndex = scrollTop;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll4, false);
  },
  destroyed() {
    window.removeEventListener("scroll",  this.handleScroll4, false);
  }
}
</script>

<style scoped>
  .blog_comment{
    position: relative;
    background-color: rgba(198, 164, 164, 0.1);
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
  }
  .inner_title{
    text-align: center;
    width: 100%;
    top: 40%;
    position: absolute;
    font-size: 50px;
    color: white;
    font-family: 华文行楷;
    font-weight: bolder;
  }
  .top_title{
    position: relative;
    margin-left: 20px;
    background-size: cover;
  }
  .class_title:hover .divider_self{
    width: 100%;
  }
  .sort_title_right{
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .sort_title_left{
    line-height: 40px;
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
    height: 40px;
    background-color: white;
    margin: 15px auto;
  }
  .recommend:hover{
    color: white;
    border: 1px solid #e3d2d2;
    background-color: rgba(205, 174, 142, 0.5);
  }
  .recommend{
    color: rgba(0,0,0,0.6);
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0);
    transition: all 600ms;
    background-color: rgba(92, 195, 144, 0);
    margin: 5px 0;
    border-radius: 5px;
    line-height: 30px;
    padding: 0 5px;
  }
  .recommend_title{
    display: inline-block;
    width: 80%;
    height: 30px;
  }
  .recommend_type{
    display: inline-block;
    width: 20%;
    height: 30px;
  }
  .divider_self{
    background-color: #58ad66;
    width: 30%;
    height: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    transition: width 800ms;
  }
  .class_title{
    font-family: 华文彩云;
    font-size: 20px;
    padding: 5px 5px 5px 0;
    z-index: 99;
  }
  .detail-blog-title {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #ffffff;
    position: relative;
    text-align: left;
    font-size: 23px;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    padding: 10px;
    padding-bottom: 0;
  }
  .title {
    margin-top: 5px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:1;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
  }
  .line-title {
    bottom: 35px;
    height: 1px;
    background-color: rosybrown;
    margin: 5px;
    margin-bottom: 8px;
  }
  .detail-blog-info {
    overflow: hidden;
    height: 25px;
    color: rgba(0,0,0,0.7);
    font-size: 14px;
  }
  .detail-blog-body {
    padding: 5px;
    margin-top: 5px;
    background-color: #ffffff;
    height: 800px;
  }
  .detail-blog-footer {
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 5px;
    height: 38px;
    line-height: 38px;
  }
  .body{
    margin-bottom: 50px;
  }
  .header{
    z-index: 999;
    width: 100%;
    height:90px;
  }
  .blogDetail{
    text-align: left;
  }
</style>
