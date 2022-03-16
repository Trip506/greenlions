<template lang="">
    <div>
   
        		<section
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
			></div>

			<div class="container"></div>
		</section>
        
    </div>
</template>

<script>
export default {
	props: ["props"],
};
</script>