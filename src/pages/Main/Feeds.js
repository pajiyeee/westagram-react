import React from "react";
import "./Feeds.scss";
import "../../styles/common.scss";
import "../../styles/reset.scss";

function Feeds() {
  return (
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
              <strong>aineworld</strong>님 외 <strong>10</strong>명이 좋아합니다
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
  );
}

export default Feeds;
