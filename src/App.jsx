import { useState } from "react";
import Card from "./Components/Card";
import "./Styles/App.css";
import Form from "./Components/Form";

function App() {
  const [person, setPerson] = useState({ name: "", favoriteFood: "" })
  const [isValid, setIsValid] = useState(false)
  const [errors, setErrors] = useState({ name: false, favoriteFood: false })
  console.log(errors)
  console.log(!isValid || errors.name || errors.favoriteFood)
 
  return (
    <div className="App">
      <Form person={person} setPerson={setPerson} setIsValid={setIsValid} errors={errors} setErrors={setErrors} />

      {
        isValid && < Card person={person} errors={errors} />
      }
      {
        (errors.name || errors.favoriteFood) &&
        <h4 className="errorMessage">Por favor chequea que la información sea correcta</h4>
      }
    </div>
  );
}

export default App;