<template>
 <div class="container">
   <pre>{{show}}</pre>
     <div class="row">
     <div class="col-4" v-for="(item, index) in currencies.data" :key="index">
       <div >
         <span>{{item.code}} = {{item.rate}} so'm</span>
         <span :class="item.diff < 0 ? 'red': 'green'">{{item.diff}}</span>
       </div>
     </div>
     <div class="col-12">
       <div class="single-news">
         <h4 class="single-news__title m-0" v-if="singleNews.title">{{ singleNews.title }}</h4>
         <hr class="hr my-2">
         <div class="d-flex align-items-center gap-2 single-news__detail mb-2">
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 6.66675V4.16675H15.0001V5.00008H13.3334V4.16675H6.66675V5.00008H5.00008V4.16675H3.33341V6.66675H16.6667ZM16.6667 8.33342H3.33341V16.6667H16.6667V8.33342ZM15.0001 2.50008H16.6667C17.5872 2.50008 18.3334 3.24627 18.3334 4.16675V16.6667C18.3334 17.5872 17.5872 18.3334 16.6667 18.3334H3.33341C2.41294 18.3334 1.66675 17.5872 1.66675 16.6667V4.16675C1.66675 3.24627 2.41294 2.50008 3.33341 2.50008H5.00008V1.66675H6.66675V2.50008H13.3334V1.66675H15.0001V2.50008Z" fill="#5B7293"/>
            </svg>
            {{ singleNews.date }}
          </span>
           <span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.33325C12.273 3.33325 14.4464 4.52544 16.4719 6.48421C17.1629 7.15246 17.7881 7.86588 18.3384 8.5796C18.6705 9.01029 18.9063 9.34908 19.0354 9.55092L19.2536 9.89216C19.2956 9.95785 19.2956 10.042 19.2536 10.1077L19.0354 10.4489C18.9063 10.6508 18.6705 10.9896 18.3384 11.4202C17.7881 12.134 17.1629 12.8474 16.4719 13.5156C14.4464 15.4744 12.273 16.6666 10 16.6666C7.72706 16.6666 5.55362 15.4744 3.52811 13.5156C2.83709 12.8474 2.21194 12.134 1.66161 11.4202C1.32952 10.9896 1.09375 10.6508 0.964657 10.4489L0.74641 10.1077C0.704393 10.042 0.704393 9.95785 0.74641 9.89216L0.964657 9.55092C1.09375 9.34908 1.32952 9.01029 1.66161 8.5796C2.21194 7.86588 2.83709 7.15246 3.52811 6.48421C5.55362 4.52544 7.72706 3.33325 10 3.33325ZM17.0186 9.59731C16.5147 8.94385 15.9418 8.29009 15.3133 7.68229C13.5688 5.99523 11.7542 4.99992 10 4.99992C8.24579 4.99992 6.43126 5.99523 4.68672 7.68229C4.05822 8.29009 3.48534 8.94385 2.98148 9.59731C2.87265 9.73845 2.77209 9.8731 2.68016 9.99992C2.77209 10.1267 2.87265 10.2614 2.98148 10.4025C3.48534 11.056 4.05822 11.7097 4.68672 12.3175C6.43126 14.0046 8.24579 14.9999 10 14.9999C11.7542 14.9999 13.5688 14.0046 15.3133 12.3175C15.9418 11.7097 16.5147 11.056 17.0186 10.4025C17.1274 10.2614 17.2279 10.1267 17.3199 9.99992C17.2279 9.8731 17.1274 9.73845 17.0186 9.59731ZM10 13.3333C8.15907 13.3333 6.66669 11.8409 6.66669 9.99992C6.66669 8.15897 8.15907 6.66658 10 6.66658C11.841 6.66658 13.3334 8.15897 13.3334 9.99992C13.3334 11.8409 11.841 13.3333 10 13.3333ZM10 11.6666C10.9205 11.6666 11.6667 10.9204 11.6667 9.99992C11.6667 9.07944 10.9205 8.33325 10 8.33325C9.07954 8.33325 8.33335 9.07944 8.33335 9.99992C8.33335 10.9204 9.07954 11.6666 10 11.6666Z" fill="#5B7293"/>
        </svg>
        {{ singleNews.views }}
      </span>
         </div>
         <img class="single-news__image" :src="singleNews.image_url" alt="">
         <div class="single-news__text" v-html="singleNews.content">
         </div>
       </div>

     </div>
   </div>
 </div>
</template>

<script >
export default {
  name: "SingleNews",
  data(){
    return{
      singleNews: null,
      currencies: null,
      kun: null,
      diff: 232,
      news: null,
      number: 'Salom'
    }
  },
  mounted() {
    this.fetchNews()
    this.fetchSingleNews()
    this.fetchCurrencies()
    console.log(this.$route)
  },
  computed:{
    show(){
      return this.number.toLowerCase()
    },
  },
  methods:{
    fetchNews(){
      try{
        fetch(`https://api.uza.uz/api/v1/posts`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.news = data
          });
      }
      catch{
        console.log('error')
      }
    },

    fetchSingleNews(){
      fetch(`https://api.uzsuv.uz/api/v1/press/news/${this.$route.params.id}/`)
          .then(response => response.json())
          .then(data => this.singleNews = data.data);
    },

    fetchCurrencies(){
      fetch('https://api.uza.uz/api/v1/currencies')
        .then(res => res.json())
        .then(data => this.currencies = data)
    },

  }
}
</script>

<style>
.single-news__title{
  font-family: Fira Sans, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  color: #3E4D63;
}

.single-news__image{
  width: 100%;
  object-fit: cover;
}

.single-news__detail{
  font-family: Fira Sans, sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: #5B7293;
}

.single-news__text{
  font-family: Fira Sans, sans-serif;
  font-size: 18px;
  line-height: 150%;
  color: #626469;
}

.hr{
  border: 1px solid #EEEFF1;
}

.red{
  color: red;
}

.green{
  color: green;
}
</style>

<script>
let c = 5
const obj = {
  a: 5,
  take(){
    return c
  }
}

</script>
