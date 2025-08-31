export interface LottieAnimationData {
  v: string
  fr: number
  ip: number
  op: number
  w: number
  h: number
  nm: string
  ddd: number
  assets: any[]
  layers: any[]
  markers?: any[]
}

export interface LottieOptions {
  loop?: boolean
  autoplay?: boolean
  animationData?: LottieAnimationData
  path?: string
  rendererSettings?: {
    preserveAspectRatio?: string
    clearCanvas?: boolean
    progressiveLoad?: boolean
    hideOnTransparent?: boolean
  }
}