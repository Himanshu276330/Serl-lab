
import Button from "../component/Button";

export default function Main() {
  return (
    <div className='hero-container'>
      <video src='video/video-2.mp4' autoPlay loop muted />
      <h1>WELCOME TO THE SOFTWARE WORLD!</h1>
      <p>Here's the right path for your career!!</p>
      <div className='hero-btns'> 
         <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
     </div>
  );
}

