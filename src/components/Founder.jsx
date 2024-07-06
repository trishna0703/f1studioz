import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiUserCheckLight } from "react-icons/pi";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { detectDeviceType } from "../utils/commonFunctions";

const Founder = ({ founder }) => {
  const isMobile = detectDeviceType();
  const [showMetadata, setShowMetadata] = useState(true);

  const handleToggleMetaData = () => {
    setShowMetadata(!showMetadata);
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 578px)").matches) {
      setShowMetadata(false);
    }
  }, []);
  return (
    <div className="founderWrapper" key={founder.id}>
      <div className="profileSection">
        <div className="avatar">
          <span className="founderCount">{founder.id}/3</span>
          <img src={founder.profilePicture} alt={founder.name} />
        </div>
        <div className="description">
          <h4>{founder.name}</h4>
          <small>{founder.description}</small>
          <br />
          {isMobile ? (
            <div className="mobileNavs">
              <div className="location">
                <span>
                  <CiLocationOn />
                </span>
                <span>{founder.location}</span>
              </div>
              <div className="metaDataNav">
                <span onClick={handleToggleMetaData}>
                  Education and Experience <RiArrowDropDownLine />
                </span>
              </div>
            </div>
          ) : null}
          <button>
            Profile Score <strong> {founder.profileScore}</strong>
          </button>
        </div>
        <div className="socials">
          <span>
            <PiUserCheckLight />
          </span>
          <span>
            <CiLocationOn />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
        </div>
      </div>

      {showMetadata ? (
        <div className="metaDetailSection">
          <div className="experienceSection">
            <div className="heading">
              Experience ({founder.experiences.length})
            </div>
            {founder
              ? founder?.experiences?.map((ex) => (
                  <div className="experience" key={ex.id}>
                    <img src={ex.companyLogo} alt={ex.company} />
                    <div className="expDetail">
                      <h6>{ex.designation}</h6>
                      <span>
                        <span>{ex.company}</span> - <span>{ex.duration}</span>
                      </span>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className="educationSection">
            <div className="heading">
              Education ({founder.education.length})
            </div>
            {founder
              ? founder?.education?.map((edu) => (
                  <div className="education" key={edu.id}>
                    <img src={edu.universityLogo} alt={edu.university} />
                    <div className="eduDetail">
                      <h6>{edu.university}</h6>
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Founder;
