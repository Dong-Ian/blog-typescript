export default async function getAccount() {
  const result = await fetch(`${process.env.REACT_APP_API}/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blogId: process.env.REACT_APP_BLOG_ID,
    }),
  });

  const res = await result.json();
  console.log(res);
  return res;
}
