<template>
	<div>
		<HeaderImage
			:props="[
				data[0].header_image.path,
				'Vacancies',
				'Current job vacancies with Green Lions Gardening',
			]"
		></HeaderImage>

		<Items :props="[data, '/vacancies/', 99, 'Current job vacancies']"></Items>

		<Contact />

		<Clients />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Job Vacancies | Green Lions Gardening",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"See our job vacancies on offer. We are a hardworking team of professional gardeners who work in an around the Penzance Area",
				},

				{
					hid: "fb:app_id",
					name: "fb:app_id",
					content: this.name,
				},
				{
					hid: "og:title",
					name: "og:title",
					content: this.name,
				},
				{
					hid: "og:image",
					name: "og:image",
					content: this.$store.state.assetRoot + this.data[0].header_image.path,
				},
				{
					hid: "twitter:title",
					name: "twitter:title",
					content: this.name,
				},
				{
					hid: "og:description",
					name: "og:description",
					content:
						"See our job vacancies on offer. We are a hardworking team of professional gardeners who work in an around the Penzance Area",
				},
			],
		};
	},
	data() {
		return {
			data: this.$store.state.pageData,
			error: "",
		};
	},

	middleware: "vacancies",

	components: {
		Contact: () => import("@/components/Contact"),
		Clients: () => import("@/components/Clients"),
		Items: () => import("@/components/Items"),
	},

	//get strapi data
};
</script>
