export const Mixin = {
    head() {
        return {
            title: this.data.name + "| Green Lions Gardening Services",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.data.header_text,
                },

                {
                    hid: "fb:app_id",
                    name: "fb:app_id",
                    content: this.data.name,
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.data.name,
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.$store.state.assetRoot + this.data.header_image.path,
                },
                {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: this.data.name,
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.data.header_text,
                },
            ],
        };
    },
}