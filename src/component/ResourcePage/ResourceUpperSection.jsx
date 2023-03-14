import React from "react";
import { detailsArr } from "../../constants/data";
const ResourceUpperSection = () => {
  return (
    <>
    <section>
      <div className="resourceuppersection">
        <div className="resource_text-section">
          <h1>44 Resources</h1>
          <p>
            The modal dialog (or modal as we call it) is used to capture
            attention so users are informed about a task, critical information
            or a decision they have to make. It usually resides on the top of a
            page. When modals are active, users are unable to see the content
            that’s currently on the page. They also won’t be able to return to
            what they were previously doing until the modal is dismissed or a
            task/decision is completed. As experienced astronauts, we recommend
            using modals sparingly. They are effective when used correctly, but
            they can also be disruptive.
          </p>
        </div>
        <div className="grey_box-container"></div>
      </div>
      </section>
      <section>
        <div className="resourcemiddlesection">
          {detailsArr.map((item) => (
            <div className="resourcemiddlesection-child">
              <div className="heading-no">{item.no}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="middle-image">
          <div className="grey-line"></div>
          <div className="image">
            <div className="image-container">
              <img src="assests/image/about1.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="resourcemiddlesection">
          {detailsArr.map((item) => (
            <div className="resourcemiddlesection-child">
              <div className="heading-no">{item.no}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
      <div className="modal-section">
      <h1>Modal diaolog</h1>
      <p>
        The modal dialog (or modal as we call it) is used to capture attention
        so users are informed about a task, critical information or a decision
        they have to make. It usually resides on the top of a page. When modals
        are active, users are unable to see the content that’s currently on the
        page. They also won’t be able to return to what they were previously
        doing until the modal is dismissed or a task/decision is completed.
        <br />
        <br />
        As experienced astronauts, we recommend using modals sparingly. They are
        effective when used correctly, but they can also be disruptive.
      </p>
    </div>
      </section>
    </>
  );
};

export default ResourceUpperSection;
