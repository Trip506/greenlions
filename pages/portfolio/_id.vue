<template>
	<div>
		<HeaderImage
			:props="[data.header_image.path, data.name, data.header_text]"
		></HeaderImage>

		<section
			class="content2 woodm4_content2 cid-sVVcLCIXvi pt-5"
			id="content02-7h"
		>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 md-pb">
						<Carousel :props="data.article_gallery"></Carousel>
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
							class="text2 mbr-fonts-style display-7"
							v-html="data.article_main_text"
						></p>
					</div>
				</div>
			</div>
		</section>
		<Items :props="[display, '/portfolio/', 99, 'More stories']"></Items>
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

	middleware: "portfolio",

	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "Article",
			name: this.data.name,
			articleSection: "Portfolio",
			image: this.$store.state.assetRoot + this.data.header_image.path,
			url: this.$store.state.webSite + "/" + this.data.slug,
			logo: this.data.icon,
			headline: this.data.article_title,
			text: this.data.article_subtext,
			author: "Sam",
			about: "Gardening in Cornwall",
			wordCount: "",
			contentLocation: "Cornwall",
			countryOfOrigin: "United Kingdom",
			inLanguage: "English",
		};
	},
};
</script>
