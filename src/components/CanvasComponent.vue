<script setup lang="ts">
import { ref, onMounted } from "vue";
const canvas = ref<HTMLCanvasElement|null>();
const ctx = canvas.value?.getContext("2d");
let coord: Object = { x: 0, y: 0 };

onMounted(() => {
console.log(canvas.value)
});

</script>
<template>
<canvas ref="canvas" id="canvas" class=" w-full h-full"></canvas>
</template>