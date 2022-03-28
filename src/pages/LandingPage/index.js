import React from 'react';
import { LoginButton } from '../../components/LoginButton';
import { CTA_RegisterButton } from '../../components/RegisterButton';
import LandingImage from './images/landingImage.png';
import './landing.scss';
import { AppLogo } from '../../components/AppLogo';

function LandingPage() {
    return(
        <React.Fragment>
            <section className='login'>
                <p className='login__text'>have already an account?</p>
                <LoginButton/>
            </section>
            <div className='landingContainer'>
                <section className='landingPage__hero'>
                    <AppLogo/>
                    <picture>
                        <img className='landingPage__Image' src={LandingImage} alt='Studio Ghibli Works Catalogue'/>
                    </picture>
                </section>
                <section className='landingDescription'>
                    <article className='landingDescription__text'>
                        <h2> <span className='landing__text--search'>Search</span>, <span className='landing__text--discover'>Discover</span>, <span className='landing__text--rate'>Rate</span></h2>
                        <div>
                            <p>With Studio Ghibli <span className='std_ghibli_tracker'>Tracker</span> you can:</p>
                            <p><span className='landing__text--search'>Search</span> all the animated masterpieces produced by Studio Ghibli,</p>
                            <p><span className='landing__text--discover'>Discover</span> the incredible and fascinating catalogue of memorable movies,</p>
                            <p>and <span className='landing__text--rate'>Rate</span> them to share with everyone your love and thoughts for your favorite movies.</p>
                        </div>
                    </article>
                    <CTA_RegisterButton />
                </section>
            </div>
        </React.Fragment>
    );
}

export { LandingPage };
