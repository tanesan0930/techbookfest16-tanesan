import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div>Template Page</div>
      <Link href={'/template/template-child'}>go to child page</Link>
    </>
  );
}
