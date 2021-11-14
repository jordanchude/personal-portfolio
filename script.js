// declare config variable
var apiKey = config.API_KEY;

// initiate vue instance
const app = new Vue({
    el: '#app',
    data: {
        projects: []
    },
    beforeCreate: function() {
        // call in API from link
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/1hON-KYp-qHHxBqSDlUAXoz_1yjIAzv1v5DCZIT0yRiM/values/Sheet1?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const projects = data.values.map(entry => {
                return { //returns new object with the following properties
                    title: entry[0], // project title
                    image: entry[1], // project image
                    stack: entry[2], // project stack
                    description: entry[3], // project description
                    url: entry[4], // project deployed url
                    frontend: entry[5], // project frontend repo
                    backend: entry[6] // project backend repo
                 }
               })
               this.projects = projects
            //    console.log(this.projects);
               console.log(data.values[0]);
        })
    }
});

//smooth scroll when clicking buttons
// credit: https://dev.to/attacomsian/smooth-scroll-to-page-section-with-jquery-2jng#:~:text=Here%20is%20a%20little%20jQuery,This%20value%20is%20in%20milliseconds.

// $(document).on('click', 'a[href^="#"]', function (e) {
//     e.preventDefault();
//     $('html, body').stop().animate({
//         scrollTop: $($(this).attr('href')).offset().top
//     }, 1500, 'swing');
// });