import React from "react";

import "./Events.css";
import Section from "../../components/Section/Section";
import SmoothScroll from "../../components/SmoothScroll/SmoothScroll";

const Events = () => {
  return (
    <SmoothScroll>
      <div className="events-body">
      <h1>Events</h1>
      <Section />
      </div>
    </SmoothScroll>
  );
};

export default Events;
