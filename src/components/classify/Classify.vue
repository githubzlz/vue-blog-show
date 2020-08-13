<template>
  <div class="classify">
    <div class="header" id="header_top" style="position: fixed">
      <v-header></v-header>
    </div>
    <div class="body" style="position:relative ; top: 90px">
      <div class="body_top">
        <div class="title">技术博文</div>
        <div class="sub_title">人生有很多关隘，有很多选择，但唯独在技术这条路上，我觉得是要一直走下去的！</div>
      </div>
      <el-row style="margin-top: 30px; margin-bottom: 20px">
        <el-col :span="4" > <br> </el-col>
        <el-col :span="5">
          <div id="keep-top">
            <el-card style="margin: 20px">
              <div style="padding: 14px; text-align: left">
                <div class="class_title">
                  <span>分类检索:</span>
                  <span style="float: right">技术</span>
                </div>
                <div style="margin-top: 20px">
                  <el-cascader
                      placeholder="试试搜索：Spring"
                      :options="options"
                      filterable
                      checkStrictly
                      v-model="searchInput"
                  >
                  </el-cascader>
                  <el-button slot="append" icon="el-icon-search" v-on:click="getInputValue"></el-button>
                </div>
              </div>
            </el-card>
            <el-card style="margin: 20px">
              <div style="padding: 14px; text-align: left">
                <div class="class_title">
                  <span>全部分类:</span>
                  <div class="divider_self" style="background-color: #000000;"></div>
                </div>
                <div style="font-size: 20px">
                  <el-tree
                      :data="options"
                      :props="defaultProps"
                      accordion
                      @node-click="handleNodeClick">
                  </el-tree>
                </div>
              </div>
            </el-card>
            <el-card style="margin: 20px">
              <div style="padding: 14px; text-align: left">
                <div class="class_title">
                  <span>推荐阅读:</span>
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
                  <el-icon class="el-icon-collection" style="margin-right: 10px"></el-icon>
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
          </div>
          <br>
        </el-col>
        <el-col :span="10">
          <el-card style="margin-top: 20px">
            <div class="class_header">
              <el-icon class="el-icon-house"></el-icon>
              {{classTitle}}
            </div>
            <div class="card_one" style="background-color: rgb(245,247,252); margin: 20px">
              <div class="card_one_left">
                <img class="card_one_img" style="width: 100%; height: 100%;" src="http://192.168.233.101/group1/M00/00/00/wKjpZV8rZeuAQL57ABlGo9Z_jnE577.jpg">
              </div>
              <div class="card_one_right">
                <div class="list_title">像素处理</div>
                <div class="card_one_right_info">
                  px为绝对静止像素单元，如果模式字体大小篡改，而缩进px单位值是不随字体大小而篡改，那么缩进就不是恰恰2个笔墨职位空格缩进间距了，修正翰墨大小就要再修正缩进值，相比贫穷困难。
                </div>
                <div class="card_one_right_date">
                  <i class="el-icon-date"></i>
                  <time class="time">2020/07/30 11:49:38</time>
                  <i class="el-icon-chat-line-square" style="margin-left: 20px"></i>
                  <span style="margin-left: 5px">230</span>
                  <i class="el-icon-star-on" style="margin-left: 10px; color: #66adab"></i>
                  <span style="margin-left: 5px">23000</span>
                </div>
                <el-button type="text" class="button" style="padding:0;position: absolute; bottom: 4px; right: 0">阅读全文 - ></el-button>
              </div>
            </div>
            <div class="card_one" style="background-color: rgb(245,247,252); margin: 20px">
              <div class="card_one_left">
                <img class="card_one_img" style="width: 100%; height: 100%;" src="http://192.168.233.101/group1/M00/00/00/wKjpZV8rZoCAPZtvAA5lGWi2HMU866.jpg">
              </div>
              <div class="card_one_right">
                <div class="list_title">像素处理</div>
                <div class="card_one_right_info">
                  px为绝对静止像素单元，如果模式字体大小篡改，而缩进px单位值是不随字体大小而篡改。
                </div>
                <div class="card_one_right_date">
                  <i class="el-icon-date"></i>
                  <time class="time">2020/07/30 11:49:38</time>
                  <i class="el-icon-chat-line-square" style="margin-left: 20px"></i>
                  <span style="margin-left: 5px">230</span>
                  <i class="el-icon-star-on" style="margin-left: 10px; color: #66adab"></i>
                  <span style="margin-left: 5px">23000</span>
                </div>
                <el-button type="text" class="button" style="padding:0;position: absolute; bottom: 4px; right: 0">阅读全文 - ></el-button>
              </div>
            </div>
            <div class="card_two" style="background-color: rgb(245,247,252); margin: 20px">
              <div class="list_title">像素处理</div>
              <div class="card_one_right_info" style="height: 60px">
                px为绝对静止像素单元，如果模式字体大小篡改，而缩进px单位值是不随字体大小而篡改，那么缩进就不是恰恰2个笔墨职位空格缩进间距了，修正翰墨大小就要再修正缩进值，相比贫穷困难。
              </div>
              <div class="card_one_right_date" style="bottom: 20px">
                <i class="el-icon-date"></i>
                <time class="time">2020/07/30 11:49:38</time>
                <i class="el-icon-chat-line-square" style="margin-left: 20px"></i>
                <span style="margin-left: 5px">23</span>
                <i class="el-icon-star-on" style="margin-left: 10px; color: #66adab"></i>
                <span style="margin-left: 5px">23000</span>
              </div>
              <el-button type="text" class="button" style="padding:0;position: absolute; bottom: 24px; right: 20px">阅读全文 - ></el-button>
            </div>
            <div class="card_one" style="background-color: rgb(245,247,252); margin: 20px">
              <div class="card_one_left">
                <img class="card_one_img" style="width: 100%; height: 100%;" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              </div>
              <div class="card_one_right">
                <div class="list_title">像素处理</div>
                <div class="card_one_right_info">
                  px为绝对静止像素单元，如果模式字体大小篡改，而缩进px单位值是不随字体大小而篡改，那么缩进就不是恰恰2个笔墨职位空格缩进间距了，修正翰墨大小就要再修正缩进值，相比贫穷困难。
                </div>
                <div class="card_one_right_date">
                  <i class="el-icon-date"></i>
                  <time class="time">2020/07/30 11:49:38</time>
                  <i class="el-icon-chat-line-square" style="margin-left: 20px"></i>
                  <span style="margin-left: 5px">230</span>
                  <i class="el-icon-star-on" style="margin-left: 10px; color: #66adab"></i>
                  <span style="margin-left: 5px">23000</span>
                </div>
                <el-button type="text" class="button" style="padding:0;position: absolute; bottom: 4px; right: 0">阅读全文 - ></el-button>
              </div>
            </div>
            <div class="card_one" style="background-color: rgb(245,247,252); margin: 20px">
              <div class="card_one_left">
                <img class="card_one_img" style="width: 100%; height: 100%;" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              </div>
              <div class="card_one_right">
                <div class="list_title">像素处理</div>
                <div class="card_one_right_info">
                  px为绝对静止像素单元，如果模式字体大小篡改，而缩进px单位值是不随字体大小而篡改，那么缩进就不是恰恰2个笔墨职位空格缩进间距了，修正翰墨大小就要再修正缩进值，相比贫穷困难。
                </div>
                <div class="card_one_right_date">
                  <i class="el-icon-date"></i>
                  <time class="time">2020/07/30 11:49:38</time>
                  <i class="el-icon-chat-line-square" style="margin-left: 20px"></i>
                  <span style="margin-left: 5px">230</span>
                  <i class="el-icon-star-on" style="margin-left: 10px; color: #66adab"></i>
                  <span style="margin-left: 5px">23000</span>
                </div>
                <el-button type="text" class="button" style="padding:0;position: absolute; bottom: 4px; right: 0">阅读全文 - ></el-button>
              </div>
            </div>
            <div class="card_two" style="background-color: rgb(245,247,252); margin: 20px">
              <div class="list_title">像素处理</div>
              <div class="card_one_right_info" style="height: 60px">
                px为绝对静止像素单元，如果模式字体大小篡改，而缩进px单位值是不随字体大小而篡改，那么缩进就不是恰恰2个笔墨职位空格缩进间距了，修正翰墨大小就要再修正缩进值，相比贫穷困难。
              </div>
              <div class="card_one_right_date" style="bottom: 20px">
                <i class="el-icon-date"></i>
                <time class="time">2020/07/30 11:49:38</time>
                <i class="el-icon-chat-line-square" style="margin-left: 20px"></i>
                <span style="margin-left: 5px">23</span>
                <i class="el-icon-star-on" style="margin-left: 10px; color: #66adab"></i>
                <span style="margin-left: 5px">23000</span>
              </div>
              <el-button type="text" class="button" style="padding:0;position: absolute; bottom: 24px; right: 20px">阅读全文 - ></el-button>
            </div>
            <div class="card_one" style="background-color: rgb(245,247,252); margin: 20px">
              <div class="card_one_left">
                <img class="card_one_img" style="width: 100%; height: 100%;" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              </div>
              <div class="card_one_right">
                <div class="list_title">像素处理</div>
                <div class="card_one_right_info">
                  px为绝对静止像素单元，如果模式字体大小篡改，而缩进px单位值是不随字体大小而篡改，那么缩进就不是恰恰2个笔墨职位空格缩进间距了，修正翰墨大小就要再修正缩进值，相比贫穷困难。
                </div>
                <div class="card_one_right_date">
                  <i class="el-icon-date"></i>
                  <time class="time">2020/07/30 11:49:38</time>
                  <i class="el-icon-chat-line-square" style="margin-left: 20px"></i>
                  <span style="margin-left: 5px">230</span>
                  <i class="el-icon-star-on" style="margin-left: 10px; color: #66adab"></i>
                  <span style="margin-left: 5px">23000</span>
                </div>
                <el-button type="text" class="button" style="padding:0;position: absolute; bottom: 4px; right: 0">阅读全文 - ></el-button>
              </div>
            </div>
            <div class="card_two" style="background-color: rgb(245,247,252); margin: 20px">
              <div class="list_title">像素处理</div>
              <div class="card_one_right_info" style="height: 60px">
                px为绝对静止像素单元，如果模式字体大小篡改，而缩进px单位值是不随字体大小而篡改，那么缩进就不是恰恰2个笔墨职位空格缩进间距了，修正翰墨大小就要再修正缩进值，相比贫穷困难。
              </div>
              <div class="card_one_right_date" style="bottom: 20px">
                <i class="el-icon-date"></i>
                <time class="time">2020/07/30 11:49:38</time>
                <i class="el-icon-chat-line-square" style="margin-left: 20px"></i>
                <span style="margin-left: 5px">23</span>
                <i class="el-icon-star-on" style="margin-left: 10px; color: #66adab"></i>
                <span style="margin-left: 5px">23000</span>
              </div>
              <el-button type="text" class="button" style="padding:0;position: absolute; bottom: 24px; right: 20px">阅读全文 - ></el-button>
            </div>
            <el-pagination
                :hide-on-single-page="false"
                background
                layout="prev, pager, next"
                :total="total">
            </el-pagination>
          </el-card>
        </el-col>
        <el-col :span="4">
          <br>
        </el-col>
      </el-row>
    </div>
    <el-backtop :bottom="100">
      <div>
        <el-icon class="el-icon-arrow-up"></el-icon>
      </div>
    </el-backtop>
    <div class="footer" style="margin-top: 150px">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>

