const routes = {
    404: {
        template: "/mod/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        name: "Home",
        template: "/mod/index.html",
        title: "maxksorg",
        description: "This is the home page",
    },
    "/about": {
        name: "About",
        template: "/mod/about/index.html",
        title: "About Me",
        description: "This is the about page",
    },
    "/contact": {
        name: "Contact",
        template: "/mod/contact/index.html",
        title: "Contact Me",
        description: "This is the contact page",
    },
    "/projects": {
        name: "Projects",
        template: "/mod/projects/index.html",
        title: "Projects",
        description: "This is the projects page",
    },
    "/blog": {
        name: "Blog",
        template: "/mod/blog/index.html",
        title: "Blog",
        description: "This is the blog page",
    },
};

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});

const route = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

const locationHandler = async () => {
    const location = window.location.pathname; // get the url path
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the urlRoutes object
    const route = routes[location] || routes["404"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;

    //set the navlink as active
    if (!document.getElementById("refHome").classList.contains('active') && location.length == 0) {
        document.getElementById("refHome").classList.add("active");
    } 
    else {
        var active = document.getElementsByClassName("active");
        while(active.length){
            document.getElementsByClassName("active")[0].classList.remove("active");
        }
        document.getElementById("ref".concat(route.name)).classList.add("active");
    }

    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};


// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();