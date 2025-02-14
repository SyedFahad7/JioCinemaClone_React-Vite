import Header from '../components/header/Header';
import Tags from '../components/tags/Tags';
import Channels from '../components/channels/Channels';
import Carousel from '../components/carousal/Carousel';
import Featured from '../components/featured/Featured';
function Home(){
    return(
        <>
            <Header/>
            <Tags/>
            <Carousel/>
            <Channels/>
            <Featured/>
        </>
    )
}

export default Home;