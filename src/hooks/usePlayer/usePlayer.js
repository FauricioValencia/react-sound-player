import { useState } from 'react'

const usePlayer = () => {
  const [isPlay, setIsPlay] = useState(false)
  const [positionSong, setPositionSong] = useState(0)
  const [tProgress, setTProgress] = useState('00:00')
  const [tTime, setTTime] = useState('00:00')
  const [seekBar, setSeekBar] = useState(0)

  const handleSong = (audio) => {
    let curMinutes = Math.floor(audio.currentTime / 60)
    let curSeconds = Math.floor(audio.currentTime - curMinutes * 60)

    let durMinutes = Math.floor(audio.duration / 60)
    let durSeconds = Math.floor(audio.duration - durMinutes * 60)

    if (curMinutes < 10) curMinutes = '0' + curMinutes
    if (curSeconds < 10) curSeconds = '0' + curSeconds
    if (durMinutes < 10) durMinutes = '0' + durMinutes
    if (durSeconds < 10) durSeconds = '0' + durSeconds

    if (isNaN(curMinutes) || isNaN(curSeconds)) setTProgress('00:00')
    else setTProgress(curMinutes + ':' + curSeconds)
    if (isNaN(durMinutes) || isNaN(durSeconds)) setTTime('00:00')
    else setTTime(durMinutes + ':' + durSeconds)

    return {
      handlePlayAndPause: () => {
        if (isPlay) {
          setIsPlay(false)
          audio.pause()
        } else {
          audio?.play()
          setIsPlay(true)
        }
      },
      nextSong: () => {
        if (positionSong === 4) return
        setPositionSong((p) => p + 1)
        setIsPlay(true)
        audio.play()
        setSeekBar(0)
        setTProgress('00:00')
      },
      prevSong: () => {
        if (positionSong === 0) return
        setPositionSong((p) => p - 1)
        setIsPlay(true)
        audio.play()
        setSeekBar(0)
        setTProgress('00:00')
      },
      updateCurrTime: () => {
        let playProgress = (audio.currentTime / audio.duration) * 100
        setSeekBar(playProgress + '%')
        if (playProgress === 100) {
          setSeekBar(0)
          setTProgress('00:00')
        }
      },
    }
  }

  return [handleSong, isPlay, positionSong, tProgress, tTime, seekBar]
}

export default usePlayer
