import React from "react";
import "./Main.css";

function MainPage() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo_set">
            <img alt="인스타그램 로고" src="/images/logo.png" width="20px" />
            <span>westagram</span>
          </div>
          <form className="search_input">
            <ul id="search_result">
              <li value="select01"></li>
              <li value="select02"></li>
              <li value="select03"></li>
            </ul>
            <img
              alt="검색 아이콘"
              src="/images/search.png"
              width="10px"
              height="10px"
            />
            <input id="search" type="text" placeholder="검색" />
          </form>
          <div className="utility">
            <img alt="탐색 아이콘" src="/images/explore.png" width="20px" />
            <img alt="하트 아이콘" src="/images/heart.png" width="20px" />
            <img alt="내 계정 아이콘" src="/images/profile.png" width="20px" />
          </div>
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article>
            <div className="profile">
              <div className="image"></div>
              <span>canon_mj</span>
              <img
                className="icon_more"
                alt="더보기 아이콘"
                src="/images/more.png"
                width="16px"
                height="16px"
              />
            </div>
            <div className="uploaded_img"></div>
            <div className="comment-area">
              <div className="icon_comment">
                <img
                  alt="피드 좋아요 아이콘"
                  src="/images/heart_red.png"
                  width="26px"
                />
                <img
                  alt="피드 댓글 아이콘"
                  src="/images/bubble-chat.png"
                  width="24px"
                />
                <img
                  alt="피드 업로드 아이콘"
                  src="/images/upload.png"
                  width="20px"
                />
                <img
                  className="icon_bookmark"
                  alt="피드 북마크 아이콘"
                  src="/images/bookmark-white.png"
                  width="20px"
                />
              </div>
              <div className="like_comment">
                <div className="image"></div>
                <span>
                  <strong>aineworld</strong>님 외 <strong>10</strong>명이
                  좋아합니다
                </span>
              </div>
              <div className="text_comment">
                <span className="id">canon_mj</span>
                <span className="txt">위워크에서 진행한 베이킹 클래스...</span>
                <button>더보기</button>
              </div>
              <div className="new_text_comment"></div>
              <span className="time">42분 전</span>
            </div>
            <form className="write_comment">
              <input
                id="upload_text"
                className="comment"
                type="text"
                placeholder="댓글 달기..."
              />
              <button
                id="upload_btn"
                className="upload_btn_on upload_btn_off"
                disabled="disabled"
              >
                게시
              </button>
            </form>
          </article>
        </div>
        <div className="main-right">
          <div className="profile">
            <div className="image"></div>
            <div className="id">
              <span>wecode_bootcamp</span>
              <span>WeCode | 위코드</span>
            </div>
          </div>
          <div className="story">
            <div className="title">
              <span>스토리</span>
              <button>모두 보기</button>
            </div>
            <ul>
              <li className="profile">
                <div className="image_live">
                  <img
                    className="image"
                    alt="프로필"
                    src="/images/profile00.jpg"
                  />
                </div>
                <div className="id">
                  <span>_yum_s</span>
                  <span>16분 전</span>
                </div>
              </li>
              <li className="profile">
                <div className="image_live">
                  <img
                    className="image"
                    alt="프로필"
                    src="/images/profile04.jpg"
                  />
                </div>
                <div className="id">
                  <span>drink_eat_drink</span>
                  <span>3시간 전</span>
                </div>
              </li>
              <li className="profile">
                <div className="image_live">
                  <img
                    className="image"
                    alt="프로필이미지"
                    src="/images/profile03.jpg"
                  />
                </div>
                <div className="id">
                  <span>drink_eat_drink</span>
                  <span>3시간 전</span>
                </div>
              </li>
              <li className="profile">
                <div className="image_live">
                  <img
                    className="image"
                    alt="프로필이미지"
                    src="/images/profile06.jpg"
                  />
                </div>
                <div className="id">
                  <span>drink_eat_drink</span>
                  <span>3시간 전</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="recommend">
            <div className="title">
              <span>회원님을 위한 추천</span>
              <button>모두 보기</button>
            </div>
            <ul>
              <li className="profile">
                <div className="image_live">
                  <img
                    className="image"
                    alt="프로필이미지"
                    src="/images/profile06.jpg"
                  />
                </div>
                <div className="id">
                  <span>joaaaaaaahye</span>
                  <span>_legend_a님 외 2명이...</span>
                </div>
                <button>팔로우</button>
              </li>
              <li className="profile">
                <div className="image_live">
                  <img
                    className="image"
                    alt="프로필이미지"
                    src="images/profile02.jpg"
                  />
                </div>
                <div className="id">
                  <span>rampart81</span>
                  <span>jimmmiee님 외 1명...</span>
                </div>
                <button>팔로우</button>
              </li>
              <li className="profile">
                <div className="image_live">
                  <img
                    className="image"
                    alt="프로필"
                    src="/images/profile05.jpg"
                  />
                </div>
                <div className="id">
                  <span>joaaaaaaahye</span>
                  <span>ringo.in.seoul님 외 12명...</span>
                </div>
                <button>팔로우</button>
              </li>
            </ul>
          </div>
          <div className="info">
            <p>
              Instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
              개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
            </p>
            <p>ⓒ 2019 INSTAGRAM</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
