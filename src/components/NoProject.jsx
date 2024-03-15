import Button from "./Button";
import image from "../assets/no-projects.png";

export default function Content({ onCreate }) {
  return (
    <div className="grid justify-items-center" id="content">
      <h1 className="my-4 text-stone-500 text-center text-3xl font-bold">
        Content
      </h1>
      <img className="object-contain h-24" src={image} />
      <p className="mb-6 text-stone-400">
        Select a project or get started on a new one
      </p>
      <Button onClick={onCreate}>Create a new project</Button>
    </div>
  );
}
