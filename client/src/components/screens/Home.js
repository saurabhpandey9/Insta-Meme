import react, { useEffect, useState } from 'react';

const Home = () => {

    var userid= JSON.parse(localStorage.getItem('user'))._id;
    const [data, SetData] = useState([]);
    useEffect(() => {

        fetch("/allpost", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },

        }).then(res => res.json()
            .then(res => {
                if (res.success) {
                    console.log(res.allpost);
                    SetData(res.allpost)
                }

            }));

    }, [])


    // like dislike added in same api
    const like = (id) => {
        fetch("/like", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt'),
            },
            body: JSON.stringify({
                postId: id
            })

        }).then(res => res.json()
            .then(res => {
                if (res.success) {
                    // console.log(res)
                    // This method blow my mind completely start
                    const newData=data.map(item=>{
                        if (item._id===res.message._id){
                            return res.message
                            
                        }
                        else{
                            return item
                        }
                    })
                    SetData(newData);
                    console.log(newData);

                    // This method blow my mind completely ends here
                    
                }

            }));

    }





    return (
        <div className='home'>
            {
                data.map(item => {

                    return (

                        <div className='card home-card' key={item._id}>
                            <h5> {item.postedBy.name} </h5>
                            <div className='card-image'>
                                <img src={item.url} />
                            </div>
                            <div className='card-content'>
                                <i className="material-icons" onClick={()=>like(item._id)} style={{ color: 'red' }}>{item.like.includes(userid)?"favorite":"favorite_border"}</i>
                                <b>
                                    <div style={{ display: 'flex' }}>

                                        <p style={{ marginRight: '3px', }}>{item.like.length}</p><p>likes</p>

                                    </div>
                                </b>

                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type='text' placeholder='Comment' />
                            </div>
                        </div>

                    );

                })
            }



        </div>

    );
}

export default Home;