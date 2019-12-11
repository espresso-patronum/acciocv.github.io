import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import I18nFlags from "./auxiliary/I18nFlags";
import MultiParagraph from "./auxiliary/MultiParagraph";
import CustomH2 from "./auxiliary/CustomH2";
import CustomH3 from "./auxiliary/CustomH3";
import Paragraph from "./auxiliary/Paragraph";
import PlaceAndPeriod from "./auxiliary/PlaceAndPeriod";
import Qualifications from "./auxiliary/Qualifications";
//import Publications from "./auxiliary/Publications";

const RightContainer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    document.title = t("page-title");
  };

  return (
    <Grid item xs={8} className="right-container">
      <div className="right-content-container">
        <div className="job-period">
          <h1>Restiyana Dwi Astuti</h1>
          <div className="flags">
            <I18nFlags changeLanguage={changeLanguage} />
          </div>
        </div>
        <hr />

        <MultiParagraph fields={["bio-1", "bio-2", "bio-3", "bio-4"]} />

        <CustomH2 title="Education" />
        <div className="education-title">
          <ul className="no-padding-ul">
            <li>D4 Teknik Informatika, Politeknik Pos Indonesia 2015-2019</li>
            <li>SMA Negeri 23 Bandung 2012-2015</li>
          </ul>
        </div>

        <CustomH2 title="exp-title" />
        <div className="experiences">
          <div>
            <CustomH3 title="exp-occupation-1" />
            <PlaceAndPeriod
              href="https://www.homecredit.co.id"
              placeName="Home Credit Indonesia"
              startDate="11/2019"
            />
            <Paragraph title="exp-1-1" />
          </div>
          <div>
            <hr />
            <CustomH3 title="exp-occupation-2" />
            <PlaceAndPeriod
              href="https://irc.poltekpos.ac.id/"
              placeName="Informatics Research Center"
              startDate="05/2018"
              endDate="10/2019"
            />
            <Paragraph title="exp-2-1">
              <b>- </b>
            </Paragraph>
            <Paragraph title="exp-2-2">
              <b>- </b>
            </Paragraph>
            <Paragraph title="exp-2-3">
              <b>- </b>
            </Paragraph>
            <Paragraph title="exp-2-4">
              <b>- </b>
            </Paragraph>
          </div>
          <div>
            <hr />
            <CustomH3 title="exp-occupation-3" />
            <PlaceAndPeriod
              href="http://www.poltekpos.ac.id"
              placeName="Politeknik Pos Indonesia"
              startDate="05/2018"
              endDate="08/2018"
            />
            <Paragraph title="exp-3-1">
              <b>- </b>
            </Paragraph>
            <Paragraph title="exp-3-2">
              <b>- </b>
            </Paragraph>
          </div>
          <div>
            <hr />
            <CustomH3 title="exp-occupation-4" />
            <PlaceAndPeriod
              href="http://www.daya.id"
              placeName="Daya BTPN"
              startDate="02/2019"
              endDate="08/2019"
            />
            <Paragraph title="exp-4-1">
              <b>- </b>
            </Paragraph>
            <Paragraph title="exp-4-2">
              <b>- </b>
            </Paragraph>
            <Paragraph title="exp-4-3">
              <b>- </b>
            </Paragraph>
          </div>
        </div>

        <CustomH2 title="qualifications-title" />
        <Qualifications numbers={[1, 2, 3, 4]} />

        <CustomH2 title="publications-title" />
        <div className="publications">
          <ul className="no-padding-ul">
            <CustomH3 title="publications-1" />
            <Paragraph title="publications-2">
              <b>Abstract:</b>
            </Paragraph>
          </ul>
        </div>

        <CustomH2 title="awards-title" />
        <div className="awards">
          <ul className="no-padding-ul">
            <CustomH3 title="awards-1" />
          </ul>
        </div>

        <CustomH2 title="languages-title" />
        <div className="languages">
          <ul className="no-padding-ul">
            <li>{t("languages-1")}</li>
            <li>{t("languages-2")}</li>
          </ul>
        </div>
      </div>
    </Grid>
  );
};

export default RightContainer;
