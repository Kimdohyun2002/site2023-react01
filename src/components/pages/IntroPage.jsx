import React from "react";
import Contents from "../layout/Contents";

const IntorPage = () => {
  return (
    <Contents>
      <h2 className="introh2">코딩이란 무엇일까 ?</h2>
      <div className="introtext">
        <h3 className="h3-1">코딩(Coding)이란?</h3>
        <img src="/assets/images/intro/coding.png" alt="#" />
        <p>
          코딩은 'code'와 'ing'의 합성어로, 여기서 코드(code)란 ‘프로그램에서
          작업을 수행하기 위하여 사용되는 하나의 명령어 또는 몇 개의 명령어들로
          구성된 부분’을 뜻합니다.
          <br />즉 코딩은 프로그램에서 작업을 수행하기 위해 사용되는 언어로
          컴퓨터에게 명령하는 것을 말합니다. 간단하게 코딩의 사전적 의미도 보고
          넘어가보도록 하겠습니다.
        </p>
        <h4>코딩의 사전적 의미</h4>
        <ul>
          <li>
            <em>▶</em> 어떤 일의 자료나 대상에 대하여 기호를 부여하는 일.
          </li>
          <li>
            <em>▶</em> 작업의 흐름에 따라 프로그램 언어의 명령문을 써서
            프로그램을 작성하는 일.
          </li>
          <li>
            <em>▶</em> 프로그램의 코드를 작성하는 일.
          </li>
        </ul>
        <h3 className="h3-2">웹개발 언어</h3>
        <p>
          물론, 저희가 배우는 언어는 웹 개발과 관련된 언어들입니다.
          <br /> 이 언어들을 사용하여 웹사이트나 웹 애플리케이션을 개발하고
          구축할 수 있습니다.
          <br /> 웹 개발을 위해 주로 사용되는 몇 가지 언어와 기술은 다음과
          같습니다.
        </p>
        <div className="language_box">
          <div className="box">
            <img src="/assets/images/unsplash/unsplash1.png" alt="" />
            <h4>리액트(React)</h4>
            <p>
              리액트는 페이스북에서 개발된 JavaScript 라이브러리로,
              <br /> 사용자 인터페이스(UI)를 구축하기 위해 사용됩니다.
              <br /> 리액트는 컴포넌트 기반 아키텍처를 사용하여 재사용 가능하고
              <br />
              관리하기 쉬운 UI 요소를 작성할 수 있습니다.
              <br /> 가상 돔(Virtual DOM)을 활용하여 효율적인 UI 렌더링을
              지원하며,
              <br /> 단방향 데이터 흐름을 통해 상태 관리를 용이하게 합니다.
            </p>
          </div>
          <div className="box">
            <img src="/assets/images/unsplash/unsplash2.png" alt="" />
            <h4>자바스크립트(Javascript)</h4>
            <p>
              자바스크립트는 웹 페이지를 동적으로 만들고 상호작용을 구현하기
              <br />
              위해 사용되는 프로그래밍 언어입니다. 웹 브라우저에서 실행되며,
              <br />
              클라이언트 측 스크립팅 언어로서 HTML 및 CSS와 함께 사용하여
              <br /> 웹 애플리케이션을 개발할 수 있습니다. 자바스크립트는 <br />
              객체 지향 프로그래밍과 함수형 프로그래밍 스타일을 모두 지원하며,
              <br />
              다양한 라이브러리와 프레임워크를 통해 확장성과 생산성을 높일 수
              있습니다.
            </p>
          </div>
          <div className="box">
            <img src="/assets/images/unsplash/unsplash3.png" alt="" />
            <h4>HTML/CSS</h4>
            <p>
              HTML은 웹 페이지의 구조와 콘텐츠를 정의하기 위한 마크업
              언어입니다.
              <br /> 웹 브라우저에게 어떻게 콘텐츠를 표시해야 하는지 알려줍니다.
              <br />
              CSS는 웹 페이지의 디자인과 스타일을 지정하기 위한 스타일 시트
              언어로,
              <br /> HTML 요소에 적용되는 스타일을 정의합니다. HTML과 CSS는
              <br />웹 개발의 기본 요소로, 사용자 경험을 개선하고 웹 페이지를
              <br />
              시각적으로 멋지게 만들기 위해 사용됩니다.
            </p>
          </div>
          <div className="box">
            <img src="/assets/images/unsplash/unsplash4.png" alt="" />
            <h4>바이트(VITE)</h4>
            <p>
              Vite는 현대적인 웹 개발을 위한 빠르고 간단한 웹 개발 빌드
              도구입니다.
              <br /> Vite는 프론트엔드 프레임워크(예: 리액트, 뷰)를 사용하여 웹
              애플리케이션을
              <br /> 개발할 때 효율적인 개발 환경을 제공합니다.
              <br /> 빠른 개발 서버와 인스턴트 핫 모듈 리로딩(HMR)을 지원하여
              개발 과정을
              <br /> 빠르고 편리하게 만들어줍니다. 또한, Vite는 ES 모듈을
              기반으로 하여
              <br /> 모듈 번들링 시간을 최소화하고 개발과 생산성을 높이는 장점을
              가지고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </Contents>
  );
};

export default IntorPage;
