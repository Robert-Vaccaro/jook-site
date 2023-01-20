import styles from "./style";
import {
  CTA,
  Footer,
  Navbar,
  Stats,
  Team,
  Hero,
  Services,
  About,
} from "./components";
import image from "./assets/Jook-icon.png";

const App = () => (
  <div className="bg-primary w-full overflow-hidden"  id="home">
    <div className={`${styles.paddingX} ${styles.flexCenter}`} style={{"position": "fixed",
    "width": "100%",
    "background-color": "#040712ed",
    "z-index": "10000"}}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}  style={{"padding-top": "75px"}}>
      <div className={`${styles.boxWidth}`}>
      <div style={{width:"100%", height:"450px",display:"flex", alignItems:"center", flexDirection:"column"}}>
        <img
          src={image}
          alt="digitech"
          className="w-[78%] h-[450px] object-contain"
        />
          <h4 className="text-gradient flex-1 font-poppins font-bold ss:text-[80px] text-[60px] text-white" style={{width:"100%",textAlign:"center" }}>
            JOOK TECH
          </h4>
        </div>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Services />
        <About />
        {/* <Team /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
