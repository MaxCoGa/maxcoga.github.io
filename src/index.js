const statics = {
    "navbar": {
        template: "/static/navbar.html",
        title: "navbar",
        description: "navbar",
    },
    "footer": {
        template: "/static/footer.html",
        title: "footer",
        description: "footer",
    },
    "header": {
        template: "/static/header.html",
        title: "header",
        description: "header",
    },
    "version": {
        template: "/version.html",
        title: "version",
        description: "version",
    },
};

const routes = {
    404: {
        template: "/mod/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        name: "Home",
        template: "/mod/home/index.html",
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
    "/blog/post/test-post": {
        name: "Blog",
        template: "/mod/blog/post/test-post/index.html",
        title: "Blog",
        description: "This is the blog page",
    },
};

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
    const { target } = e;
    // console.log(target);
    if (target.matches("a div")) {
        return;
    }
    if (target.matches("nav a")) {
        e.preventDefault();
        route();
    }
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

    // set the content of the content div
    if(document.querySelector("head").childNodes.length < 10) {
        const navbarDiv = await fetch(statics["header"].template).then((response) => response.text());
        document.querySelector("head").innerHTML = navbarDiv;
    }

    if(document.querySelector("#navbar").childNodes.length == 0) {
        const navbarDiv = await fetch(statics["navbar"].template).then((response) => response.text());
        document.getElementById("navbar").innerHTML = navbarDiv;
    }

    if(document.querySelector("#footer").childNodes.length == 0) {
        const footerDiv = await fetch(statics["footer"].template).then((response) => response.text());
        document.getElementById("footer").innerHTML = footerDiv;
    }

    if(document.querySelector("#version").childNodes.length == 0) {
        const versionDiv = await fetch(statics["version"].template).then((response) => response.text());
        document.getElementById("version").innerHTML = versionDiv;
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