<script setup lang="ts">
// Dashboard Layout - For admin/dashboard pages with sidebar
</script>

<template>
  <div class="min-h-screen bg-background-dark">
    <!-- <layout-sidebar /> -->
    <main class="flex-1 overflow-auto">
      <slot />
    </main>
  </div>
</template>
