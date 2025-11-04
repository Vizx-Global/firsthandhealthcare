import React from 'react'
import Header from '@/components/HeaderTwo';
import Footer from '@/components/Footer';
import AboutUsPage from './components/AboutUs';

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
          <Header/>
        <main>
             <AboutUsPage/>
        </main>
        <Footer/>

    </div>
  )
}
