# spark-ar-landmarks
This repository contains a Spark AR project with: 
- a simple faceMesh with the [FaceMeshTrackers](https://developers.facebook.com/docs/ar-studio/before-you-start/basics/using-the-face-reference-assets#facetrackers) texture.
<img src="https://github.com/spezialis/spark-ar-landmarks/blob/master/readme_images/FaceMeshTrackers.png" width="200">

- a patch that connect green planes to the landmarks positions
<img src="https://github.com/spezialis/spark-ar-landmarks/blob/master/readme_images/Planes_landmarks.png" width="200">

To create the joints I used this image as reference.<br>
<img src="https://github.com/spezialis/spark-ar-landmarks/blob/master/readme_images/Landmarks&Texture.png" width="200">
<img src="https://github.com/spezialis/spark-ar-landmarks/blob/master/readme_images/Maya.png" width="200">

- the .fbx file of the 3D rigged faceMesh (the original file can be fund [here](https://developers.facebook.com/docs/ar-studio/before-you-start/basics/using-the-face-reference-assets#faceMesh)) and the scrip for the landmarks. Please note that **only the mouth** was quickly weight paint by me. The rest is automatic weight paint by Maya.
<img src="https://github.com/spezialis/spark-ar-landmarks/blob/master/readme_images/Rigged.png" width="200"> 

Before importing the 3D rigged model to Spark AR is important to unparent all joints, and bind skin to multy-selected unparented joints.<br>
<img src="https://github.com/spezialis/spark-ar-landmarks/blob/master/readme_images/Maya_unparent.png" width="200"> 

Probably with a better paint weight job better resul can be achieved. This image shows how the basic faceMesh from Sparks looks better than my pour rigging.<br>
<img src="https://github.com/spezialis/spark-ar-landmarks/blob/master/readme_images/FaceMesh.png" width="200"> 
