import React from "react";

const Intro = (props) => {
    return (
        <section id="introSection" class={props.attr}>
            <h3 class="blind">코딩에 대한 설명</h3>
            <div class="intro__inner container">
                <div class="intro__title">
                    <span>FRONTEND</span>
                    <h3>
                        코딩의
                        <br />
                        다양한 분야
                    </h3>
                    <p>
                        프론트앤드 개발자로 취업하기 위한
                        <br />
                        전문 과정입니다.
                        <br />
                        여러분들도 도전해보세요!
                    </p>
                </div>
                <div class="intro__desc">
                    <div>
                        <h4 class="icon-bg1">프로젝트 경험</h4>
                        <p>
                            완료한 프로젝트에 대한 정보와 기여한 역할을 명시해야
                            합니다. 다양한 종류의 프로젝트를 포함하여 다른
                            도메인, 기능 및 기술을 다뤘음을 보여줄 수 있습니다.
                        </p>
                    </div>
                    <div>
                        <h4 class="icon-bg2">기술 스택</h4>
                        <p>
                            사용한 프레임워크, 언어, 데이터베이스 등의 기술
                            스택을 나열해야 합니다. 기술 스택의 다양성과
                            업데이트된 기술을 활용하는 능력을 강조할 수
                            있습니다.
                        </p>
                    </div>
                    <div>
                        <h4 class="icon-bg3">개인 프로젝트</h4>
                        <p>
                            개인 프로젝트는 웹 개발자의 창의성과 개인적인 열정을
                            보여줄 수 있는 좋은 방법입니다. 개인적인 프로젝트를
                            포트폴리오에 포함하면 자신의 아이디어를 실제로
                            구현하고 문제를 해결하는 능력을 보여줄 수 있습니다.
                        </p>
                    </div>
                    <div>
                        <h4 class="icon-bg4">오픈 소스 기여</h4>
                        <p>
                            오픈 소스 프로젝트에 참여하고 기여한 경험은 개발자의
                            협업 능력과 개방적인 태도를 보여줍니다. 포트폴리오에
                            오픈 소스 프로젝트에 대한 참여 내용을 기록하고
                            기여한 부분을 설명하는 것이 좋습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
