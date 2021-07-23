<template>
  <div class="t-modal" >
      Modal


    <button @click="$emit('close')">Close modal</button>
  </div>
</template>

<script>
export default {
  name: 'TModal',
  methods:{
  }
}
</script>

<style>
.t-modal{
  position: absolute;
  left: 0;
  right: 0;
  background-color: #00000050;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
