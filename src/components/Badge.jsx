import clsx from 'clsx'

const styles = {
  info: {
    container: 'bg-sky-100 text-sky-800',
  },
  required: {
    container: 'bg-pink-100 text-pink-800',
  },
  recommended: {
    container: 'bg-green-100 text-green-800',
  },
}

export function Badges({ type, children }) {
  return <div className="space-x-4">{children}</div>
}

export function Badge({ type, title, children }) {
  const renderTitle = () => {
    if (title) {
      return title
    }

    if (type === 'recommended') {
      return 'Recommended'
    }

    if (type === 'required') {
      return 'Required'
    }
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium',
        styles[type].container
      )}
    >
      {renderTitle()}
    </span>
  )
}
