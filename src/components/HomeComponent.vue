<script setup lang="ts">
import CanvasComponent from "./CanvasComponent.vue";
import ToolBarComponent from "./ToolBarComponent.vue";
</script>
<template>
  <div class="flex ">
    <div class="w-[15%] h-screen" ref="toolBarRef">
      <ToolBarComponent />
    </div>
    <div class="bg-gray-100">
      <CanvasComponent />
    </div>
  </div>
</template>
