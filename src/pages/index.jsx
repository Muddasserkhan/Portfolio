// src/pages/index.js
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSlider from "@/components/PortfolioSlider";
import BannerSection from '@/components/BannerSection';
import About from '@/components/About';
import Education from '@/components/Education';
import Services from '@/components/Services';
import ProgressBar from '@/components/ProgressBar';
import Experience from '@/components/Experience';
import psdToWordpress from '../../public/icon_num_01_f.svg';
import ThemeCustomize from '../../public/icon_num_05_f.svg';
import Webflow from '../../public/icon_num_02_f.svg';
import WordPressMigration from '../../public/icon_num_08_f.svg';
import ReactNext from '../../public/react_icon_num_05_f.png';
import upright from '../../public/up-right.png';

import portfolio1 from '../../public/portfolio.png';
import portfolio2 from '../../public/portfolio-2.png';
import portfolio3 from '../../public/portfolio-3.png';

import portfolio1Mobile from '../../public/portfoliomobile.png';
import portfolio2Mobile from '../../public/portfolio-2mobile.png';
import portfolio3Mobile from '../../public/portfolio-3mobile.png';



const services = [
  {
    icon: psdToWordpress,
    title: 'PSD To Wordpress',
    detail: 'My PSD to WordPress conversion service delivers pixel-perfect websites through expert iterations and analytics. I create versatile themes, ensuring precision and excellence.I know accuracy is crucial to elevate your website.',
  },
  {
    icon: ThemeCustomize,
    title: 'Custom Theme Development',
    detail: 'I provide specialized WordPress theme modifications, bringing distinctive style and functional changes to match your particular requirements. Improving the look and feel of your website is my first goal.',
  },
  {
    icon: Webflow,
    title: 'WooCommerce Development',
    detail: 'I can manage large WooCommerce projects, review your performance, and advise on optimizing speed and database efficiency. Whether you are launching your first eCommerce store or migrating an existing one, a strong web platform is key to your success.',
  },
  {
    icon: ReactNext,
    title: 'React / Next js',
    detail: 'I designed web applications using React and Next.js, combining React component-based architecture with Next.js server-side rendering for fast, scalable, and SEO-friendly solutions.',
  },
  {
    icon: WordPressMigration,
    title: 'WordPress Migration',
    detail: 'I handle WordPress migration with precision, ensuring a smooth transition of your site to a new host or domain. From data transfer to plugin compatibility, I make sure everything runs seamlessly.',
  },
];

const skillsTechnology = [
  {  
    label: "Programming Languages", 
    value: 80, 
    detail : "JavaScript, TypeScript, PHP",
  },
  {  
    label: "Frontend Technologies", 
    value: 95, 
    detail : "HTML, CSS, Bootstrap, Tailwind CSS, Material-UI, React, Next.js, jQuery",
  },
  {  
    label: "Wordpress", 
    value: 85, 
    detail : "Theme development, Theme Customization, Woocommerce Customization, Elementor, Elementor widgets development, Avada, Wp-Bakery, ACF, Divi",
  },
  { 
    label: "Python", 
    value: 50, 
    detail : "Python Data Structures, gaining a solid understanding of essential data structures such as lists, dictionaries, tuples, and sets. Developed skills in efficiently managing and manipulating data, crucial for solving complex programming challenges.",
  },
  {
    label: "React", 
    value: 60, 
    detail : "Sed ut perspiciatis unde omnis iste natus error voluptatem dolorem laudantis totamrem aperiam, eaque ipsa quae ab illo inventore veritatis quasi.",
  },
  {
    label: "Design Platform", 
    value: 70, 
    detail : "Figma, PSD, Adobe XD, Invision, Etc",
  },

];

const experience = [
  {
    company: 'Perfect Web Solutions Pvt. Ltd.',
    duration:'2021 - Present',
    designation:'Senior Web Developer',
  },
  {
    company: 'OSO Software Outstanding',
    duration:'2020 - 2021',
    designation:'Wordpress Developer',
  },
]

const education = [
  {
    company: 'Bs Computer Science',
    duration:'2019 - 2024',
    designation:'Virtual University of Pakistan',
  },
  {
    company: 'Web And App Development',
    duration:'2020 - 2021',
    designation:'Corvit Systems Lahore',
  },
  {
    company: 'Intermediate',
    duration:'2017 - 2019',
    designation:'Govt Islamiya Degree College For Boys',
  },
  {
    company: 'Matric',
    duration:'2015 - 2017',
    designation:'Govt Islamiya High School',
  },
]

const portfolioData = [
  {
    title:"Elan Life",
    link:"http://elan-life.com/",
    tools: ["HTML & CSS & JS", "Theme Customization", "ACF"],
    duration:"2024",
    description:"Elanlife is a web-based project built using a custom template in WordPress. The custom template in WordPress offers a user-friendly interface that allows users to customize their website's design, layout, and functionality. Users can choose from a range of pre-designed templates or create their own custom design using the template editor.",
    upright, upright,
    bgImage:portfolio1,
    bgImagemobile:portfolio2Mobile,
  },

  {
    title:"La Estrella Home Care",
    link:"https://estrellacare.com/",
    tools: ["Gravity Form", "Dynamic Pdf Generate","Theme Customization"],
    duration:"2022",
    description:"I played a key role in creating and managing the La Estrala Home Care website. I successfully implemented dynamic PDF generation using Gravity Forms, which enabled customized form submissions and streamlined document automation, enhancing the user experience and operational efficiency.",
    upright, upright,
    bgImage:portfolio2,
    bgImagemobile:portfolio3Mobile,
  },
  {
    title:"Clear Compare",
    link:"https://clearcompare.ca/",
    tools: ["HTML & CSS & JS", "Theme Customization"],
    duration:"2023",
    description:"Redesigned and developed backend functionality for Clear Compare using WordPress Template. Improved user experience and optimized backend processes, enhancing the overall performance and reliability of the website. ",
    upright, upright,
    bgImage:portfolio3,
    bgImagemobile:portfolio1Mobile,
  },
]

const counter = [
  {
    count: "",
    title: "",
  },
]

export default function Home() {




  return (
    <>
      <Header />
      <BannerSection />
      <About />
      <Education educationData ={education}/>
      <Services serviceData={services} />
      {/* Technologies Skill */}
      <section className='sm:my-24 my-12'>
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="space-y-12 sm:first:w-5/12 sm:sticky sm:top-16 sm:self-start">
              <h2>Special Skills</h2>
              <div className='space-y-3'>
                <h3 className="font-medium text-lg">I am very open to learn new things</h3>
                <p className="text-base font-light leading-6 text-lightblack">
                Highly skilled Web Developer, Designer, and WordPress expert with over 3 years of experience in developing and
 designing responsive websites and applications. Proficient in front-end and back-end web development, web design,
 and WordPress theme customization. Strong attention to detail and excellent problem-solving skills.
                </p>
              </div>
            </div>
            <div className="sm:w-6/12">
              <div className="sm:space-y-20 space-y-12">
                {skillsTechnology.map((skillItem, index) => (
                  <div key={index} className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h2 className="font-semibold md:text-2xl text-lg">{skillItem.label}</h2>
                        <h3 className="font-semibold md:text-2xl text-lg">{skillItem.value}%</h3>
                      </div>
                      <p className="text-base font-light leading-6 text-lightblack">{skillItem.detail}</p>
                    </div>
                    <ProgressBar progress={skillItem.value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section>
        <PortfolioSlider portfolio={portfolioData} /> 
      </section>
      {/* My Experiences */}
      <Experience experienceData={experience} />
      <Footer></Footer>
    </>
  );
}
