# Archive: 개인 블로그 플랫폼

[블로그 링크: blog.minjae-dev.com](https://blog.minjae-dev.com/)

Archive는 개인이 글을 작성하고 관리할 수 있도록 설계된 개인 전용 블로그 플랫폼입니다.

회원가입 기능은 비활성화되어 있으며, 오직 본인만 콘텐츠를 관리하고 블로그를 운영할 수 있습니다.

반응형 UI를 통해 다양한 디바이스에서 최적화된 경험을 제공합니다.

## 주요 기능

1.  개인 전용 회원 시스템

    • 회원가입 및 추가 사용자 등록은 비활성화되어 있으며, 블로그 소유자만 사용 가능.

    • 소유자 계정을 통해 글 작성, 수정, 삭제가 가능합니다.

2.  포스팅 기능

    • 마크다운 에디터를 사용하여 글을 작성할 수 있습니다.

    • 코드 블록, 이미지 삽입 등 다양한 포맷을 지원.

    • 사진 업로드는 Firebase를 활용하여 이미지 저장 및 링크를 반환받아 사용.

3.  포스트 조회 및 댓글

    • 작성된 포스트는 방문자가 조회 가능.

    • GitHub 댓글 기능을 활용하여 댓글을 통해 독자와 소통 가능.

4.  카테고리 및 태그별 포스트 관리

    • 포스트를 카테고리와 태그로 분류하여 체계적으로 관리.

    • 카테고리 및 태그별로 포스트 리스트를 쉽게 조회 가능.

5.  프로필 커스터마이징

    • 블로그 소유자는 아래 항목을 수정하여 블로그를 꾸밀 수 있습니다:

         프로필 사진 및 이름

         개인 링크 (Personal URL)

         헤더 색상 등 UI 요소

6.  반응형 UI

    • 모바일, 태블릿, 데스크탑 환경에서 최적화된 UI 제공.

    • 주요 기능

         헤더 및 메뉴 자동 조정: 화면 크기에 따라 레이아웃과 메뉴 표시 방식 변경.

         포스트 목록 그리드: 작은 화면에서는 세로 스크롤, 큰 화면에서는 그리드 형태로 표시.

         마크다운 에디터 및 포스트 보기 페이지는 다양한 화면 크기에 맞게 유동적으로 크기 조정.

## 기술 스택

    •	Frontend: React, TypeScript, Firebase (사진 업로드 및 데이터 관리)
    •	Editor: Markdown Editor
    •	Comment System: GitHub Comment API

## 사용 방법

1. 소유자 계정 로그인

    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/archive-main.png?alt=media&token=804b5128-c55a-4950-a7be-fabbdc3da784">

   • 블로그는 소유자 계정으로만 관리 가능하며, 회원가입은 비활성화 상태입니다.

2. 포스트 작성

    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/archive-posting.png?alt=media&token=532db54b-a943-488f-b4aa-f09c05e3e240">

    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/archive-post.png?alt=media&token=3270da1b-1212-40c1-ae32-ac29530fbd85">

   • 마크다운 에디터를 사용해 포스트를 작성하고, 필요한 이미지는 Firebase에 업로드 후 링크로 삽입합니다.

3. 포스트 관리

    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/archive-postlist.png?alt=media&token=229bf010-7d5b-4482-879a-44118192218c">

   • 작성된 포스트를 카테고리 및 태그로 분류하여 체계적으로 관리합니다.

4. 독자와의 소통

    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/archive-comment.png?alt=media&token=ea4bf6d2-82c8-4192-9aa0-ae41bb8af9d7">

   • 방문자는 포스트를 조회하고 GitHub 댓글 시스템을 통해 의견을 남길 수 있습니다.
