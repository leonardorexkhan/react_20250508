import React from 'react'

import img_main from "../assets/img/img.png"

const introText = {
  title : "port developer",
  desc :["talent is","found at the end of the","effort"]
}


const Intro = () => {

  // const img_main = "https://github.com/leonardorexkhan/react_20250508/main/src/assets/img/img.png (이미지외부링크걸때)"

  return (
    <section id='intro'>
      <div className="intro_inner">
        <h2 className='intro_title'>
          {introText.title}
        </h2>
        <div className="intro_lines">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>

        <div className="intro_text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={img_main} alt="메인이미지" />
          </div>
        </div>

        <div className="intro_lines bottom">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default Intro