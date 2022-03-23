<template>
	<div>
		<!-- <client-only> -->
		<Nav></Nav>
		<!-- </client-only> -->
		<Nuxt></Nuxt>
		<Footer></Footer>
	</div>
</template>

<script>
export default {
	components: {
		Navbar: () => import("@/components/Nav"),
		Footer: () => import("@/components/Footer"),
	},
};
</script>