<template lang="">
    <div>
        <Contact></Contact>
        <ContactForm></ContactForm>
    </div>
</template>

<script>
export default {
	components: {
		Contact: () => import("@/components/Contact"),
		ContactForm: () => import("@/components/ContactForm"),
	},
};
</script>