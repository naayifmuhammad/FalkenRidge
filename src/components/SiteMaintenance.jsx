import React from 'react'
import './SiteMaintenance.css'

const SiteMaintenance = () => {
  return (
    <div class="maintenance-section">
        <div class="icons">
            <div class="icon-wrapper icon-1">
                <i class="fa fa-cog icon" aria-hidden="true"></i>
            </div>
            <div class="icon-wrapper icon-2">
                <i class="fa fa-cog icon" aria-hidden="true"></i>
            </div>
            <div class="icon-wrapper icon-3">
                <i class="fa fa-cog icon" aria-hidden="true"></i>
            </div>
        </div>
        <div className="maintenance-text">
            <h1>We're currently making some improvements to give you a better experience.</h1>
        </div>
    </div>

  )
}

export default SiteMaintenance