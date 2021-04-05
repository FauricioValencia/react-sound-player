import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ErrorBoundary from 'HOCS/ErrorBoundary'

const Icon = ({ icon, onClick }) => (
  <ErrorBoundary>
    <div className="control" onClick={onClick}>
      <div className="button" id="play-pause-button">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  </ErrorBoundary>
)

Icon.propTypes = {
  icon: PropTypes.object,
  onClick: PropTypes.func,
}

export default Icon
