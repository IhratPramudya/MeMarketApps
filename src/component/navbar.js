
class Navbar extends HTMLElement{

    connectedCallback(){
        this.render()
    }

 
    render() {
        this.innerHTML = `
        <style>
        import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
        </style>
           <div class="container-fluid">
           <nav class="navbar navbar-expand-lg bg-light">
           <div class="container-fluid d-flex justify-content-evenly">
               <a class="navbar-brand" href="#">You Ticket Market Games</a>
           </div>
           </nav>
           </div>
        `

    }
}


customElements.define('nav-bar', Navbar);