import banner from "../../public/banner.png"

const Banner = () => {
    return (
        <div className="my-10 md:px-3">
            <img className="w-full h-full bg-cover" src={banner} alt="" />
        </div>
    );
};

export default Banner;