import './list.module.css'

export default function ListComponent ({ list }) {

    const isEmptyList = () => {
        if (list.length === 0) {
            return (
                <p>Нет добавленных элементов</p>
            )
        }
    }

    return (
        <div className="list-container">
            <h2 className="list-heading">Список:</h2>
            <ul className="list">
                {
                    isEmptyList() ||
                    list.map((val) => (
                        <li key={Math.round(Math.random() * 10000)}>{ val.message } { val.time }</li>
                    ))
                }
            </ul>
        </div>
    )
}