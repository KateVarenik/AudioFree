import React, { useEffect, useState } from "react";
import "./FAQ.css";
import TabItem from "./Tabs/Tabs";
import TabContent from "./Tabs/TabContent";
import FAQ from "../../../Consts/FAQ/faq";

export default function Faq() {
  const [activeTab, setActiveTab] = useState("garantee");
  const [contentArr, setContentArr] = useState([]);

  useEffect(() => {
    setContentArr(FAQ.filter((item) => item.topic?.includes(activeTab)));
  }, [activeTab]);

  return (
    <div className="faq">
      <div className="faq__container container">
        <div className="faq__content">
          <h3 className="faq__sibtitle">Что стоит знать</h3>
          <h2 className="faq__title">при выборе наушников</h2>
        </div>
        <div className="faq__tabs">
          <TabItem
            active={activeTab}
            onClick={(newActiveTab) => setActiveTab(newActiveTab)}
          />
          {contentArr.map((tab) => (
            <div className="faq__tabs-pannels" key={tab.id}>
              <TabContent {...tab} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
