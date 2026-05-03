<script setup lang="ts">
// Default Layout - Shared across pages
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <Navbar />
    
    <!-- Page Content -->
    <slot />
    
    <Footer />
  </div>
</template>
