# spark-ar-landmarks
This repository contains a Spark AR project with: 
- a simple faceMesh with the [FaceMeshTrackers](https://developers.facebook.com/docs/ar-studio/before-you-start/basics/using-the-face-reference-assets#facetrackers) texture
![FaceMeshTrackers](https://github.com/spezialis/spark-ar-landmarks/readme_images/FaceMeshTrackers.png)

- a patch that connect green planes to the landmarks positions
![Planes_landmarks](https://github.com/spezialis/spark-ar-landmarks/readme_images/Planes_landmarks.png)

To create the joints I used this image as reference.
![Landmarks&Texture](https://github.com/spezialis/spark-ar-landmarks/readme_images/Landmarks&Texture.png)
![Maya](https://github.com/spezialis/spark-ar-landmarks/readme_images/Maya.png)

- the .fbx file of the 3D rigged faceMesh (the original file can be fund [here](https://developers.facebook.com/docs/ar-studio/before-you-start/basics/using-the-face-reference-assets#faceMesh)) and the scrip for the landmarks.
![Rigged](https://github.com/spezialis/spark-ar-landmarks/readme_images/Rigged.png) please note that **only the mouth** was quickly weight paint by me. The rest is automatic weight paint by Maya. 

Before importing the 3D rigged model to Spark AR is important to unparent all joints, and bind skin to multy-selected unparented joints.
![Maya_unparent](https://github.com/spezialis/spark-ar-landmarks/readme_images/Maya_unparent.png)

Probably with a better paint weight job better resul can be achieved.
![FaceMesh](https://github.com/spezialis/spark-ar-landmarks/readme_images/FaceMesh.png)
*The image above shows how the simple faceMesh looks on Spark.*