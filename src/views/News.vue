<template>
  <div class="container mt-5">
     <div class="row" style="row-gap: 15px;">
       <div class="col-3" v-for="(item, index) in newsArray" :key="index">
         <news-card :news-item="item" />
       </div>
     </div>
  </div>
</template>
<script>
import NewsCard from "../components/NewsCard";
export default {
  components: {NewsCard},
  data(){
    return{
      newsArray:[]
    }
  },

  mounted() {
    this.getNews()
  },
  methods:{
    getNews(){
      fetch('https://api.uzsuv.uz/api/v1/press/news/')
        .then(response => response.json())
        .then(data => this.newsArray = data.results);
    }
  }
}
</script>
