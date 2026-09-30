export default function NumberHighlighter({ data}) {
  const parts = data.split(/(\d+)/g);

  return (
    <>
      {parts.map((part, index) =>
        /^\d+$/.test(part) ? <span key={index} className="number">{part}</span> : part
      )}
    </>
  );
}
