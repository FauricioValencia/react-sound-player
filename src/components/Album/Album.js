import React from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from 'HOCS/ErrorBoundary'
import { GlobalContext } from 'store/GlobalStore'

const Album = ({ className }) => {
  const [store] = React.useContext(GlobalContext)

  return (
    <ErrorBoundary>
      <div id="album-art" className={className}>
        <img
          src={store?.song?.songsImage}
          className="active"
          id={store?.song?.albumArtwork}
          alt={store?.song?.trackName}
        />
        <div id="buffer-box">Buffering ...</div>
      </div>
    </ErrorBoundary>
  )
}

Album.propTypes = {
  className: PropTypes.string,
  song: PropTypes.object,
}

export default Album
