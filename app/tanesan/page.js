// page.js
export default async function Page() {
  //3秒待つ
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>tanesan</div>;
}
