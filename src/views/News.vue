<template>
  <div>
    <main-header/>
    <div class="container mt-5">
      <div class="row" style="row-gap: 15px;">
        <div class="col-3" v-for="(item, index) in newsArray" :key="index">
          <news-card :news-item="item" />
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <slider/>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import NewsCard from "../components/NewsCard";
import MainHeader from "../components/MainHeader";
import Slider from "../components/Slider";
import PropsComponent from '../components/props'
export default {
  components: {NewsCard, MainHeader, Slider,PropsComponent},
  data(){
    return{
      newsArray:[],
      show: 1,
      news:[
        {
          id: 1,
          img: 'https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg',
          title: 'Learning props in Vuejs',
          date: new Date()
        },
        {
          id: 2,
          img: 'https://picsum.photos/400/400',
          title: 'Learning props in Vuejs 2',
          date: new Date()
        },
        {
          id: 3,
          img: 'https://picsum.photos/400/400',
          title: 'Learning props in Vuejs 3',
          date: new Date()
        },
        {
          id: 4,
          img: 'https://picsum.photos/400/400',
          title: 'Learning props in Vuejs 4',
          date: new Date()
        }
      ],
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
