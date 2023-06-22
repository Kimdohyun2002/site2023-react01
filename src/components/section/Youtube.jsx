import React from "react";
import { Link } from "react-router-dom";

const Youtube = (props) => {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>코딩 유튜버 추천</h3>
                    <p>
                        노마드 코더, 조코딩, 그리고 재밌게 풀어낸 코딩 이야기
                        좋코딩!
                        <br />
                        함께 재밌게 코딩에 대해 알아보아요!
                    </p>
                    <Link to="/" className="button-blue">
                        자세히 보기
                    </Link>
                </div>
                <div className="youtube__item">
                    <div>
                        <img
                            src="./assets/images/youtube/youtube1.png"
                            alt="리액트"
                        />
                    </div>
                    <div>
                        <img
                            src="./assets/images/youtube/youtube2.png"
                            alt="리액트"
                        />
                    </div>
                    <div>
                        <img
                            src="./assets/images/youtube/youtube3.png"
                            alt="리액트"
                        />
                    </div>
                    <div>
                        <img
                            src="./assets/images/youtube/youtube4.png"
                            alt="리액트"
                        />
                    </div>
                    <div>
                        <img
                            src="./assets/images/youtube/youtube2.png"
                            alt="리액트"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Youtube;
