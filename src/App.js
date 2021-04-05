import { useRef, useEffect, useContext } from 'react'
import {
  faBackward,
  faPlay,
  faPause,
  faForward,
} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import ReactAudioPlayer from 'react-audio-player'

import { useAsyncService, usePlayer } from 'hooks'
import { Album, Icon, PlayerTrack } from 'components'
import { fetchSongs } from 'services/api'
import { GlobalContext } from 'store/GlobalStore'

function App() {
  const [getSongs, songs] = useAsyncService(fetchSongs)
  const ref = useRef({})
  const [
    handleSong,
    isPlay,
    positionSong,
    tProgress,
    tTime,
    seekBar,
  ] = usePlayer()
  const [store, dispatch] = useContext(GlobalContext)
  const isActiveClass = isPlay ? 'active' : ''

  useEffect(() => {
    getSongs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (songs?.data?.length) {
      dispatch({ type: 'set song', payload: songs?.data[positionSong] })
    }
  }, [positionSong, songs?.data, dispatch])

  if (!songs?.data?.length) return <h1>Loading...</h1>

  return (
    <div id="app-cover">
      <div id="bg-artwork" />
      <div id="bg-layer" />
      <div id="player">
        <PlayerTrack
          className={isActiveClass}
          tProgress={tProgress}
          tTime={tTime}
          seekBar={seekBar}
        />
        <div id="player-content">
          <Album className={isActiveClass} />
          <div id="player-controls">
            <Icon
              icon={faBackward}
              onClick={() =>
                handleSong(ref?.current?.audioEl?.current).prevSong()
              }
            />
            <Icon
              asd={false}
              icon={isPlay ? faPause : faPlay}
              onClick={() =>
                handleSong(ref?.current?.audioEl?.current).handlePlayAndPause()
              }
            />
            <Icon
              icon={faForward}
              onClick={() =>
                handleSong(ref?.current?.audioEl?.current).nextSong()
              }
            />
            <ReactAudioPlayer
              controls
              src={store?.song?.trackUrl}
              ref={ref}
              onListen={() =>
                handleSong(ref?.current?.audioEl?.current).updateCurrTime()
              }
              listenInterval={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
