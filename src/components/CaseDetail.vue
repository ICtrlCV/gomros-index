<template lang="jade">
#casebox
    .page-top(style="background-image: url(./static/case_top.jpg)")
    #content
        img(v-bind:src="imgserver + caseInfo.Img",style="width: 100%")
        h2 {{ caseInfo.Title }}
        span {{ caseInfo.CreateTime.substring(0,10) }}
        p {{ caseInfo.Content }}
</template>
<!--<template>
  <div id="casebox">
    <div class="page-top" style="background-image: url(./static/case_top.jpg);">
    </div>
    <div id="content">
      <img src="./static/temp.png" style="width: 100%">
      <h2>{{ '这是一个案例' }}</h2>
      <span>{{ '2023年03月13日11:54:13' }}</span>
      <p>{{ '这是案例介绍' }}</p>
    </div>
  </div>
</template>-->

<script>
import axios from "../router/http";

export default {
  data() {
    return {
      id: this.$route.params.id,
      caseInfo: {
        "Id": 0,
        "Title": "",
        "Img": "",
        "Type": 0,
        "Content": "",
        "CreateTime": ""
      }
    }
  },
  created() {
    axios
        .get(`/Cases/GetCasesById/${this.id}`)
        .then(response => {
          this.case = response.data;
        })
  }
}
</script>


<style scoped>
#casebox {
  background-color: rgb(20, 103, 159);
}

#content {
  background-color: #fff;
  width: 85%;
  margin: 0 auto;
  padding: 5% 10%;
  background-image: url(../../static/waitanbg.png);
  background-position-y: bottom;
  background-position-x: center;
}

#content img {
  padding: 6%;
}

p {
  font-size: 1.2rem;
  line-height: 30px;
  text-indent: 2.4rem;
}

h2 {
  color: #e13834;
}
</style>
