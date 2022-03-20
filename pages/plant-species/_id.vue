<template>
	<div>
		<HeaderImage
			:props="[data.header_image.path, data.name, data.header_text]"
		></HeaderImage>

		<section
			class="content2 woodm4_content2 cid-sVVcLCIXvi pt-5 pb-5"
			id="content02-7h"
		>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 md-pb">
						<div class="col-lg-12">
							<Carousel :props="data.article_gallery"></Carousel>
						</div>

						<!-- Plant details -->
						<div class="col-lg-12 pt-5">
							<div class="display-5">
								<ul>
									<li><b>Family:</b> {{ data.family }}</li>
									<li><b>Origin:</b> {{ data.origin }}</li>
									<li><b>Evergreen:</b> {{ data.evergreen }}</li>
									<li><b>Bloom time:</b> {{ data.bloom_time }}</li>
									<li><b>Height: </b> {{ data.height }}</li>
									<li><b>Water needs:</b> {{ data.h20 }}</li>
									<li><b>Poisonous:</b> {{ data.poisonous }}</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="col-lg-6">
						<h1
							class="
								mbr-section-title
								align-left
								mbr-bold mbr-black mbr-fonts-style
								display-2
							"
						>
							{{ data.article_title }}
						</h1>

						<p
							class="text2 mbr-fonts-style display-6"
							v-html="data.article_main_text"
						></p>
					</div>
				</div>
			</div>
		</section>
		<Items :props="[display, '/plant-species/', 99, 'More plants']"></Items>
		<Services />
		<Clients />
		<Contact />
	</div>
</template>

<script>
import { Mixin } from "~/mixins/head-subpage.js";
export default {
	mixins: [Mixin],
	data() {
		return {
			data: this.$store.state.pageData[0],
			display: this.$store.state.pageData[1],
		};
	},
	components: {
		Contact: () => import("@/components/Contact"),
		Services: () => import("@/components/Services"),
		Clients: () => import("@/components/Clients"),
		HeaderImage: () => import("@/components/HeaderImage"),
		Items: () => import("@/components/Items"),
	},

	middleware: "plant-species",
};
</script>
