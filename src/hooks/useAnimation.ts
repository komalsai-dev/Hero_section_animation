'use client'

import { useState, useEffect } from 'react'
import type { LottieAnimationData } from '@/types/lottie'

export function useAnimation(animationPath: string) {
  const [animationData, setAnimationData] = useState<LottieAnimationData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadAnimation = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(animationPath)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (isMounted) {
          setAnimationData(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load animation')
          console.error('Animation loading error:', err)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    if (animationPath) {
      loadAnimation()
    }

    return () => {
      isMounted = false
    }
  }, [animationPath])

  return { animationData, isLoading, error }
}