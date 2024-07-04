import ButtonSecondery from "./ButtonSecondery";
import img1 from "../../public/review1.png"
import img2 from "../../public/review2.png"
import img3 from "../../public/review3.png"
import star from "../../public/starpng.png"
import page from "../../public/page.png"


const Testimonial = () => {
    return (
        <div className="my-10 md:px-4 px-1 space-y-10">
            <ButtonSecondery title={'Testimonial'} ></ButtonSecondery>
            <h1 className="text-5xl font-semibold">What they say about us</h1>

            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                <div className="flex-col space-y-5 bg-[#FFFFF5] p-6 rounded-xl">
                    <h1 className="text-3xl font-semibold">Expertise and Compassion Combined</h1>
                    <p>I cant thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>            
                    <div className="flex  gap-x-3  items-center">
                        <img className="h-14 " src={img1} alt="" /> <p>
                            <p className="font-semibold">Sarah D,<span className="font-light"> IT Professional </span></p>
                            <img className="h-5" src={star} alt="" />
                        </p>
                    </div>
                </div>
                <div className="flex-col space-y-5 bg-[#FFFFF5] p-6 rounded-xl">
                    <h1 className="text-3xl font-semibold">Life-Saving Care, Life-Changing Experience</h1>
                    <p>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>            
                    <div className="flex  gap-x-3  items-center">
                        <img className="h-14 " src={img2} alt="" /> <p>
                            <p className="font-semibold">Sarah D,<span className="font-light"> IT Professional </span></p>
                            <img className="h-5" src={star} alt="" />
                        </p>
                    </div>
                </div>
                <div className="flex-col space-y-5 bg-[#FFFFF6] p-6 rounded-xl">
                    <h1 className="text-3xl font-semibold">A Partner in Health and
                    Wellness</h1>
                    <p>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they have become my trusted partner in health and</p>            
                    <div className="flex gap-x-3  items-center">
                        <img className="h-14 " src={img3} alt="" /> <p>
                            <p className="font-semibold">Sarah D,<span className="font-light"> IT Professional </span></p>
                            <img className="h-5" src={star} alt="" />
                        </p>
                    </div>
                </div>
            </div> 

            <p className="text-center mt-5 flex justify-center"><img src={page} alt="" /></p>

        </div>
    );
};

export default Testimonial;