<script setup lang="ts">
import { Download, Eraser, Paintbrush, RotateCcw } from "lucide-vue-next";
import { useDrawingStore } from "@/stores/useDrawingStore";
const drawingStore = useDrawingStore();
</script>
<template>
  <div
    class="toolbar card h-full bg-white gap-5 p-5 shadow-md shadow-purple-200/50 rounded-md"
  >
    <div>
      <div class="flex flex-col gap-2 justify-center p-5">
         <!-- first button groupe -->
        <div class="flex items-center justify-center gap-2">
          <button :class="{
            'bg-blue-500':drawingStore.isErayser ===false
          }"
          class=" flex items-center justify-center bg-blue-300 w-15 h-15 border border-white rounded-md cursor-pointer" @click="drawingStore.setIsErayser(false)">
            <Paintbrush :size="25" icon :class="{
            'text-white':drawingStore.isErayser ===false
          }" />
          </button>
          {{ drawingStore.isErayser }}
          <button :class="{
            'bg-red-500':drawingStore.isErayser
          }" class=" flex items-center justify-center bg-red-300 w-15 h-15 border border-white rounded-md cursor-pointer" @click="drawingStore.setIsErayser(true)">
            <Eraser icon  :class="{
            'text-white':drawingStore.isErayser
          }"/>
          </button>
        </div>
        <div class="flex flex-col">
          <label for="color">Color</label>
          <input class="w-full h-10 cursor-pointer" type="color"  v-model="drawingStore.color" @change="drawingStore.setColor(drawingStore.color)"/>
        </div>
        <div class=" flex flex-col w-full ">
          <label for="color">Range</label>
          <input class="w-full h-4 cursor-pointer" type="range" min="1" max="50" value="1" v-model="drawingStore.lineWidth" @change="drawingStore.setLineWidth(drawingStore.lineWidth)"/>        </div>
       <div class="flex flex-col items-center justify-center gap-2">
          <button  class="hover:text-white flex items-center cursor-pointer justify-center w-full h-10 bg-blue-300 hover:bg-blue-500 gap-2 rounded-md">
          <RotateCcw icon class=" hover:text-white"/>
          <p class="font-bold">Clear</p>
        </button>
        <button class="flex items-center justify-center cursor-pointer w-full h-10 bg-green-300 hover:bg-green-500 gap-2 rounded-md">
          <Download />
          <p>Download</p>
        </button>
       </div>
      </div>
    </div>
  </div>
</template>
