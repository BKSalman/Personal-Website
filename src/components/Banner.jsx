import pic from '../images/logo.png'

function Banner() {
  return (
    <div className="Banner">
        <div className="Banner-inner">
            <img className='personal-pic' src={pic} alt="personal-pic" />
            <div className="Banner-text">
                <h1>Hi, I'm <span className="name">Salman</span></h1>
                <h2>I'm a <span className="job">Full Stack Developer</span></h2>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Banner