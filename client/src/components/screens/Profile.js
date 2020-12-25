import react, { useEffect, useState } from 'react';

const Profile= ()=>{
    const [data, SetData] = useState([]);
    useEffect(() => {

        fetch("/mypost", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt'),
            },

        }).then(res => res.json()
            .then(res => {
                if (res.success) {
                    SetData(res.mypost)
                }

            }));
            

    }, [])
    return(
        <div className='profile-parent-div'>
            <div style={{display:'flex',justifyContent:'space-around',margin:'18px 0px',borderBottom:'1px solid black'}}>
                <div>
                    <img className='profile-image' src="/images/profile-image.png"/>
                </div>
                <div>
                    <h4>{JSON.parse(localStorage.getItem('user')).name}</h4>
                    <div style={{display:'flex',justifyContent:'space-between',width: '110%'}}>
                        <h6>{data.length} posts</h6>
                        <h6>0 followers</h6>
                        <h6>0 followings</h6>
                    </div>
                </div>
            </div>


            <div className='gallery'>
            {
                data.map(item => {

                    return (

                        <img className='items' src={item.url} key={item._id} alt={item.title} key={item._id} />

                    );

                })
            }


            </div>
        </div>

    );
}

export default Profile;