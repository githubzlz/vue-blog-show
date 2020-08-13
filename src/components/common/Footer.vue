<template>
  <div class="footer">
    <div style=" position: absolute; top: 80px; width: 100%">
      <ul>
        <li>
          <div class="title">
            关于我
          </div>
          <div style="width: 180px; margin-top: 20px; text-align: left; color: rgb(69,67,67); line-height: 30px">
            我的梦想是要
            <br>
            成为最咸的咸鱼
            <br>
            最厉害的菜鸟
            <br>
          </div>
        </li>
        <li>
          <div class="title">
            版权说明
          </div>
          <div style="width: 180px; margin-top: 20px; text-align: left; color: rgb(69,67,67); text-indent: 20px">
            1. 本网站所有资源及博客文章均可自由转载、使用,转载请注明出处;
          </div>
          <div style="width: 180px; margin-top: 20px; text-align: left; color: rgb(69,67,67); text-indent: 20px">
            2. 本网站所有转载自网络的资源及文章会注明作者及出处,若有侵权请联系删除;
          </div>
        </li>
        <li>
          <div class="title">
            更多链接
          </div>
          <div style="width: 180px; margin-top: 20px; text-align: left;color: rgb(69,67,67)" >
            <div>
              Baidu  <a href="http://www.baidu.com" style=" margin-top: 10px; color: rgb(70,101,90)" target="_blank">http://www.baidu.com</a>
            </div>
            <br>
            <div>
              Google  <a href="http://www.google.com" style=" margin-top: 10px; color: rgb(70,101,90)" target="_blank">http://www.google.com</a>
            </div>
          </div>
        </li>
        <li>
          <div class="title">
            分享本网站<i class="el-icon-share" style="cursor: pointer"></i>
          </div>
          <div style="width: 180px; margin-top: 20px;text-align: left; ">
            <img class="icon" src="../../assets/image/icon_qq.png" alt="">
            <img class="icon" src="../../assets/image/icon_wechat.png" alt="">
            <img class="icon" src="../../assets/image/icon_qq.png" alt="">
            <img class="icon" src="../../assets/image/icon_wechat.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div style="position: absolute; bottom: 20px; width: 100%; color: #c49999; text-align: center">
      Copyright ©2020 All rights reserved | developed by
      <span style="color: #f6f8f5">
        <el-icon class="el-icon-star-off"></el-icon>
        zlzBlog
      </span> | 个人网站  | Version 1.0.0
    </div>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
  .icon{
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 10px;
    line-height: 180px;
  }
  .title{
    margin-left: 15px;
    text-align: left;
    color: white;
    font-size: 25px;
    font-family: test_zlz;
  }
  ul{
    height: 90px;
    margin: 0 20%;
    display: flex;
    justify-content: space-between;
  }
  li{
    display: inline-block;
    height: 60%;
    margin: 0 auto;
  }
  .footer{
    position: relative;
    width: 100%;
    height: 380px;
    background-color: #1f1212;
    margin-top: 100px;
  }
</style>
