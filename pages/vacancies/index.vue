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
			title: "Services | Green Lions Gardening",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "See our current job vacancies",
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
