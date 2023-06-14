import { Component } from "@angular/core";

@Component({
    //Identificador de nuestro componente
    selector: 'app-school',
    //Template es crear un pedazo de html dentro de ts
    //templateUrl es hacer referencia a un archivo html
    template: `
    <form>
        <label>Nombre: </label>
        <input type = "text" value = "">
        <button class = "btn btn-primary">Ingresar</button>
    </form>`,
    
})

export class schoolComponent {
    constructor() {}
}