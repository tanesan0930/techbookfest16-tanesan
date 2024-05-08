'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div>Child Template Page</div>
      <Link href={'/template'}>go to parent page</Link>
    </>
  );
}
