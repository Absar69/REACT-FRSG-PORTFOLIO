import React from 'react'
import pdf from '../../assets/dummy.pdf'
function CTA () {
  return (
    <div className='cta'>
        <a href={pdf} download className='custom-btn'>Get Started </a>  
        <a href='#contact' className='custom-btn custom-btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA