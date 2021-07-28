<template>
  <div>
    <main-header/>
    <div class="container mt-5">
      <div class="row" style="row-gap: 15px;">
        <div class="col-3" v-for="(item, index) in newsArray" :key="index">
          <news-card :news-item="item" />
        </div>
      </div>
    </div>

    <div>
      <button @click="change(1)">1</button>
      <button @click="change(2)">2</button>
      <button @click="change(3)">3</button>
      <button @click="change(4)">4</button>

      <div v-if="show === 1">1-info</div>
      <div v-else-if="show === 2">2-info</div>
      <div v-else-if="show === 3">3-info</div>
      <div v-else>4-info</div>
    </div>

  </div>
</template>
<script>
import NewsCard from "../components/NewsCard";
import MainHeader from "../components/MainHeader";
export default {
  components: {NewsCard, MainHeader},
  data(){
    return{
      newsArray:[],
      show: 1
    }
  },
  mounted() {
    this.getNews()
  },
  methods: {
    getNews() {
      fetch('https://api.uzsuv.uz/api/v1/press/news/')
        .then(response => response.json())
        .then(data => this.newsArray = data.results);
    },
    change(id){
      this.show = id
    }
  }
}
</script>
