<script setup lang="ts">
import { ref, onMounted } from "vue";
const canvas = ref<HTMLCanvasElement | null>();

let lastCoord = ref<{ x: number; y: number } | null>(null);
const startDrawing = (e: MouseEvent) => {

  lastCoord.value = {
    x: e.clientX,
    y: e.clientY,
  };
};

const stopDrawing = (e: MouseEvent) => {
  //   lastCoord.value = {
  //     x: 0,
  //     y: 0,
  //   };
};

const draw = (e: MouseEvent) => {
  const ctx = canvas.value?.getContext("2d");
  const rect = canvas.value?.getBoundingClientRect();
  if (!rect) return;
  const currentCoord = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };

  if (lastCoord.value && ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(lastCoord.value.x, lastCoord.value.y);
    ctx.lineTo(currentCoord.x, currentCoord.y);
    ctx.stroke();
  }
};

const resize = () => {
  const toolbar = document.querySelector(".toolbar");
  if (!toolbar || !canvas.value) return;
  canvas.value.height = window.innerHeight;
  canvas.value.width = window.innerWidth - toolbar.clientWidth;
};
onMounted(() => {

    resize();
//     const ctx = canvas.value?.getContext("2d");
//   if (ctx) {
//     // créer un rectangle avec l'object canvas
//     // ctx.fillStyle = "green";
//     // ctx.fillRect(40, 10, 100, 100);
//     // ctx.strokeStyle = "red";
//     // ctx.strokeRect(40, 10, 100, 100);
//     // créer des traits
//     // ctx.beginPath();
//     // ctx.moveTo(50, 50);
//     // ctx.lineTo(200, 50);
//     // ctx.lineTo(200, 200);
//     // ctx.stroke();
//   }
//   console.log(canvas.value);
});
</script>
<template>
  <canvas
  class="border border-blue-500"
    ref="canvas"
    id="canvas"
    @mousedown="startDrawing"
    @mousemove="draw"
    @mouseup="stopDrawing"
  ></canvas>
</template>
