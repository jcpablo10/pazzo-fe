<script setup lang="ts">
// Default Layout - Shared across pages
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <LayoutNavbar />
    
    <!-- Page Content -->
    <slot />
    
    <LayoutFooter />
  </div>
</template>
