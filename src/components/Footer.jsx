import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="shell">
          <footer>
            <span className="foot-l">© {new Date().getFullYear()} Moksh Singh</span>
            <span className="foot-r">Crafted with <span>♥</span> & too much tea</span>
          </footer>
        </div>
    </>
  )
}

export default Footer;
