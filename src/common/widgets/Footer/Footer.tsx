import React from 'react'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section id="__footer" className='py-5' >
       <div className='text-center text-sm text-slate-400' >

          <p>Copyrights &copy; {year} | All right reserved <span className='text-sky-400' >by Iqbal Hossain</span> </p>

       </div>
    </section>
  )
}

export default Footer