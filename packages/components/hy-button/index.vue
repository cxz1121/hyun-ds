<template>
  <button :type="buttonType">
    <slot></slot>
  </button>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
enum types {
  no = 'normal',
  sm = 'small',
  lx = 'large'
}
defineOptions({
  name: 'hy-button'
}) 
const props = defineProps({
  type: {
    type: String,
    default: 'no'
  }
})
const buttonType = computed(() => {
  return types[props.type]
})

</script>

<style>

</style>