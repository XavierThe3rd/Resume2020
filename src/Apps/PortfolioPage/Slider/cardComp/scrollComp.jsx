import React, { useState, useEffect } from 'react'
import CardComp from './cardComp.jsx'
import styles from './styles.scss'

const ScrollComp = ({ data, total, count, setCount }) => {
  let [scrollState, setScroll] = useState(0)

  useEffect(() => {
    ;['scroll', 'load'].forEach(event =>
      window.addEventListener(event, () => {
        setScroll(window.pageYOffset)
      })
    )
  })

  return (
    <div>
      <CardComp data={data} dec={1} inc={6} />
      {total.map(hit => {
        if (count === hit) setCount(count + 1)
        return (
          <div>
            {scrollState > hit * 400 * hit ? (
              <CardComp
                data={data}
                dec={hit > 1 ? hit * 6 - 5 : null}
                inc={hit > 1 ? hit * 6 : null}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default ScrollComp
