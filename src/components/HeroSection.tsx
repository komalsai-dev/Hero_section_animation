'use client'

import { useState } from 'react'
import LottieAnimation from './LottieAnimation'
import VideoModal from './VideoModal'

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleVideoClick = () => {
    setIsVideoModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsVideoModalOpen(false)
  }

  const handleViewListings = () => {
    console.log('View Listings clicked')
    // In a real app, this would navigate to the listings page
  }

  return (
    <>
      <section className="section hero-section hero-section--home">
        <div className="container hero-section-container">
          <div className="hero-section__content">
            <div className="hero-section-text-block">
              <h1 className="headers-h1 hero-section-title c-twilight">
                The largest marketplace to buy and sell profitable online businesses
              </h1>
              <p className="body-p2-regular hero-section-subtitle">
                Join 500k+ entrepreneurs closing life-changing deals. Buy and sell SaaS, ecommerce, agencies, content, newsletters, mobile apps and crypto businesses.
              </p>
              <div className="hero-section-buttons">
                <button 
                  className="button button--primary-blue"
                  onClick={handleViewListings}
                >
                  <span className="button-text special-button-1">View Listings</span>
                  <div className="button-arrow">
                    <img 
                      src="/assets/img/arrow-right-white.c2b08a.svg" 
                      className="arrow-right" 
                      alt="arrow right"
                      width={16}
                      height={16}
                    />
                  </div>
                </button>
                <button 
                  className="button button-video play-button button--transparent button--video"
                  onClick={handleVideoClick}
                >
                  <img 
                    src="/assets/img/play-button.0609be.svg" 
                    className="play-button-icon" 
                    alt="play button"
                    width={20}
                    height={20}
                  /> 
                  <span className="special-button-1 c-white no-wrap">Our story</span>
                </button>
              </div>
              <div className="rate-wrapper">
                <div className="rate-wrapper__stars">
                  <img 
                    src="/assets/img/star-rate-icon.febe04.svg" 
                    alt="star rate icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="rate-wrapper__contect">
                  <span className="special-caption-1-regular c-overcast">
                    4.7 average rating based on 500+ reviews
                  </span> 
                  <img 
                    src="/assets/img/services-icon.96dde6.svg" 
                    alt="services icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="hero-section-image-block hero-section-image-block--desktop">
              <div className="bodymovin__wrap">
                <LottieAnimation 
                  animationPath="/assets/bodymovin/home/display_1/Home_1.json"
                  fallbackContent={
                    <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
                      <h3>Business Marketplace Animation</h3>
                      <p>Interactive business cards and buyer profiles</p>
                    </div>
                  }
                />
              </div>
            </div>
            <div className="hero-section-image-block hero-section-image-block--tablet">
              <div className="bodymovin__wrap bodymovin__wrap--tablet">
                <LottieAnimation 
                  animationPath="/assets/bodymovin/home/Home_1_TABLET/Home_1_TABLET.json"
                  fallbackContent={
                    <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
                      <h3>Business Marketplace Animation</h3>
                      <p>Interactive business cards and buyer profiles</p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className="hero-section__footer-list">
            <div className="hero-section__footer-item">
              <div className="hero-section__footer-item-content">
                <span className="headers-h3 c-white hero-section__footer-title">$500M+</span> 
                <span className="body-p2-regular c-overcast hero-section__footer-subtitle">
                  closed deal volume
                </span>
              </div>
            </div>
            <div className="hero-section__footer-item">
              <div className="hero-section__footer-item-content">
                <span className="headers-h3 c-white hero-section__footer-title">2,000+</span> 
                <span className="body-p2-regular c-overcast hero-section__footer-subtitle">
                  startups sold
                </span>
              </div>
            </div>
            <div className="hero-section__footer-item">
              <div className="hero-section__footer-item-content">
                <span className="headers-h3 c-white hero-section__footer-title">500k+</span> 
                <span className="body-p2-regular c-overcast hero-section__footer-subtitle">
                  entrepreneurs trust us
                </span>
              </div>
            </div>
            <div className="hero-section__footer-item">
              <div className="hero-section__footer-item-content">
                <span className="headers-h3 c-white hero-section__footer-title">$2B+</span> 
                <span className="body-p2-regular c-overcast hero-section__footer-subtitle">
                  in verified buyer funds
                </span>
              </div>
            </div>
            <div className="hero-section__footer-item">
              <div className="hero-section__footer-item-content">
                <span className="headers-h3 c-white hero-section__footer-title">20+ years</span> 
                <span className="body-p2-regular c-overcast hero-section__footer-subtitle">
                  acquisition experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}