export default function NumberHighlighter({ data, tag = 'p' }) {
  const Tag = tag;
  const parts = data.split(/(\d+)/g);

  return (
    <Tag>
      {parts.map((part, index) =>
        /^\d+$/.test(part) ? <span key={index} className="number">{part}</span> : part
      )}
    </Tag>
  );
}
