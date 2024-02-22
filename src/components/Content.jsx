import { useState } from "react";
import image from "../assets/no-projects.png";
import NewProject from "./NewProject";
import NoProject from "./NoProject";

export default function Content({ isCreating, onCreate, handleSave }) {

    return (
        <div className="grid justify-items-center" id="content">
            { isCreating ? <NewProject label="TITLE" handleSave={handleSave}/> : <NoProject onCreate={onCreate}/> }
        </div>
    )
}