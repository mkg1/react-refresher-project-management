import { useRef } from 'react';
import Input from "./Input"
import Modal from './Modal';
export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        // validation
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            // show error modal
            modal.current.open();
            return;
        }
        onAdd({title: enteredTitle, description: enteredDescription, dueDate: enteredDueDate});
    }
    return (
        <>
        <Modal ref={modal}>
            <h2>Invalid Input</h2>
            <p>Opps looks like you forgot to enter a value</p>
            <p>Please add a value for every field</p> 
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-900" onClick={onCancel}>Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleSave}>
                    Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" isTextArea/>
                <Input type="date" ref={dueDate} label="Due Date"/>
            </div>
        </div>
    </>
    )
}