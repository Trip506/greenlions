<template lang="">
    <div>
        <Contact></Contact>
        <ContactForm></ContactForm>

    </div>
</template>

<script>
export default {
	head() {
		return {
			title: "Contact | Green Lions Gardening",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"Get in contact with us directly and we'll get back to you as soon possible",
				},
			],
		};
	},
	components: {
		Contact: () => import("@/components/Contact"),
		ContactForm: () => import("@/components/ContactForm"),
	},
};
</script>