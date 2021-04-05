import { useContext } from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from 'HOCS/ErrorBoundary'
import { GlobalContext } from 'store/GlobalStore'

const PlayerTrack = ({ className, tProgress, tTime, seekBar }) => {
  const [store] = useContext(GlobalContext)

  return (
    <ErrorBoundary>
      <div id="player-track" className={className}>
        <div id="album-name">{store?.song?.album}</div>
        <div id="track-name" className={className}>
          {store?.song?.trackName}
        </div>
        <div id="track-time" className={className}>
          <div id="current-time">{tProgress}</div>
          <div id="track-length">{tTime}</div>
        </div>
        <div id="s-area">
          <div id="ins-time" />
          <div id="s-hover" />
          <div id="seek-bar" style={{ width: seekBar }} />
        </div>
      </div>
    </ErrorBoundary>
  )
}

PlayerTrack.propTypes = {
  className: PropTypes.string,
  tProgress: PropTypes.string,
  tTime: PropTypes.string,
  seekBar: PropTypes.number,
}

export default PlayerTrack
