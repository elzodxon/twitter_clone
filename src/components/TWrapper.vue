<template>
  <div class="t-wrapper">
    <header class="mb-2">
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="content"></slot>
    </main>
    <hr>
    <footer class="d-flex align-items-center justify-content-center">
      <router-link class="t-wrapper__bottom" to="/">Show more!</router-link>
    </footer>
  </div>
</template>


<style>
.t-wrapper{
  background: #F6F8FA;
  border-radius: 12px;
  padding: 20px;
  /* Inside Auto Layout */
}
.t-wrapper__title{
  font-family: Roboto,sans-serif;
  font-weight: 900;
  font-size: 19px;
  line-height: 22px;
  color: #000000;
}

.t-wrapper__bottom{
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #1DA1F2;
  text-decoration: none;
}

hr{
  border: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
