<template>
	<div>
		<HeaderImage
			:props="[
				entries[0].meta_image.path,
				'Portfolio of Gardening',
				'See our recent accomplishments on the job',
			]"
		></HeaderImage>

		<Portfolio :props="entries"></Portfolio>
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
		Portfolio: () => import("@/components/Portfolio"),
	},

	//get strapi data
};
</script>
