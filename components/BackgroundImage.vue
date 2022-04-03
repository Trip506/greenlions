<template lang="">
    <div>
   
        		<section
				style="    vertical-align:bottom;"
			class="image1 woodm4_image1 cid-sUXVdjxvR1"
			id="image01-p"
			:style="
				'background-image: url(' +
				$store.state.assetRoot +
				props +
				')'
			"
		>
				<div
					class="mbr-overlay"
					style="opacity: 0.5; background-color: rgb(35, 35, 35)"
				>
				<div class="container ">
					<div class="row justify-content-center ">
						<div class="mbr-white col-lg-8 col-md-12  ">
						
							<p class="mbr-text m-5 align-center  mbr-fonts-style display-5">
								<!-- Header text -->
							<i>"Gardening adds years to your life and life to your years."</i>
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