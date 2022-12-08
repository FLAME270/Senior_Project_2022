import * as FileSystem from 'expo-file-system'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-native'



//Some images take longer to load, so this function stores the image in a cache and turns it into a uri.
const CachedImage = props => {
  const { source: { uri }, cacheKey } = props
  const filesystemURI = `${FileSystem.cacheDirectory}${cacheKey}`

  const [imgURI, setImgURI] = useState(filesystemURI)

  const componentIsMounted = useRef(true)

  useEffect(() => {
    const loadImage = async ({ fileURI }) => {
      try {
        // Use the cached image if it exists
        const metadata = await FileSystem.getInfoAsync(fileURI)
        if (!metadata.exists) {
          // download to cache
          if (componentIsMounted.current) {
            setImgURI(null)
            await FileSystem.downloadAsync(
              uri,
              fileURI
            )
          }
          if (componentIsMounted.current) {
            setImgURI(fileURI)
          }
        }
      } catch (err) {
        setImgURI(uri)
      }
    }

    loadImage({ fileURI: filesystemURI })

    return () => {
      componentIsMounted.current = false
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Image
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      source={{
        uri: imgURI,
      }}
    />
  )
}

CachedImage.propTypes = {
  source: PropTypes.object.isRequired,
  cacheKey: PropTypes.string.isRequired,
}

export default CachedImage
