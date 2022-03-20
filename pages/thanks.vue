<template lang="">
    <div>
<section>
    <div style="padding-top:200px" class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="		mbr-section-title
								align-left
								mbr-bold mbr-black
								pb-5
								mbr-fonts-style
								display-1"> Thanks for sending a message</h1>
            </div>
            <p class="		
								align-left
								mbr-bold mbr-black
								pb-5
								mbr-fonts-style
								display-5">We'll get back to you as soon as possible. At busy times it can be quicker to give us a quick phone call. </p>
        </div>
    </div>
</section>
        <Contact></Contact>
    </div>
</template>

<script>
export default {
	components: {
		Contact: () => import("@/components/Contact"),
	},
};
</script>