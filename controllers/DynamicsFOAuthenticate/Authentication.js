const AuthenticationContext = require('adal-node').AuthenticationContext;

class Authentication {
    constructor (options = {}) {
        this.clientID = options.clientID;
        this.clientSecret = options.clientSecret;
        this.autorityHostUrl = (options.autorityHostUrl == undefined) ? 'https://login.microsoftonline.com':options.autorityHostUrl;
        this.tenant = options.tenant;
        this.authorityUrl = `${this.autorityHostUrl}/${this.tenant}`;
        this.redirectUri = (options.redirectUri == '') ? '':options.redirectUri;
        this.token = '';
        this.resource = (options.resource == undefined) ? 'https://login.microsoftonline.com/e70c048e-459f-48f1-98c2-1d31a45a2ca1/oauth2/token':options.resource;
    }
    getContext() {
        this.Context = new AuthenticationContext(this.authorityUrl);
        return this;
    }
    getToken(callback) {
        this.Context.acquireTokenWithClientCredentials(this.resource, this.clientID, this.clientSecret, function (err, TokenResponse) {
            if (err) {
                console.log('well that din\'t work: ' + err);
            } else {
                callback(TokenResponse.accessToken);
            }
        });
    }
    Authentication (options) {
        return new Authentication(options);
    }
}

module.exports = Authentication