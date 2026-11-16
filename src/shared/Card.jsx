function Card({ title, children, variant = 'primary' }) {
  return (
    <div className={`card card-${variant}`}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}

export default Card