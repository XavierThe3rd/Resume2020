import { useEffect } from 'react'

const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export const handleScroll = callback => {
  return useWindowEvent('scroll', callback)
}

export const handleResize = callback => {
  return useWindowEvent('resize', callback)
}

export const handleLoad = callback => {
  return useWindowEvent('load', callback)
}
