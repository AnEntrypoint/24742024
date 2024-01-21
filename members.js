import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { unsafeHTML } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.1/all/lit-all.min.js';
export class Members extends LitElement {
    static properties = { members: { type: Array } }

    constructor() {

        super();

        this.members = []
        this.load('members')
    }
    async load(propName) {
        const pb = new PocketBase("https://pb.lan.247420.xyz")
        window.pb = pb;
        const table = await pb.collection(propName)
        let page = 0
        const items = [];
        while (true) {
            const list = await table.getList(++page, 500, { expand: 'directors' });
            console.log(list.items.length)
            for (let index in list.items) {
                items.push(list.items[index])
            }
            if (list.items.length < 500) break;
        }
        this[propName] = items;
        console.log(this[propName])
        this.requestUpdate()
    }
    render() {
        return html` <ul>${(this.members).map(item => {
            return html`
            <li>
            ${item.ERC20}
            ${item.pseudonym}
            ${unsafeHTML(item.bio)}
            </li>
            `
        }
            //html``
        )}</ul>`
    }
}
customElements.define('site-members', Members);