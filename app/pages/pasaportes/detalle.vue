<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
	router.replace('/pasaportes/costa')
})
</script>

<template>
	<section class="glass-panel rounded-2xl border p-6 text-on-muted">
		<NuxtLink to="/pasaportes/costa" class="font-semibold text-primary hover:underline">
			Redirigiendo a detalle del pasaporte...
		</NuxtLink>
	</section>
</template>
