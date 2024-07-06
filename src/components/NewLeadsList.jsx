import React from "react";
import "../styles/list.css";
import leads from "../data/leads.json";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLead } from "../redux/slice/lead";

const NewLeadsList = () => {
  const { selectedLead } = useSelector((state) => state.leads);
  const dispatch = useDispatch();
  const handleLeadClick = (id) => {
    dispatch(setSelectedLead(id));
  };

  return (
    <div className="leadsList">
      {leads
        ? leads.map((lead) => (
            <div
              className={`${
                selectedLead == lead.id ? "active" : ""
              } singleLead`}
              key={lead.id}
              onClick={() => handleLeadClick(lead.id)}
            >
              <div className="leadHead">
                <div className="leadLogo">
                  <img src={lead.logo} alt={lead.name} />
                </div>
                <div className="leadHeading">
                  <h4>{lead.name}</h4>
                  <small>
                    Source <strong>Research | LinkedIn</strong>
                  </small>
                </div>
                <div className="marker">SaaS</div>
              </div>
              <div className="leadBody">
                <p>{lead.metaData.substring(0, 80)}...</p>
                <small>
                  Added by <strong>John Doe | 4 days ago</strong>
                </small>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default NewLeadsList;
