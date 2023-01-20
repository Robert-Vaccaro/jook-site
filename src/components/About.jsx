import { about01, apple, bill, check, google } from "../assets";
import { processItems } from "../constants";
import styles, { layout } from "../style";

const ProcessItem = ({content})=>{
  return (
    <div className="flex items-center gap-5">
      <div
      className={`w-[35px] h-[35px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={check} alt="star" className="w-[50%] h-[50%] flex object-contain" />
    </div>
    <div className="text-white text-[18px] ">{content}</div>
    </div>
  )
}

const About = () => (
  <section id="about" className={`${layout.sectionReverse} md:gap-32`} style={{"paddingTop":"100px"}}>
    <div className={`${layout.sectionImgReverse} hidden md:block`}>
      <img
        src={about01}
        alt="billing"
        className="w-[100%] max-h-[600px] object-contain h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        How we work?
        <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} text-[16px] max-w-[550px] mt-1`}>
        Get The best Websites built through our expert team and agile
        development process
      </p>
      <div className="mt-5 space-y-4">
       {processItems?.map(item=>(
        <ProcessItem key={item.id} {...item}/>
       ))}
      </div>
    </div>
  </section>
);

export default About;
