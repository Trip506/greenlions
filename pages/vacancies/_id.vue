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
					<div class="col-lg-6">
						<h2
							class="
								mbr-section-title
								align-left
								mbr-bold mbr-black
								pb-2
								mbr-fonts-style
								display-2
							"
						>
							{{ data.article_title }}
						</h2>
						<p class="text1 pb-1 align-left mbr-fonts-style display-7">
							{{ data.article_subtext }}
						</p>
						<u>
							<h3
								class="
									mbr-section-subtitle mbr-bold mbr-black mbr-light
									pb-3
									mbr-fonts-style
									display-5
								"
							>
								{{ data.article_list_title }}
							</h3>
						</u>
						<div
							class="mbr-text pb-5 counter-container mbr-fonts-style display-7"
						>
							<ul style="list-style-type: none">
								<li v-for="(item, index) in data.article_list" :key="index">
									{{ item.value }}
									<span class="mbr-iconfont mobi-mbri-success mobi-mbri"></span>
								</li>
							</ul>
						</div>
					</div>
					<!-- Carousel -->
					<div class="col-lg-6 md-pb pb-2 pt-2">
						<Carousel :props="data.article_gallery"></Carousel>
					</div>

					<div class="col-lg-12 mt-3">
						<p
							class="text2 mbr-fonts-style display-7"
							v-html="data.article_main_text"
						></p>
					</div>
				</div>
			</div>
		</section>
		<Items
			:props="[display, '/vacancies/', 99, 'Current job vacancies']"
		></Items>
		<Services></Services>
		<Clients />
		<!-- <Contact /> -->
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
		Services: () => import("@/components/Services"),
		HeaderImage: () => import("@/components/HeaderImage"),
		Items: () => import("@/components/Items"),
	},

	middleware: "vacancies",
	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "JobPosting",
			name: "Junior Gardener",
		};
	},
};
</script>


