import axios from "axios"

export const state = () => ({

    //Cockpit root
    assetRoot: "https://greenlionsgardening.com/cms/storage/uploads",

    //Website
    webRoot: "https://greenlionsgardening.com/cms",

    //Api tokens 
    tokens: {
        master: "",
        image: "2d4cb57dcfc4ccacdc762b43aeef35",
        singletons: "85c4eff415147253596b470b642c85",
        collections: "a96a01109a2f855bba3f3c2c6ec1b1"

    },


    //Store response data from middlewares for current page here to be displayed in template
    pageData: [],
    staticData: [],
    navData: [],



})

//Mutations change store state data 
export const mutations = {
    //Fill store with items from middleware axios post to content server 

    setPageData(state, data) {
        state.pageData = data
    },
    setStaticData(state, data) {
        state.staticData = data
    },


}

//Actions do stuff 
export const actions = {

    //Load cms response once and save it 
    async nuxtServerInit({ commit, state }) {



        let collection = "services";
        let collection1 = "locations";
        let collection2 = "blog";
        let collection3 = "clients";

        let request = await axios.post(
            state.webRoot +
            "/api/collections/get/" +
            collection +
            "?token=" +
            state.tokens.collections,

            { fields: { name: 1, icon: 1, slug: 1 } }
        );

        let request1 = await axios.post(
            state.webRoot +
            "/api/collections/get/" +
            collection1 +
            "?token=" +
            state.tokens.collections,

            { fields: { name: 1, icon: 1, slug: 1 } }
        );

        let request2 = await axios.post(
            state.webRoot +
            "/api/collections/get/" +
            collection2 +
            "?token=" +
            state.tokens.collections,

            { fields: { name: 1, icon: 1, slug: 1 } }
        );
        let request3 = await axios.post(
            state.webRoot +
            "/api/collections/get/" +
            collection3 +
            "?token=" +
            state.tokens.collections,

            { fields: { name: 1, icon: 1, slug: 1 } }
        );


        await commit("setStaticData", [[request.data.entries], [request1.data.entries], [request2.data.entries], [request3.data.entries]])

    },
}

