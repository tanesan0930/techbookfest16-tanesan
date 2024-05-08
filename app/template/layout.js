'use client';

export default function Layout({ children }) {
  const randomString = Math.random().toString(36).substring(7);
  return (
    <>
      <div>{randomString}</div>
      <div>{children}</div>
    </>
  );
}
