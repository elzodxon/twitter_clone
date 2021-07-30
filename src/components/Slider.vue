<template>
  <div>
    <VueSlickCarousel v-bind="settings" :dots="false">
      <props-component v-for="(item, index) in news" :key="index" :camel-case="item"/>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import PropsComponent from '../components/props'

export default {
  name: 'Slider',
  components: { VueSlickCarousel, PropsComponent },
  data(){
    return{
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
        },
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
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 6,
        centerPadding: '20px',
        infinite: true,
        swipeToSlide: true
      },
    }
  }
}
</script>


<style>
body{
  background: #0C0537;
}
.slick-slide{
  padding: 10px !important;
}
</style>
