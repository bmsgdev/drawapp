<script setup lang="ts">
import CanvasComponent from "./CanvasComponent.vue";
import ToolBarComponent from "./ToolBarComponent.vue";
</script>
<template>
  <div class="flex w-full h-screen">
    <div class="w-[15%]">
      <ToolBarComponent />
    </div>
    <div class="w-full bg-gray-100">
      <CanvasComponent />
    </div>
  </div>
</template>
