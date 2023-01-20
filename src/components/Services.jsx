import { services } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const ServiceCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== services.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className={layout.section} style={{"paddingTop":"100px"}}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> We build your online presence
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experienced designers and developers work closely with you
        to understand your vision and provide a variety of services that will help you
        achieve your goals.
      </p>

      <Button children={<a href='#contact'>Get Started</a>} styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {services.map((service, index) => (
        <ServiceCard key={service.id} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default Services;
