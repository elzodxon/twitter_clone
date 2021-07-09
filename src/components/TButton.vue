<template>
  <div>
    <button :class="follow ? 't-button__outline': ''" :style="`width: ${width}`" @click="$emit('myEvent')" class="t-button">
      {{title}}
    </button>

    <b-modal id="tweet-modal" hide-footer hide-header-close>
      <template #modal-title>
        Tweet yoz!
      </template>
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <b-button  class="mt-3" block @click="$bvModal.hide('tweet-modal')">Close Me</b-button>
    </b-modal>
  </div>
</template>


<script>
export default {
  name: 'TButton',
  props:{
    title:{
      type: String,
      default: 'Button'
    },
    width:{
      type: String,
      default: ''
    },
    follow:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.t-button{
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  background: #1DA1F2;
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 35px;
  border: none;
  color: #FFFFFF;
  padding: 16px;
  transition: all 0.2s;
}

.t-button__outline{
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #1DA1F2;
  background-color: transparent;
  border: 1px solid #1DA1F2;
  padding: 6px 16px ;
}
.t-button__outline:hover{
  color: #fff;
}

.t-button:hover{
  background-color: #238ed0;
}
</style>
