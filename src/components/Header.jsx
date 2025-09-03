import React, { useState } from 'react'

const header_Nav = [
  {
    title:"intro",
    url:"#intro",
  },
  {
    title:"skill",
    url:"#skill",
  },
  {
    title:"site",
    url:"#site",
  },
  {
    title:"portfolio",
    url:"#port",
  },
  {
    title:"contact",
    url:"#contact",
  }
]

const Header = () => {

  const [show, setShow] = useState(false);
  //useState(): 훅 명령어 하나로 상태를 관리하는 명령어로 상태가 변경이 되면 스스로 없데이트를 해줌
  //show : 현재값
  //setShow : 상태를 업그레이드한 상태값
  const toggleMenu= ()=>{
    setShow((pshow) => !pshow);
  }

  return (
    <header id='header' role='banner'>
      <div className="header_inner">
        <div className="header_logo">
          <a href="/">
            portfolio <em>react</em>
          </a>
        </div>
        <nav className={`header_nav ${show ?"show":""}`} role='navigation' aria-label='메인메뉴'>
          <ul>

            {header_Nav.map((nav,key)=>(
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}

            

          </ul>
        </nav>
        <div className="header_nav_mobile" id='headerToggle' aria-controls='햄버거메뉴' aria-expanded={show ? "true" : "false"} role='button' tabIndex="0" onClick={toggleMenu}>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header