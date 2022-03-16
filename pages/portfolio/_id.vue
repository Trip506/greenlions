<template>
	<div>
		<HeaderImage
			:props="[data.header_image.path, data.name, data.header_text]"
		></HeaderImage>

		<section class="content1 woodm4_content1 cid-sXxeMVndvY" id="">
			<div class="container" style="padding-top: 20px">
				<div class="row">
					<div class="col-lg-6 md-pb col-sm-4 col-xs-12">
						<img
							style="width: 100%; object-fit: cover"
							:src="
								$store.state.webRoot +
								'/api/cockpit/image?token=' +
								$store.state.tokens.image +
								'&src=' +
								data.article_image._id +
								'&w=600&h=400&o=true'
							"
							alt=""
						/>
					</div>

					<div class="col-lg-6 col-sm-8">
						<h3
							class="
								mbr-section-subtitle mbr-bold
								align-left
								mbr-black mbr-light
								pb-3
								mbr-fonts-style
								display-2
							"
						>
							The efforts of the day
						</h3>
						<div class="mbr-section-text mbr-black">
							<p
								class="mbr-text align-left mbr-fonts-style display-7"
								v-html="data.article_main_text"
							></p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<Items :props="[entries, '/portfolio/']"></Items>
		<Services> </Services>
		<Clients></Clients>
		<Contact></Contact>
	</div>
</template>

<script>
export default {
	middleware: "portfolio",
	components: {
		Portfolio: () => import("@/components/Portfolio"),
		HeaderImage: () => import("@/components/HeaderImage"),
		Clients: () => import("@/components/Clients"),
		Services: () => import("@/components/Services"),
		Contact: () => import("@/components/Contact"),
	},

	data() {
		return {
			data: this.$store.state.pageData[0],
			entries: this.$store.state.pageData[1],
		};
	},
};
</script>
