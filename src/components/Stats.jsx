import img1 from "../../public/Group1.png";
import img2 from "../../public/contract1.png";
import img3 from "../../public/fi-sr-star.png";
import img4 from "../../public/Group2.png";
import img5 from "../../public/Group.png";
import img6 from "../../public/Group3.png";
const Stats = () => {
  return (
    <div className="md:px-4   lg:relative">
      <h1 className="text-2xl text-center  md:text-5xl  lg:left-1/3 lg:top-[8%] mb-3 lg:mb-0 text-[#020043] font-semibold lg:absolute text-centre flex justify-center">Comprehensive Care <br />  for Every Patient</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-2">
        <div className="flex-col space-y-8  h-full bg-[#020043]/5 rounded-xl p-4  ">
          <h1 className="text-4xl font-semibold"> 90%</h1>
          <p>Patient satisfaction rate, reflecting our commitment.</p>
          <img className="text-right " src={img1} alt="" />
        </div> 
        <div className="flex-col  lg:mt-[135px]  space-y-4 h-full lg:h-[205px] bg-[#020043]/5 rounded-xl p-4  ">
          <h1 className="text-4xl font-semibold ">
         550%
           
          </h1>
          <p>Board-certified doctors</p>
          <img className="ml-36 " src={img2} alt="" />
        </div>
        <div className="flex-col lg:h-[164px] lg:mt-44 space-y-2 h-full bg-[#020043]/5 rounded-xl p-4   ">
          <h1 className="text-4xl flex items-center gap-x-2 font-semibold"> 4.8 <span>  <img src={img3} alt="" /></span> </h1>
          <p>Patient satisfaction rate, reflecting our commitment.</p>
          <img className="text-right " src={img4} alt="" />
        </div>
        <div className="flex-col  lg:mt-[135px]  space-y-4 h-full lg:h-[205px] bg-[#020043]/5 rounded-xl p-4  ">
          <h1 className="text-4xl font-semibold ">
         $5500
           
          </h1>
          <p>Money spend
          for poor patient</p>
          <img className="ml-36 " src={img5} alt="" />
        </div>
        <div className="flex-col space-y-8  h-full bg-[#020043]/5 rounded-xl p-4  ">
          <h1 className="text-4xl font-semibold"> 50+</h1>
          <p>Free lession video 
          for patient</p>
          <img className="text-right mx-auto" src={img6} alt="" />
        </div>

      
      </div>
    </div>
  );
};

export default Stats;
