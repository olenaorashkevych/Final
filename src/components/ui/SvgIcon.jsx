const baseUrl = import.meta.env.VITE_BASE_URL;

export default function SvgIcon({ id, className = "" }) {
  return (
    <svg className={className}>
      <use href={`${baseUrl}/images/sprite.svg#${id}`} />
    </svg>
  );
}