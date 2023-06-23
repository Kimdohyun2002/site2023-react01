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
      </div>
    </Contents>
  );
};

export default IntorPage;
