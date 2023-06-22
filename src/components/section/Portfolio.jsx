import React from "react";

const Portfolio = (props) => {
    return (
        <section id="portSection" class={props.attr}>
            <h3>포트폴리오 구경하기</h3>
            <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
            <div class="port__inner">
                <div class="port__btn">
                    <div class="port__btn1">21기</div>
                    <div class="port__btn1">22기</div>
                    <div class="port__btn1">23기</div>
                    <div class="port__btn1 ">24기</div>
                </div>
                <div class="port__cont">
                    <div class="port">
                        <figure class="port__header">
                            <img
                                src="./assets/images/portfolio/port_img1.png"
                                alt="멤버"
                            />
                        </figure>
                        <div class="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/peep-11.svg"
                                    alt="멤버 아이콘"
                                />
                            </span>
                            <div>
                                <h4>김도현 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div class="port">
                        <figure class="port__header">
                            <img
                                src="./assets/images/portfolio/port_img2.png"
                                alt="멤버"
                            />
                        </figure>
                        <div class="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/peep-12.svg"
                                    alt=""
                                />
                            </span>
                            <div>
                                <h4>김도현 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div class="port">
                        <figure class="port__header">
                            <img
                                src="./assets/images/portfolio/port_img3.png"
                                alt="멤버"
                            />
                        </figure>
                        <div class="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/peep-13.svg"
                                    alt=""
                                />
                            </span>
                            <div>
                                <h4>김도현 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div class="port">
                        <figure class="port__header">
                            <img
                                src="./assets/images/portfolio/port_img4.png"
                                alt="멤버"
                            />
                        </figure>
                        <div class="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/peep-14.svg"
                                    alt=""
                                />
                            </span>
                            <div>
                                <h4>김도현 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div class="port">
                        <figure class="port__header">
                            <img
                                src="./assets/images/portfolio/port_img5.png"
                                alt="멤버"
                            />
                        </figure>
                        <div class="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/peep-15.svg"
                                    alt=""
                                />
                            </span>
                            <div>
                                <h4>김도현 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div class="port">
                        <figure class="port__header">
                            <img
                                src="./assets/images/portfolio/port_img6.png"
                                alt="멤버"
                            />
                        </figure>
                        <div class="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/peep-16.svg"
                                    alt=""
                                />
                            </span>
                            <div>
                                <h4>김도현 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
