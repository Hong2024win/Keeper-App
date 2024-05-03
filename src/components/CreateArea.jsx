import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

export default function CreateArea(props){
    const [note, setNote]=useState(
        {title:'',
        content:''
        }
    );
    function handelChange(e){
        const {name, value} =e.target;
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

function submitNote(e){
e.preventDefault();
props.onAdd(note);
setNote({title:'',
content:''
})
}

    return(
        <div>
            <form>
                <input name="title" 
                value={note.title} 
                placeholder="title"
                onChange={handelChange}
                ></input>
                <textarea name="content" value={note.content} onChange={handelChange} placeholder="Take a note..." rows="3" />
                <Zoom in={true}><button onClick={submitNote}><AddCircleIcon /></button></Zoom>
            </form>
        </div>
    )
}