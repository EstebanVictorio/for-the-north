import {useState, useEffect} from 'react'
import { MOBILE_MEDIA_QUERY } from 'utils/contants'
import { Mobile, Web } from 'components/media'


const useMedia = () => {
  if(innerWidth) {
    const [media, setMedia] = useState(Mobile)
    useEffect(() => {
      if(matchMedia) {
        setMedia(matchMedia(MOBILE_MEDIA_QUERY).matches ? Mobile : Web)
      }
    }, [innerWidth])
    return media
  }
  return null
}

export default useMedia