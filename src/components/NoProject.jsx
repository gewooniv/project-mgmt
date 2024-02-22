import { useState } from "react";
import image from "../assets/no-projects.png";

export default function Content({ onCreate }) {
    
    return (
        <div className="grid justify-items-center" id="content">
            <h1 className="my-8 text-center text-3xl font-bold">Content</h1>
            <img className="object-contain h-24" src={image} />
            <p>Select a project or get started on a new one</p>
            <button onClick={onCreate}>Create a new project</button>
        </div>
    )
}