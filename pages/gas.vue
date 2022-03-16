<template lang="">
    <div>
        <div style="height:200px"></div>
UK: {{uk}}
<br>


    </div>
</template>

<script>
export default {
	middleware: "gasoline",
	data() {
		return {
			data: this.$store.state.pageData[0],
			uk: this.$store.state.pageData[0][45],
		};
	},
};
</script>




