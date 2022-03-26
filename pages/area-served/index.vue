<template>
	<div>
		<HeaderImage
			:props="[
				data[0].header_image.path,
				'Locations',
				'Professional services in Cornwall',
			]"
		></HeaderImage>

		<Items :props="[data, '/area-served/', 99]"></Items>

		<Contact />

		<Clients></Clients>
		<Services></Services>
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
					content:
						"We serve a variety of clients in Penzance and around West Cornwall including: Town Houses, Holiday Properties, Commercial Properties, Manor houses and Large Estates, Wedding Venues and Allotments.",
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

	middleware: "locations",

	components: {
		Contact: () => import("@/components/Contact"),
		Services: () => import("@/components/Services"),
		Clients: () => import("@/components/Clients"),
		Items: () => import("@/components/Items"),
	},

	//get strapi data
};
</script>
