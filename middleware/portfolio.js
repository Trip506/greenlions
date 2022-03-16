export default async function ({ store, $axios, route }) {
    let collection = "blog";
    if (route.params.id) {

        try {

            let request1 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection +
                "?token=" +
                store.state.tokens.collections,

                { filter: { slug: route.params.id } }
            );

            //Get all for display 
            let request2 = await $axios.post(
                store.state.webRoot +
                "/api/collections/get/" +
                collection +
                "?token=" +
                store.state.tokens.collections,
                {
                    fields: { header_text: 1, header_image: 1, name: 1, slug: 1 }
                }
            );




            return store.commit("setPageData", [request1.data.entries[0], request2.data.entries])
        }


        catch (e) {
            // console.log(e.response)
        }
    }

    else
        //load all

        try {
            return await $axios
                .$post(
                    store.state.webRoot +
                    "/api/collections/get/" +
                    collection +
                    "?token=" +
                    store.state.tokens.collections,

                    {
                        fields: { header_text: 1, header_image: 1, name: 1, slug: 1 }
                    }
                )
                .then(res => {
                    return store.commit("setPageData", [res.entries])
                });
        }

        catch (e) {
            // console.log(e.response)
        }

}
