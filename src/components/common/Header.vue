<template>
  <div class="header">
    <div style="background-color: white">
      <ul>
        <li>
          <router-link :to="'/home'" class="router-link">
              首页
          </router-link>
        </li>
        <li>
          <router-link :to="'/classify'" class="router-link">
            技术博文
          </router-link>
        </li>
        <li>
          <router-link :to="'/classify'" class="router-link">
            生活博文
          </router-link>
        </li>
        <li class="main">
          <router-link :to="'/about'" >
            <div class="line" style="margin-right: 20px" >
              <div style="width: 60px; height: 1px; background-color: black; margin-bottom: 5px; margin-left: 20px"></div>
              <div style="width: 80px; height: 1px; background-color: black"></div>
            </div>
            <img class="logo" alt="" src="../../../public/logo.png" style="width: 163px; height: 36px">
            <div class="line" style="margin-left: 20px">
              <div style="width: 60px; height: 1px; background-color: black; margin-bottom: 5px"></div>
              <div style="width: 80px; height: 1px; background-color: black"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/time'" class="router-link">
            时间轴
          </router-link>
        </li>
        <li>
          <router-link :to="'/website'" class="router-link">
            留言板
          </router-link>
        </li>
        <li>
          <router-link :to="'/about'" class="router-link">
            网站信息
          </router-link>
        </li>
      </ul>
    </div>
    <div class="header_bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
  },
  methods:{
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
  ul{
    height: 90px;
    margin: 0 20%;
    display: flex;
    justify-content: space-between;
  }
  li{
    display: inline-block;
    line-height: 115px;
    height: 100%;
    margin: 0 auto;
    cursor: pointer;
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
