<template>
	<div>
		<section
			class="header1 cid-rArXEdIV84"
			id="header01-1"
			:style="
				'background-image: url(' + $store.state.assetRoot + props[0] + ')'
			"
		>
		
				<div
					class="mbr-overlay"
					style="opacity: 0.6; background-color: rgb(35, 35, 35)"
				></div>
				<div class="container">
					<div class="row justify-content-md-end">
						<div class="mbr-white col-lg-6 col-md-12">
							<h1
								class="
									mbr-section-title
									align-left
									mbr-bold
									pb-4
									mbr-fonts-style
									display-1
								"
							>
								<!-- Header title -->
								{{ props[1] }}
							</h1>
							<p class="mbr-text pb-4 align-left mbr-fonts-style display-7">
								<!-- Header text -->
								{{ props[2] }}
							</p>
						</div>
					</div>
				</div>
			</img>
		</section>
	</div>
</template>

<script>
export default {
	props: ["props"],
};
</script>