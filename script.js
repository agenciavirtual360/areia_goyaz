(function(){
    var script = {
 "definitions": [{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC",
   "camera": "this.panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F",
   "camera": "this.panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3",
   "camera": "this.panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_117C46DC_1A61_33DC_41B8_128AABFF085B",
   "camera": "this.panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D",
   "camera": "this.panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_11200D50_1A21_7625_41B1_4EFC88D0245E",
   "camera": "this.panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_camera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetHfov": 125,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -161.11,
   "backwardYaw": -151.69,
   "distance": 1,
   "panorama": "this.panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_3035",
 "id": "panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F",
 "thumbnailUrl": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13E3E84D_1E2F_CC65_4183_53E5ED000234",
  "this.overlay_0C501458_1E59_FD39_41BA_3CDD512C759F"
 ]
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 73.47,
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_2C1C92B1_221A_7BBD_417C_AC98F6A5161B",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11200D50_1A21_7625_41B1_4EFC88D0245E"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_3027",
 "id": "panorama_117C46DC_1A61_33DC_41B8_128AABFF085B",
 "thumbnailUrl": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_10673B04_1E28_4DDB_41B1_54631FDA304E",
  "this.overlay_13A4A706_1E28_45E4_41BA_275458AFC1A8"
 ]
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 153.37,
  "pitch": 9.18
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_2CE76348_221A_7AEB_418D_92E2680149A9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 18.89,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_2CC8E30A_221A_7A6F_41BC_8530EC9D89CD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 131.33,
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_2C3AC2ED_221A_7BA5_41B8_4E627F0FF9FF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 142.35,
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_2F66439C_221A_7A64_41BF_729DB29E4980",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_117C46DC_1A61_33DC_41B8_128AABFF085B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_3026",
 "id": "panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3",
 "thumbnailUrl": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13997184_1E28_5CDB_41A1_16D02C31B613"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_3028",
 "id": "panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D",
 "thumbnailUrl": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13FDF120_1E28_DDDB_41A6_8F6C9D62D79A",
  "this.overlay_0CE33752_1E58_3B0E_41B3_9695907B43C7"
 ]
},
{
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0B688B19_1E38_4B3B_41BA_DED02DC0EA37.ogg",
  "mp3Url": "media/audio_0B688B19_1E38_4B3B_41BA_DED02DC0EA37.mp3"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_0B688B19_1E38_4B3B_41BA_DED02DC0EA37",
 "data": {
  "label": "y2mate.com - Savage Love (Laxed - Siren Beat)"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -151.69,
   "backwardYaw": -161.11,
   "distance": 1,
   "panorama": "this.panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_3033",
 "id": "panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC",
 "thumbnailUrl": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13F28EF3_1E28_C43C_41BC_341837DCDD52"
 ]
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 28.31,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_2C0F8294_221A_7A7B_41BD_E7E765C58AB8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 143.27,
  "pitch": -6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_2C2AF2CF_221A_7BE5_4195_69B69106A9FE",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_3029",
 "id": "panorama_11200D50_1A21_7625_41B1_4EFC88D0245E",
 "thumbnailUrl": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1399ED45_1E6F_CF0B_41B8_9804186B8696",
  "this.overlay_1041A9C4_1E6F_D709_41BC_868D9BFDCC5B"
 ]
},
{
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": -146.94,
  "pitch": -9.18
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_2CD8A328_221A_7AAB_41BA_EB27DCE71A67",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_117C46DC_1A61_33DC_41B8_128AABFF085B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_3030",
 "id": "panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8",
 "thumbnailUrl": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13C2105D_1E68_553B_4197_FE89E31E7A36",
  "this.overlay_10580D68_1E68_4F1A_41B9_86160165567D",
  "this.overlay_0C6C1B60_1E5B_CB09_4183_AE1FA774BC8C"
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipOpacity": 0.5,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_498E74F4_545B_B067_41CC_63589B8419E3"
 ],
 "id": "Container_54B2586A_750B_85DC_41D9_68368732F926",
 "left": "0%",
 "class": "Container",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 330,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 6"
 },
 "minHeight": 1,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "class": "Container",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 115.05,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 641,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "minHeight": 1,
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "class": "IconButton",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "minWidth": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "maxHeight": 58,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "minHeight": 1,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "class": "IconButton",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "minWidth": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "maxHeight": 58,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "minHeight": 1,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "class": "IconButton",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "minWidth": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "push",
 "maxHeight": 58,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "minHeight": 1,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "class": "IconButton",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "minWidth": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "maxHeight": 58,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "minHeight": 1,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "class": "IconButton",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "minWidth": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "maxHeight": 58,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "minHeight": 1,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 31.14,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_097EFD31_1E28_4F0E_4183_1C2452ECC49F",
   "pitch": -13.91,
   "yaw": 10.72,
   "distance": 100
  }
 ],
 "id": "overlay_13E3E84D_1E2F_CC65_4183_53E5ED000234",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 31.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC, this.camera_2C0F8294_221A_7A7B_41BD_E7E765C58AB8); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 31.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_097E3D39_1E28_4F7B_419C_AAA79402F196",
   "pitch": -13.5,
   "yaw": -161.11,
   "distance": 100
  }
 ],
 "id": "overlay_0C501458_1E59_FD39_41BA_3CDD512C759F",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 31.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D, this.camera_2C1C92B1_221A_7BBD_417C_AC98F6A5161B); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09799D40_1E28_4F09_4167_1A4D195C6230",
   "pitch": -18,
   "yaw": -116.91,
   "distance": 100
  }
 ],
 "id": "overlay_10673B04_1E28_4DDB_41B1_54631FDA304E",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A69E288_1E28_5519_4159_FAE357B19890",
   "pitch": -25.36,
   "yaw": 161.27,
   "distance": 100
  }
 ],
 "id": "overlay_13A4A706_1E28_45E4_41BA_275458AFC1A8",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_117C46DC_1A61_33DC_41B8_128AABFF085B, this.camera_2C3AC2ED_221A_7BA5_41B8_4E627F0FF9FF); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_097E4D3B_1E28_4F7F_41B8_6A0AC7676733",
   "pitch": -16.36,
   "yaw": 162.91,
   "distance": 100
  }
 ],
 "id": "overlay_13997184_1E28_5CDB_41A1_16D02C31B613",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09796D47_1E28_4F17_41A9_19032BBC80B1",
   "pitch": -18.41,
   "yaw": -9.32,
   "distance": 100
  }
 ],
 "id": "overlay_13FDF120_1E28_DDDB_41A6_8F6C9D62D79A",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8, this.camera_2CD8A328_221A_7AAB_41BA_EB27DCE71A67); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0978AD4C_1E28_4F19_41B1_B8202D86A4DE",
   "pitch": -20.45,
   "yaw": 142.86,
   "distance": 100
  }
 ],
 "id": "overlay_0CE33752_1E58_3B0E_41B3_9695907B43C7",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F, this.camera_2CC8E30A_221A_7A6F_41BC_8530EC9D89CD); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 31.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0F0BC8FE_1E58_D6F6_41B0_43D8B13EE35D",
   "pitch": -12.27,
   "yaw": -151.69,
   "distance": 100
  }
 ],
 "id": "overlay_13F28EF3_1E28_C43C_41BC_341837DCDD52",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 31.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -12.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D, this.camera_2C2AF2CF_221A_7BE5_4195_69B69106A9FE); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0F0E290C_1E58_D71A_4148_1AC421040370",
   "pitch": -21.68,
   "yaw": 163.31,
   "distance": 100
  }
 ],
 "id": "overlay_1399ED45_1E6F_CF0B_41B8_9804186B8696",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09783D52_1E28_4F32_41B3_67993164F9AD",
   "pitch": -26.18,
   "yaw": -30.19,
   "distance": 100
  }
 ],
 "id": "overlay_1041A9C4_1E6F_D709_41BC_868D9BFDCC5B",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A6B9292_1E28_5509_41B6_51884356B797",
   "pitch": -23.73,
   "yaw": 25.45,
   "distance": 100
  }
 ],
 "id": "overlay_13C2105D_1E68_553B_4197_FE89E31E7A36",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -23.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F, this.camera_2CE76348_221A_7AEB_418D_92E2680149A9); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0F0F290F_1E58_D716_41BD_9EA6FC0405EB",
   "pitch": -25.36,
   "yaw": 145.31,
   "distance": 100
  }
 ],
 "id": "overlay_10580D68_1E68_4F1A_41B9_86160165567D",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D, this.camera_2F66439C_221A_7A64_41BF_729DB29E4980); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A6C1296_1E28_5509_41AB_50DC527FA684",
   "pitch": -22.91,
   "yaw": -52.28,
   "distance": 100
  }
 ],
 "id": "overlay_0C6C1B60_1E5B_CB09_4183_AE1FA774BC8C",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "class": "Container",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 66,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "minHeight": 1,
 "visible": false,
 "propagateClick": true
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_09D68FD0_1A61_DA5D_41B7_F6A79867F0DC",
  "this.Image_09DC33CB_1A61_6A4D_41B0_45CFEA661B69",
  "this.Image_09E9134A_1A61_2A4F_41B8_0A6B1D6361EB",
  "this.Image_09D0A5FB_1A63_6E4D_4196_03ED230A3364"
 ],
 "id": "Container_498E74F4_545B_B067_41CC_63589B8419E3",
 "left": 0,
 "class": "Container",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "width": 205,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "minHeight": 1,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "class": "Container",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 110,
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "verticalAlign": "middle",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 110,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "minHeight": 1,
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "class": "Container",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "91.304%",
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "minHeight": 1,
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_097EFD31_1E28_4F0E_4183_1C2452ECC49F",
 "levels": [
  {
   "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_097E3D39_1E28_4F7B_419C_AAA79402F196",
 "levels": [
  {
   "url": "media/panorama_11E177E9_1A21_F1E4_41B8_2C7BA0A8F56F_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_09799D40_1E28_4F09_4167_1A4D195C6230",
 "levels": [
  {
   "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A69E288_1E28_5519_4159_FAE357B19890",
 "levels": [
  {
   "url": "media/panorama_117C46DC_1A61_33DC_41B8_128AABFF085B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_097E4D3B_1E28_4F7F_41B8_6A0AC7676733",
 "levels": [
  {
   "url": "media/panorama_1621995B_1A21_3EDB_41B0_EB54FD02E2C3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_09796D47_1E28_4F17_41A9_19032BBC80B1",
 "levels": [
  {
   "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0978AD4C_1E28_4F19_41B1_B8202D86A4DE",
 "levels": [
  {
   "url": "media/panorama_11108BB9_1A62_F264_41AC_FDF21D1C4C5D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F0BC8FE_1E58_D6F6_41B0_43D8B13EE35D",
 "levels": [
  {
   "url": "media/panorama_11C64883_1AE1_7E2B_41B7_99EDFE38C8FC_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F0E290C_1E58_D71A_4148_1AC421040370",
 "levels": [
  {
   "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_09783D52_1E28_4F32_41B3_67993164F9AD",
 "levels": [
  {
   "url": "media/panorama_11200D50_1A21_7625_41B1_4EFC88D0245E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A6B9292_1E28_5509_41B6_51884356B797",
 "levels": [
  {
   "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F0F290F_1E58_D716_41BD_9EA6FC0405EB",
 "levels": [
  {
   "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A6C1296_1E28_5509_41AB_50DC527FA684",
 "levels": [
  {
   "url": "media/panorama_1137E4B6_1A21_366C_41B7_E1F2CBB954B8_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": 30,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#0089C8"
 ],
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container blue"
 },
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true
},
{
 "cursor": "hand",
 "class": "IconButton",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "minWidth": 1,
 "width": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "paddingRight": 0,
 "maxWidth": 80,
 "mode": "push",
 "maxHeight": 80,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "data": {
  "name": "IconButton arrow"
 },
 "minHeight": 1,
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_09D68FD0_1A61_DA5D_41B7_F6A79867F0DC",
 "left": "6.67%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_09D68FD0_1A61_DA5D_41B7_F6A79867F0DC.png",
 "verticalAlign": "middle",
 "top": "8.78%",
 "width": "23.03%",
 "paddingRight": 0,
 "maxWidth": 1091,
 "maxHeight": 1099,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('http://wa.me/5564981480058', '_blank')",
 "borderRadius": 0,
 "height": "12.272%",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image7298"
 },
 "minHeight": 1,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_09DC33CB_1A61_6A4D_41B0_45CFEA661B69",
 "left": "8.79%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_09DC33CB_1A61_6A4D_41B0_45CFEA661B69.png",
 "verticalAlign": "middle",
 "top": "27.19%",
 "width": "21.212%",
 "paddingRight": 0,
 "maxWidth": 1095,
 "maxHeight": 1095,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://www.instagram.com/areiagoyaz.oficial/', '_blank')",
 "borderRadius": 0,
 "height": "11.94%",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image7251"
 },
 "minHeight": 1,
 "cursor": "hand"
},
{
 "cursor": "hand",
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_09E9134A_1A61_2A4F_41B8_0A6B1D6361EB",
 "left": "2.39%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_09E9134A_1A61_2A4F_41B8_0A6B1D6361EB.png",
 "verticalAlign": "middle",
 "width": "31.818%",
 "bottom": "39.15%",
 "paddingRight": 0,
 "maxWidth": 512,
 "maxHeight": 512,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://maps.app.goo.gl/Q1Cww7hZycKrQjaa6', '_blank')",
 "borderRadius": 0,
 "height": "14.262%",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image7512"
 },
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_09D0A5FB_1A63_6E4D_4196_03ED230A3364",
 "left": "4.55%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_09D0A5FB_1A63_6E4D_4196_03ED230A3364.png",
 "verticalAlign": "middle",
 "width": "23.333%",
 "bottom": "17.42%",
 "paddingRight": 0,
 "maxWidth": 512,
 "maxHeight": 512,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('tel:06499634495', '_blank')",
 "borderRadius": 0,
 "height": "11.443%",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image7465"
 },
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "class": "IconButton",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "minWidth": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "toggle",
 "maxHeight": 60,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "height": 60,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "minHeight": 1,
 "propagateClick": true,
 "cursor": "hand"
}],
 "children": [
  "this.MainViewer",
  "this.Container_54B2586A_750B_85DC_41D9_68368732F926",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E"
 ],
 "class": "Player",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.playAudioList([this.audio_0B688B19_1E38_4B3B_41BA_DED02DC0EA37]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "desktopMipmappingEnabled": false,
 "overflow": "visible",
 "minHeight": 20,
 "paddingLeft": 0,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
