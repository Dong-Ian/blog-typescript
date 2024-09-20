import React from "react";
import { Link } from "react-router-dom";
import { UserInfoInterface } from "../Type/MainType";

import styles from "../Style/main.module.css";

import default_profile_image from "../../Utils/Image/nullprofile.webp";
import github_icon from "../../Utils/Image/github-mark.png";
import instagram_icon from "../../Utils/Image/instagram.webp";

interface AccountProps {
  userInfo: UserInfoInterface;
}

const Account: React.FC<AccountProps> = ({ userInfo }) => {
  const profileImage = userInfo.images.profileImage;

  function UserInfoRender() {
    return (
      <div className={styles.info_box}>
        <div className={styles.profile_wrapper}>
          <div className={styles.profile_image_div}>
            {profileImage !== "" ? (
              <img alt="프로필 이미지" src={profileImage} />
            ) : (
              <img alt="기본 프로필 이미지" src={default_profile_image} />
            )}
          </div>
        </div>
        <div className={styles.info_content_box}>
          <p className={styles.name}>{userInfo.userName}</p>
          <p className={styles.user_description}>{userInfo.memo}</p>
        </div>
      </div>
    );
  }

  function SocialAccountRender() {
    const githubUrl = "https://github.com/" + userInfo.githubUrl;
    const instagramUrl = "https://www.instagram.com/" + userInfo.instagram;

    return (
      <div className={styles.table_div}>
        <div className={styles.table_title_div}>
          <p>소셜 정보</p>
        </div>
        <div className={styles.social_table}>
          {userInfo.githubUrl ? (
            <Link to={githubUrl} style={{ textDecoration: "none" }}>
              <AccountRender img={github_icon} account={userInfo.githubUrl} />
            </Link>
          ) : (
            <AccountRender img={github_icon} account={userInfo.githubUrl} />
          )}
          {userInfo.instagram ? (
            <Link to={instagramUrl} style={{ textDecoration: "none" }}>
              <AccountRender
                img={instagram_icon}
                account={userInfo.instagram}
              />
            </Link>
          ) : (
            <AccountRender img={instagram_icon} account={userInfo.instagram} />
          )}
        </div>
      </div>
    );
  }

  interface AccountRenderProps {
    img: string;
    account: string | null;
  }

  function AccountRender({ img, account }: AccountRenderProps) {
    return (
      <div className={styles.social_account_div}>
        <div className={styles.social_icon_div}>
          <img alt="소셜 아이콘" src={img} />
        </div>
        <div className={styles.social_id_div}>
          {account ? (
            <p className={styles.social}>{account}</p>
          ) : (
            <p className={styles.null_social}>소셜 정보가 없습니다.</p>
          )}
        </div>
      </div>
    );
  }

  function EmailRender() {
    return (
      <div className={styles.table_div}>
        <div className={styles.table_title_div}>
          <p>이메일 정보</p>
        </div>
        <div className={styles.email_div}>
          <p>{userInfo.userEmail}</p>
        </div>
      </div>
    );
  }

  function PersonalUrlRender() {
    // eslint-disable-next-line
    const isUrlWithProtocol = (url: string) => {
      const pattern = /^(https?:\/\/)/i;
      return pattern.test(url);
    };

    const getDomainFromUrl = (url: string) => {
      // eslint-disable-next-line
      const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
      const match = url.match(domainRegex);
      if (match) {
        return match[1];
      }
      return url;
    };

    return (
      <div className={styles.table_div}>
        <div className={styles.table_title_div}>
          <p>링크</p>
        </div>
        <div>
          {userInfo.personalUrl ? (
            !isUrlWithProtocol(userInfo.personalUrl) ? (
              <div className={styles.linkTableDiv}>
                <p
                  onClick={() => {
                    window.open("https://" + userInfo.personalUrl);
                  }}
                  className={styles.personal_link}
                >
                  {getDomainFromUrl(userInfo.personalUrl)}
                </p>
              </div>
            ) : (
              <div className={styles.link_table_div}>
                <p
                  onClick={() => {
                    window.open(userInfo.personalUrl);
                  }}
                  className={styles.personal_link}
                >
                  {getDomainFromUrl(userInfo.personalUrl)}
                </p>
              </div>
            )
          ) : (
            <p className={styles.null_social}>등록된 링크가 없습니다</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.author_user_info_box}>
      <UserInfoRender />
      <div className={styles.table}>
        <EmailRender />
        <hr />
        <SocialAccountRender />
        <hr />
        <PersonalUrlRender />
      </div>
    </div>
  );
};

export default Account;
