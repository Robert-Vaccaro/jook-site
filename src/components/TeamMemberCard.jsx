import { quotes } from "../assets";

const TeamMemberCard = ({ content, name, title, img }) => (
  <div className="flex justify-between transition-all flex-col px-10 py-6 rounded-[20px]  max-w-[370px] md:mr-8 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={img}
      className="max-h-[350px] rounded-[20px]"
    ></img>
    <h4 className="font-poppins font-semibold text-center text-[20px]  mt-5 leading-[32px] text-white">
      {name}
    </h4>
    <p className="mt-1 opacity-60 text-white text-center font-poppins">~ {title}</p>
    
  </div>
);

export default TeamMemberCard;
