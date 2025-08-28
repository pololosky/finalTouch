import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center md:text-lg text-sm md:text-right text-center px-2 md:py-3 py-1'>
        <p className='flex gap-2'>Droits d'auteur 2025FinalTouch, Inc.  <span className='text-accent md:flex hidden'>|</span> Proprieté de <Link href={"https://x.com/@pololosky005"} target='_blank' className='text-accent'>Pololosky</Link></p>
    </footer>
  )
}

export default Footer