import React from 'react'

export default function ContactUsComponent(props) {
  return (
    <div
      className="container-xl"
      style={{
        backgroundImage: 'url("img/background-contact.jpg")',
        backgroundSize: 'cover',
        paddingBottom: '40px',
      }}
    >
      <div className="container" >
        <h2
          className="text-center"
          style={{
            alignItems: 'center',
            color: 'white',
            fontWeight: '600',
            paddingTop: '30px',
            paddingBottom: '10px'
          }}
        >
          CONTACT US
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mx-3 mb-2" style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
            <h3 className="text-center">Feel free to contact me</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="nameInput" aria-describedby="nameHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input type="text" className="form-control" id="emailInput" />
              </div>
              <div className="mb-3">
                <label htmlFor="subjectInput" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subjectInput" />
              </div>
              <div className="mb-3">
                <label htmlFor="messageInput" className="form-label">Message</label>
                <input type="text" className="form-control" id="messageInput" />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success">SEND</button>
              </div>
            </form>

          </div>
          <div className="col-md-4 mx-3 mb-2" style={{ background: 'white', borderRadius: '5px' }}>
            <div className="card text-white bg-primary mt-2">
              <div className="card-body">
                <p className="card-text">ADDRESS: 123 lorem ipsum, dolor street</p>
                <p className="card-text">EMAIL: lorem@gmail.com</p>
                <p className="card-text">PHONE: 090912345</p>
              </div>
            </div>
            <div>
              <iframe
                title={Date.now()}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7798.045115917363!2d109.1563100221399!3d12.246751800049095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705da0f07d6899%3A0x5bdf570bde04386d!2zVGjDoWkgVGjDtG5nLCBWxKluaCBUaMOhaSwgTmhhIFRyYW5nLCBLaGFuaCBIb2EgUHJvdmluY2UsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1645194896212!5m2!1sen!2s"
                width='100%'
                height={300}
                style={{ border: 0 }}
                allowFullScreen loading="lazy" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
