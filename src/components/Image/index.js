import { forwardRef, useState } from 'react';
import images from '~/assets/img';

function Image({ src = images.avatar, ...props }, ref) {
   const [fallBack, setFallBack] = useState('');

   const handleError = () => {
      setFallBack(images.avatar);
   };

   return <img src={fallBack || src} ref={ref} {...props} onError={handleError} />;
}

export default forwardRef(Image);
