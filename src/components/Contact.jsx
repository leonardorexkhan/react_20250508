import React from 'react'


const contactText = [
  {
    link:"/",
    title:"KAKAO:worlddha",

  },{
    link:"mailto:worlddha@hanmail.net",
    title:"mail:worlddha@hanmail.net",
  }
]

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact_inner">
        <div className="contact_title">Contact</div>
        <div className="contact_lines" aria-hidden="true">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="contact_text">
          <div className='text'>

            {contactText.map((contact,key)=>(
              <div key={key}>
                <a href={contact.link} target='_blank' rel='noreferrer'>{contact.title}</a>
            </div>
            ))};
            
            

          </div>
        </div>
        <div className="contact_lines bottom" aria-hidden="true">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

      </div>
    </section>
  )
}

export default Contact