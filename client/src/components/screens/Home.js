import react, { useEffect, useState } from 'react';

const Home = () => {
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
                                <i className="material-icons" style={{ color: 'red' }}>favorite</i>
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