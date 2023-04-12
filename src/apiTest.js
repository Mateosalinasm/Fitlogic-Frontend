const axios = require("axios");
require('dotenv').config();
const  API  = process.env.API;
const APIKEY = process.env.APIKEY;


  //=============Generates 10 random workouts by muscle group========================

// const options = {
//     method: 'GET',
//     url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
//     params: {muscle: 'biceps'},
//     headers: {
//       'X-RapidAPI-Key': API,
//       'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

    //=============Searches by excercise and shows info ========================

    const options = {
      method: 'GET',
      url: 'https://exerciseapi3.p.rapidapi.com/search/',
      params: {primaryMuscle: 'pectoralis major'}, //search params
      headers: {
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });