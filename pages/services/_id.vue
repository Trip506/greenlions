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
						<Carousel :props="data.article_gallery"></Carousel>
					</div>

					<div class="col-lg-6">
						<h2
							class="
								mbr-section-title
								align-left
								mbr-bold mbr-black
								pb-5
								mbr-fonts-style
								display-2
							"
						>
							{{ data.article_title }}
						</h2>
						<p class="text1 pb-3 align-left mbr-fonts-style display-7">
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
						<p
							class="text2 mbr-fonts-style display-7"
							v-html="data.article_main_text"
						></p>
					</div>
				</div>
			</div>
		</section>
		<Items :props="[display, '/services/', 99, 'More stories']"></Items>
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

	middleware: "services",
};
</script>
