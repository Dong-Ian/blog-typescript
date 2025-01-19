export default async function RefreshTokenFunction() {
  const result = await fetch(`${process.env.REACT_APP_API}/refresh`, {
    method: "POST",
    credentials: "include",
  });

  const res = await result.json();
  console.log(res);
  return res;
}
