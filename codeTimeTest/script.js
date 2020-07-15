// // // let getCurrentLocation =  Navigator.geolocatio
// // // let numberOne = "";
// // let numberOneContent = document.querySelector(".title-small").innerHTML = `Средство №1 в России стабилизирующее выработку инсулина и уровень фосфора в организме`

// // function geoFindMe() {

// //     // const status = document.querySelector('#status');
// //     // const mapLink = document.querySelector('#map-link');
  
// //     // mapLink.href = '';
// //     // mapLink.textContent = '';
  
// //     function success(position) {
// //     //   const latitude  = position.coords.latitude;
// //     //   const longitude = position.coords.longitude;
// //     // document.querySelector(".title-small").innerHTML = position
// //     console.log(position);
// //     }
  
// //     function error() {
// //     //   status.textContent = 'Unable to retrieve your location';
// //     console.log("Unable to retrieve your location");
// //     }
// //     debugger;
// //     if(!navigator.geolocation) {
// //       console.log( "Geolocation is not supported by your browser");
// //     } else {
// //       console.log("Locating…");
// //       navigator.geolocation.getCurrentPosition(success, error);
// //     }
  
// //   }
  
// //   document.querySelector(".title-small").addEventListener('click', geoFindMe);
// $(document).ready(function(){
//   const GOOGLE_MAP_KEY = "AIzaSyDac8jZXgnLxqK6R3O7A1Y3PV7WQ3BDA2Q"
// function ipLookUp () {
//     $.ajax('http://ip-api.com/json')
//     .then(
//         function success(response) {
//             console.log('User\'s Location Data is ', response);
//             console.log('User\'s Country', response.country);
//             getAddress(response.lat, response.lon)
//   },
  
//         function fail(data, status) {
//             console.log('Request failed.  Returned status of',
//                         status);
//         }
//     );
//   }
  
//   function getAddress (latitude, longitude) {
//     $.ajax('https://maps.googleapis.com/maps/api/geocode/json?' +
//             'latlng=' + latitude + ',' + longitude + '&key=' + 
//             GOOGLE_MAP_KEY)
//     .then(
//       function success (response) {
//         console.log('User\'s Address Data is ', response)
//       },
//       function fail (status) {
//         console.log('Request failed.  Returned status of',
//                     status)
//       }
//      )
//   }
  
//   if ("geolocation" in navigator) {
//     // check if geolocation is supported/enabled on current browser
//     navigator.geolocation.getCurrentPosition(
//      function success(position) {
//        // for when getting location is a success
//        console.log('latitude', position.coords.latitude, 
//                    'longitude', position.coords.longitude);
//        getAddress(position.coords.latitude, 
//                   position.coords.longitude)
//      },
//     function error(error_message) {
//       // for when getting location results in an error
//       console.error('An error has occured while retrieving' +
//                     'location', error_message)
//       ipLookUp()
//     });
//   } 
//   else {
//     // geolocation is not supported
//     // get your location some other way
//     console.log('geolocation is not enabled on this browser')
//     ipLookUp()
//   }
//   document.querySelector(".title-small").addEventListener('click', function(){alert("AWD");});

// });


// 
function timer() {

        let intervalCount = 0
        let list = document.querySelectorAll(".lastpack")
        let id = setInterval(() => {
            let count = localStorage.getItem("productCount") || 60;
            intervalCount++

            for(let i = 0; i < list.length; i++){
               list[i].textContent = --count
            }
            if(intervalCount === 7) {
                clearInterval(id)
                localStorage.setItem("productCount",count)
                for(let i = 0; i < list.length; i++)
                list[i].textContent = count
             }
              if(count <= 0) localStorage.setItem("productCount",60)
        }, 10000)
    
}

function date() {

    let currentdate = new Date()
    let day = parseInt(currentdate.getDate()+2) > 10 ? parseInt(currentdate.getDate()+2) : "0" +  parseInt(currentdate.getDate()+2)
    let month = (currentdate.getMonth()+1) > 10 ? (currentdate.getMonth()+1) : "0" + (currentdate.getMonth()+1) 

    let datetime = ` ${day}.${month}.${currentdate.getFullYear()}`

    document.querySelector(".x_price_previous").textContent = datetime
    // alert(datetime);
}

timer();
date();
