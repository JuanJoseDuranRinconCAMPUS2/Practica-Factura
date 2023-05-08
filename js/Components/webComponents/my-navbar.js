import config from "./config.js"


export default class myNav extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(myNav.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    hadledEvent(e){
        (e.type === "click") ? this.sendMessage(e) : console.log("Error 404")
    }
    sendMessage(e){
        this.navbarLinks = this.shadowRoot.querySelector('.navbar-links');
        this.navbarLinks.classList.toggle('active')
    }
    hadledEvent2(e){
        (e.type === "click") ? this.ModalMessage(e) : console.log("Error 404")
    }
    ModalMessage(e){
        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.modal__close');
        e.preventDefault();
        modal.classList.add('modal--show');
        closeModal.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.remove('modal--show');
        });
    }
    connectedCallback(){
        Promise.resolve(myNav.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.toggle = this.shadowRoot.querySelector(".toggle");
            this.toggle.addEventListener("click", this.hadledEvent.bind(this));
            this.modalButton = this.shadowRoot.querySelector("#carrito");
            this.modalButton.addEventListener("click", this.hadledEvent2.bind(this));
        })
        console.log("etiqueta navbar creada");
    }
}

customElements.define(config.name(myNav.url), myNav);
