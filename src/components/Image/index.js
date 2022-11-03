import { forwardRef, useState } from 'react';
import images from '~/assets/img';

function Image({ src, ...props }, ref) {
   const [fallBach, setFallBack] = useState('');

   const handleError = () => {
      setFallBack(images.avatar);
   };

   return <img src={fallBach || src} ref={ref} {...props} onError={handleError} />;
}

export default forwardRef(Image);
