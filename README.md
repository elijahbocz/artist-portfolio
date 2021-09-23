This artist portfolio uses Gatsby to create a static site that is deployed on Netlify.

Cloudinary is utilized for serving the images in conjunction with provided Gatsby plugins.

A CMS is available using Netlify credentials which allows for new images to be uploaded by the artist, and a new build is triggered through continuous deployment on Netfliy.

A .env is required to store Cloudinary credentials
```
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```
