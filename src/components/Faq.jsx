import ButtonSecondery from "./ButtonSecondery";


const Faq = () => {
    return (
        <div className="px-2 md;px-5 space-y-5">
           <ButtonSecondery title={'Faq'} ></ButtonSecondery>
           <h1 className="text-5xl mb-4 font-semibold">Frequntly Asked Question</h1>
           <h1 className="text-3xl font-semibold bg-[#FFFFF5] py-3 px-4 border-b my-4"> What are your office hours?</h1>
           <p className="text-[#000000]/80 ">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
            <div>
            <div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
  <div className="collapse-content">
    <p>Ans:</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
  <div className="collapse-content">
  <p>Ans:</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
  <div className="collapse-content">
  <p>Ans:</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
  <div className="collapse-content">
    <p>Ans:</p>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Faq;