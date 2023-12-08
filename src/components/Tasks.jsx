import NewTask from "./NewTask"
export default function Tasks({onAdd, onDelete, tasks}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            { tasks.length === 0 && <p className="text-stone-800 mb-4">This project doesn't have any tasks yet</p> }
            { tasks.length >= 0 && <ul>
                {tasks.map((task) => <li key={task.id}>
                    <span>task.text</span>
                    <button onClick={() => onDelete(task.id)}>Clear</button>
                </li>)}
            </ul>}
        </section>
    )
}