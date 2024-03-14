import { useRef } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();

  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDueDate = useRef();

  function handleCreate() {
    const enteredTitle = inputTitle.current.value;
    const enteredDescription = inputDescription.current.value;
    const enteredDueDate = inputDueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="my-4 text-stone-700 text-center text-3xl font-bold">
          You have entered an invalid input
        </h2>
        <p className="mb-4 text-stone-600">
          Please make sure you have provided a valid value for every input.
        </p>
      </Modal>
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
    </>
  );
}
