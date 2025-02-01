<script setup lang="ts">
import { ref, onMounted } from "vue";
import { drawer } from "@/utils/Canvas";
const canvas = ref<HTMLCanvasElement | null>();

let lastCoord = ref<{ x: number; y: number } | null>(null);
let isDrawing = ref(false);
const startDrawing = (e: MouseEvent) => {
  isDrawing.value = true;
  const rect = canvas.value?.getBoundingClientRect();
  if (!rect) return;
  lastCoord.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};

const stopDrawing = (e: MouseEvent) => {
  isDrawing.value = false;
  lastCoord.value = null;
};

const draw = (e: MouseEvent) => {
  if (!isDrawing.value) return;
  const ctx = canvas.value?.getContext("2d");
  const rect = canvas.value?.getBoundingClientRect();
  if (!rect) return;
  const currentCoord = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
  if (lastCoord.value && ctx) {
    drawer(ctx, lastCoord.value,currentCoord,"black",5)
  }
    lastCoord.value = currentCoord;
};

const resize = () => {
  const toolbar = document.querySelector(".toolbar");
  if (!toolbar || !canvas.value) return;
  canvas.value.height = window.innerHeight;
  canvas.value.width = window.innerWidth - toolbar.clientWidth;
};
onMounted(() => {
  window.addEventListener("resize", resize);
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
    ref="canvas"
    id="canvas"
    @mousedown="startDrawing"
    @mousemove="draw"
    @mouseup="stopDrawing"
    @mouseout="stopDrawing"
  ></canvas>
</template>
