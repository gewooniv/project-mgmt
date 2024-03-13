import InputField from "./InputField";
import Button from "./Button";

export default function NewProject({
  handleSave,
  inputTitle,
  inputDescription,
  inputDueDate,
}) {
  return (
    <div className="w-[30rem] px-2 py-4 text-s">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div id="content">
        <InputField label="title" input={inputTitle} type="text" />
        <InputField
          label="description"
          input={inputDescription}
          type="text"
          textarea
        />
        <InputField label="due date" input={inputDueDate} type="text" />
      </div>
    </div>
  );
}
