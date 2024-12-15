// So Basically its a practice to fetch the fastest api or use other api if one fails to work

// The best for fetch multiple fetchAPIs is to store it into Array.
const fetches = [
    fetch("https://ipwho.is/"),
    fetch("https://get.geojs.io/v1/ip/geo.json"),
    fetch("https://ipwho.is/", { mode: "no-cors" }),
    fetch("https://find-ip.openjavascript.info")
]

// We are using Promise.any bcz is returns a api req which is fastest and successful, we can alo use Promise.race but the difference is that is returns the result of api which is fastest but can be a unnsuccessful one. While Promise.any ensures that its the fastest and successful one
// Promise.any [ Fastest, Succesfull One ]
// Promise.race [ Fastest, Successfull / Unsuccessful ]

/* 
Promise.any(fetches)
    .then(res => {res.json()   // Converted Response to Json
        .then(data => {
            return [res.url,data]  // returned response url & data
        })
        .then(data => {  // Targeted data extracted from above
            let[api,obj] = data    // Extracted api and obj from data
            if (api.endsWith("/")) {   
                api = api.slice(0,-1)  // Remove / at the end of api url
            }
            console.log(api)
            // Put conditions according to Each Api
            if(api === "https://ipwho.is") {    
                console.log(obj.ip);
                console.log(obj.country_code);
            } else if (api === "http://ip-api.com/json") {
                console.log(obj.query);
                console.log(obj.countryCode);
            } else if (api === "https://find-ip.openjavascript.info") {
                console.log(obj.iso.traits.ipAddress);
                console.log(obj.iso.country.isoCode);
            }
        })
    })        

 */


// -----------------------------------------------------

// Using Async / Await Function For This Promise 

// Using Async / Await Function makes its easier to understand

// -----------------------------------------------------

const loader = async () => {
    let res = await Promise.any(fetches)
    let obj = await res.json()
    let api = res.url

    if (api.endsWith("/")) {   
        api = api.slice(0,-1)  // Remove / at the end of api url
    }
    console.log(api)
    // Put conditions according to Each Api
    if(api === "https://ipwho.is") {    
        console.log(obj.ip);
        console.log(obj.country_code);
    } else if (api === "https://get.geojs.io/v1/ip/geo.json") {
        console.log(obj.ip);
        console.log(obj.country_code);
    } else if (api === "https://find-ip.openjavascript.info") {
        console.log(obj.iso.traits.ipAddress);
        console.log(obj.iso.country.isoCode);
    } else if (api === "https://ipapi.is") {
        console.log(obj.ip);
        console.log(obj.location.country_code);
    }
}

(async function main() {      
    let res = await loader()
    return res
})();

// (Function)() = Makes the function self load when the page loads