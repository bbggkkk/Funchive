export class TwitchObserver {
    clientID: string
    clientSecret: string
    accessToken: string
    oauthToken: string
    accessTokenExpireTime: number
    constructor({ clientID, clientSecret }) {
        this.clientID = clientID
        this.clientSecret = clientSecret
        this.init();
    }

    async init() {
        this.updateOAuth()

    }
    async checkOAuth() {

    }
    async updateOAuth() {
        const { access_token, expires_in, token_type } = await this.getOAuth();
        this.accessToken = access_token;
        this.oauthToken = `${token_type.replace(/^[a-z]/, (letter: string) => letter.toUpperCase())} ${access_token}`;
        this.accessTokenExpireTime = new Date().getTime() + expires_in;
        const data = await this.getEventSub();
        console.log(data);
    }
    async getOAuth() {
        return await fetch(`https://id.twitch.tv/oauth2/token?client_id=${this.clientID}&client_secret=${this.clientSecret}&grant_type=client_credentials`, {
            method: 'POST'
        }).then(data => data.json())
    }
    async getEventSub() {
        console.log(this.oauthToken)
        return await fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
            method: 'POST',
            headers: new Headers({
                'Authorization': this.oauthToken,
                'Client-Id': this.clientID,
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                type: 'stream.online',
                version: 1,
                condition: {
                    broadcaster_user_id: '1337'
                },
                transport: {
                    method: 'websocket',

                },
            })
        }).then(data => data.json())
    }
}