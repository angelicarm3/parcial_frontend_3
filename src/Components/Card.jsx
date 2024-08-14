const Card = ({ person }) => {
  const { name, favoriteFood } = person
  
  return (
    <div className="cardContainer">
      <h3>Hola {name}</h3>
      <span>Sabemos que tu comida favorita es: {favoriteFood}</span>
    </div>
  )
}

export default Card