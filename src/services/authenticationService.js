let options = {
    auth: {
        redirect: false
    },
    language:'de',
    primaryColor:'#31324F',
    languageDictionary: {
        title: "LOGIN"
      },
}

let lock = new Auth0Lock(
    "CLIENT ID",
    "CLIENT DOMAIN",
    options);

export default class AuthenticationService {
    login() {
        return new Promise((resolve, reject) => {
            lock.show();
            lock.on("authenticated", (authResult) => {
                localStorage.setItem("accessToken", authResult.accessToken);
                lock.getUserInfo(authResult.accessToken, (error, profile) => {
                    if (error) {
                        // Handle error
                        return reject(error);
                    }

                    localStorage.setItem("profile", JSON.stringify(profile));
                    lock.hide();
                    return resolve(profile);
                });
            });
        });
    }

    logout() {
        localStorage.clear();
    }
}