export default function Page({ params }) {
  return (
    <>
      {params.id.map((id, index) => (
        <div key={index}>id: {id}</div>
      ))}
    </>
  );
}
