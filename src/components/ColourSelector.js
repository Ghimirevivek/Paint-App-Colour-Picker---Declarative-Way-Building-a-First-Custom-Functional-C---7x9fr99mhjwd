import React from 'react'

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { label, className, background } = config
  return (
    <button
      className={className /* classname should come here */}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label /* label should come here */}
    </button>
  )
}
export default ColourSelector
