import react from 'react';

const Home= ()=>{
    return(
        <div className='home'>
            <div className='card home-card'>

                <h5>Name</h5>

                <div className='card-image'>
                    <img src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                </div>

                <div className='card-content'>
                <i className="material-icons" style={{color:'red'}}>favorite</i>
                    <h6>title</h6>
                    <p>content</p>
                    <input type='text' placeholder='Comment'/>
                </div>

            </div>
        </div>

    );
}

export default Home;