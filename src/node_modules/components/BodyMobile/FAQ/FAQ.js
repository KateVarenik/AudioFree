import MainTitle from "../../General/Title/MainTitle";
import Subtitle from "../../General/Title/Subtitle";
import FAQ from "../../../Consts/FAQ/faq";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import "./FAQ.css";
import { Link } from "react-router-dom";

export default function FaqMob() {
  return (
    <div className="faq">
      <div className="faq__container-s container-s">
        <div className="faq__content-s">
          <Subtitle>Что стоит знать</Subtitle>
          <MainTitle>при выборе наушников</MainTitle>
        </div>
        <div className="faq__tabs-s">
          {FAQ.map(({ topic, name, id, desc }) => (
            <Accordion key={topic} className="faq__tab-s" square>
              <AccordionSummary
                className="faq__tab-wrapper"
                expandIcon={"–"}
                aria-controls={topic}
                id={id}
              >
                <Typography className="faq__tab-name-s">{name}</Typography>
              </AccordionSummary>
              <AccordionDetails className="faq__tab-desc-s">
                <Typography>{desc}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <Link to="/blog" className="faq__tabs-link faq__tabs-link-s">
          Перейти в блог
        </Link>
      </div>
    </div>
  );
}
