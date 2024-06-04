/*El objeto y la funcion que se estan colocando fuera del funcional component
* ahi los dejare ya que no seran datos dinamicos, si fueran dinamicos o tuvieran
* una dependencia se ponen dentro del funcional component para que recarguen y cambien o muten*/
const objectPerson = {
  name: 'Ivan',
  lastName: 'Tabera',
  age: 35,
  phone: 5579321235,
  isAdmin: true
}

const fnSaludo = (persona) => {
  return `Hola ${persona.name} ${persona.lastName} 
  tu edad es ${persona.age}
  tu telefono es ${persona.phone}
  eres ${!persona.isAdmin ? 'Administrador' : 'Usuario'}`
}

export const MyFirstApp = () => {
  return (
    <>
      {fnSaludo(objectPerson)}
      <h1>Hola ivan!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur consequuntur dicta dignissimos ea esse est exercitationem id iusto minima nemo nihil, odio, officia quibusdam reprehenderit tempora veniam voluptatum.</p>
    </>
  )
}