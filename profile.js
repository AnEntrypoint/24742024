import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
export class SimpleGreeting extends LitElement {
    static properties = {
        name: '',
        _user: {}
    };
    user = null;

    constructor() {
        super();
        const el = this
    }

    login() {
        pb.collection('users').authWithOAuth2({ provider: 'google' }).then((authData) => { this._user = authData.meta; console.log(this._user) });
    }

    logout() {
        pb.authStore.clear();
    }

    render() {
        console.log(this._user)
        if (!this._user?.id) {
            console.log(this.user)
            return html`
            <p><button @click="${this.login}">Log in with Google</button></p>
            `;
        } else {
            return html`
            <div class="card">
                <img src="${this._user.avatarUrl}" alt="${this._user.name}">
                <h1>${this._user.name}</h1>
                <p class="title">${this._user.email}</p>
                <p><button @click="${this.logout}">Log out</button></p>
            </div>
            `;
        }
    }
}
customElements.define('my-profile', SimpleGreeting);