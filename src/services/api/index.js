import Swal from 'sweetalert2'

import { songs } from 'mocks'
import http from 'services/http'

export const fetchSongs = async () => {
  try {
    const { data } = await http.post('/q', {
      token: 'GB_xnt1ZsmW2WSpP6Jn1AA',
      data: { songs },
    })

    return data.songs
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
    })
  }
}
