import AndreaPhoto from "../../assets/images/AndreaPhoto.jpeg"

const Home = () => {

    return (
    <>
        <h1>Welcome to my portfolio!</h1>
        <p>Hello, I'm Andrea Melisa and I am a Front End Developer!</p>

        <div className="photo">
			<img src={AndreaPhoto} alt="Andrea Martinez smiling" />
		</div>

        <p>I try to be a very detail oriented person! </p>
    </>
    )
}

export default Home;