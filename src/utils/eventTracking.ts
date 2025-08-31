export function eventTrack(eventName?: string, properties?: Record<string, any>) {
  // In a real application, this would integrate with analytics services
  // like Google Analytics, Mixpanel, or Segment
  console.log('Event tracked:', eventName || 'button_click', properties)
  
  // Example implementation for Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName || 'click', {
      event_category: 'engagement',
      event_label: properties?.label || 'hero_section',
      ...properties
    })
  }
}