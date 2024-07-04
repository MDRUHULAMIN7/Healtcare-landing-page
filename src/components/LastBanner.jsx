import bg from "../../public/lastBanner.png";
import bg2 from "../../public/Rectangle 33.png";

const LastBanner = () => {
    return ( 
        <div className="bg-cover rounded-2xl h-[600px] bg-no-repeat my-10" style={{ backgroundImage: `url(${bg})` }}>
            <div className="bg-opacity-65 bg-cover h-[600px] bg-no-repeat" style={{ backgroundImage: `url(${bg2})` }}>
            </div>
        </div>
    );
};

export default LastBanner;
