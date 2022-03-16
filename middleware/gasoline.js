export default async function ({ store, $axios, route }) {
    // let collection = "clients";
    $axios.setHeader('Authorization', 'apikey 0RnklMWbIyt16HHgyuUxYC:14dGT8g5n3rtVhqggS6gW0')

    try {

        let request1 = await $axios.get(
            "https://api.collectapi.com/gasPrice/europeanCountries",
            { authorization: 'apikey 0RnklMWbIyt16HHgyuUxYC:14dGT8g5n3rtVhqggS6gW0' }
        );

        // let parsed = JSON.parse(request1.data)

        let uk = request1.data.results.forEach(element => {
            if (element.country == "United Kingdom") {
                return element
            }
        });


        return store.commit("setPageData", [request1.data.results, uk])


    }


    catch (e) {

        console.log(e.response)
    }

}



