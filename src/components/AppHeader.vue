<script>
export default {};
</script>
<template lang="">
  <nav class="navbar navbar-expand-lg justify-content-center bg-body-tertiary">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'projectMain' }" class="nav-link">
          Blog
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped></style>
