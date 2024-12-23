import ListComponent from "./components/ListComponent.jsx";
import { useState } from "react";

function App() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [isValidValue, setIsValidValue] = useState(false);
    /*
    * Обработка вводимых значений
    * */
    const handlePrompt = () => {
        let promptValue = prompt("enter a value")

        if (promptValue.length >= 3) {
            setValue(promptValue);
            setError(null);
            setIsValidValue(true)
        } else {
            setError("Введенное значение должно содержать минимум 3 символа")
            setIsValidValue(false)
        }
    }
    /*
    * добавление значений в
    * */
    const addToList = (e) => {
        if (value) {
            list.push({
                message: value,
                time: new Date().toLocaleTimeString()
            });
            setValue("")
        } else e.preventDefault();
    }

    return (
        <div className="app">
            <h1 className="page-heading">Ввод значения</h1>
            <p className="no-margin-text">
                Текущее значение <code>value</code>: { value }
            </p>
            {/*  если значение состояния value < 3, будет показан див с ошибкой  */}
            {
                error && <div className="error">Введенное значение должно содержать минимум 3 символа</div>
            }

            <div className="buttons-container">
                <button className="button" onClick={handlePrompt}>Ввести значние</button>
                <button className="button" onClick={(e) => addToList(e)} disabled={!isValidValue}>Добавить в список</button>
            </div>
            <ListComponent list={list} />
        </div>
    )
}

export default App
