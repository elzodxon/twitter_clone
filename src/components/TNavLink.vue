<template>
  <router-link class="t-nav-link d-flex align-items-center" v-bind:to="link">
    <span v-html="svg"></span>
    {{ name }}
  </router-link>
</template>

<script>
export default {
  name: 'TNavLink',
  props:{
    svg:{
      type: String,
      default: ''
    },
    link:{
      type: String,
      default: ''
    },
    name:{
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.t-nav-link{
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  color: #14171A;
  gap: 22px;
  text-decoration: none;
  padding: 14px;
  margin-left: -14px;
  border-radius: 25px;
  transition: all 0.2s;
}

.router-link-exact-active.router-link-active{
  color: #1DA1F2;
}

.router-link-exact-active.router-link-active svg path{
  fill: #1DA1F2;
}

.t-nav-link:hover{
  background-color: #1DA1F230;
  color: #1DA1F2;
}

.t-nav-link:hover span svg path{
  transition: all 0.2s;
}

.t-nav-link:hover span svg path{
  fill: #1DA1F2;
}
</style>
