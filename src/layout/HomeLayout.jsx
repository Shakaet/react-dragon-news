import React from 'react';
import Header from '../Components/Header';
import Nav from '../Components/nav';
import "./HomeLayout.css"
import LeftA from '../Components/LeftA';
import RightA from '../Components/RightA';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='poppins-regular mx-auto'>

            <header>

                <Header></Header>

            </header>

            <nav>
                

                <Nav></Nav>
                

            </nav>

            <main className='container mx-auto mt-10 '>

              <div className='md:flex gap-5'>
              <aside className='md:w-3/12'>
                    <h2>
                        <LeftA></LeftA>
                    </h2>
                </aside>

                <section className='md:w-6/12'>

                <Outlet></Outlet>

                </section>

                <aside className='md:w-3/12'>

                <RightA></RightA>

                </aside>
              </div>

            </main>
            
        </div>
    );
};

export default HomeLayout;