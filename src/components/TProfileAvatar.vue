<template>
  <div class="t-profile-image">
    <img :style="`height:${size}; width: ${size}`" src="/profile.jpg" alt="">
  </div>
</template>


<script>
export default {
  name: 'TProfileAvatar',
  props:{
    avatar:{
      type: String,
      default: '/profile.jpg'
    },
    size:{
      type: String,
      default: '48px'
    }
  }
}
</script>

<style>
.t-profile-image img{
  object-position: top;
  object-fit: cover;
  border-radius: 50%;
}
</style>
