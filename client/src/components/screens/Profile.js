import react from 'react';

const Profile= ()=>{
    return(
        <div className='profile-parent-div'>
            <div style={{display:'flex',justifyContent:'space-around',margin:'18px 0px',borderBottom:'1px solid black'}}>
                <div>
                    <img className='profile-image' src="/images/profile-image.png"/>
                </div>
                <div>
                    <h4>Name</h4>
                    <div style={{display:'flex',justifyContent:'space-between',width: '110%'}}>
                        <h6>n posts</h6>
                        <h6>n followers</h6>
                        <h6>n followings</h6>
                    </div>
                </div>
            </div>

            <div className='gallery'>
                <img className='items' src="https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80"/>
                <img className='items' src="https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80"/>
                <img className='items' src="https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80"/>
                <img className='items' src="https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80"/>
                <img className='items' src="https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80"/>
                <img className='items' src="https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80"/>

            </div>
        </div>

    );
}

export default Profile;