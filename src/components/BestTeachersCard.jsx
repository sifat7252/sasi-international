import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaYoutube,
  } from "react-icons/fa";
  import PropTypes from "prop-types"

const BestTeachersCard = ({ teacherData }) => {
    return (
        <div>
            <div className="author-details flex  items-center gap-3 m-2  ">
            <div className="author-image">
              <img
                src={teacherData.instructor_picture}
                alt=""
                className="rounded-full w-16 h-16 lg:w-24 lg:h-24"
              />
            </div>

            <div className="author-details ">
              <h2 className="font-semibold lg:text-2xl text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500">
                {teacherData.instructor_name}
              </h2>
              <h2 className="font-normal text-slate-500 lg:text-xl">
                {teacherData.instructor_professions}
              </h2>
              <span className="flex gap-3 items-center mt-2">
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
                <FaLinkedinIn></FaLinkedinIn>
                <FaWhatsapp></FaWhatsapp>
                <FaYoutube></FaYoutube>
              </span>
            </div>
          </div>
        </div>
    );
};

export default BestTeachersCard;
BestTeachersCard.propTypes ={
    teacherData:PropTypes.node,
}