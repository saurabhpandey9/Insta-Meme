import {useState}from 'react';
import { Link,useHistory } from 'react-router-dom';
import M from 'materialize-css';

const CreatePost = () => {
    const [title,setTitle] =useState("");
    const [content,setContent] =useState("");
    var [image,setImage] =useState("");
    return (
        <div className='card parent-create-post'>
            <h5>Create new post</h5>
            <input text='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input text='text' placeholder='Content' value={content} onChange={(e)=>setContent(e.target.value)} />

            <div className="file-field input-field">
                <div className="btn #1e88e5 blue darken-1">
                    <span>Select file</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate input-field" type="text"/>
                </div>
            </div>

            <button className="btn waves-effect waves-light #1e88e5 blue darken-1">Upload</button>

        </div>

    );
}

export default CreatePost;