// server-side rendering
    // server dynamically generate a html page and send to the client side
    // pros: SEO, cost less time in front-end
    // cons: require more server resource, bad for project that has high front-end complexity
    // use session for authentication
        // http protocol is stateless (server doesnt keep the state of http requests)_
        // cookie (a series of key-value pairs that represents a name, value, expire date, etc.) is used to keep track of client request
        // cookie is independents for each domain, and it is automatically sent to servers
            // size <= 4kB
        /* 
        browser send log in request to server -> server send cookie to browser with response header
        -> browser save the authentication cookie -> browser send the cookie to server with request header
        -> server response with appropriate content 
        */
        // cookie may not be secure

// seperation of front and back end
    // back-end provides api, front-end uses api (ajax)
    // pros: good development experience, good user experience (fast refresh speed), less work for server
    // cons: bad for seo (but can be resolved using Vue, React)
    // use jwt for authentication