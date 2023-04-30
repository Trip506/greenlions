export default async function ({ store, $axios, route }) {
    let singleton = "home";
    let blog = "blog";
    let articles = "articles";


    try {

        let request1 = await $axios.post(
            store.state.webRoot +
            "/api/singletons/get/" +
            singleton +
            "?token=" +
            store.state.tokens.singletons,


        );
        let request2 = await $axios.post(
            store.state.webRoot +
            "/api/collections/get/" +
            blog +
            "?token=" +
            store.state.tokens.collections,
            { sort: { _created: -1 }, }


        );
        let request3 = await $axios.post(
            store.state.webRoot +
            "/api/collections/get/" +
            articles +
            "?token=" +
            store.state.tokens.collections,
            { sort: { _created: -1 }, }


        );






        return store.commit("setPageData", [request1.data, request2.data.entries, request3.data.entries])
    }


    catch (e) {
        console.log(e.response)
        console.log("ERRORS")
    }

}
