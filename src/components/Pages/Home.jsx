import AndreaPhoto from "../../assets/images/AndreaPhoto.jpeg"
import Footer from "../Footer";

const Home = () => {

    return (
    <>
        <h1>Welcome to my portfolio!</h1>
        <br></br>
        <p>Hello, I'm Andrea Melisa and I am a <span>Front End Developer!</span></p>
        <p>This application is my portfolio created using React.</p>

        <div>
			<img src={AndreaPhoto} alt="Andrea Martinez smiling"  className="photo" />
		</div>
        <br></br>

        <p>I try to be a very <span> detail oriented </span> person! </p>

        <Footer />
    </>
    )
}

export default Home;