export default {
  name: "Classify",
  data(){
    return{
      scrollIndex: 0,
      total:100,
      searchInput:'',
      classTitle:'数据库',
      options: [{
        value: '数据库',
        label: '数据库',
        children: [{
          value: 'MYSQL',
          label: 'MYSQL',
          children: [{
            value: '索引',
            label: '索引'
          }, {
            value: '主键',
            label: '主键'
          }, {
            value: '优化',
            label: '优化'
          }, {
            value: 'SQL',
            label: 'SQL'
          }]
        }]
        },{
          value: 'JAVA',
          label: 'JAVA',
          children: [{
            value: 'cexiangdaohang',
            label: 'JAVA基础'
          }, {
            value: 'dingbudaohang',
            label: 'Spring'
          },{
            value: 'dingbudaoha',
            label: 'SpringBoot'
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods:{
    getInputValue(){
      this.classTitle = this.searchInput;
    },
    handleNodeClick(data) {
      this.classTitle = data.label;
    },
    handleScroll2: function () {
      let scrollTop = window.pageYOffset || document.getElementById("header_top").scrollTop  || document.body.scrollTop;
      if(scrollTop >= 180){
        if(scrollTop > this.scrollIndex){
          document.getElementById("header_top").style.position = "";
        }else {
          document.getElementById("header_top").style.position = "fixed";
        }
        this.scrollIndex = scrollTop;
      }
    },
  },
  mounted() {
    //document.getElementById("header_top").style.display = "none";
    window.addEventListener('scroll', this.handleScroll2, false);
  },
  destroyed() {
    window.removeEventListener("scroll",  this.handleScroll2, false);
  }
}
</script>

<style scoped>
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
  .recommend:hover{
    border: 1px solid #e3d2d2;
    background-color: rgba(92, 195, 144, 0.5);
  }
  .recommend{
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0);
    transition: all 600ms;
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

  .class_title:hover .divider_self{
    width: 100%;
  }
  .card_one_img{
    transition: all 800ms;
    width: 100%;
    height: 100%;
  }
  .card_two:hover{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .card_two{
    position: relative;
    transition: all 300ms;
    border-radius: 5px;
    text-align: left;
    height: 150px;
    padding: 20px;
  }

  .class_header{
    text-align: left;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
    font-family: 华文楷体;
    font-weight: bolder;
  }
  .card_one_right_info{
    text-indent:2em;
    height: 90px;
    line-height: 25px;
    display: table-cell;
    vertical-align: middle;
  }
  .card_one_right_date{
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 0;
  }
  .card_one:hover{
   box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .card_one{
    transition: all 300ms;
    border-radius: 5px;
    text-align: left;
    height: 180px;
    padding: 20px;
  }
  .card_one_left:hover .card_one_img{
    transform: scale(1.1);
  }
  .card_one_left{
    border-radius: 10px;
    height: 100%;
    overflow: hidden;
    display: inline-block;
    width: 35%;
  }
  .card_one_right{
    height: 100%;
    position: relative;
    margin-left: 25px;
    text-align: left;
    vertical-align: top;
    display: inline-block;
    width: 60%;
  }
  .list_title{
    text-indent:30px;
    height: 30px;
    width: 100%;
    font-size: 21px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  /deep/ .el-tree-node{
    padding: 5px;
  }
  /deep/ .el-tree-node__label{
    width: auto;
    font-family: 华文楷体;
    font-weight: bolder;
    font-size: 15px;
    color: #999999;
    letter-spacing: 1px;
  }
  .divider_self{
    background-color: #58ad66;
    width: 35%;
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
  .header{
    z-index: 999;
    width: 100%;
    height:90px;
  }
</style>
