import { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const CreatePost = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    useEffect(()=>{
        if (url) {
            fetch("/createpost", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('jwt'),
                },
                body: JSON.stringify({
                    title,
                    body: content,
                    url
                })
    
            }).then(res => res.json()
                .then(data => {
                    if (data.success) {
                        M.toast({ html: data.message, classes: 'green' });
                        history.push('/');
                    }
                    else {
                        M.toast({ html: data.message, classes: 'red' });
                    }
    
                })).catch(error => {
                    console.log(error);
                    M.toast({ html: error.message, classes: 'red' });
                });
        }

    },[url]);

    const PostData = () => {
        const formData = new FormData();

        formData.append('file', image);
        formData.append('upload_preset', 'insta-meme');
        formData.append('cloud_name', 'developerdesk9');

        fetch('https://api.cloudinary.com/v1_1/developerdesk9/image/upload/', {
            method: 'PUT',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            setUrl(result.url);
        })
        .catch(error => {
            console.error('Error:', error);
        });


        

    }
    return (
        <div className='card parent-create-post'>
            <h5>Create new post</h5>
            <input text='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input text='text' placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} />

            <div className="file-field input-field">
                <div className="btn #1e88e5 blue darken-1">
                    <span>Select file</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate input-field" type="text" />
                </div>
            </div>

            <button className="btn waves-effect waves-light #1e88e5 blue darken-1" onClick={() => PostData()}>Upload</button>

        </div>

    );
}

export default CreatePost;