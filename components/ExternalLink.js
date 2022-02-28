import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

function ExternalLink({href, children}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{textDecoration: 'none'}}
    >
      {children} 
      <FiExternalLink size="0.5em" style={{ position: 'relative', bottom: '0.4em', left: '0.075em'}}/>
    </a>
  )
}

export default ExternalLink