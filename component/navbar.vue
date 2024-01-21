<template>
  <div class="common">
    <nav>
    <div class="navbar">
      <div class="navbar-start">
        <a class="navbar-item">247420</a>
      </div>
      <div class="navbar-center">
        <router-link class="navbar-item"  to="/home">Home</router-link>
        <router-link class="navbar-item" to="/welcome">Welcome</router-link>
      </div>
      <div class="navbar-end">
        <a class="navbar-item">Sign in</a>
      </div>
    </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toLocaleString(),
    }
  },
}
</script>

<style>
.common {
  color: blue;
}
</style>
<style>
nav {
  display: flex;
  gap: 0 10px;
}
</style>