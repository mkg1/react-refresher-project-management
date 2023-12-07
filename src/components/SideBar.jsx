import Button from "./Button"
export default function SideBar({onStartProject}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartProject}>Add Project</Button>
            </div>
            {/* project list */}
            <ul></ul>
        </aside>
    )
}