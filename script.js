//google sheets public url
//https://docs.google.com/spreadsheets/d/11lnTz3OBSIe-60N-j3JCw09E-zJCTuMizcRa6NaJXVs/edit#gid=0

//json template
// https://spreadsheets.google.com/feeds/list/    /od6/public/values?alt=json 

//customized json
// https://spreadsheets.google.com/feeds/list/11lnTz3OBSIe-60N-j3JCw09E-zJCTuMizcRa6NaJXVs/od6/public/values?alt=json 

const app = new Vue({
    el: '#app',
    data: {
        projects: []
    },
    beforeCreate: function() {
        // call in API from link
        fetch('https://spreadsheets.google.com/feeds/list/11lnTz3OBSIe-60N-j3JCw09E-zJCTuMizcRa6NaJXVs/od6/public/values?alt=json')
        .then(response => response.json())
        .then(data => {
            const projects = data.feed.entry.map(entry => {
                return { //returns new object with the following properties
                    title: entry.gsx$title.$t, // project title
                    image: entry.gsx$image.$t, // project image
                    stack: entry.gsx$techstack.$t, // project stack
                    description: entry.gsx$description.$t, // project description
                    url: entry.gsx$deployedurl.$t, // project deployed url
                    frontend: entry.gsx$frontendrepository.$t, // project frontend repo
                    backend: entry.gsx$backendrepository.$t // project backend repo
                 }
               })
               this.projects = projects
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