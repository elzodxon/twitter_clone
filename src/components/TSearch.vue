<template>
  <form  class="t-search">
    <input  placeholder="Search..." v-model="searchText" type="text" class="t-search__input">
    <svg class="t-search__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9416 17.0584L14.8916 14.0084C15.9958 12.7 16.6666 11.0117 16.6666 9.16669C16.6666 5.02502 13.3083 1.66669 9.16663 1.66669C5.02496 1.66669 1.66663 5.02502 1.66663 9.16669C1.66663 13.3084 5.02496 16.6667 9.16663 16.6667C11.0125 16.6667 12.7 15.9967 14.0066 14.8917L17.0566 17.9417C17.1791 18.0634 17.34 18.125 17.4983 18.125C17.6566 18.125 17.8191 18.0642 17.94 17.9417C18.1858 17.6975 18.1858 17.3025 17.9416 17.0584ZM2.91663 9.16669C2.91663 5.72085 5.72079 2.91669 9.16663 2.91669C12.6125 2.91669 15.4166 5.72085 15.4166 9.16669C15.4166 12.6125 12.6125 15.4167 9.16663 15.4167C5.72079 15.4167 2.91663 12.6125 2.91663 9.16669Z" fill="#828282"/>
    </svg>

  </form>
</template>
<script>
export default {
  name: 'TSearch',
  data(){
    return{
      searchText: ''
    }
  }
}
</script>

<style>
.t-search{
  position: relative;
}

.t-search__icon{
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
}

.t-search .t-search__input{
  font-family: Roboto, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #828282;
  background: #E7ECF0;
  border-radius: 100px;
  padding: 14px 16px 14px 40px;
  border: none;
  outline: none;
  width: 100%;
}
</style>
