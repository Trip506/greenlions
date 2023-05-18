<template>
	<!-- Form -->
	<section class="map1 woodm4_map1 cid-sVVvvpJ9ww" id="map01-8q">
		<div class="row"></div>
		<div class="container">
			<div class="row content">
				<div class="col-12 col-lg-6 col-md-12 md-pb">
				

					<div class="google-map">
						<iframe
							frameborder="0"
							style="border: 0"
							:src="
								'https://www.google.com/maps/embed/v1/place?key=AIzaSyCNveGQ9bfpKFwWzQLLftrR9hNiHwdqQG8&amp;q=' +
								data.town
							"
							allowfullscreen=""
						></iframe>
					</div>
				</div>
				<div class="col-12 col-lg-6 col-md-12 mbr-fonts-style display-5">
					<h3
						class="
							mbr-section-title
							align-left
							mbr-bold
							pb-4
							mbr-fonts-style
							display-5
						"
					>
						{{ data.contact_title }}
					</h3>

					<p class="mbr-text  align-left mbr-fonts-style display-7">
						{{ data.contact_text }}
					</p>

					<p class="mbr-text">
						<!-- <strong>Phone:</strong><br />
						{{ data.people.name1 }}: {{ data.people.phone1 }}<br /> -->
						<!-- {{ data.people.name2 }}: {{ data.people.phone2 }} -->
						<strong></strong><br /><strong>Email:</strong><br />{{
							data.email
						}}<br /><br /><strong>Social Media:</strong><br /><a
							target="_blank"
							:href="data.facebook"
							class="text-primary"
							>Facebook</a
						><br /><a :href="data.nextdoor" class="text-primary" target="_blank"
							>Nextdoor</a
						><br />
					</p>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
export default {
	data() {
		return {
			data: this.$store.state.staticData[4][0],
		};
	},
};
</script>