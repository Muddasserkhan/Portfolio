import React from 'react';
import Image from 'next/image';
import upright from '../../public/up-right.png';
import Link from 'next/link'

const PortfolioSlider = ({ portfolio }) => {

  return (
    <div id="portfolio">
      {
        portfolio.map((portfolios, index) => (
          <section key={index} >
            <div className="bg-cover bg-center bg-no-repeat h-screen bg-fixed for_desktop" style={{ backgroundImage: `url(${portfolios.bgImage.src})` }}>
              <div className='overlay'></div>
              <div className="portfolio_descrion">
                <div className='portfolio_title'>
                  <div className='up_content flex items-center justify-between pb-5'>
                    <Link className='flex items-center gap-8 ' href={portfolios.link}>
                      <h2 className='text-white'>{portfolios.title}</h2>
                      <Image src={upright} alt="upright"/>
                    </Link>
                    <div className="portfolio_duration">
                      <h2 className='text-white'>{portfolios.duration}</h2>
                    </div>
                  </div>
                  <hr />
                  <div className="lower_content flex items-center justify-between py-5">
                    <div className="lower_description sm:first:w-5/12">
                      <p className='text-white font-medium'>{portfolios.description}</p>
                    </div>
                    <div className="Project_tool">
                      <p className='text-white'>
                      <ul>
                        {Array.isArray(portfolios.tools) && portfolios.tools.map((tool, toolIndex) => (
                          <li key={toolIndex} className='text-right'>{tool}</li>
                        ))}
                      </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cover bg-center bg-no-repeat h-screen bg-fixed for_mobile" style={{ backgroundImage: `url(${portfolios.bgImagemobile.src})` }}>
              <div className='overlay'></div>
              <div className="portfolio_descrion px-4">
                <div className='portfolio_title'>
                  <div className='up_content flex items-start justify-between pb-5 flex-col gap-4'>
                    <Link className='flex items-start gap-4 flex-col-reverse' href={portfolios.link}>
                      <h2 className='text-white'>{portfolios.title}</h2>
                      <Image src={upright} alt="upright"/>
                    </Link>
                    <div className="portfolio_duration">
                      <h2 className='text-white'>{portfolios.duration}</h2>
                    </div>
                  </div>
                  <hr />
                  <div className="lower_content flex items-center justify-between py-5 flex-col gap-8">
                    <div className="lower_description sm:first:w-5/12">
                      <p className='text-white font-medium'>{portfolios.description}</p>
                    </div>
                    <div className="Project_tool w-full">
                      <p className='text-white'>
                      <ul>
                        {Array.isArray(portfolios.tools) && portfolios.tools.map((tool, toolIndex) => (
                          <li key={toolIndex} className='text-left'>{tool}</li>
                        ))}
                      </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))
      }
    </div>
  );
};

export default PortfolioSlider;
