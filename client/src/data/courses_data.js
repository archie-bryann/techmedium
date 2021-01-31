const courses = [
{
    id: 1,
    icon:"fab fa-html5",
    name:"html5",
    full:"Hypertext Markup Language 5",
    caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.",
    duration: 60,
    fee: 80000,
    description:"<h3>Description</h3><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, exLorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. <br /><br /><h3>What to Expect:</h3> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur. </li> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur.</li> <li>Lorem ipsum dolor sit amet consectetur.</li>",
    payUrl:"https://www.paystack.com/",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/CKlh1lwe2rY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 2,
    icon: "fab fa-css3-alt",
    name: "css3",
    full:"cascading style sheet 3",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.",
    duration: 60,
    fee: 80000,
    description: "<h3>Description</h3><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, exLorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. <br /><br /><h3>What to Expect:</h3> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur. </li> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur.</li> <li>Lorem ipsum dolor sit amet consectetur.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/CKlh1lwe2rY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 3,
    icon:"fas fa-code",
    name:"javascript",
    full:"javascript",
    caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    duration: 60,
    fee: 80000,
    description:"<h3>Description</h3><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, exLorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. <br /><br /><h3>What to Expect:</h3> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur. </li> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur.</li> <li>Lorem ipsum dolor sit amet consectetur.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/CKlh1lwe2rY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 4,
    icon:"fas fa-bullhorn",
    name:"seo marketing",
    full:"seo marketing",
    caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    duration: 60,
    fee: 80000,
    description:"<h3>Description</h3><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, exLorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. <br /><br /><h3>What to Expect:</h3> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur. </li> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur.</li> <li>Lorem ipsum dolor sit amet consectetur.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/CKlh1lwe2rY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 5,
    icon:"fas fa-paint-brush",
    name:"graphic design",
    full:"graphic design",
    caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    duration: 60,
    fee: 80000,
    description:"<h3>Description</h3><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, exLorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex. <br /><br /><h3>What to Expect:</h3> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur. </li> <li>Lorem ipsum dolor sit amet consectetur.</li>  <li>Lorem ipsum dolor sit amet consectetur.</li> <li>Lorem ipsum dolor sit amet consectetur.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/CKlh1lwe2rY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}]

export default courses
