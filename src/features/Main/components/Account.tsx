import {
  RenderAccountProps,
  RenderAccountRowProps,
  RenderUserInfoProps,
} from "features/Main/types/Main.type";
import React from "react";
import { Link } from "react-router-dom";
import github_icon from "utils/images/github-mark.png";
import instagram_icon from "utils/images/instagram.webp";
import default_profile_image from "utils/images/nullprofile.webp";
import styles from "../styles/account.module.css";

const RenderUserInfo: React.FC<RenderUserInfoProps> = ({
  userInfo,
  profileImage,
}) => {
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
};

const RenderSocialAccount: React.FC<RenderAccountProps> = ({ userInfo }) => {
  const githubUrl = "https://github.com/" + userInfo.githubUrl;
  const instagramUrl = "https://www.instagram.com/" + userInfo.instagram;

  const AccountRowRender = ({ img, account }: RenderAccountRowProps) => {
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
  };

  return (
    <div className={styles.table_div}>
      <div className={styles.table_title_div}>
        <p>소셜 정보</p>
      </div>
      <div className={styles.social_table}>
        {userInfo.githubUrl ? (
          <Link to={githubUrl} style={{ textDecoration: "none" }}>
            <AccountRowRender img={github_icon} account={userInfo.githubUrl} />
          </Link>
        ) : (
          <AccountRowRender img={github_icon} account={userInfo.githubUrl} />
        )}
        {userInfo.instagram ? (
          <Link to={instagramUrl} style={{ textDecoration: "none" }}>
            <AccountRowRender
              img={instagram_icon}
              account={userInfo.instagram}
            />
          </Link>
        ) : (
          <AccountRowRender img={instagram_icon} account={userInfo.instagram} />
        )}
      </div>
    </div>
  );
};

const RenderEmail: React.FC<RenderAccountProps> = ({ userInfo }) => {
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
};

const RenderPersonalUrl: React.FC<RenderAccountProps> = ({ userInfo }) => {
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
};

const Account: React.FC<RenderAccountProps> = ({ userInfo }) => {
  const profileImage = userInfo.images.profileImage;

  return (
    <div className={styles.user_info_box}>
      <RenderUserInfo userInfo={userInfo} profileImage={profileImage} />
      <div className={styles.table}>
        <RenderEmail userInfo={userInfo} />
        <hr />
        <RenderSocialAccount userInfo={userInfo} />
        <hr />
        <RenderPersonalUrl userInfo={userInfo} />
      </div>
    </div>
  );
};

export default Account;
