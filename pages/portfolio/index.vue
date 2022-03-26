<template>
	<div>
		<HeaderImage
			:props="[
				entries[0].header_image.path,
				'Portfolio of Gardening',
				'See our recent accomplishments on the job',
			]"
		></HeaderImage>

		<Items :props="[entries, '/portfolio/', 99]"></Items>

		<Clients></Clients>
		<Services></Services>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Portfolio | Green Lions Gardening",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"See our recent jobs. We provide our gardening services to wedding venues across Cornwall. We'll transform your chosen matrimonial garden to fit any pristine and ornate wedding venue.",
				},
			],
		};
	},
	middleware: "portfolio",
	data() {
		return {
			data: this.$store.state.pageData[0],
			entries: this.$store.state.pageData[0],
			posts: [],
			error: "",
		};
	},

	components: {
		Items: () => import("@/components/Items"),
		Portfolio: () => import("@/components/Portfolio"),
		Clients: () => import("@/components/Clients"),
		Services: () => import("@/components/Services"),
	},

	//get strapi data
};
</script>
