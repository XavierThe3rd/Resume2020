import React from 'react'
import './styles.css'

let block = 'grid'

const Canvas = () => {
  return (
    <section className={`${block}`}>
      {[1, 2, 3].map(() => (
        <span className={`${block}_line`} />
      ))}
    </section>
  )
}
export default Canvas
