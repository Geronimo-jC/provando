const lista=[]
const RegistroDePacientes= (event)=>{
    event.preventDefault()
    let nombre=document.getElementById("nombre")
    let correo=document.getElementById("correo")
    let domicilio=document.getElementById("domicilio")
    let numer=document.getElementById("numero")
    let patologia=document.getElementById("patologia")

    let registro = {
        nombre: nombre.value,
        correo:correo.value,
        domicilio:domicilio.value,
        numer:numer.valueAsNumber,
        patologia:patologia.value,
        
    }
    lista.push(registro)
    mostrarRegistro()
}
const mostrarRegistro=()=>{
    let salida = document.getElementById("salida")
    salida.innerHTML=""
    lista.map((registro)=>(
        salida.innerHTML+=`
        
        <tr>
            <th> ${registro.nombre} </th>
            <th>${registro.correo}</th>
            <th>${registro.domicilio}</th>  
             <th>${registro.numer}</th>
            <th>${registro.patologia}</th>
        </tr>
        `
    ))
}