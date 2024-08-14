const Form = ({ person, setPerson, setIsValid, errors, setErrors }) => {
  const handleNameChange = (e) => {
    setPerson({ ...person, name: e.target.value })
    setIsValid(false)
    setErrors({ name: false, favoriteFood: false })
  }
  const handleFavoriteFoodChange = (e) => {
    setPerson({ ...person, favoriteFood: e.target.value })
    setIsValid(false)
    setErrors({ name: false, favoriteFood: false })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isNameValid = person.name === person.name.trimStart() && person.name.length > 2
    const isFavouriteFoodValid = person.favoriteFood.length > 5

    isNameValid && isFavouriteFoodValid
      ? setIsValid(true)
      : !isNameValid && !isFavouriteFoodValid
        ? setErrors({ name: true, favoriteFood: true })
        : !isNameValid && isFavouriteFoodValid
          ? setErrors({ ...errors, name: true })
          : isNameValid && !isFavouriteFoodValid &&
          setErrors({ ...errors, favoriteFood: true })
  }

  return (
    <div className="formContainer">
      <h1>Cuéntanos más de ti</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Nombre:</span>
          <input type="text" value={person.name} onChange={handleNameChange} />
        </label>

        <label htmlFor="">
          <span>Comida favorita:</span>
          <input type="text" value={person.favoriteFood} onChange={handleFavoriteFoodChange} />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form