import { useState } from "react";
import Button from "./Button";
import image from "../assets/no-projects.png";

export default function Content({ onCreate }) {
    
    return (
        <div className="grid justify-items-center" id="content">
            <h1 className="my-8 text-center text-3xl font-bold">Content</h1>
            <img className="object-contain h-24" src={image} />
            <p className="py-6">Select a project or get started on a new one</p>
            <Button onClick={onCreate}>Create a new project</Button>
        </div>
    )
}