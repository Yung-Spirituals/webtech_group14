// Heavily "inspired" by girts' GitHub repo
// Will try to change later

/**
 * Get the currently authenticated user
 * @returns User object or null if user is not authenticated
 */
export function getAuthenticatedUser() {
    let user = null;
    const username = getCookie("current_username");
    const commaSeparatedRoles = getCookie("current_user_roles");
    if (username && commaSeparatedRoles) {
        const roles = commaSeparatedRoles.split(",");
        user = {
            "username": username,
            "roles": roles
        }
    }
    return user;
}

/**
 * Check if the given user has admin rights
 * @param user
 * @returns {boolean}
 */
export function isAdmin(user) {
    return user.roles.includes("ROLE_ADMIN");
}

/**
 * Send authentication request to the API
 * @param username Username
 * @param password Password, plain text
 * @param successCallback Function to call on success
 * @param errorCallback Function to call on error, with response text as the parameter
 */
export function sendAuthenticationRequest(username, password, successCallback, errorCallback) {
    const postData = {
        "username": username,
        "password": password
    };
    sendApiRequest(
        "POST", "https://https://gr14.appdev.cloudns.ph/authenticate",
        function (jwtResponse) {
            setCookie("jwt", jwtResponse.jwt);
            const userData = parseJwtUser(jwtResponse.jwt);
            if (userData) {
                setCookie("current_username", userData.username);
                setCookie("current_user_roles", userData.roles.join(","));
            }
            successCallback();
        },
        postData,
        function (responseText) {
            errorCallback(responseText);
        }
    );
}

/**
 * Parse JWT string, extract information from it
 * Code copied from https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
 * @param token JWT token string
 * @returns {any} Decoded JWT object
 */
export function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

/**
 * Parse JWT string, extract a User object
 * @param jwtString
 * @return User object
 */
export function parseJwtUser(jwtString) {
    let user = null;
    const jwtObject = parseJwt(jwtString);
    if (jwtObject) {
        user = {
            "username": jwtObject.sub,
            "roles": jwtObject.roles.map(r => r.authority)
        }
    }
    return user;
}


/**
 * Log-out the user
 */
export function doLogout() {
    console.log("Logging out...");
    deleteAuthorizationCookies();
}

/**
 * Delete all cookies related to authorization (user session)
 */
export function deleteAuthorizationCookies() {
    deleteCookie("jwt");
    deleteCookie("current_username");
    deleteCookie("current_user_roles");
}

export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Delete a cookie
 * @param cookieName Name of the cookie to delete
 */
export function deleteCookie(cookieName) {
    setCookie(cookieName, "", -1);
}

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function sendApiRequest(method, url, callback, requestBody, errorCallback) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let responseJson = "";
                if (request.responseText) {
                    responseJson = JSON.parse(request.responseText);
                }
                callback(responseJson);
            } else if (errorCallback) {
                errorCallback(request.responseText);
            } else {
                console.error("Error in API request");
            }
        }
    };
    request.open(method, url);
    const jwtToken = getCookie("jwt");
    if (jwtToken) {
        request.setRequestHeader("Authorization", "Bearer " + jwtToken);
    }
    if (requestBody) {
        if (method.toLowerCase() !== "get") {
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(requestBody));
        } else {
            console.error("Trying to send request data with HTTP GET, not allowed!")
            request.send();
        }
    } else {
        request.send();
    }
}