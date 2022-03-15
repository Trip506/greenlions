<template>
	<div>
		<HeaderImage
			:props="[data.meta_image.path, data.name, data.header_text]"
		></HeaderImage>

		<section
			class="content2 woodm4_content2 cid-sVVcLCIXvi mbr-fullscreen"
			id="content02-7h"
		>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 md-pb">
						<h1
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
						</h1>
						<img
							:src="
								$store.state.webRoot +
								'/api/cockpit/image?token=' +
								$store.state.tokens.image +
								'&src=' +
								data.article_image._id +
								'&w=600&h=600&o=true'
							"
							alt="Leo strimming weed overgrowth by a granite wall in St.Ives Cornwall"
						/>
					</div>

					<div class="col-lg-6">
						<p class="text1 pb-3 align-left mbr-fonts-style display-7">
							{{ data.article_subtext }}
						</p>
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
						<div
							class="mbr-text pb-5 counter-container mbr-fonts-style display-7"
						>
							<ul>
								<li v-for="(item, index) in data.article_list" :key="index">
									{{ item.value }}
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
		<Contact />
		<Services />
		<Clients />
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.$store.state.pageData[0],
		};
	},
	components: {
		Contact: () => import("@/components/Contact"),
		Services: () => import("@/components/Services"),
		Clients: () => import("@/components/Clients"),
		HeaderImage: () => import("@/components/HeaderImage"),
	},

	middleware: "clients",
};
</script>
