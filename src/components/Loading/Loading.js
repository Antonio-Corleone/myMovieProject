

import React from 'react'

export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      backgroundColor: 'rgba(0,0,0,0.6)',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex:100
    }}>
      <div style={{fontSize: '35px', color: 'white'}}>
        Loading...
      </div>
    </div>
  )
}
