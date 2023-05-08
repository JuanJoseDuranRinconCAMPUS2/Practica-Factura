import config from "./config.js"
export default class myFooter extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(myFooter.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    hadledEvent(e){
        (e.type === "click") ? this.sendMessage(e) : console.log("Error 404")
    }
    sendMessage(e){
    }
    connectedCallback(){
        Promise.resolve(myFooter .components()).then(html=>{
            this.shadowRoot.innerHTML = html;
        })
        console.log("etiqueta navbar creada");
    }
}

customElements.define(config.name(myFooter.url), myFooter);