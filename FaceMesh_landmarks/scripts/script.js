//==============================================================================
// The following example demonstrates how to bind the position of 
// objects (in this case joints) to the landamrks.

// Pay attention to the object (joints) name!

//==============================================================================

// Load in the required modules
const FaceTracking = require('FaceTracking');
const Scene = require('Scene');

// Load in the Diagnostics module
const Diagnostics = require('Diagnostics');
const Reactive = require('Reactive');

// Store a reference to a detected face
const face = FaceTracking.face(0);
const faceTransform = face.cameraTransform;

// const head = Scene.root.find('head');
// const headTransform = head.transform;
// headTransform.transform = faceTransform;

// Scene.root.find('head').transform = face.cameraTransform;

//==============================================================================
// Bind the position of the joint in the scene with the positions of the face landmarks
//==============================================================================

//==============================================================================
// cheek
//==============================================================================
//------- Cheek left center ------
Scene.root.find('cheek_left_center').transform.position = face.leftCheek.center;

//------- Cheek left cheekBone ------
Scene.root.find('cheek_left_cheekBone').transform.position = face.leftCheek.cheekbone;

//------- Cheek right center ------
Scene.root.find('cheek_right_center').transform.position = face.rightCheek.center;

//------- Cheek right cheekBone ------
Scene.root.find('cheek_right_cheekBone').transform.position = face.rightCheek.cheekbone;

//==============================================================================
// chin
//==============================================================================
Scene.root.find('chin').transform.position = face.chin.tip;

//==============================================================================
// eyebrow
//==============================================================================
//------- Eyebrow left inside ------
Scene.root.find('eyebrow_left_insideEnd').transform.position = face.leftEyebrow.insideEnd;

// //------- Eyebrow left outside ------
Scene.root.find('eyebrow_left_outsideEnd').transform.position = face.leftEyebrow.outsideEnd;

// //------- Eyebrow left top ------
Scene.root.find('eyebrow_left_top').transform.position = face.leftEyebrow.top;

// //------- Eyebrow right inside ------
Scene.root.find('eyebrow_right_insideEnd').transform.position = face.rightEyebrow.insideEnd;

// //------- Eyebrow right outside ------
Scene.root.find('eyebrow_right_outsideEnd').transform.position = face.rightEyebrow.outsideEnd;

// //------- Eyebrow right top ------
Scene.root.find('eyebrow_right_top').transform.position = face.rightEyebrow.top;

//==============================================================================
// forehaed
//==============================================================================
//------- Forehaed center ------
Scene.root.find('forehead_center').transform.position = face.forehead.center;

// //------- Forehaed top ------
Scene.root.find('forehead_top').transform.position = face.forehead.top;

//==============================================================================
// nose
//==============================================================================
//------- Nose bridge ------
Scene.root.find('nose_bridge').transform.position = face.nose.bridge;

//------- Nose left nostril ------
Scene.root.find('nose_left_nostril').transform.position = face.nose.leftNostril;

//------- Nose righ nostril ------
Scene.root.find('nose_right_nostril').transform.position = face.nose.rightNostril

//------- Nose tip ------
Scene.root.find('nose_tip').transform.position = face.nose.tip;

//==============================================================================
// eyelid
//==============================================================================
//------- Eyelid left center ------
Scene.root.find('eyelid_left_center').transform.position = face.leftEye.center;

//------- Eyelid left inside ------
Scene.root.find('eyelid_left_inside_corner').transform.position = face.leftEye.insideCorner;

//------- Eyelid left outside ------
Scene.root.find('eyelid_left_outside_corner').transform.position = face.leftEye.outsideCorner;

// //------- Eyelid left lower ------
Scene.root.find('eyelid_left_lower_center').transform.position = face.leftEye.lowerEyelidCenter;

// //------- Eyelid left upper ------
Scene.root.find('eyelid_left_upper_center').transform.position = face.leftEye.upperEyelidCenter;

// //------- Eyelid right center ------
Scene.root.find('eyelid_right_center').transform.position = face.rightEye.center;

// //------- Eyelid right inside ------
Scene.root.find('eyelid_right_inside_corner').transform.position = face.rightEye.insideCorner;

// //------- Eyelid right outside ------
Scene.root.find('eyelid_right_outside_corner').transform.position = face.rightEye.outsideCorner;

// //------- Eyelid right lower ------
Scene.root.find('eyelid_right_lower_center').transform.position = face.rightEye.lowerEyelidCenter;

// //------- Eyelid right upper ------
Scene.root.find('eyelid_right_upper_center').transform.position = face.rightEye.upperEyelidCenter;

//==============================================================================
// Mouth
//==============================================================================
//----- Mouth center -----
Scene.root.find('mouth_center').transform.position = face.mouth.center;

//----- Mouth upper lip center -----
Scene.root.find('mouth_upperLipCenter').transform.position = face.mouth.upperLipCenter;

//------- Mouth left corner ------
Scene.root.find('mouth_leftCorner').transform.position = face.mouth.leftCorner;

//----- Mouth lower lip center ----- // Is it normal that lowerLipCenter and upperLipCenter are at the same height?
Scene.root.find('mouth_lowerLipCenter').transform.position = face.mouth.lowerLipCenter;

//----- Mouth right corner -----
Scene.root.find('mouth_rightCorner').transform.position = face.mouth.rightCorner;
