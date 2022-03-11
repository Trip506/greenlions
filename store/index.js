import axios from "axios"

export const state = () => ({

    //Cockpit root
    assetRoot: "https://greenlionsgardening.com/cms//storage/uploads",

    //Website
    webRoot: "https://greenlionsgardening.com/cms",

    //Api tokens 
    tokens: {
        master: "",
        image: "91acbd99ebf0e9fc387884ecbc9dd2",
        singletons: "91acbd99ebf0e9fc387884ecbc9dd2",
        collections: "a96a01109a2f855bba3f3c2c6ec1b1"

    },


    //Store response data from middlewares for current page here to be displayed in template
    pageData: [],
    highLightData: [],
    navData: [],



})

//Mutations change store state data 
export const mutations = {
    //Fill store with items from middleware axios post to content server 

    setPageData(state, data) {
        state.pageData = data
    },
    setHighlightData(state, data) {
        state.highLightData = data
    },


}

//Actions do stuff 
export const actions = {

    //Load cms response once and save it 
    async nuxtServerInit({ commit, state }) {



        // let collection = "";

        // let request = await axios.get(
        //     state.webRoot +
        //     "/api/collections/collection/" +
        //     collection +
        //     "?token=" +
        //     state.collectionSchema
        // );
        // await commit('setBookingCount', request.data.itemsCount);


    },
}

