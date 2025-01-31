<script setup lang="ts">
import CanvasComponent from "./CanvasComponent.vue";
import ToolBarComponent from "./ToolBarComponent.vue";
</script>
<template>
  <div class="flex w-full">
    <div class="w-[25%]">
      <ToolBarComponent />
    </div>
    <div class="w-[75%] bg-blue-500">
      <CanvasComponent />
    </div>
  </div>
</template>
