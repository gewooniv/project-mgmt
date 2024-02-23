import InputField from "./InputField";
import Button from "./Button"

export default function NewProject({ handleSave, input }) {
    return (
        <div className="w-[30rem] px-2 py-4 text-s" >
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button>Cancel</button></li>
                <li><Button onClick={handleSave}>Save</Button></li>
            </menu>
            <div id="content">
                <InputField label="title" input={input} type="text" />
                <InputField label="description" input={input} type="text" textarea />
                <InputField label="due date" input={input} type="text" />
            </div>
        </div>
    )
}