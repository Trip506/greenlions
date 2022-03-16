<template>
	<div>
		<HeaderImage
			:props="[
				entries[0].header_image.path,
				'Portfolio of Gardening',
				'See our recent accomplishments on the job',
			]"
		></HeaderImage>

		<Items :props="[entries, '/portfolio/']"></Items>
		<!-- <ClientsAndServices></ClientsAndServices> -->
	</div>
</template>

<script>
export default {
	head: {
		title: "Portfolio | Green Lions Gardening",
		meta: [
			{
				hid: "description",
				name: "description",
				content:
					"We provide our gardening services to wedding venues across Cornwall. We'll transform your chosen matrimonial garden to fit any pristine and ornate wedding venue.",
			},
		],
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
		ClientsAndServices: () => import("@/components/ClientsAndServices"),
	},

	//get strapi data
};
</script>
