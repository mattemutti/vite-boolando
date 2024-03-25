<script>
import { state } from "../state";

export default {
	name: 'AppHeader',
	data() {
		return {
			state
		}
	}
}
</script>
<template>

	<header>
		<nav class="container">
			<div class="row">
				<div class="col d-flex justify-content-between align-items-center p-4">

					<div>
						<a class="no-link p-2" href="">Donna</a>
						<a class="no-link p-2" href="">Uomo</a>
						<a class="no-link p-2" href="">Bambino</a>
					</div>

					<img id="logo" src="../../public/images/boolean-logo.png" alt="">

					<div class="link p-1">
						<a class="no-link p-2" href=""><i class="fa-solid fa-person"></i></a>
						<a class="no-link p-2" href=""><i class="fa-regular fa-heart"></i></a>
						<a class="no-link p-2" href=""><i class="fa-solid fa-bag-shopping"></i></a>
					</div>
				</div>
			</div>
		</nav>
	</header>
	<!-- /.header -->


</template>
<style lang="scss"></style>