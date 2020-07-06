import React from 'react'

export const Alert = ({text}) => (
    <div className="spinner-border text-warning" role="status">
          <span class="sr-only">{text}</span>
        </div>
)