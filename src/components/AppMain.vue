<script>

import ProductCard from './ProductCard.vue';

export default {
	name: 'AppMain',
	components: {
		ProductCard,
	}
}
</script>
<template>

	<div class="container">
		<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2">

			<MainCard />

		</div>
	</div>


</template>
<style lang="scss"></style>