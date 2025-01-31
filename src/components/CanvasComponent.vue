<script setup lang="ts">
import { ref, onMounted } from "vue";
const canvas = ref<HTMLCanvasElement | null>();

let lastCoord = ref<{ x: number; y: number } | null>(null);
const startDrawing = (e: MouseEvent) => {
  console.log(e);
};
const draw = (e: MouseEvent) => {
    console.log("drawiiiiiii", e);
};

onMounted(() => {
  const ctx = canvas.value?.getContext("2d");
  if (ctx) {
    // créer un rectangle avec l'object canvas
    // ctx.fillStyle = "green";
    // ctx.fillRect(40, 10, 100, 100);
    // ctx.strokeStyle = "red";
    // ctx.strokeRect(40, 10, 100, 100);
    // créer des traits
    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.lineTo(200, 50);
    // ctx.lineTo(200, 200);
    // ctx.stroke();
  }
  console.log(canvas.value);
});
</script>
<template>
  <canvas
    ref="canvas"
    id="canvas"
    class="w-full h-full"
    @mousedown="startDrawing"
    @mousemove="draw"
  ></canvas>
</template>
