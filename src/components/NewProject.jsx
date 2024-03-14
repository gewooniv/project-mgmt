import { useRef } from "react";
import InputField from "./InputField";
import Button from "./Button";

export default function NewProject({ onAdd }) {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDueDate = useRef();

  function handleCreate() {
    const enteredTitle = inputTitle.current.value;
    const enteredDescription = inputDescription.current.value;
    const enteredDueDate = inputDueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[30rem] px-2 py-4 text-s">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <Button onClick={handleCreate}>Save</Button>
        </li>
      </menu>
      <div id="content">
        <InputField label="title" input={inputTitle} type="text" />
        <InputField label="description" input={inputDescription} textarea />
        <InputField label="due date" input={inputDueDate} type="date" />
      </div>
    </div>
  );
}
