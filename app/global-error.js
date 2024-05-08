'use client';

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <div>{error.message}</div>
      </body>
    </html>
  );
}
