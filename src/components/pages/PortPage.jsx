import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

const PortPage = () => {
  return (
    <Contents>
      <ContTitle title="portfolio" />
      <div className="My_portfolio gmarket5">
        <iframe src="https://portfolio-45429.web.app/" title="내용"></iframe>
      </div>
      <div className="minbox_title">
        <h2>포트폴리오 참고 사이트</h2>
      </div>
      <div className="port_minbox">
        <div className="portbox_title1">
          <a href="https://www.awwwards.com/websites/portfolio/">
            awwwards<em> .com</em>
          </a>
        </div>
        <div className="portbox1">
          <a href="https://wantedfornothing.com/">
            <img
              src="/assets/images/portfolio/portimg1.png"
              alt="포트폴리오1"
            />
          </a>
        </div>
        <div className="portbox1">
          <a href="https://katsuakiutsunomiya.com/">
            <img
              src="/assets/images/portfolio/portimg2.png"
              alt="포트폴리오2"
            />
          </a>
        </div>
        <div className="portbox1">
          <a href="https://www.artembui.pro/">
            <img
              src="/assets/images/portfolio/portimg3.png"
              alt="포트폴리오3"
            />
          </a>
        </div>
        <div className="portbox_title2">
          <a href="https://webflow.com/tag/portfolio-websites?utm_source=google&utm_medium=search&utm_campaign=SS-GS-NB-DynamicSearchAds-Global&utm_term=dsa-1480385100845___617245336966___ss_paid-bb&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2zb5XUQo0u3ChFGzTOwS0pDxOlENSCmkDQ2B7TZG0bR4uG1A_trsAaAmY3EALw_wcB">
            webflow<em> .com</em>
          </a>
        </div>
        <div className="portbox1">
          <a href="https://az-boston.webflow.io/">
            <img
              src="/assets/images/portfolio/portimg4.png"
              alt="포트폴리오4"
            />
          </a>
        </div>
        <div className="portbox1">
          <a href="https://az-istanbul.webflow.io/">
            <img
              src="/assets/images/portfolio/portimg5.png"
              alt="포트폴리오5"
            />
          </a>
        </div>
        <div className="portbox1">
          <a href="https://devfolio-5eb48a.webflow.io/">
            <img
              src="/assets/images/portfolio/portimg6.png"
              alt="포트폴리오6"
            />
          </a>
        </div>
      </div>
    </Contents>
  );
};

export default PortPage;
