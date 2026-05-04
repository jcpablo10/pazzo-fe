<script setup lang="ts">
// Dashboard Layout - For admin/dashboard pages with sidebar
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <LayoutSidebar />
    <main class="flex-1 overflow-y-auto bg-background-dark">
      <slot />
    </main>
  </div>
</template>
