class Persona {
  contructor(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.datos = `Me llamo ${this.Personanombre} ${this.apellido} y tengo ${this.edad} años`
  }

  saludar(){
    return `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
  }
}

const fernando = new Persona('Fernando', 'Morales', 36)

console.log(fernando)
