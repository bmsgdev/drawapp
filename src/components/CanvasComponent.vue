<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from "vue";
import { drawer, download } from "@/utils/Canvas";
import { useDrawingStore } from "@/stores/useDrawingStore";
const drawingStore = useDrawingStore();
const canvas = ref<HTMLCanvasElement | null>();

let lastCoord = ref<{ x: number; y: number } | null>(null);
const startDrawing = (e: MouseEvent) => {
  drawingStore.setIsDrawing(true);
  const rect = canvas.value?.getBoundingClientRect();
  if (!rect) return;
  lastCoord.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};

const stopDrawing = (e: MouseEvent) => {
  drawingStore.setIsDrawing(false);
  lastCoord.value = null;
};

const draw = (e: MouseEvent) => {
  if (!drawingStore.isDrawing) return;
  const ctx = canvas.value?.getContext("2d");
  const rect = canvas.value?.getBoundingClientRect();
  if (!rect) return;
  const currentCoord = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
  let c = drawingStore.color;
  if (lastCoord.value && ctx) {
    if (drawingStore.isErayser) {
      c = "#F3F4F6";
    }
    drawer(ctx, lastCoord.value,currentCoord,c,drawingStore.lineWidth)
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
watchEffect(() => {
  if (drawingStore.isClearAll) {
    if (!canvas.value) return;
    const ctx = canvas.value.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    }
    drawingStore.setIsClearAll(false);
  }
  if (drawingStore.isDownload) {
    if (!canvas.value) return;
    download(canvas.value);
    drawingStore.isDownload = false
  }
})
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
