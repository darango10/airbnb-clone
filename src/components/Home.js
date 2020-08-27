import React from 'react';
import '../css/home.css'
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <div className="home__section">
                <Card
                    src={'https://images.unsplash.com/photo-1521335751419-603f61523713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80'}
                    title={'Online Experiences'}
                    description={'Unique activities we can do together, led by a world of hosts.'}
                />
                <Card
                    src={'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                    title={'Unique Stays'}
                    description={'Spaces that are more than just a place to sleep.'}
                />
                <Card
                    src={'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80'}
                    title={'Entire Homes'}
                    description={'Comfortable private places, with room for friends family.'}
                />
            </div>

            <div className="home__section">
                <Card
                    src={'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
                    title={'3 Bedroom Flat in Bournemouth'}
                    description={'Superhost with stunning view of the beachside in Sunny Bournemouth.'}
                    price={'$130/night'}
                />
                <Card
                    src={'https://images.unsplash.com/photo-1588724813535-b8ae25946a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                    title={'Penthouse in London'}
                    description={'Enjoy the amazing sights of London with this stunning penthouse.'}
                    price={'$530/night'}
                />
                <Card
                    src={'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                    title={'1 Bedroom apartment'}
                    description={'Superhost with grat amenities and a fabolous shopping complex nearby.'}
                    price={'$70/night'}
                />
            </div>
        </div>
    );
};

export default Home;
