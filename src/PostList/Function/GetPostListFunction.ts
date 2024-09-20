interface GetPostListFunctionProps {
  page: number;
  size: number;
}
interface GetCategoryPostListFunctionProps extends GetPostListFunctionProps {
  category: string;
}

interface GetTagPostListFunctionProps extends GetPostListFunctionProps {
  tag: string;
}

async function fetchPostList(endpoint: string, body: object): Promise<any> {
  const result = await fetch(`${process.env.REACT_APP_API}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...body,
      blogId: process.env.REACT_APP_BLOG_ID,
    }),
  });

  return await result.json();
}

// 최신 게시물 목록을 가져오는 함수
async function GetRecentPostListFunction({
  page,
  size,
}: GetPostListFunctionProps) {
  return fetchPostList(`post/list?page=${page}&size=${size}`, {});
}

// 고정된 게시물 목록을 가져오는 함수
async function GetPinnedPostListFunction({
  page,
  size,
}: GetPostListFunctionProps) {
  return fetchPostList(`post/list/pinned?page=${page}&size=${size}`, {});
}

// 카테고리별 게시물 목록을 가져오는 함수
async function GetCategoryPostListFunction({
  category,
  page,
  size,
}: GetCategoryPostListFunctionProps) {
  return fetchPostList(`post/list/category?page=${page}&size=${size}`, {
    category,
  });
}

// 태그별 게시물 목록을 가져오는 함수
async function GetTagPostListFunction({
  tag,
  page,
  size,
}: GetTagPostListFunctionProps) {
  return fetchPostList(`post/list/tag?page=${page}&size=${size}`, { tag });
}

export {
  GetRecentPostListFunction,
  GetPinnedPostListFunction,
  GetCategoryPostListFunction,
  GetTagPostListFunction,
};
