function Button({
  children,
  text,
  onClick,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  loading = false
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`button button-${variant} button-${size}`}
    >
      {loading ? 'Loading...' : text || children}
    </button>
  )
}

export default Button