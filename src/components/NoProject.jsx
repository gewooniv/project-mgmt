import { useState } from "react";
import image from "../assets/no-projects.png";

export default function Content({ onCreate }) {
    
    return (
        <div className="grid justify-items-center" id="content">
            <h1 className="my-8 text-center text-3xl font-bold">Content</h1>
            <img className="object-contain h-24" src={image} />
            <p className="py-6">Select a project or get started on a new one</p>
            <button className="bg-slate-400 h-8 px-5 rounded-lg hover:bg-slate-300" onClick={onCreate}>Create a new project</button>
        </div>
    )
}