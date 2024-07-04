import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondery from "./ButtonSecondery";
import bg from "../../public/mission-banner.png"

const Mission = () => {
  return (
    <div className="my-10 md:flex justify-center items-center gap-x-24 md:px-4 px-1 mb-3  md:mb-0">
      <div className="flex-col w-full md:w-1/2 space-y-10 ">
        <p>
          <ButtonSecondery
            title={"who we are"}
            bg={"transparent"}
          ></ButtonSecondery>
        </p>
        <h1 className="md:text-5xl text-3xl font-semibold  leading-[54px]">We Help To Get <br /> Soultions</h1>
        <p className="leading-[24px]">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <p>
            <ButtonPrimary title={'Learn more'} bg={'bg-yellow-400'}></ButtonPrimary>
        </p>
      </div>
      <div className="md:w-1/2 h-[425px] w-full relative">
      <div  className="w-full bg-cover rounded-2xl md:mt-0 mt-4 h-full " style={{
          backgroundImage: `url(${bg}) `,
        }}>
            <div className="bg-[#343268] rounded-2xl absolute bottom-4 md:top-3/4 md:-left-24 left-4  px-4 py-3 space-y-3 w-96 h-[170px] text-white">
                <h1 className="text-4xl">Our mission is simple</h1>
                <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
      </div>
      </div>
    
    </div>
  );
};

export default Mission;
