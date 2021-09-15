const axios = require('axios').default;
require('dotenv').config()
// const fetch = require('node-fetch');
let inputBox = {}
// // https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&country=US&start_date=2021-09-11&end_date=2021-09-12&key=API_KEY
// https://api.weatherbit.io/v2.0/history/daily?&lat=38.123&lon=-78.543&start_date=2021-09-11&end_date=2021-09-12&key=8bd27fa25c054293935d109ab993c167
// async function apiCall(req, res){
//     const baseUrl = "https://api.weatherbit.io/v2.0/history/daily?";
//     const key = "&key=8bd27fa25c054293935d109ab993c167"; //needs to go into envyronment!!;
//     let lat = "&lat=38.123"; // `&lat=${inputLat}`// This needs to be updated by the previous function
//     let long = "&lon=-78.543"; //  `&lon=${inputLong}`// This needs to be updated by the previous function
//     let start_date = "&start_date=2021-09-11"; // This needs to be given by the form  
//     let end_date = "&end_date=2021-09-12"; // This needs to be given by the form
//     const url = (baseUrl+lat+long+start_date+end_date+key);
//     console.log(url);
//     // let options2 = {
//     //     method: 'GET',
//     //     url: url,
//     //     headers: {
//     //         'Accept': 'application/json',
//     //         'Content-Type': 'application/json;charset=UTF-8'
//     //     }
//     // }
//     // return inputBox

// //     const resp = await axios(options2);
// //     try{
// //     let bitData = await resp.data;
// //     console.log("bitData is =>", bitData);
// //     inputBox["bitData"]= data;
// // } catch (error) {
// //     console.error(error);
// //   }
// }


async function apiCall(req, res){
    // console.log("url.req.bodyis: ");
    // console.log(req.body);
    const baseUrl = "http://api.geonames.org/postalCodeSearch?" 
    console.log(baseUrl);
    const postalcode= "postalcode=G11 6rh"
    const placename = "&placename=Glasgow";
    // const apiKey = process.env.apiKey;
    // console.log("apiKey =>", apiKey);
    const country = "&country=GB"
    const maxRows = "&maxRows=10";
    // let nUrl = req.body.data.newUrl;
    // console.log("url =>", nUrl);
    const username = "&username=dio_papa";
    const URL = (baseUrl+postalcode+placename+country+maxRows+username);
    console.log("URl =>", URL);
    let url = encodeURI(URL);
    console.log("url =>", url);
        let options = {
            method: 'GET',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
    
const response = await axios(options);
// let responseOK = response && response.status === 200 && response.statusText === 'OK';
// if (responseOK) {
    try{
    console.log("response is =>", response);
    let data = await response.data;
    
    console.log("data is =>", data);
    inputBox["data"]= data.postalCodes
    inputBox["latitude"]=data.postalCodes[0].lat;
    inputBox["longitude"]=data.postalCodes[0].lng;
    inputBox["country"]=data.postalCodes[0].countryCode;
    // inputBox["irony"]=data.postalCodes.irony;
    console.log(inputBox);
    weatherbit(inputBox);
    // return inputBox;
}catch (error) {
    console.error(error);
  }
    }
async function weatherbit(inputBox) { //not called yet
    let inputLat= inputBox.latitude;
    let inputLong= inputBox.longitude;
    const baseUrl = "https://api.weatherbit.io/v2.0/history/daily?";
    const key = "&key=8bd27fa25c054293935d109ab993c167"; //needs to go into envyronment!!;
    let lat = `&lat=${inputLat}`; // "&lat=38.123"// This needs to be updated by the previous function
    let long = `&lon=${inputLong}`; // "&lon=-78.543" // This needs to be updated by the previous function
    let start_date = "&start_date=2021-09-11"; // This needs to be given by the form  
    let end_date = "&end_date=2021-09-12"; // This needs to be given by the form
    const url = (baseUrl+lat+long+start_date+end_date+key);
    console.log(url);
    let options2 = {
        method: 'GET',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }
    // return inputBox

    const res = await axios(options2);
    try{
    let bitData = await res.data;
    console.log("bitData is =>", bitData);
    inputBox["bitData"]= bitData;
    console.log("inputBox =>", inputBox);

} catch (error) {
    console.error(error);
  }
}

    // ...........................................
//     const responce = async (baseUrl, apiKey, ofType, url, lang, requestOptions) =>{
//       await fetch(baseUrl+apiKey+ofType+url+lang, requestOptions)
//           .then(responce => {
//               return responce.json();})
//           .then(responce =>{
//               console.log("link is =>", baseUrl+apiKey+ofType+url+lang)
//               console.log("responce is: ");
//               console.log(responce);
//               // let inputBox={
//               //   agreement:responce.agreement,
//               //   subjectivity: responce.subjectivity,
//               //   confidence: responce.confidence,
//               //   irony: responce.irony
//               // }
//               inputBox["agreement"]=responce.agreement;
//               inputBox["subjectivity"]=responce.subjectivity;
//               inputBox["confidence"]=responce.confidence;
//               inputBox["irony"]=responce.irony;
//               console.log(inputBox);
//               return inputBox
//           })  
//   }
// }
// module.exports = {
//     method: function() {},
//     otherMethod: function() {},
// };
  module.exports = {
    method:apiCall,
    otherMethod: inputBox,
    /*otherOtherMethod: baseUrl*/}
