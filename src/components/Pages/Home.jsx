import AndreaPhoto from "../../assets/images/AndreaPhoto.jpeg"
import Footer from "../Footer";

const Home = () => {

    return (
    <>
        <h1>Welcome to my portfolio!</h1>
        <br></br>
        <p>Hello, I'm Andrea Melisa and I am a Front End Developer!</p>
        <p>This application is my portfolio created using React.</p>

        <div className="photo">
			<img src={AndreaPhoto} alt="Andrea Martinez smiling" />
		</div>
        <br></br>

        <p>I try to be a very detail oriented person! </p>

        <Footer />
    </>
    )
}

export default Home;