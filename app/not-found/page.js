import { notFound } from 'next/navigation';

export default function Page() {
  return (
    <form
      action={async () => {
        'use server';
        notFound();
      }}
    >
      <button type="submit">Go to not found page</button>
    </form>
  );
}
