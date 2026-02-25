// універсальний компонент для іконок зі спрайта
export default function SvgIcon({ id, className = "" }) {
    return (
      <svg className={className}>
        <use href={`/images/sprite.svg#${id}`} />
      </svg>
    )
  }
  