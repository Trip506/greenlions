<template lang="">
    <div>
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