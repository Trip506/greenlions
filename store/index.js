import axios from "axios"

export const state = () => ({

    //Cockpit asset root
    assetRoot: "https://cms-greenlionsgardening.salumiweb.com/storage/uploads/",

    //CMS root folder
    webRoot: "https://cms-greenlionsgardening.salumiweb.com",

    //Live website (used in code)
    webSite: "https://www.greenlionsgardening.com",

    //Api tokens 
    tokens: {
        master: "",
        image: "2d4cb57dcfc4ccacdc762b43aeef35",
        singletons: "85c4eff415147253596b470b642c85",
        collections: "a96a01109a2f855bba3f3c2c6ec1b1"

    },

    //Store currently visited page data from cockpit
    pageData: [],

    //Store navigation data for cockpit collection pages
    staticData: [],
})

//Mutations change store state data 
export const mutations = {

    //Fill store with items 
    setPageData(state, data) {
        state.pageData = data
    },

    //Save Nav data used in serverinit action 
    setStaticData(state, data) {
        state.staticData = data
    },


}

//Actions do stuff 
export const actions = {

    //Load cms response once for collection pages
    async nuxtServerInit({ commit, state }) {

        let collection = "services";
        let collection1 = "locations";
        let collection2 = "blog";
        let collection3 = "clients";
        let collection4 = "articles";
        let articles = "articles";
        let contact = "contact";

        //Services
        let request = await axios.post(
            state.webRoot +
            "/api/collections/get/" +
            collection +
            "?token=" +
            state.tokens.collections,

            { fields: { name: 1, icon: 1, slug: 1 } }
        );
        

        // Locations
        let request1 = await axios.post(
            state.webRoot +
            "/api/collections/get/" +
            collection1 +
            "?token=" +
            state.tokens.collections,

            { fields: { name: 1, icon: 1, slug: 1 }}
        );

        //Portfolio
        let request2 = await axios.post(
            state.webRoot +
            "/api/collections/get/" +
            collection2 +
            "?token=" +
            state.tokens.collections,

            { fields: { name: 1, icon: 1, slug: 1 } }
        );

        //Clients
        let request3 = await axios.post(
            state.webRoot +
            "/api/collections/get/" +
            collection3 +
            "?token=" +
            state.tokens.collections,

            { fields: { name: 1, icon: 1, slug: 1 } }
        );

        //Contact
        let request4 = await axios.post(
            state.webRoot +
            "/api/singletons/get/" +
            contact +
            "?token=" +
            state.tokens.singletons,

            {}
        );

             //Articles
             let request5 = await axios.post(
                state.webRoot +
                "/api/collections/get/" +
                collection4 +
                "?token=" +
                state.tokens.collections,
    
                { fields: { name: 1, icon: 1, slug: 1 } }
            );

        //Call function when reponses have come in, assign these requests to static data array
        await commit("setStaticData", [[request.data.entries], [request1.data.entries], [request2.data.entries], [request3.data.entries], [request4.data], [request5.data.entries]])

    },
}

