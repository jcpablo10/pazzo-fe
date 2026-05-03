<template>
  <div class="min-h-screen text-on">
    <AppNavbar />

    <main>
      <div class="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <slot />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
