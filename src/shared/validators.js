
export const loadImageValidator = image =>
  new Promise((resolve, reject) => {
    image.addEventListener('load', function me() {
      if ('naturalHeight' in image) {
        if (image.naturalHeight === 1 || image.naturalWidth === 1) {
          image.removeEventListener('load', me)
          reject()
        }
      }

      image.removeEventListener('load', me)
      resolve()
    })

    image.addEventListener('error', function me() {
      image.removeEventListener('error', me)
      reject()
    })
  })