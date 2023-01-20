import { socialMedia } from "../constants";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id='contact' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`} style={{"paddingTop":"100px"}} >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Get in touch with us!</h2>
      <p className={`${styles.paragraph} max-w-[580px] mt-5`}>
      Don't hesitate to reach out to us for all your digital needs.  professional team is ready to assist you!
      </p>
      <div className="flex flex-row mt-9">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button>
        <a href="mailto:contact@webdev.com">Reach Out</a>
      </Button>
    </div>
  </section>
);

export default CTA;
