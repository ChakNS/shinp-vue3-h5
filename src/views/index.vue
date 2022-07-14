<template>
  <h5>{{ nameStore.name }}</h5>
  <div class="test">123</div>
  <VanButton>测试</VanButton>
</template>

<script setup>
import { useNameStore } from '@/store'

const nameStore = useNameStore()
</script>

<style>
.test {
  width: 100px;
  height: 100px;
}
</style>
