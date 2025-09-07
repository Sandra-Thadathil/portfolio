import './Home.css'
import backgroundImage from '../assets/mypic2.JPG'
import  {ReactTyped} from 'react-typed'

export default function Home() {
    return (
        <div className="home-split">
            <div className="home-image-section">
                <img src={backgroundImage} alt="Sandra" className="home-image" />
            </div>

            <div className='home-text-section'>
                <div className="home-container" id="banner">
                    <h2 className='intro'>Sandra S Thadathil</h2>
                    <h2 className="home-title">
                    <ReactTyped
                    strings={["Hey, I'm Sandra!!", "Welcome to my portfolio"]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                    />
                    </h2>
                    <p className="home-description"> I'm a Computer Science student at Dalhousie University. After working in the health industry for a while, I decided to dive into tech and so far, I'm loving it !! Right 
                        Now, I'm interning as a Full Stack Developer at Dash Social based in Halifax, NS.
                    </p>
                </div>
            </div>
        </div>
    )

  }