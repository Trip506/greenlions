<template lang="">
    <div>
        		<section
			class="features3 woodm4_features3 cid-sTn5782uJc"
			id="features03-k"
		>
			<div class="container">
				<div class="media-container-row">
					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-img pb-3">
							<img
								height="100px"
								alt="icon"
								:src="$store.state.assetRoot + props.icon1.path"
							/>
						</div>
						<div class="card-box">
							<h4 class="card-title py-3 mbr-bold mbr-fonts-style display-2">
								{{ props.title1 }}
							</h4>
							<p class="mbr-text mbr-fonts-style display-7">
								{{ props.text1 }}
							</p>
						</div>
					</div>

					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-img pb-3">
							<img
								height="100px"
								:src="$store.state.assetRoot + props.icon2.path"
								alt="icon"
							/>
						</div>
						<div class="card-box">
							<h4 class="card-title py-3 mbr-bold mbr-fonts-style display-2">
								{{ props.title2 }}
							</h4>
							<p class="mbr-text mbr-fonts-style display-7">
								{{ props.text2 }}
							</p>
						</div>
					</div>

					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-img pb-3">
							<img
								height="100px"
								:src="$store.state.assetRoot + props.icon3.path"
								alt="icon"
							/>
						</div>
						<div class="card-box">
							<h4 class="card-title py-3 mbr-bold mbr-fonts-style display-2">
								{{ props.title3 }}
							</h4>
							<p class="mbr-text mbr-fonts-style display-7">
								{{ props.text3}}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
export default {
	props: ["props"],
};
</script>