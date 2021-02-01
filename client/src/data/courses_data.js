const courses = [
{
   id:0,
   icon:"fas fa-code",
   name:"web design",
   full: "Web Design",
   caption:"The Web design Certificate proves fundamental knowledge of web development using HTML, CSS, and JavaScript",
   duration:105,
   fee: 150000,
   description:"<h3>Description</h3><br /><li>HTML is used to format text, create hyperlinks, tables, lists, forms, display images and more.</li> <br /><li>CSS enables you to change the appearance and layout of all the pages in a Web site. </li><br /><li>JavaScript is used in millions of Web pages to improve the design, validate forms, detect browsers, create cookies, and much more. </li><br /><li>The Web Design Certificate proves fundamental knowledge of web development using HTML, CSS, and JavaScript.</li>",
   payUrl:"",
   video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/F4fbwKV9dBU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 1,
    icon:"fab fa-html5",
    name:"html5",
    full:"Hypertext Markup Language 5",
    caption:"The HTML Developer Certificate proves fundamental knowledge of web development using HTML",
    duration: 30,
    fee: 80000,
    description:"<h3>Description</h3><br /><li>HTML is the foundation of web development.</li> <br /><li>HTML is used to format text, create hyperlinks, tables, lists, forms, display images and more.</li><br /><li>By mastering HTML you will be able to develop and maintain web pages unlimited to a particular software program's features.</li><br /><li>The HTML Developer Certificate proves fundamental knowledge of web development using HTML.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/CKlh1lwe2rY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 2,
    icon: "fab fa-css3-alt",
    name: "css3",
    full:"cascading style sheet 3",
    caption: "The CSS Developer Certificate proves fundamental knowledge of web development using advanced CSS",
    duration: 60,
    fee: 80000,
    description: "<h3>Description</h3><br /><li>CSS is used to control the style and layout of multiple web pages all at once.</li> <br /><li>CSS enables you to change the appearance and layout of all the pages in a Web site.</li><br /><li>The CSS Developer Certificate proves fundamental knowledge of web development using advanced CSS.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/XPv4EeB0PJ8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 3,
    icon:"fab fa-js",
    name:"javascript",
    full:"javascript",
    caption:"The JavaScript Developer Certificate proves fundamental knowledge of web development using JavaScript and the HTML DOM",
    duration: 60,
    fee: 80000,
    description:"<h3>Description</h3><br /><li>JavaScript is THE scripting language of the Web.</li> <br /><li>JavaScript is used in millions of Web pages to improve the design, validate forms, detect browsers, create cookies, and much more.</li><br /><li>JavaScript is the most popular scripting language on the internet, and works in all major browsers, such as Chrome, Internet Explorer, and Firefox.</li> <br /> <li> By mastering JavaScript and the HTML DOM  you will be able to develop and maintain more dynamic and interactive web pages.</li><br /> <li>The JavaScript Developer Certificate proves fundamental knowledge of web development using JavaScript and the HTML DOM. </li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/upDLs1sn7g4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 4,
    icon:"fas fa-paint-brush",
    name:"corel draw",
    full:"corel draw",
    caption:"The Corel Draw Certificate proves fundamental knowledge of Corel Draw",
    duration: 30,
    fee: 80000,
    description:"<h3>Description</h3><br /><li>You will Learn the interface of Corel Draw</li> <br /> <li>You will Learn how to combine vector shapes to use them in logos and graphic design</li> <br /> <li>You will learn how to use diifferent tools in Corel Draw</li> <br />  <li>You will learn how to retouch photos with the liquid tool</li> <br /> <li>You will learn how to effectively manage large/complex projects</li> <Br /> <li>You will learn the basics of logo, poster, business card designs</li> <br /> <li>The Corel Draw Certificate proves fundamental knowledge of Corel Draw.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/edDI2MSYYfQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 5,
    icon:"fab fa-hotjar",
    name:"photoshop",
    full:"photoshop",
    caption:"The Photoshop Certificate proves fundamental knowledge of Photoshop",
    duration: 30,
    fee: 150000,
    description:"<h3>Description</h3><br /><li>You will Learn the interface and panels of Photoshop.</li> <br /> <li>You will learn how to effectively use the brush tool, transform tool, crop tool </li> <br /> <li>You will learn how to perform key image editing tasks, including retouching, sharpening, and color correction</li> <br />  <li>You will learn how to effectively work with layers, selections, blend modes, masks, and so much more.</li> <br /> <li>You will learn how to effectively manage large/complex projects</li> <Br /> <li>You will learn how to effectively make appealling graphics</li> <br /> <li>The Photoshop Certificate proves fundamental knowledge of Photoshop.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/MSW6SwR0wIg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 6,
    icon:"fab fa-bootstrap",
    name:"bootstrap",
    full:"bootstrap",
    caption:"The Bootstrap Developer Certificate proves fundamental knowledge of web development using Bootstrap",
    duration: 15,
    fee: 40000,
    description:"<h3>Description</h3><br /><li>Bootstrap is a front-end framework for faster and easier web development.</li> <br /> <li>Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins. </li> <br /> <li>Bootstrap also gives you the ability to easily create responsive designs.</li> <br /> <li>The Bootstrap Developer Certificate proves fundamental knowledge of web development using Bootstrap.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/yalxT0PEx8c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 7,
    icon:"fab fa-sass",
    name:"sass",
    full:"Syntactically Awesome Style Sheets",
    caption:"The SASS Developer Certificate proves fundamental knowledge of web development using advanced SASS",
    duration: 5,
    fee: 30000,
    description:"<h3>Description</h3><br /><li>You will learn how to mirror the nested hierarchy style of HTML in CSS.</li> <br /> <li>You will learn how to create variables and use them as selectors. </li> <br /> <li>You will learn how to define variables as defaults.</li>  <br /> <li>You will learn parent referencing using a prefix</li> <br /> <li>You will learn about mixins, custom functions and much more</li> <br /> <li>The SASS Developer Certificate proves fundamental knowledge of web development using advanced SASS.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/yalxT0PEx8c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 8,
    icon:"fab fa-js-square",
    name:"jquery",
    full:"jquery",
    caption:"The jQuery Developer Certificate proves fundamental knowledge of web development using the jQuery library",
    duration: 15,
    fee: 40000,
    description:"<h3>Description</h3><br /><li>jQuery is a JavaScript library.</li> <br /> <li>The jQuery library contains the following features: HTML element selections, HTML element manipulation, CSS manipulation, HTML event functions, JavaScript Effects and animations, HTML DOM traversal and modification, AJAX, Utilities </li> <br /> <li>jQuery greatly simplifies JavaScript programming.</li> <br />  <li>The jQuery Developer Certificate proves fundamental knowledge of web development using the jQuery library.</li> <br />  <li>The jQuery Developer Certificate proves fundamental knowledge of web development using the jQuery library.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/UU-GebNqdbg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 9,
    icon:"fab fa-react",
    name:"React js",
    full:"react JS",
    caption:"The ReactJS Developer Certificate proves fundamental knowledge of web development using the ReactJS library",
    duration: 30,
    fee: 100000,
    description:"<h3>Description</h3><br /><li>React is a JavaScript library.</li> <br /> <li>You will how to write javascript in ES6 syntax.</li> <br /> <li>You will learn how to create reusable components, props, states, events, forms and so much more.</li> <br /> <li>You will learn how to build a fully functional website with React.JS</li> <br /> <li>The ReactJS Developer Certificate proves fundamental knowledge of web development using the ReactJS library.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/N3AkSS5hXMA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 10,
    icon:"fab fa-angular",
    name:"angular js",
    full:"angular js",
    caption:"The AngularJS Developer Certificate proves fundamental knowledge of web development using the AngularJS library",
    duration: 15,
    fee: 50000,
    description:"<h3>Description</h3><br /><li>AngularJS is a JavaScript library.</li> <br /> <li>You will learn about Angular JS Expressions, Modules, Directives, Model, Data Binding, Controllers, Scopes and so much more.</li> <br /> <li>You will learn how to build a fully functional website with Angular.JS</li> <br /> <li>The AngularJS Developer Certificate proves fundamental knowledge of web development using the AngularJS library.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/WAZTZUgeLhQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    id: 11,
    icon:"fab fa-python",
    name:"python",
    full:"python",
    caption:"The Python Developer Certificate proves fundamental knowledge of Python.",
    duration: 15,
    fee: 50000,
    description:"<h3>Description</h3><br /><li>Python is a programming language.</li> <br /> <li>Python is used in millions of web applications.</li> <br /> <li>By mastering Python, you will be able to develop and maintain server programming.</li> <br /> <li>The Python Developer Certificate proves fundamental knowledge of Python.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Y8Tko2YC5hA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
},
{
    id: 12,
    icon:"fab fa-python",
    name:"django (Web Development)",
    full:"django django (Web Development)",
    caption:"The Django Developer Certificate proves fundamental knowledge of Python.",
    duration: 15,
    fee: 50000,
    description:"<h3>Description</h3><br /><li>Python is a programming language.</li> <br /> <li>Python is used in millions of web applications.</li> <br /> <li>By mastering Python, you will be able to develop and maintain server programming.</li> <br /> <li>The Python Developer Certificate proves fundamental knowledge of Python.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/SIyxjRJ8VNY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'  
}
]




export default courses
