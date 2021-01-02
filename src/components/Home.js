import React, { Component } from 'react';
import image from '../assets/background.jpg';


class Home extends Component {
    render() {
        return (
            <main>
                <img src={image} alt="background img" className="absolute object-cover w-full h-full" />
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h2 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug">Ready to code your web or mobile applications!</h2>
                </section>
            </main>
        )
    }
}

export default Home;