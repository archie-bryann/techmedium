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
// here too
{
    id: 2000,
    icon:"fas fa-dice",
    name:"UI/UX",
    full:"",
    caption:"The UI/UX Certificate proves fundamental knowledge of UI/UX",
    duration: 30,
    fee: 55500,
    description:"<h3>Description</h3><br /><li>You will learn about users and their behaviours, goals, motivation and needs in relation to UI/UX.</li> <br /> <li>You will learn how to create user-centered designs.</li> <br /> <li>You will learn how to quickly and iteratively create user flows, wireframes, prototypes, low and high fidelity mockups.</li> <br /> <li>You will learn how to use Adobe XD to create UIX for various applications accross both small and large screens.</li> <br /> <li> You will also learn how to improve your excellent communication, presentation, collaboration, and interpersonal skills</li> <br /> <li>The UI/UX Certificate proves fundamental knowledge of UI/UX.</li>",
    payUrl:"",
    video:'' 
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
    full:"django (Web Development)",
    caption:"The Django Developer Certificate proves fundamental knowledge of Python.",
    duration: 30,
    fee: 60000,
    description:"<h3>Description</h3><br /><li>Python is a programming language.</li> <br /> <li>Python is used in millions of web applications.</li> <br /> <li>By mastering Python, you will be able to develop and maintain server programming.</li> <br /> <li>The Python Developer Certificate proves fundamental knowledge of Python.</li>",
    payUrl:"",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/SIyxjRJ8VNY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'  
},
// start here
{
    id: 13,
    icon:"fab fa-java",
    name:"java",
    full:"java",
    caption:"The Java Developer Certificate proves fundamental knowledge of Java.",
    duration: 30,
    fee: 50000,
    description:"<h3>Description</h3><br /><li>Java is a programming language.</li> <br /> <li></li> <br /> <li>Java is used in millions of web applications.</li> <br /> <li>By mastering Java, you will be able to develop mobile applications, web applications, games, and much more.</li> <br /> <li>The Java Developer Certificate proves fundamental knowledge of Java.</li>",
    payUrl:"",
    video:''  
    
},
{
    id: 14,
    icon:"fab fa-cuttlefish",
    name:"c++",
    full:"c++",
    caption:"The C++ Developer Certificate proves fundamental knowledge of C++.",
    duration: 15,
    fee: 50000,
    description:"<h3>Description</h3><br /><li>C++ is a programming language.</li> <br /> <li>You will learn about variables, loops, functions and classes in C++.</li> <br /> <li>You will learn how to create desktop applications with C++.</li> <br /> <li>The C++ Developer Certificate proves fundamental knowledge of C++.</li>",
    payUrl:"",
    video:''  
    
},
{
    id: 16,
    icon:"fab fa-cuttlefish",
    name:"c#",
    full:"c#",
    caption:"The C# Developer Certificate proves fundamental knowledge of C++.",
    duration: 15,
    fee: 60000,
    description:"<h3>Description</h3><br /><li>C# is a programming language.</li> <br /> <li>You will be taught the basics of C#: variables, loops, functions, classes and so much more.</li> <br /> <li>The C# Developer Certificate proves fundamental knowledge of C#.</li>",
    payUrl:"",
    video:''  
},
{
    id: 17,
    icon:"fas fa-database",
    name:"sql",
    full:"structured query language",
    caption:"The SQL Developer Certificate proves fundamental knowledge of SQL",
    duration: 25,
    fee: 55500,
    description:"<div class = 'container'><h3>Description</h3><br /> SQL is a standard for accessing database systems. SQL statements are used to retrieve and update data in a database. <br /><br /> <ul><li>SQL can execute queries against a database</li></li>SQL can retrieve data from a database</li><li>SQL can insert records in a database</li><li>SQL can update records in a database</li><li>SQL can delete records from a database</li><li>SQL can create new databases</li><li>SQL can create new tables in a database</li><li>SQL can create stored procedures in a database</li><li>SQL can create views in a database</li><li>SQL can set permissions on tables, procedures, and views</li></ul><br />By mastering this subject you will be able to retrieve and update data from a database.<div>",
    payUrl:"",
    video:''  
},
{
    id: 18,
    icon:"fab fa-php",
    name:"PHP",
    full:"hypertext pre-processor",
    caption:"The PHP Developer Certificate proves fundamental knowledge of web development using PHP and MySQL.",
    duration: 20,
    fee: 60000,
    description:"<h3>Description</h3><br /><li>PHP is a powerful server-side scripting language for creating dynamic and interactive websites. PHP is the widely-used, free, and efficient alternative to competitors such as Microsoft's ASP.</li> <br /> <li>PHP is perfectly suited for Web development and can be embedded directly into the HTML code.</li> <br /> <li>SQL (Structured Query Language) is an ANSI (American National Standards Institute) standard for accessing database systems. SQL statements are used to retrieve and update data in a database.</li> <br /> <li>By mastering these subjects you will be able to develop and maintain dynamic and interactive web pages and also retrieve and update data from a database over the internet.</li> <br /> <li>The PHP Developer Certificate proves fundamental knowledge of web development using PHP and MySQL.</li>",
    payUrl:"",
    video:'' 
},
{
    id: 19,
    icon:"fab fa-node",
    name:"nodeJS (Web Development)",
    full:"nodeJS (Web Development)",
    caption:"The Nodejs Developer Certificate proves fundamental knowledge of Nodejs",
    duration: 25,
    fee: 55500,
    description:"<h3>Description</h3><br /><li>Node.js is a server-side JavaScript run-time environment.</li> <br /> <li>Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature.</li> <br /> <li>You will learn about build complex single-page applications, Real-Time Chats, Complex Single-Page Applications and much more using Node.js</li> <br /> <li>The Nodejs Developer Certificate proves fundamental knowledge of Nodejs.</li>",
    payUrl:"",
    video:'' 
},
{
    id: 20,
    icon:"fas fa-info",
    name:"data science",
    full:"data science",
    caption:"The Data Science Developer Certificate proves fundamental knowledge of Python, Mathematical functions, and Statistics.",
    duration: 25,
    fee: 55500,
    description:"<h3>Description</h3><br /><li>Data is a collection of information. One purpose of Data Science is to structure data, making it interpretable and easy to work with.</li> <br /> <li>Python is a programming language widely used by Data Scientists. Python has in-built mathematical libraries and functions, making it easier to calculate mathematical problems and to perform data analysis.</li> <br /> <li>Mathematical functions are important to know as a Data Scientist, to make predictions and interpret them.</li> <br /> <li>Statistics is the science of analyzing data.</li> <br /> <li>The Data Science Developer Certificate proves fundamental knowledge of Python, Mathematical functions, and Statistics.</li>",
    payUrl:"",
    video:'' 
},
{
    id: 21,
    icon:"fas fa-desktop",
    name:"machine learning",
    full:"machine learning",
    caption:"The Machine learning Developer Certificate proves fundamental knowledge of Data Science",
    duration: 25,
    fee: 55500,
    description:"<h3>Description</h3><br /><li>Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.</li> <br /> <li>Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.</li>  <br /> <li>Python is a programming language widely used by Machine learning experts. Python has in-built mathematical libraries and functions, making it easier to calculate mathematical problems and to perform machine learning.</li> <br /> <li>The Machine learning Developer Certificate proves fundamental knowledge of Machine learning.</li>",
    payUrl:"",
    video:'' 
}
]




export default courses
