'use client'

import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'

interface LottieAnimationProps {
  animationPath: string
  fallbackContent?: React.ReactNode
  className?: string
}

export default function LottieAnimation({ 
  animationPath, 
  fallbackContent,
  className = ''
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setIsLoading(true)
        setHasError(false)
        
        const response = await fetch(animationPath)
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`)
        }
        
        const data = await response.json()
        setAnimationData(data)
      } catch (error) {
        console.error('Error loading Lottie animation:', error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadAnimation()
  }, [animationPath])

  if (isLoading) {
    return (
      <div className={`lottie-container ${className}`}>
        <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
          <p>Loading animation...</p>
        </div>
      </div>
    )
  }

  if (hasError || !animationData) {
    return (
      <div className={`lottie-container ${className}`}>
        {fallbackContent || (
          <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
            <h3>Animation Unavailable</h3>
            <p>Unable to load animation</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`lottie-container ${className}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px'
        }}
        onLoadedData={() => {
          console.log('Lottie animation loaded successfully')
        }}
        onError={(error) => {
          console.error('Lottie animation error:', error)
          setHasError(true)
        }}
      />
    </div>
  )
}