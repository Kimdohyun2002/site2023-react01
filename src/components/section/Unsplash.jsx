import React from "react";

import { Link } from "react-router-dom";

function Unsplash(props) {
    return (
        <section id="unsplash" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>코딩 언어 추천</h3>
                    <p>
                        리액트, 자바스크립트 등 많은 언어들이 있습니다. <br />
                        함께 알아봅시다!
                    </p>
                    <Link to="/" className="button-red">
                        자세히 보기
                    </Link>
                </div>
                <div className="unsplash__item">
                    <div>
                        <img
                            src="./assets/images/unsplash/unsplash1.png"
                            alt="리액트"
                        />
                    </div>
                    <div>
                        <img
                            src="./assets/images/unsplash/unsplash2.png"
                            alt="리액트"
                        />
                    </div>
                    <div>
                        <img
                            src="./assets/images/unsplash/unsplash3.png"
                            alt="리액트"
                        />
                    </div>
                    <div>
                        <img
                            src="./assets/images/unsplash/unsplash4.png"
                            alt="리액트"
                        />
                    </div>
                    <div>
                        <img
                            src="./assets/images/unsplash/unsplash1.png"
                            alt="리액트"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Unsplash;
