<template>
      <div class="news-card" >
        <img class="news-card__image" :src="camelCase.img" alt="">
        <div class="news-card__details d-flex flex-column">
          <router-link :to="`/news/${camelCase.id}`" class="news-card__title">{{camelCase.title}}</router-link>
          <time :class="{'news-date_test': isDate}" class="news-card__date">{{camelCase.date}}</time>
        </div>
      </div>
</template>

<script>
export default {
  name: 'PropsComponent',
  data(){
    return{
      isDate: true
    }
  },
  props:{
    camelCase:{
      type: Object,
      default:() => {},
    }
  },
  methods:{
    prettyDate(d){
      const date = new Date(d);
      const month = date.getMonth();
      const day = date.getDate();
      const minute = date.getMinutes();
      const hours = date.getHours();
      const time = `${hours}:${minute}`
      const year = date.getFullYear()
      let monthWord;

      switch (month){
        case 1:
          monthWord = 'Yanvar'
          break;
        case 2:
          monthWord = 'Fevral'
          break;
        case 3:
          monthWord = 'Mart'
          break;
        case 4:
          monthWord = 'Aprel'
          break;
        case 5:
          monthWord = 'May'
          break;
        case 6:
          monthWord = 'Iyun'
          break;
        case 7:
          monthWord = 'Iyul'
          break;
        case 8:
          monthWord = 'Avgust'
          break;
        case 9:
          monthWord = 'Sentabr'
          break;
        case 10:
          monthWord = 'Oktabr'
          break;
        case 11:
          monthWord = 'Noyabr'
          break;
        case 12:
          monthWord = 'Dekabr'
          break;
        default :
          monthWord = "Bunday oy mavjud emas:)"
          break;
      }

      return `${day} ${monthWord} ${year}, ${time}`
    }
  },
}
</script>
<style>

.news-card__image{
  height: 174px;
  object-fit: cover;
  pointer-events: none;
}

.news-card__details{
  padding: 12px;
  background: #F7F8FA;
  backdrop-filter: blur(8px);
}

.news-card__title{
  font-family: Fira Sans, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #202124;
}

.news-card__date{
  font-family: Fira Sans, sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: #626469;
}


</style>
