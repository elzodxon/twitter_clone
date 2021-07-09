<template>
  <router-link :to="link" class="profile-follow d-flex align-items-center justify-content-between w-100">
    <div class="d-flex align-items-center gap-2">
      <t-profile-avatar/>
      <div>
        <h4 class="profile-follow__name m-0">Elzodxon</h4>
        <h5 class="profile-follow__username m-0">@elzodxon</h5>
      </div>
    </div>
    <t-button v-if="!author" :follow="true" width="100px" title="Follow"/>
    <t-post-area-icon v-else-if="author" :icon="icon"/>
  </router-link>
</template>


<script>
import TProfileAvatar from "./TProfileAvatar";
import TButton from "./TButton";
import TPostAreaIcon from "./TPostAreaIcon";
export default {
  name: "ProfileFollow",
  components: {TPostAreaIcon, TButton, TProfileAvatar},
  data(){
    return{
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M20.207 8.14701C19.817 7.75701 19.184 7.75701 18.793 8.14701L12 14.94L5.20699 8.14701C4.81699 7.75701 4.18399 7.75701 3.79299 8.14701C3.40299 8.53701 3.40299 9.17001 3.79299 9.56101L11.293 17.061C11.488 17.257 11.743 17.355 12 17.355C12.257 17.355 12.512 17.257 12.707 17.062L20.207 9.56201C20.597 9.17201 20.597 8.54001 20.207 8.14901V8.14701Z" fill="black"/>\n' +
        '</svg>\n'
    }
  },
  props:{
      link: {
        type: String,
        default: '/profile'
      },
      author:{
        type: Boolean,
        default: false
      }
  }
}
</script>

<style>
.profile-follow{
  text-decoration: none;
}

.profile-follow__name{
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}

.profile-follow__username{
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
}
</style>
