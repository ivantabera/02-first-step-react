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

import './styles.css';

export const MyFirstApp = ({ title, subtitle, operation }) => {
  return (
    <>
      {fnSaludo(objectPerson)}
      <h1>Hola {title}!</h1>
      <p>{subtitle}</p>
      <p>{operation + 1}</p>
    </>
  )
}