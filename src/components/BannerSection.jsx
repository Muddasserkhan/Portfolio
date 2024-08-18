import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Counter from './Counter';
import Behance from "../../public/behance.png";
import skype from "../../public/icons8-skype-500.png";
import Github from "../../public/github.png";
import Linkedin from "../../public/linkedin.png";
import Button from './Button';

const myConnections = [
    {
        link: "skype:live:.cid.e81b22593f35bd58?call",
        icon: skype,
        title: "Skype",
    },
    {
        link: "https://github.com/Muddasserkhan",
        icon: Github,
        title: "Github",
    },
    {
        link: "https://www.linkedin.com/in/muhammad-muddasser-khan-19a434243/",
        icon: Linkedin,
        title: "Linkedin",
    },
];

const counterData = [
  { targetCount: 45, title: "Satisfied Clients" },
];

const BannerSection = () => {

    return (
        <>
            <section className="cst_banner_section pt-12" id="home">
                <div className="container">
                    <h1>Digital Designer <span className="cst_and">&</span><br />Full Stack Developer</h1>
                    <div className="sm:flex items-center mt-8">
                        {counterData.map((counter, index) => (
                            <Counter key={index} targetCount={counter.targetCount} title={counter.title} />
                        ))}
                        <div className="xl:max-w-4xl lg:max-w-3xl sm:border-l border-black lg:ml-10 lg:pl-10 sm:ml-6 sm:pl-6 py-1">
                            <p className="xl:text-lg text-base text-lightgrey sm:text-start text-justify">
                                I am a <strong>Professional Web Designer & Full Stack Developer.</strong> This website showcases a diverse range of projects I have developed and designed over the past few years. Explore various types of projects, including responsive website designs, full-stack web applications, e-commerce platforms, custom web components, WordPress Development, Theme Customization, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='lg:py-36 sm:py-20 py-12 border-b border-lightblack'>
                <div className="container">
                    <div className="flex md:flex-nowrap flex-wrap md:flex-row flex-col-reverse gap-8 items-center justify-between">
                        <ul className='flex flex-wrap items-center lg:gap-10 gap-7 sm:justify-between justify-center'>
                            {myConnections.map((myConnect, index) => (
                                <li key={index}>
                                    <Link href={myConnect.link} className='flex gap-4 items-center uppercase'>
                                        <Image src={myConnect.icon} width={18} height={18} alt={myConnect.icon} />
                                        {myConnect.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Button title={'Scroll Down'} link={'#about'} btnClass={'cst_bg_tran'} icon={true} down={true} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;
