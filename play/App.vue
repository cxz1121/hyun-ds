<template>
    <div>hello {{name}}</div>
    <hy-button>111</hy-button>
    <hy-input />
</template>
  
<script setup lang='ts'>
import { ref } from 'vue';
// import { HyButton } from '@hyun-ds/components/hy-button'
// import { HyButton } from '../dist/index.es'

const name = ref('hyun')

</script>
  
<style>
  
</style>