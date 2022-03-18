<template>
	<div>
		<section
			class="features2 woodm4_features2 cid-sVVvu2V6i8"
			id="features02-8x"
		>
			<div class="container">
				<div class="row">
					<div class="title col-12 pb-4 align-center">
						<h2 class="pb-3 mbr-bold mbr-fonts-style display-2">
							&nbsp; Services
						</h2>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<div
						v-for="(item, index) in data"
						:key="index"
						class="card align-center col-12 col-md-6 col-lg-4"
					>
						<a class="text-primary" :href="'/services/' + item.slug">
							<img
								height="50"
								:src="$store.state.assetRoot + item.icon.path"
								alt=""
							/>
							<div class="panel-item">
								<div class="card-block">
									<div class="text-wrap">
										<div class="link-wrap pt-3">
											<h4
												class="
													link
													align-center
													mbr-bold mbr-black mbr-fonts-style
													display-7
												"
											>
												<strong>
													<b> {{ item.name }}</b></strong
												>
											</h4>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.$store.state.staticData[0][0],
		};
	},
};
</script>
