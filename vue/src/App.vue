<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink class="text-blue-700" active-class="underline" to="/">Home</RouterLink>
        <RouterLink class="text-blue-700" active-class="underline" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
