import styles from "../style";
import image from "../assets/Jook-icon.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img
          src={image}
          alt="digitech"
          className="w-[85px] h-[60px] object-contain"
        />
          <h4 className="flex-1 font-poppins font-semibold ss:text-[24px] text-[24px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">JOOK TECH</span>{" "}
          </h4>
        </div>

        <p className={`${styles.paragraph} mt-4 max-w-[370px]`}>
        Elevating your online presence through strategic design & development.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-center items-center mt-4 md:flex-row flex-col pt-7 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Digitech. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
