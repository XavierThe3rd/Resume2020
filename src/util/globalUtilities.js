import { useEffect } from 'react'

const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

const useCustomEvent = (custom, event, callback) => {
  useEffect(() => {
    custom.addEventListener(event, callback)
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

export const handleWheel = callback => {
  return useWindowEvent('wheel', callback)
}
export const handleDomWheel = callback => {
  return useWindowEvent('DOMMouseScroll', callback)
}

export const handleCursor = callback => {
  return useWindowEvent('mousemove', callback)
}

export const handleCustom = (custom, event, callback) => {
  return useWindowEvent(custom, event, callback)
}
