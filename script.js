(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.55,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "002",
 "hfov": 360,
 "overlays": [
  "this.overlay_70779DD7_7D8E_8A57_41B0_7BAE180998F7",
  "this.overlay_734E0099_7D8E_BADB_41D8_0D3B7BBFB44D",
  "this.overlay_A927C895_8368_DB58_41CD_60103D37B01D",
  "this.overlay_AEA7B472_8368_6BD8_4181_6A85637724DE",
  "this.panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_tcap0"
 ],
 "id": "panorama_77253312_7D7B_FFAE_41B1_09F420FC7578",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 48.11,
   "yaw": 108.65,
   "panorama": "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -66.95,
   "yaw": -137.67,
   "panorama": "this.panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "005",
 "hfov": 360,
 "overlays": [
  "this.overlay_6DACAE10_7D97_89AA_41DD_4726EE09EE43",
  "this.overlay_6D4648DA_7D96_8A59_41D9_5F417D9D0E80",
  "this.overlay_A842E3CF_829F_ACC7_41DD_386B3D5FE982",
  "this.overlay_A8BC0C42_829F_FB39_41DD_BBDA1105E604",
  "this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_tcap0"
 ],
 "id": "panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -137.79,
   "yaw": 24.12,
   "panorama": "this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 127.12,
   "yaw": 107.65,
   "panorama": "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 167.69,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A1D7598_851D_5813_41D8_BCF2655A78C2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "008",
 "hfov": 360,
 "overlays": [
  "this.overlay_8EDA470B_8168_D018_41D3_C9E990B37632",
  "this.overlay_914464C8_8168_5018_41BC_D37B7DAB459D",
  "this.overlay_90D3094C_8169_B018_41D8_43241B441DBE",
  "this.overlay_9190587D_8169_F0F8_41C7_FB21A93AF16D",
  "this.overlay_936BA722_8168_B009_41C1_02E08FB9DF8A",
  "this.overlay_905D113A_8168_B079_41CF_6393080F4C02",
  "this.overlay_903829EA_8198_B019_41DA_CB0B06B28176",
  "this.overlay_90462230_8199_D009_41CF_0C0A4A523C5F",
  "this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_tcap0"
 ],
 "id": "panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -67.83,
   "yaw": 89.43,
   "panorama": "this.panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 41.45,
   "yaw": -115.94,
   "panorama": "this.panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 43.96,
   "yaw": -12.31,
   "panorama": "this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F"
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "027",
 "hfov": 360,
 "overlays": [
  "this.overlay_A4F31E47_8398_B7C7_41CE_D6B704721A7C",
  "this.overlay_A49CAC6D_8398_FBC8_41DE_058CC222A880",
  "this.overlay_A630ACE3_8399_D4FF_41D5_3124667A3C37",
  "this.overlay_A6CE33CD_8368_ACCB_41BD_4CB00668EA77",
  "this.overlay_96475C48_852B_6873_41DE_7F200E8B0ED0",
  "this.overlay_914776F6_8525_B81F_41B8_ED60501C8558",
  "this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_tcap0"
 ],
 "id": "panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -122.09,
   "yaw": 67.33,
   "panorama": "this.panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 25.5,
   "yaw": -70.47,
   "panorama": "this.panorama_8A929617_8169_B008_41D4_B1BB387D2CDD",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 14.82,
   "yaw": -1,
   "panorama": "this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 36.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BD024B9_851D_5815_41D1_123FF9FC0F2B",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -158.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99845318_851D_5813_41BE_5317CC37BB39",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "015",
 "hfov": 360,
 "overlays": [
  "this.overlay_9813D437_8298_6B58_41D3_443E8766BB88",
  "this.overlay_993BDB77_8298_DDD8_41DE_72E805778C93",
  "this.panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_tcap0"
 ],
 "id": "panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -125.36,
   "yaw": -83.53,
   "panorama": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "012",
 "hfov": 360,
 "overlays": [
  "this.overlay_931CCA9C_81A9_D038_41D2_F4A44AFCBBC1",
  "this.overlay_955FDE0B_81A8_701F_41D8_B9A530AE610E",
  "this.panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_tcap0"
 ],
 "id": "panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -134.4,
   "yaw": -84.66,
   "panorama": "this.panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -112.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BC344C3_851D_5875_41DB_6242F73B8A3A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -52.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9847735B_851D_5815_41B0_F0DCA3CBDAF9",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "026",
 "hfov": 360,
 "overlays": [
  "this.overlay_A35B246F_8398_6BC7_41D7_9313765C8B4B",
  "this.overlay_A3034EF5_8398_54DB_41D9_D023AFEA4371",
  "this.overlay_A07B8D05_8398_553B_41A7_0022391C95B0",
  "this.overlay_A013F935_8398_5D5B_41DD_C1A97045E371",
  "this.panorama_8A901509_8169_D018_41B2_80398562CF8E_tcap0"
 ],
 "id": "panorama_8A901509_8169_D018_41B2_80398562CF8E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -41.07,
   "yaw": 85.29,
   "panorama": "this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E"
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A97757C_8169_B0F9_41BE_F1769D222827_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "017",
 "hfov": 360,
 "overlays": [
  "this.overlay_989B22BA_8298_AF48_41DC_518D45DC65E2",
  "this.overlay_9F4329EF_829B_FCC8_41C2_BF1720CB068A",
  "this.overlay_99980071_8298_ABD8_41A4_899BAED7C851",
  "this.overlay_9E475680_8299_B738_41B3_9F03063F50B2",
  "this.overlay_9EB3516A_82E9_ADC9_41DC_7116D5919D22",
  "this.overlay_9E2C455A_82E8_D5C9_4198_0E856C091C19",
  "this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_tcap0"
 ],
 "id": "panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 104.26,
   "yaw": -62.05,
   "panorama": "this.panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 14.82,
   "yaw": -143.7,
   "panorama": "this.panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -13.69,
   "yaw": -0.38,
   "panorama": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 42.33,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B6A3479_851D_5815_41A3_ADBBD11DEF30",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 45.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B575456_851D_581F_41C3_7F36ED06D2D0",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 122.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_981C238F_851D_580D_41D5_17B9CEB3F295",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 30.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9AF2F614_851D_5813_41C2_7284386876C5",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "018",
 "hfov": 360,
 "overlays": [
  "this.overlay_99330E57_8297_B7C7_41BF_3EA84A30FFBD",
  "this.overlay_9E7232E5_8298_ECFB_41BE_636A4F759F3A",
  "this.panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_tcap0"
 ],
 "id": "panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -143.7,
   "yaw": 14.82,
   "panorama": "this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_t.jpg"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -75.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A548967E_851D_580F_41DA_1105F50BAD25",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -83.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A4B855A_851D_5817_41D3_160BBE4451F6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -19.85,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BB74524_851D_5832_41CD_C36A8A87DA35",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 39.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B2184AE_851D_580F_41D7_1C192CD1C675",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 49.36,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98C533EB_851D_5836_41DA_41AEDB8777C4",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A909718_8168_5039_41D3_6144A42FFF11_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "031",
 "hfov": 360,
 "overlays": [
  "this.overlay_A62EEC71_8369_BBDB_41DD_3D172A36FDBF",
  "this.overlay_A5C47C95_8368_BB58_4149_4C3C941FFC8F",
  "this.overlay_A7301429_8368_6B4B_41D1_EF57B6DC3E40",
  "this.overlay_A7101F53_836F_F5D8_41C5_D5E58C764D90",
  "this.panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_tcap0"
 ],
 "id": "panorama_8A9680C3_8168_5008_41D7_BF610954DCBA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 128.63,
   "yaw": -57.91,
   "panorama": "this.panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 5.53,
   "yaw": -105.76,
   "panorama": "this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -71.35,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A2175DF_851D_580D_41CB_64E395397AC2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 82.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A558F673_851D_5815_41A1_120B5308DFCF",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_camera",
   "media": "this.panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_camera",
   "media": "this.panorama_77253312_7D7B_FFAE_41B1_09F420FC7578",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_camera",
   "media": "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_camera",
   "media": "this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_camera",
   "media": "this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_camera",
   "media": "this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_camera",
   "media": "this.panorama_771F0294_7D7A_BEA9_4184_B29C074C4714",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_camera",
   "media": "this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_camera",
   "media": "this.panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_camera",
   "media": "this.panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_camera",
   "media": "this.panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_camera",
   "media": "this.panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_camera",
   "media": "this.panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_camera",
   "media": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_camera",
   "media": "this.panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_camera",
   "media": "this.panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_camera",
   "media": "this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_camera",
   "media": "this.panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_camera",
   "media": "this.panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_camera",
   "media": "this.panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_camera",
   "media": "this.panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_camera",
   "media": "this.panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_camera",
   "media": "this.panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_camera",
   "media": "this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827_camera",
   "media": "this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A901509_8169_D018_41B2_80398562CF8E_camera",
   "media": "this.panorama_8A901509_8169_D018_41B2_80398562CF8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_camera",
   "media": "this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_camera",
   "media": "this.panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_camera",
   "media": "this.panorama_8A929617_8169_B008_41D4_B1BB387D2CDD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_camera",
   "media": "this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_camera",
   "media": "this.panorama_8A9680C3_8168_5008_41D7_BF610954DCBA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_camera",
   "media": "this.panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_camera",
   "media": "this.panorama_8A926437_8168_F008_41D2_D6CCDFAF0570",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_camera",
   "media": "this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_8A909718_8168_5039_41D3_6144A42FFF11_camera",
   "media": "this.panorama_8A909718_8168_5039_41D3_6144A42FFF11",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "006",
 "hfov": 360,
 "overlays": [
  "this.overlay_8E7929FB_8178_B3F8_41C0_6CB814FED217",
  "this.overlay_8E9DF0DB_8178_503F_41B9_B632C715B6F4",
  "this.overlay_8E42623B_817F_D07F_41DE_B5E093AF9FAE",
  "this.overlay_913E0BEC_8169_F018_41C4_02AE0F144989",
  "this.overlay_8EBA62C6_8168_D009_41DF_966BD4F3FD6B",
  "this.overlay_91CBB708_8168_5018_41E0_188511617BB9",
  "this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_tcap0"
 ],
 "id": "panorama_77125FF3_7D7A_866E_41D3_CE47580C665C",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -12.31,
   "yaw": 43.96,
   "panorama": "this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 4.02,
   "yaw": 134.78,
   "panorama": "this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 21.61,
   "yaw": -58.16,
   "panorama": "this.panorama_771F0294_7D7A_BEA9_4184_B29C074C4714",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "034",
 "hfov": 360,
 "overlays": [
  "this.overlay_A585B6A4_8378_5778_41DD_AB165E612C94",
  "this.overlay_AAFBC23E_8378_6F49_41D1_CDB01D7FF780",
  "this.overlay_AE9A82D4_8378_ACD8_41DE_50B83D2A1591",
  "this.overlay_AB4B788B_8378_5B48_41D2_1010B84B9482",
  "this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_tcap0"
 ],
 "id": "panorama_8A9651C3_8168_B008_41D1_35265ABE32B4",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 0.88,
   "yaw": -97.1,
   "panorama": "this.panorama_8A926437_8168_F008_41D2_D6CCDFAF0570",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -130.64,
   "yaw": -51.25,
   "panorama": "this.panorama_8A909718_8168_5039_41D3_6144A42FFF11",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 142.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B87C513_851D_5816_41D4_6E7B17790DD0",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "001",
 "hfov": 360,
 "overlays": [
  "this.overlay_700C1DF2_7D8B_8A69_41D4_8F7D589C41A0",
  "this.overlay_711CCE18_7D8B_89DA_41D5_8B8B2B2F070F",
  "this.overlay_A94A7237_8368_6F47_41B0_49DFF5AC8AE7",
  "this.overlay_A91148AC_8368_5B49_41D6_70026EEB6520",
  "this.panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0"
 ],
 "id": "panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -15.95,
   "yaw": -3.39,
   "panorama": "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -137.67,
   "yaw": -66.95,
   "panorama": "this.panorama_77253312_7D7B_FFAE_41B1_09F420FC7578",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -72.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98EF6401_851D_5FF2_41DA_549CDF1667A9",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -90.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B31D4A4_851D_5833_41DB_86EFE7C19857",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 138.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A51A869D_851D_580D_41E0_A37B120CCB6E",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "019",
 "hfov": 360,
 "overlays": [
  "this.overlay_99887AF1_8299_BCDB_41C2_0A168547820F",
  "this.overlay_9C6BBFE1_8299_D4F8_41DC_84DBD5AFBFE6",
  "this.panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_tcap0"
 ],
 "id": "panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -62.05,
   "yaw": 104.26,
   "panorama": "this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -150.48,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99C9E2CA_851D_5876_41C0_966045C125CC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -158.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A3F55B9_851D_5815_41CB_2A252ABFA0FF",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -179.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98D103DE_851D_580F_41A4_421EDC98A9B1",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 143.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9AB69658_851D_5813_41B5_B6524A351D03",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -165.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A578B687_851D_58FD_41E0_1DD15B747999",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "020",
 "hfov": 360,
 "overlays": [
  "this.overlay_9E589833_8298_DB5F_41D9_A4E820BF786A",
  "this.overlay_9F695323_8378_ED78_41D9_8991C5AC747C",
  "this.panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_tcap0"
 ],
 "id": "panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 21.61,
   "yaw": 96.09,
   "panorama": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 42.21,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98501350_851D_5813_41D4_16189B34D9F2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -154.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B0C248E_851D_580F_41D8_69B356A676F3",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "024",
 "hfov": 360,
 "overlays": [
  "this.overlay_9C71E56F_83F9_F5C8_41AA_A6227F7C30FA",
  "this.overlay_A2BFF925_8399_DD78_41D5_D3D42B58F5A1",
  "this.overlay_A3B2BF1C_8398_7548_41CE_D501E06125F9",
  "this.overlay_9D74F549_8398_D5C8_41C6_0FBD289B8F43",
  "this.overlay_A3D5E468_8398_ABC8_41C0_2A224F0AC887",
  "this.overlay_A0C62A7B_8398_FFC8_41DB_A3BD3106F5EC",
  "this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_tcap0"
 ],
 "id": "panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 8.92,
   "yaw": -15.2,
   "panorama": "this.panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 107.02,
   "yaw": -48.49,
   "panorama": "this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 121.09,
   "yaw": 29.52,
   "panorama": "this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -131.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98B1443D_851D_580D_41C7_374FBFB14905",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "029",
 "hfov": 360,
 "overlays": [
  "this.overlay_A156154E_8397_D5C8_41B0_519251D0FB8B",
  "this.overlay_A74FB73B_8397_B548_41D3_4689E9146717",
  "this.panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_tcap0"
 ],
 "id": "panorama_8A929617_8169_B008_41D4_B1BB387D2CDD",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -70.47,
   "yaw": 25.5,
   "panorama": "this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -155.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_983CC3B0_851D_5813_41CF_8C6B7D87066F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -136.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99D7F2B3_851D_5815_419A_92423E322615",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "007",
 "hfov": 360,
 "overlays": [
  "this.overlay_8E20AC5D_8179_F038_41CE_76C7B76D7946",
  "this.overlay_8ECC1148_8177_B019_41C2_5958D7F64A0D",
  "this.panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_tcap0"
 ],
 "id": "panorama_771F0294_7D7A_BEA9_4184_B29C074C4714",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -58.16,
   "yaw": 21.61,
   "panorama": "this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 121.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_987C8364_851D_5833_41AB_F54C18A5ED2E",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 96.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A59954A_851D_5877_41C9_4CC93B93A40E",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -45.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_983303BC_851D_5813_41B8_FF181686AAA4",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -155.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_980933A5_851D_583D_41C0_173ADAAB9C1C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -165.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B3E1499_851D_5815_41C2_89D30FEE4E87",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "011",
 "hfov": 360,
 "overlays": [
  "this.overlay_93BB9B04_81A8_7008_41D4_0B41F906CCF6",
  "this.overlay_94BF311E_81A8_5039_41BE_1B6C4B943999",
  "this.overlay_944FF93C_81A8_F079_41C1_75B329C676DD",
  "this.overlay_92802A89_81A8_B01B_41BC_31DF038F7634",
  "this.panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_tcap0"
 ],
 "id": "panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -115.94,
   "yaw": 41.45,
   "panorama": "this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -84.66,
   "yaw": -134.4,
   "panorama": "this.panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 153.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B484461_851D_5835_41C7_74D8CBC28A19",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "022",
 "hfov": 360,
 "overlays": [
  "this.overlay_9F6DA9E2_8378_5CF9_41A0_71F619AEE844",
  "this.overlay_9C7B3272_8378_AFD8_41DD_90D962425786",
  "this.overlay_9F46C149_8378_EDCB_41D8_E9C90E4E9907",
  "this.overlay_9C3AF45B_8378_6BCF_41C7_E1BDE9F74528",
  "this.panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_tcap0"
 ],
 "id": "panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -8.29,
   "yaw": 122.97,
   "panorama": "this.panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 117.57,
   "yaw": -68.46,
   "panorama": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -138.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99DD92A8_851D_5833_41A2_E9D332DE69FF",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 131.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99AE732F_851D_580D_41AF_A5E4ED063C6C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -33.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99CF52BF_851D_580E_41D6_8824BBDADF2A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "035",
 "hfov": 360,
 "overlays": [
  "this.overlay_AA7F4DBF_8378_D548_41BF_6291CD6F97DE",
  "this.overlay_AA2B0335_8378_AD58_41DD_5FE2F4C8E887",
  "this.overlay_AF1EEDD5_8378_D4D8_41C7_E46A310DE7CE",
  "this.panorama_8A909718_8168_5039_41D3_6144A42FFF11_tcap0"
 ],
 "id": "panorama_8A909718_8168_5039_41D3_6144A42FFF11",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -51.25,
   "yaw": -130.64,
   "panorama": "this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -51.25,
   "yaw": 161.54,
   "panorama": "this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "021",
 "hfov": 360,
 "overlays": [
  "this.overlay_9E0C0726_837B_B579_41D8_CDBE61B5637B",
  "this.overlay_9F3BB4DB_8378_D4C8_41D7_D989A9A009F7",
  "this.panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_tcap0"
 ],
 "id": "panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 122.97,
   "yaw": -8.29,
   "panorama": "this.panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "028",
 "hfov": 360,
 "overlays": [
  "this.overlay_A18E4B52_8398_5DD8_41D2_6D7F6B94C3F2",
  "this.overlay_A762ECCD_8398_D4C8_41D0_58F778070AE9",
  "this.panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_tcap0"
 ],
 "id": "panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 67.33,
   "yaw": -122.09,
   "panorama": "this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "016",
 "hfov": 360,
 "overlays": [
  "this.overlay_9877FC35_8299_DB58_41D5_9C90666F0445",
  "this.overlay_9EFC4778_8298_75CA_41DC_E506F6D687A8",
  "this.panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_tcap0"
 ],
 "id": "panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -26.5,
   "yaw": 160.15,
   "panorama": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "023",
 "hfov": 360,
 "overlays": [
  "this.overlay_9F98E9C6_8378_BD38_41D6_B8050DDA1760",
  "this.overlay_9CDA49BF_837B_BD48_41C3_FA9C7E1899B5",
  "this.overlay_A2233554_8378_D5D8_41AD_161491A09A04",
  "this.overlay_9DEB64E5_83F8_54F8_41D0_3B6B1019858B",
  "this.panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_tcap0"
 ],
 "id": "panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -15.2,
   "yaw": 8.92,
   "panorama": "this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 66.2,
   "yaw": -37.93,
   "panorama": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 175.35,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BA9953A_851D_5816_41D9_3BCCAFB7E542",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -51.37,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_988B2424_851D_5833_41CB_22951B10416A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -111.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9AC30603_851D_5BF5_41D7_11B421D9A1A0",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 128.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99F9A2E1_851D_5832_41D8_245C1E7F4019",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 143.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9AA68668_851D_5833_41AB_A01F3836A28C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -42.33,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_998ED30D_851D_580D_41CA_A41C828E10E2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 128.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99EC22EA_851D_5837_41D3_2EDE18CA18BC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 109.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98DAE3D3_851D_5815_41E0_4D9160093EC7",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 117.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99E2E2F6_851D_581F_41CB_F719153B37A1",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 176.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9AE24624_851D_5833_41C6_BBFB550A39FF",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -174.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98BF442F_851D_580D_41CC_68F55F3DBC21",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 111.54,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A7BA56F_851D_580D_41D9_0F2D776C1889",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -72.35,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A2F65CF_851D_580D_41D5_901FA65A2A57",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -16.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9813239A_851D_5817_41C4_E8764146AE51",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -72.85,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99BB7323_851D_5835_41DD_68D9EB5FD1E9",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -58.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98E5C40D_851D_5FF2_41D4_E5BA56094A17",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 179,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_985AC345_851D_587D_41BD_BC663392CA17",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -57.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BF594DD_851D_580D_41DD_F9F4906A87EB",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -62.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98669384_851D_58F3_41DF_E98F6ECC5457",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "013",
 "hfov": 360,
 "overlays": [
  "this.overlay_928AD8D6_81A8_7008_41D0_C1FC01C4405A",
  "this.overlay_921D394D_81A8_F01B_41DF_AC4FC07B5B14",
  "this.overlay_97318FC9_81AB_D01B_419A_83E27656B6A4",
  "this.overlay_95C8C8A7_81A8_B017_41A2_B04FF1B0673C",
  "this.overlay_948185A7_81A8_D008_41DF_883A5D7FA141",
  "this.panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_tcap0"
 ],
 "id": "panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -62.68,
   "yaw": -149.23,
   "panorama": "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -62.68,
   "yaw": 158.52,
   "panorama": "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 137.67,
   "yaw": -4.65,
   "panorama": "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 164.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BE584ED_851D_580D_41BE_18EE80E14FC7",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 113.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98A54449_851D_5875_41DB_F37708C97312",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 179.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A6D8580_851D_58F3_41CF_17BEBBFC3D6A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 164.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B7B246D_851D_580D_41D7_DF889B441D6C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "014",
 "hfov": 360,
 "overlays": [
  "this.overlay_95E3471F_81A8_7037_41B8_5E36F72A8049",
  "this.overlay_9525D475_81A8_D00B_41D1_A14EBBAFBC08",
  "this.overlay_95EED355_81B8_B008_41DA_9F9BAC021158",
  "this.overlay_942914A0_8198_5009_41CC_697F67B0E846",
  "this.overlay_9404F3D0_8198_5009_41BF_7C5D39B08CD2",
  "this.overlay_9410D58C_819B_F019_41DA_D3E0CEE6DFE9",
  "this.overlay_955BBBAD_8198_7018_41DF_AF9B7590296B",
  "this.overlay_941E13EC_8198_D019_41AE_506D1C3B932B",
  "this.overlay_97DFA2F6_81E8_B009_41DC_D12777ADF4AB",
  "this.overlay_9721E75B_81E8_B03F_41D3_94FD3B4142E4",
  "this.overlay_973098AF_81E8_B017_41D0_8E087DC43471",
  "this.overlay_971C62C5_81F7_B008_41B0_BB67B8DCCEF5",
  "this.overlay_97B61CCE_81F8_7018_41DD_69D2A728C253",
  "this.overlay_9703A5E4_81F8_B008_41D9_78BB2A50C87E",
  "this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_tcap0"
 ],
 "id": "panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -37.93,
   "yaw": 66.2,
   "panorama": "this.panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 160.15,
   "yaw": -26.5,
   "panorama": "this.panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -4.65,
   "yaw": 137.67,
   "panorama": "this.panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -83.53,
   "yaw": -125.36,
   "panorama": "this.panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 96.09,
   "yaw": 21.61,
   "panorama": "this.panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -68.46,
   "yaw": 117.57,
   "panorama": "this.panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -0.38,
   "yaw": -13.69,
   "panorama": "this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "004",
 "hfov": 360,
 "overlays": [
  "this.overlay_72EADB23_7D95_8FEE_41C9_8B758F5D2161",
  "this.overlay_7256A1A9_7D95_9AFA_41B5_8E9F2B5D84C9",
  "this.overlay_722DF1FE_7D96_FA56_41D3_7404D9782CAE",
  "this.overlay_8CE6A942_8178_D008_41DC_1D830ACBFF83",
  "this.overlay_8F79E4D7_8178_5037_41DF_81CB9EECA832",
  "this.overlay_AC264486_8299_EB38_41BC_E027A2ED9A9D",
  "this.overlay_AE370B8A_8298_5D48_41C9_7FE690649B7C",
  "this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_tcap0"
 ],
 "id": "panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 163.92,
   "yaw": 68.21,
   "panorama": "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 24.12,
   "yaw": -137.79,
   "panorama": "this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 24.12,
   "yaw": 143.45,
   "panorama": "this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 134.78,
   "yaw": 4.02,
   "panorama": "this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "030",
 "hfov": 360,
 "overlays": [
  "this.overlay_A65D2455_836B_EBD8_41D7_79C0451C5FE7",
  "this.overlay_A7EC9E24_836B_B745_41DB_96CC40F1AA43",
  "this.overlay_A7D3D2C2_8368_AF38_41DB_798703D28E1D",
  "this.overlay_A773A85E_8368_FBC8_41BF_81C030FE0434",
  "this.overlay_902C1156_853F_B81E_41D4_0F07AE572FB1",
  "this.overlay_936C7C50_853E_E813_41DD_C885BDABAB63",
  "this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_tcap0"
 ],
 "id": "panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 146.09,
   "yaw": -36.93,
   "panorama": "this.panorama_8A926437_8168_F008_41D2_D6CCDFAF0570",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 29.52,
   "yaw": 121.09,
   "panorama": "this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -105.76,
   "yaw": 5.53,
   "panorama": "this.panorama_8A9680C3_8168_5008_41D7_BF610954DCBA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_t.jpg"
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "010",
 "hfov": 360,
 "overlays": [
  "this.overlay_90195315_8198_F008_419B_4983981E5263",
  "this.overlay_93B9F8AE_8198_7019_41C3_9383BC07FB3B",
  "this.panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_tcap0"
 ],
 "id": "panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 107.15,
   "yaw": -140.18,
   "panorama": "this.panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -113.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B942503_851D_59F5_4171_B1456090C19E",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 74.24,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99C172D4_851D_5812_41DE_0A619DB429C9",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 117.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_982723C7_851D_587D_41D9_CB55389DEA36",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -171.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98FBA3F6_851D_581E_41CD_0E42ED1055FC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 112.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9922729D_851D_580D_41C6_5DDA4420F3D7",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 117.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99983301_851D_59F5_41DD_DAC93BC08C03",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -94.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99A7933B_851D_5815_41D2_F1279899FA5A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A901509_8169_D018_41B2_80398562CF8E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -175.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A0D75A8_851D_5833_41D1_2B48F4A523E6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "003",
 "hfov": 360,
 "overlays": [
  "this.overlay_73FDFBF7_7D8F_8E57_41D5_C6644A4B3E5F",
  "this.overlay_734F255A_7D8E_9A59_41B7_5524BDBF6CED",
  "this.overlay_72EE4A79_7D8D_8E5A_41D6_407DC4DA4E56",
  "this.overlay_6D896540_7D8B_FBA9_41DC_94EF3FB8C83D",
  "this.overlay_6D127D82_7D8B_8AAE_41D1_B99F1905795B",
  "this.overlay_6D3D049E_7D95_FAD6_41D9_427BB529862F",
  "this.overlay_9B126B25_8169_BD78_41DA_BDCD3C344C27",
  "this.overlay_9DDDD1D9_8168_ECCB_41D3_8450457CCB9B",
  "this.overlay_9DB7FA2F_8168_FF48_41DF_FDCE022D0F4D",
  "this.overlay_984C6800_8168_DB38_41D2_BC5D944268B4",
  "this.overlay_98317F46_8298_5538_41B5_E0541819AB8E",
  "this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_tcap0"
 ],
 "id": "panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 107.65,
   "yaw": 127.12,
   "panorama": "this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 108.65,
   "yaw": 48.11,
   "panorama": "this.panorama_77253312_7D7B_FFAE_41B1_09F420FC7578",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 68.21,
   "yaw": 163.92,
   "panorama": "this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 68.21,
   "yaw": -160.91,
   "panorama": "this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.23,
   "yaw": -62.68,
   "panorama": "this.panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -3.39,
   "yaw": -15.95,
   "panorama": "this.panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 166.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A56AE693_851D_5815_41D0_AA763D013250",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 95.34,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A844648_851D_5872_41B5_5E345BF72A73",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "032",
 "hfov": 360,
 "overlays": [
  "this.overlay_A7687A95_8369_FF5B_41C7_F1899E466B9F",
  "this.overlay_A53DE1A7_8368_6D78_41D2_5FAD89CBD6EF",
  "this.panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_tcap0"
 ],
 "id": "panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -57.91,
   "yaw": 128.63,
   "panorama": "this.panorama_8A9680C3_8168_5008_41D7_BF610954DCBA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "033",
 "hfov": 360,
 "overlays": [
  "this.overlay_A9A6C756_8379_B5D9_41BE_FF4313A91737",
  "this.overlay_AEB97B5C_8379_DDC8_41D8_729D933E4FF2",
  "this.overlay_AA79EACD_8378_DCCB_41CF_A9F98C5B9BA0",
  "this.overlay_AB8F44ED_8378_B4C8_41C4_48EC4518BE10",
  "this.overlay_AA94F67E_837B_D7C8_41CB_91EEF5C51A20",
  "this.panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_tcap0"
 ],
 "id": "panorama_8A926437_8168_F008_41D2_D6CCDFAF0570",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -36.93,
   "yaw": 146.09,
   "panorama": "this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -36.93,
   "yaw": -155.88,
   "panorama": "this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -97.1,
   "yaw": 0.88,
   "panorama": "this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 64.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A949639_851D_5815_41AF_777CA00663D6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 171.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9873E370_851D_5813_41DB_0DC9BCB96100",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "009",
 "hfov": 360,
 "overlays": [
  "this.overlay_90DAC027_8198_5017_41D5_AB58C81E27B9",
  "this.overlay_90378D00_819B_D008_41A8_81F6BFAF62D4",
  "this.overlay_93C33366_8198_5009_41D8_F71B9D8FC7A0",
  "this.overlay_93351E0B_8198_7018_41C9_CF0A448F730F",
  "this.panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_tcap0"
 ],
 "id": "panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 89.43,
   "yaw": -67.83,
   "panorama": "this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -140.18,
   "yaw": 107.15,
   "panorama": "this.panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 57.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9B1C1484_851D_58F3_41C1_EB49A0BBB26F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "rowCount": 6,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_t.jpg"
  }
 ],
 "hfovMin": "105%",
 "class": "Panorama",
 "label": "025",
 "hfov": 360,
 "overlays": [
  "this.overlay_A25A0154_8398_6DD8_41C8_F20D7EEBF891",
  "this.overlay_A3B0D180_8398_AD38_41A7_9B122ED4F83C",
  "this.overlay_A23B491F_8399_FD47_41D9_6A62D4F0CF8E",
  "this.overlay_A36A1636_8398_5758_41D7_2056F46AB954",
  "this.overlay_A0ADDB46_839F_BD39_41DB_8374363077AF",
  "this.overlay_A30C04CF_839F_D4C8_41DA_C5F8407B21CC",
  "this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827_tcap0"
 ],
 "id": "panorama_8A97757C_8169_B0F9_41BE_F1769D222827",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -48.49,
   "yaw": 107.02,
   "panorama": "this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 85.29,
   "yaw": -41.07,
   "panorama": "this.panorama_8A901509_8169_D018_41B2_80398562CF8E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -1,
   "yaw": 14.82,
   "panorama": "this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 110,
 "partial": false,
 "thumbnailUrl": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": -111.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9AD125EF_851D_580D_41D6_BB3AF2E82900",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 110,
  "yaw": 54.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_98995417_851D_581D_41C5_24529198FAA6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 641,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 330,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "shadow": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26, this.camera_98B1443D_851D_580D_41C7_374FBFB14905); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.65,
   "hfov": 113.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 135
     }
    ]
   },
   "pitch": 3.13
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_70779DD7_7D8E_8A57_41B0_7BAE180998F7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366, this.camera_98A54449_851D_5875_41DB_F37708C97312); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.67,
   "hfov": 109.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0_HS_1_1_0_map.gif",
      "width": 122,
      "height": 200
     }
    ]
   },
   "pitch": -17.06
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_734E0099_7D8E_BADB_41D8_0D3B7BBFB44D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.67,
   "hfov": 3.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.57
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AFCE9653_8369_D7D8_41DF_A43CD9D42FEF",
   "yaw": 110.67,
   "pitch": -9.57,
   "distance": 100,
   "hfov": 3.39
  }
 ],
 "id": "overlay_A927C895_8368_DB58_41CD_60103D37B01D",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.84,
   "hfov": 5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.78
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AFCEA653_8369_D7D8_41AC_FEE066200BA4",
   "yaw": -147.84,
   "pitch": -2.78,
   "distance": 100,
   "hfov": 5.81
  }
 ],
 "id": "overlay_AEA7B472_8368_6BD8_4181_6A85637724DE",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3, this.camera_98501350_851D_5813_41D4_16189B34D9F2); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6DACAE10_7D97_89AA_41DD_4726EE09EE43",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26, this.camera_9847735B_851D_5815_41B0_F0DCA3CBDAF9); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.65,
   "hfov": 78.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_1_1_6_map.gif",
      "width": 158,
      "height": 200
     }
    ]
   },
   "pitch": -3.43
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6D4648DA_7D96_8A59_41D9_5F417D9D0E80",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.38,
   "hfov": 3.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.82
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B244D747_8298_B5C7_41D6_BD57D6C70CC8",
   "yaw": 114.38,
   "pitch": -12.82,
   "distance": 100,
   "hfov": 3.14
  }
 ],
 "id": "overlay_A842E3CF_829F_ACC7_41DD_386B3D5FE982",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.37,
   "hfov": 3.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.62
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B2442747_8298_B5C7_41B1_CA56781955F9",
   "yaw": 45.37,
   "pitch": -17.62,
   "distance": 100,
   "hfov": 3.52
  }
 ],
 "id": "overlay_A8BC0C42_829F_FB39_41DD_BBDA1105E604",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD, this.camera_9922729D_851D_580D_41C6_5DDA4420F3D7); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.43,
   "hfov": 62.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0_HS_0_1_0_map.gif",
      "width": 92,
      "height": 200
     }
    ]
   },
   "pitch": -7.4
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_8EDA470B_8168_D018_41D3_C9E990B37632",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C, this.camera_99D7F2B3_851D_5815_419A_92423E322615); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.31,
   "hfov": 30.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0_HS_1_1_0_map.gif",
      "width": 108,
      "height": 200
     }
    ]
   },
   "pitch": -6.24
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_914464C8_8168_5018_41BC_D37B7DAB459D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.93,
   "hfov": 6.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.47
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9C811B5B_81E8_5038_41B4_9C3BAC5FC00D",
   "yaw": 87.93,
   "pitch": 6.47,
   "distance": 100,
   "hfov": 6.24
  }
 ],
 "id": "overlay_90D3094C_8169_B018_41D8_43241B441DBE",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.58,
   "hfov": 4.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.31
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CFEBB5C_81E8_5038_4145_E81FC85B0D64",
   "yaw": -16.58,
   "pitch": -0.31,
   "distance": 100,
   "hfov": 4.77
  }
 ],
 "id": "overlay_9190587D_8169_F0F8_41C7_FB21A93AF16D",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB, this.camera_99DD92A8_851D_5833_41A2_E9D332DE69FF); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.94,
   "hfov": 16.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0_HS_4_1_0_map.gif",
      "width": 29,
      "height": 200
     }
    ]
   },
   "pitch": 0.31
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_936BA722_8168_B009_41C1_02E08FB9DF8A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.88,
   "hfov": 3.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.35
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CFE1B5C_81E8_5038_41BF_80DC3A24990A",
   "yaw": -96.88,
   "pitch": 1.35,
   "distance": 100,
   "hfov": 3.45
  }
 ],
 "id": "overlay_905D113A_8168_B079_41CF_6393080F4C02",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.33,
   "hfov": 26.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_0_HS_6_1_0_map.gif",
      "width": 88,
      "height": 200
     }
    ]
   },
   "pitch": 3.63
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_903829EA_8198_B019_41DA_CB0B06B28176",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.96,
   "hfov": 3.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.35
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CFF9B5D_81E8_5038_41C3_ADEB48919AF0",
   "yaw": -113.96,
   "pitch": 1.35,
   "distance": 100,
   "hfov": 3.45
  }
 ],
 "id": "overlay_90462230_8199_D009_41CF_0C0A4A523C5F",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212, this.camera_9B1C1484_851D_58F3_41C1_EB49A0BBB26F); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A4F31E47_8398_B7C7_41CE_D6B704721A7C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A929617_8169_B008_41D4_B1BB387D2CDD, this.camera_9B0C248E_851D_580F_41D8_69B356A676F3); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.47,
   "hfov": 98.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_1_1_6_map.gif",
      "width": 110,
      "height": 200
     }
    ]
   },
   "pitch": -11.77
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A49CAC6D_8398_FBC8_41DE_058CC222A880",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.53,
   "hfov": 7.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.32
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7868E8_8368_5CCD_41DE_864C6E36212C",
   "yaw": 58.53,
   "pitch": 0.32,
   "distance": 100,
   "hfov": 7.28
  }
 ],
 "id": "overlay_A630ACE3_8399_D4FF_41D5_3124667A3C37",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.57,
   "hfov": 7.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.08
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -65.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_3_0.png",
      "width": 165,
      "height": 159
     }
    ]
   },
   "pitch": 4.08,
   "hfov": 7.26
  }
 ],
 "id": "overlay_A6CE33CD_8368_ACCB_41BD_4CB00668EA77",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827, this.camera_9B3E1499_851D_5815_41C2_89D30FEE4E87); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1,
   "hfov": 63.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_4_1_6_map.gif",
      "width": 113,
      "height": 200
     }
    ]
   },
   "pitch": -9
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_96475C48_852B_6873_41DE_7F200E8B0ED0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.74,
   "hfov": 4.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.92
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_91B88A32_8526_A816_41DD_73159A1D74D8",
   "yaw": 5.74,
   "pitch": -2.92,
   "distance": 100,
   "hfov": 4.2
  }
 ],
 "id": "overlay_914776F6_8525_B81F_41B8_ED60501C8558",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F, this.camera_98995417_851D_581D_41C5_24529198FAA6); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.53,
   "hfov": 36.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0_HS_0_1_0_map.gif",
      "width": 104,
      "height": 200
     }
    ]
   },
   "pitch": -10.87
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9813D437_8298_6B58_41D3_443E8766BB88",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.79,
   "hfov": 4.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.08
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8C58D1_8368_5CD8_41B1_A698902074B7",
   "yaw": -85.79,
   "pitch": -4.08,
   "distance": 100,
   "hfov": 4.51
  }
 ],
 "id": "overlay_993BDB77_8298_DDD8_41DE_72E805778C93",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB, this.camera_9B575456_851D_581F_41C3_7F36ED06D2D0); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.66,
   "hfov": 73.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_0_HS_0_1_0_map.gif",
      "width": 130,
      "height": 200
     }
    ]
   },
   "pitch": -17.89
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_931CCA9C_81A9_D038_41D2_F4A44AFCBBC1",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.04,
   "hfov": 7.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.73
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -85.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_1_HS_1_0.png",
      "width": 171,
      "height": 171
     }
    ]
   },
   "pitch": -7.73,
   "hfov": 7.47
  }
 ],
 "id": "overlay_955FDE0B_81A8_701F_41D8_B9A530AE610E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827, this.camera_A51A869D_851D_580D_41E0_A37B120CCB6E); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.29,
   "hfov": 44.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0_HS_0_1_0_map.gif",
      "width": 116,
      "height": 200
     }
    ]
   },
   "pitch": -6.59
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A35B246F_8398_6BC7_41D7_9313765C8B4B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.66,
   "hfov": 39.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0_HS_1_1_0_map.gif",
      "width": 131,
      "height": 200
     }
    ]
   },
   "pitch": -1.57
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A3034EF5_8398_54DB_41D9_D023AFEA4371",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.69,
   "hfov": 3.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.99
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7AB8E7_8368_5CF8_41DA_616748ACFF21",
   "yaw": 94.69,
   "pitch": -4.99,
   "distance": 100,
   "hfov": 3.21
  }
 ],
 "id": "overlay_A07B8D05_8398_553B_41A7_0022391C95B0",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.66,
   "hfov": 3.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.59
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7B68E7_8368_5CF8_41CF_7D567AA003A6",
   "yaw": 33.66,
   "pitch": -3.59,
   "distance": 100,
   "hfov": 3.26
  }
 ],
 "id": "overlay_A013F935_8398_5D5B_41DD_C1A97045E371",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A901509_8169_D018_41B2_80398562CF8E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F, this.camera_A56AE693_851D_5815_41D0_AA763D013250); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.38,
   "hfov": 72.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_0_1_0_map.gif",
      "width": 100,
      "height": 200
     }
    ]
   },
   "pitch": -11.25
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_989B22BA_8298_AF48_41DC_518D45DC65E2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.13,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.97
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8D48D7_8368_5CD8_419A_6FE6DEFFECD7",
   "yaw": -0.13,
   "pitch": 6.97,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "id": "overlay_9F4329EF_829B_FCC8_41C2_BF1720CB068A",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689, this.camera_A548967E_851D_580F_41DA_1105F50BAD25); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.05,
   "hfov": 42.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_2_1_0_map.gif",
      "width": 87,
      "height": 200
     }
    ]
   },
   "pitch": -14.76
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_99980071_8298_ABD8_41A4_899BAED7C851",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.41,
   "hfov": 7.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.2
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -58.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_3_0.png",
      "width": 171,
      "height": 171
     }
    ]
   },
   "pitch": -3.2,
   "hfov": 7.52
  }
 ],
 "id": "overlay_9E475680_8299_B738_41B3_9F03063F50B2",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743, this.camera_A578B687_851D_58FD_41E0_1DD15B747999); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.7,
   "hfov": 91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_4_1_0_map.gif",
      "width": 113,
      "height": 200
     }
    ]
   },
   "pitch": -14.57
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9EB3516A_82E9_ADC9_41DC_7116D5919D22",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.51,
   "hfov": 3.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.88
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8258D8_8368_5CC8_41BB_CAA274B36A30",
   "yaw": -164.51,
   "pitch": -17.88,
   "distance": 100,
   "hfov": 3.86
  }
 ],
 "id": "overlay_9E2C455A_82E8_D5C9_4198_0E856C091C19",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA, this.camera_9BD024B9_851D_5815_41D1_123FF9FC0F2B); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.82,
   "hfov": 64.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0_HS_0_1_0_map.gif",
      "width": 104,
      "height": 200
     }
    ]
   },
   "pitch": -3.73
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_99330E57_8297_B7C7_41BF_3EA84A30FFBD",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.05,
   "hfov": 3.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.54
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF82B8D8_8368_5CC8_41C5_9C7C781B15AA",
   "yaw": 20.05,
   "pitch": -6.54,
   "distance": 100,
   "hfov": 3.88
  }
 ],
 "id": "overlay_9E7232E5_8298_ECFB_41BE_636A4F759F3A",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40, this.camera_98BF442F_851D_580D_41CC_68F55F3DBC21); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0_HS_0_1_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0_HS_0_2_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0_HS_0_3_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A62EEC71_8369_BBDB_41DD_3D172A36FDBF",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.54,
   "hfov": 5.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.85
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7F38EE_8368_5CC8_41C3_538EE6291B3B",
   "yaw": -104.54,
   "pitch": 9.85,
   "distance": 100,
   "hfov": 5.51
  }
 ],
 "id": "overlay_A5C47C95_8368_BB58_4149_4C3C941FFC8F",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8, this.camera_988B2424_851D_5833_41CB_22951B10416A); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.91,
   "hfov": 27.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0_HS_2_1_6_map.gif",
      "width": 65,
      "height": 200
     }
    ]
   },
   "pitch": -6.34
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A7301429_8368_6B4B_41D1_EF57B6DC3E40",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.05,
   "hfov": 5.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 7.2
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -56.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0_HS_3_0.png",
      "width": 119,
      "height": 130
     }
    ]
   },
   "pitch": 7.2,
   "hfov": 5.21
  }
 ],
 "id": "overlay_A7101F53_836F_F5D8_41C5_D5E58C764D90",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771F0294_7D7A_BEA9_4184_B29C074C4714, this.camera_9A3F55B9_851D_5815_41CB_2A252ABFA0FF); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_8E7929FB_8178_B3F8_41C0_6CB814FED217",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.71,
   "hfov": 3.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_1_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.68
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9C834B53_81E8_500F_41C2_5F1DD18C33A4",
   "yaw": -87.71,
   "pitch": -5.68,
   "distance": 100,
   "hfov": 3.68
  }
 ],
 "id": "overlay_8E9DF0DB_8178_503F_41B9_B632C715B6F4",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3, this.camera_9A0D75A8_851D_5833_41D1_2B48F4A523E6); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_2_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_2_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_8E42623B_817F_D07F_41DE_B5E093AF9FAE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.18,
   "hfov": 6.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_1_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.2
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9C80EB59_81E8_5038_41D4_8A65B14495EA",
   "yaw": 117.18,
   "pitch": 3.2,
   "distance": 100,
   "hfov": 6.52
  }
 ],
 "id": "overlay_913E0BEC_8169_F018_41C4_02AE0F144989",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E, this.camera_9A1D7598_851D_5813_41D8_BCF2655A78C2); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.96,
   "hfov": 15.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_0_HS_4_1_6_map.gif",
      "width": 99,
      "height": 200
     }
    ]
   },
   "pitch": -7.22
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_8EBA62C6_8168_D009_41DF_966BD4F3FD6B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.02,
   "hfov": 3.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_1_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.68
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9C805B5A_81E8_5038_41B9_72A5E6BB7C3A",
   "yaw": 43.02,
   "pitch": -4.68,
   "distance": 100,
   "hfov": 3.22
  }
 ],
 "id": "overlay_91CBB708_8168_5018_41E0_188511617BB9",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A926437_8168_F008_41D2_D6CCDFAF0570, this.camera_98D103DE_851D_580F_41A4_421EDC98A9B1); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0_HS_0_1_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0_HS_0_2_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0_HS_0_3_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A585B6A4_8378_5778_41DD_AB165E612C94",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A909718_8168_5039_41D3_6144A42FFF11, this.camera_98C533EB_851D_5836_41DA_41AEDB8777C4); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.25,
   "hfov": 57.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0_HS_1_1_6_map.gif",
      "width": 89,
      "height": 200
     }
    ]
   },
   "pitch": -0.44
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_AAFBC23E_8378_6F49_41D1_CDB01D7FF780",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.7,
   "hfov": 5.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.95
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7378F6_8368_5CD8_41E0_1AEC7D9A3855",
   "yaw": -103.7,
   "pitch": -1.95,
   "distance": 100,
   "hfov": 5.71
  }
 ],
 "id": "overlay_AE9A82D4_8378_ACD8_41DE_50B83D2A1591",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.32,
   "hfov": 5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.19
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7348F6_8368_5CC5_41CE_5703BF2CBFE9",
   "yaw": -52.32,
   "pitch": 1.19,
   "distance": 100,
   "hfov": 5.02
  }
 ],
 "id": "overlay_AB4B788B_8378_5B48_41D2_1010B84B9482",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77253312_7D7B_FFAE_41B1_09F420FC7578, this.camera_9B6A3479_851D_5815_41A3_ADBBD11DEF30); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.95,
   "hfov": 56.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0_HS_0_1_0_map.gif",
      "width": 129,
      "height": 200
     }
    ]
   },
   "pitch": -1.67
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_700C1DF2_7D8B_8A69_41D4_8F7D589C41A0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26, this.camera_9B7B246D_851D_580D_41D7_DF889B441D6C); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.39,
   "hfov": 64.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 196
     }
    ]
   },
   "pitch": 1.57
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_711CCE18_7D8B_89DA_41D5_8B8B2B2F070F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.62,
   "hfov": 2.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.95
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AFCF9652_8369_D7D8_41C1_1EFF31866E7F",
   "yaw": -66.62,
   "pitch": -4.95,
   "distance": 100,
   "hfov": 2.67
  }
 ],
 "id": "overlay_A94A7237_8368_6F47_41B0_49DFF5AC8AE7",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.5,
   "hfov": 2.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.46
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AFCFF652_8369_D7D8_41DE_D211BF4A9540",
   "yaw": -0.5,
   "pitch": -6.46,
   "distance": 100,
   "hfov": 2.66
  }
 ],
 "id": "overlay_A91148AC_8368_5B49_41D6_70026EEB6520",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA, this.camera_982723C7_851D_587D_41D9_CB55389DEA36); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_99887AF1_8299_BCDB_41C2_0A168547820F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103,
   "hfov": 8.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0_HS_1_0_6_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.82
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 103,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_0_HS_1_0.png",
      "width": 200,
      "height": 188
     }
    ]
   },
   "pitch": -1.82,
   "hfov": 8.79
  }
 ],
 "id": "overlay_9C6BBFE1_8299_D4F8_41DC_84DBD5AFBFE6",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6D8DCC61_7D9E_8A6B_41AB_B2377B4FF689_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F, this.camera_99845318_851D_5813_41BE_5317CC37BB39); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.09,
   "hfov": 45.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0_HS_0_1_0_map.gif",
      "width": 107,
      "height": 200
     }
    ]
   },
   "pitch": -8.12
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9E589833_8298_DB5F_41D9_A4E820BF786A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.61,
   "hfov": 5.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.33
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF83A8D9_8368_5CC8_41A6_56DD9D03113C",
   "yaw": 99.61,
   "pitch": 3.33,
   "distance": 100,
   "hfov": 5.51
  }
 ],
 "id": "overlay_9F695323_8378_ED78_41D9_8991C5AC747C",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1, this.camera_98FBA3F6_851D_581E_41CD_0E42ED1055FC); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.2,
   "hfov": 35.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_0_1_0_map.gif",
      "width": 77,
      "height": 200
     }
    ]
   },
   "pitch": -0.38
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9C71E56F_83F9_F5C8_41AA_A6227F7C30FA",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.42,
   "hfov": 8.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_1_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -5.31
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8688DF_8368_5CC8_41DC_2CF755BC15BB",
   "yaw": -8.42,
   "pitch": -5.31,
   "distance": 100,
   "hfov": 8.13
  }
 ],
 "id": "overlay_A2BFF925_8399_DD78_41D5_D3D42B58F5A1",
 "data": {
  "label": "Arrow 01a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A97757C_8169_B0F9_41BE_F1769D222827, this.camera_98EF6401_851D_5FF2_41DA_549CDF1667A9); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.49,
   "hfov": 34.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_2_1_0_map.gif",
      "width": 89,
      "height": 200
     }
    ]
   },
   "pitch": -13.38
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A3B2BF1C_8398_7548_41CE_D501E06125F9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40, this.camera_98E5C40D_851D_5FF2_41D4_E5BA56094A17); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.52,
   "hfov": 18.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_3_1_0_map.gif",
      "width": 41,
      "height": 200
     }
    ]
   },
   "pitch": -1.57
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9D74F549_8398_D5C8_41C6_0FBD289B8F43",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.98,
   "hfov": 6.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.46
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8788E0_8368_5CF8_41C0_E148A839E0EB",
   "yaw": -46.98,
   "pitch": -5.46,
   "distance": 100,
   "hfov": 6.25
  }
 ],
 "id": "overlay_A3D5E468_8398_ABC8_41C0_2A224F0AC887",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.13,
   "hfov": 4.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.06
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8458E0_8368_5CF8_41D1_DFA26A764819",
   "yaw": 33.13,
   "pitch": -6.06,
   "distance": 100,
   "hfov": 4.68
  }
 ],
 "id": "overlay_A0C62A7B_8398_FFC8_41DB_A3BD3106F5EC",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E, this.camera_98DAE3D3_851D_5815_41E0_4D9160093EC7); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.5,
   "hfov": 19.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0_HS_0_1_0_map.gif",
      "width": 54,
      "height": 200
     }
    ]
   },
   "pitch": -12.75
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A156154E_8397_D5C8_41B0_519251D0FB8B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.17,
   "hfov": 3.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -7.06
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 27.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_0_HS_1_0.png",
      "width": 87,
      "height": 110
     }
    ]
   },
   "pitch": -7.06,
   "hfov": 3.82
  }
 ],
 "id": "overlay_A74FB73B_8397_B548_41D3_4689E9146717",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A929617_8169_B008_41D4_B1BB387D2CDD_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C, this.camera_987C8364_851D_5833_41AB_F54C18A5ED2E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_8E20AC5D_8179_F038_41CE_76C7B76D7946",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.33,
   "hfov": 4.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_1_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.92
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9C81DB5A_81E8_5038_41DF_A4F3D1087F5D",
   "yaw": 63.33,
   "pitch": -5.92,
   "distance": 100,
   "hfov": 4.18
  }
 ],
 "id": "overlay_8ECC1148_8177_B019_41C2_5958D7F64A0D",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E, this.camera_9A949639_851D_5815_41AF_777CA00663D6); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.45,
   "hfov": 29.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0_HS_0_1_0_map.gif",
      "width": 51,
      "height": 200
     }
    ]
   },
   "pitch": -3.83
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_93BB9B04_81A8_7008_41D4_0B41F906CCF6",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.07,
   "hfov": 4.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.94
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CFDBB5E_81E8_5038_41BB_EC6D27DE4C6E",
   "yaw": 47.07,
   "pitch": -6.94,
   "distance": 100,
   "hfov": 4.92
  }
 ],
 "id": "overlay_94BF311E_81A8_5039_41BE_1B6C4B943999",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8AA741_7D9D_87AA_41C9_7713B1EA608E, this.camera_9A844648_851D_5872_41B5_5E345BF72A73); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0_HS_2_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0_HS_2_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_0_HS_2_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_944FF93C_81A8_F079_41C1_75B329C676DD",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.66,
   "hfov": 6.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_1_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.86
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CFD3B5F_81E8_5038_41D8_223A6A7BC5F8",
   "yaw": -109.66,
   "pitch": -10.86,
   "distance": 100,
   "hfov": 6.9
  }
 ],
 "id": "overlay_92802A89_81A8_B01B_41BC_31DF038F7634",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F, this.camera_98669384_851D_58F3_41DF_E98F6ECC5457); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.46,
   "hfov": 33.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0_HS_0_1_0_map.gif",
      "width": 111,
      "height": 200
     }
    ]
   },
   "pitch": -7.92
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9F6DA9E2_8378_5CF9_41A0_71F619AEE844",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.12,
   "hfov": 3.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.01
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF80A8DE_8368_5CC8_41CB_783CFA441A79",
   "yaw": -70.12,
   "pitch": -0.01,
   "distance": 100,
   "hfov": 3.72
  }
 ],
 "id": "overlay_9C7B3272_8378_AFD8_41DD_90D962425786",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711, this.camera_9873E370_851D_5813_41DB_0DC9BCB96100); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.97,
   "hfov": 16.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0_HS_2_1_0_map.gif",
      "width": 115,
      "height": 200
     }
    ]
   },
   "pitch": -3.71
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9F46C149_8378_EDCB_41D8_E9C90E4E9907",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.44,
   "hfov": 2.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.26
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 122.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0_HS_3_0.png",
      "width": 57,
      "height": 57
     }
    ]
   },
   "pitch": -0.26,
   "hfov": 2.51
  }
 ],
 "id": "overlay_9C3AF45B_8378_6BCF_41C7_E1BDE9F74528",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4, this.camera_99F9A2E1_851D_5832_41D8_245C1E7F4019); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_AA7F4DBF_8378_D548_41BF_6291CD6F97DE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4, this.camera_99EC22EA_851D_5837_41D3_2EDE18CA18BC); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_1_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_1_2_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_1_3_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_AA2B0335_8378_AD58_41DD_5FE2F4C8E887",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.54,
   "hfov": 6.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.82
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF72C8FC_8368_5CC8_41AC_2833828A2A20",
   "yaw": -135.54,
   "pitch": 0.82,
   "distance": 100,
   "hfov": 6.53
  }
 ],
 "id": "overlay_AF1EEDD5_8378_D4D8_41C7_E46A310DE7CE",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A909718_8168_5039_41D3_6144A42FFF11_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD, this.camera_9BF594DD_851D_580D_41DD_F9F4906A87EB); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.29,
   "hfov": 57.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0_HS_0_1_0_map.gif",
      "width": 106,
      "height": 200
     }
    ]
   },
   "pitch": -17.11
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9E0C0726_837B_B579_41D8_CDBE61B5637B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.43,
   "hfov": 7.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_0_HS_1_0.png",
      "width": 171,
      "height": 171
     }
    ]
   },
   "pitch": -2.7,
   "hfov": 7.53
  }
 ],
 "id": "overlay_9F3BB4DB_8378_D4C8_41D7_D989A9A009F7",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A9B6632_8168_B009_41D5_7A5AFAED0711_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E, this.camera_9BC344C3_851D_5875_41DB_6242F73B8A3A); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.09,
   "hfov": 27.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0_HS_0_1_0_map.gif",
      "width": 62,
      "height": 200
     }
    ]
   },
   "pitch": -18.65
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A18E4B52_8398_5DD8_41D2_6D7F6B94C3F2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.72,
   "hfov": 3.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.27
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF78B8ED_8368_5CC8_41D5_0AA526F2D399",
   "yaw": -121.72,
   "pitch": -7.27,
   "distance": 100,
   "hfov": 3.98
  }
 ],
 "id": "overlay_A762ECCD_8398_D4C8_41D0_58F778070AE9",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F, this.camera_9B484461_851D_5835_41C7_74D8CBC28A19); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.15,
   "hfov": 38.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0_HS_0_1_0_map.gif",
      "width": 88,
      "height": 200
     }
    ]
   },
   "pitch": -22.67
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9877FC35_8299_DB58_41D5_9C90666F0445",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.52,
   "hfov": 5.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.12
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8CC8D1_8368_5CD8_41DF_A1BFF34F7787",
   "yaw": 159.52,
   "pitch": -13.12,
   "distance": 100,
   "hfov": 5.13
  }
 ],
 "id": "overlay_9EFC4778_8298_75CA_41DC_E506F6D687A8",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F, this.camera_9B942503_851D_59F5_4171_B1456090C19E); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.93,
   "hfov": 75.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0_HS_0_1_0_map.gif",
      "width": 140,
      "height": 200
     }
    ]
   },
   "pitch": -6.15
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9F98E9C6_8378_BD38_41D6_B8050DDA1760",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.34,
   "hfov": 10.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -33.73
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF81B8DF_8368_5CC8_41C4_BFF3AD8F72C4",
   "yaw": -44.34,
   "pitch": -33.73,
   "distance": 50,
   "hfov": 10.03
  }
 ],
 "id": "overlay_9CDA49BF_837B_BD48_41C3_FA9C7E1899B5",
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B, this.camera_9BE584ED_851D_580D_41BE_18EE80E14FC7); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.92,
   "hfov": 55.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0_HS_2_1_0_map.gif",
      "width": 159,
      "height": 200
     }
    ]
   },
   "pitch": -26.75
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A2233554_8378_D5D8_41AD_161491A09A04",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.22,
   "hfov": 10,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -47.04
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8618DF_8368_5CC8_41A9_7F8C71F608F6",
   "yaw": 9.22,
   "pitch": -47.04,
   "distance": 100,
   "hfov": 10
  }
 ],
 "id": "overlay_9DEB64E5_83F8_54F8_41D0_3B6B1019858B",
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26, this.camera_99E2E2F6_851D_581F_41CB_F719153B37A1); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_928AD8D6_81A8_7008_41D0_C1FC01C4405A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26, this.camera_99983301_851D_59F5_41DD_DAC93BC08C03); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0_HS_1_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0_HS_1_2_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0_HS_1_3_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_921D394D_81A8_F01B_41DF_AC4FC07B5B14",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F, this.camera_998ED30D_851D_580D_41CA_A41C828E10E2); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.65,
   "hfov": 53.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_0_HS_2_1_6_map.gif",
      "width": 88,
      "height": 200
     }
    ]
   },
   "pitch": 2.25
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_97318FC9_81AB_D01B_419A_83E27656B6A4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.25,
   "hfov": 2.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_1_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.53
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CFBCB66_81E8_5008_41D3_24631912E78A",
   "yaw": -172.25,
   "pitch": -0.53,
   "distance": 100,
   "hfov": 2.95
  }
 ],
 "id": "overlay_95C8C8A7_81A8_B017_41A2_B04FF1B0673C",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.42,
   "hfov": 3.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_1_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.43
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CFB6B67_81E8_5008_41D9_CFCE5768A4FF",
   "yaw": -1.42,
   "pitch": -4.43,
   "distance": 100,
   "hfov": 3.44
  }
 ],
 "id": "overlay_948185A7_81A8_D008_41DF_883A5D7FA141",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD, this.camera_9A7BA56F_851D_580D_41D9_0F2D776C1889); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.57,
   "hfov": 17.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_0_1_0_map.gif",
      "width": 88,
      "height": 200
     }
    ]
   },
   "pitch": -5.72
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_95E3471F_81A8_7037_41B8_5E36F72A8049",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE, this.camera_9BA9953A_851D_5816_41D9_3BCCAFB7E542); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.67,
   "hfov": 21.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_1_1_0_map.gif",
      "width": 65,
      "height": 200
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9525D475_81A8_D00B_41D1_A14EBBAFBC08",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1, this.camera_9B87C513_851D_5816_41D4_6E7B17790DD0); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.2,
   "hfov": 85.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_2_1_0_map.gif",
      "width": 108,
      "height": 200
     }
    ]
   },
   "pitch": -4.71
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_95EED355_81B8_B008_41DA_9F9BAC021158",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5, this.camera_9A59954A_851D_5877_41C9_4CC93B93A40E); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.36,
   "hfov": 50.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_3_1_0_map.gif",
      "width": 86,
      "height": 200
     }
    ]
   },
   "pitch": -17.15
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_942914A0_8198_5009_41CC_697F67B0E846",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.11,
   "hfov": 5.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.59
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CF81B69_81E8_5018_41C2_9066EB36BDAC",
   "yaw": -126.11,
   "pitch": -6.59,
   "distance": 100,
   "hfov": 5.74
  }
 ],
 "id": "overlay_9404F3D0_8198_5009_41BF_7C5D39B08CD2",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5, this.camera_9BB74524_851D_5832_41CD_C36A8A87DA35); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.5,
   "hfov": 17.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_5_1_0_map.gif",
      "width": 42,
      "height": 200
     }
    ]
   },
   "pitch": -13.63
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_9410D58C_819B_F019_41DA_D3E0CEE6DFE9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA, this.camera_9A6D8580_851D_58F3_41CF_17BEBBFC3D6A); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.69,
   "hfov": 8.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_6_1_0_map.gif",
      "width": 32,
      "height": 200
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_955BBBAD_8198_7018_41DF_AF9B7590296B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96, this.camera_9A4B855A_851D_5817_41D3_160BBE4451F6); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.61,
   "hfov": 6.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_7_1_0_map.gif",
      "width": 29,
      "height": 200
     }
    ]
   },
   "pitch": -9.36
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_941E13EC_8198_D019_41AE_506D1C3B932B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.54,
   "hfov": 3.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.49
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9DEBDD9C_8565_E813_41D1_17C7E311ABA6",
   "yaw": -14.54,
   "pitch": -0.49,
   "distance": 100,
   "hfov": 3.02
  }
 ],
 "id": "overlay_97DFA2F6_81E8_B009_41DC_D12777ADF4AB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.03,
   "hfov": 4.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.94
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9DEBFD9C_8565_E813_41D7_24942FBE8532",
   "yaw": -25.03,
   "pitch": -0.94,
   "distance": 100,
   "hfov": 4.08
  }
 ],
 "id": "overlay_9721E75B_81E8_B03F_41D3_94FD3B4142E4",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.24,
   "hfov": 3.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.48
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9DEB9D9C_8565_E813_41C1_A622EE041DD6",
   "yaw": 21.24,
   "pitch": -3.48,
   "distance": 100,
   "hfov": 3.48
  }
 ],
 "id": "overlay_973098AF_81E8_B017_41D0_8E087DC43471",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.74,
   "hfov": 3.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.11
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9DEBBD9C_8565_E813_41B6_FD122C5AADF4",
   "yaw": 119.74,
   "pitch": -1.11,
   "distance": 100,
   "hfov": 3.73
  }
 ],
 "id": "overlay_971C62C5_81F7_B008_41B0_BB67B8DCCEF5",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.75,
   "hfov": 3.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_1_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.55
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CF97B6B_81E8_5018_41DE_83FF87D45700",
   "yaw": 134.75,
   "pitch": -4.55,
   "distance": 100,
   "hfov": 3.94
  }
 ],
 "id": "overlay_97B61CCE_81F8_7018_41DD_69D2A728C253",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.37,
   "hfov": 3.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_1_HS_13_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -30.3
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CF92B6B_81E8_5018_41D1_1555CD12B7F0",
   "yaw": 57.37,
   "pitch": -30.3,
   "distance": 100,
   "hfov": 3.41
  }
 ],
 "id": "overlay_9703A5E4_81F8_B008_41D9_78BB2A50C87E",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26, this.camera_9813239A_851D_5817_41C4_E8764146AE51); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.21,
   "hfov": 75.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_0_1_0_map.gif",
      "width": 121,
      "height": 200
     }
    ]
   },
   "pitch": 0.51
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_72EADB23_7D95_8FEE_41C9_8B758F5D2161",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB, this.camera_980933A5_851D_583D_41C0_173ADAAB9C1C); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_1_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_1_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_1_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_1_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7256A1A9_7D95_9AFA_41B5_8E9F2B5D84C9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB, this.camera_983CC3B0_851D_5813_41CF_8C6B7D87066F); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_2_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_2_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_2_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_722DF1FE_7D96_FA56_41D3_7404D9782CAE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77125FF3_7D7A_866E_41D3_CE47580C665C, this.camera_983303BC_851D_5813_41B8_FF181686AAA4); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.02,
   "hfov": 34.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_3_1_6_map.gif",
      "width": 116,
      "height": 200
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_8CE6A942_8178_D008_41DC_1D830ACBFF83",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.39,
   "hfov": 3.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_1_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9C828B50_81E8_5009_41DB_69E3B9E3D2D6",
   "yaw": 2.39,
   "pitch": -1.44,
   "distance": 100,
   "hfov": 3.51
  }
 ],
 "id": "overlay_8F79E4D7_8178_5037_41DF_81CB9EECA832",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.59,
   "hfov": 7.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.46
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B2451746_8298_B539_41C8_88A008BF17AD",
   "yaw": 172.59,
   "pitch": 3.46,
   "distance": 100,
   "hfov": 7.77
  }
 ],
 "id": "overlay_AC264486_8299_EB38_41BC_E027A2ED9A9D",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.11,
   "hfov": 3.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.79
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8B8635EE_8527_F80F_41D5_B9AACF02DBCE",
   "yaw": 90.11,
   "pitch": -6.79,
   "distance": 100,
   "hfov": 3.75
  }
 ],
 "id": "overlay_AE370B8A_8298_5D48_41C9_7FE690649B7C",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A926437_8168_F008_41D2_D6CCDFAF0570, this.camera_99CF52BF_851D_580E_41D6_8824BBDADF2A); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.93,
   "hfov": 34.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_0_1_0_map.gif",
      "width": 77,
      "height": 200
     }
    ]
   },
   "pitch": -15.51
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A65D2455_836B_EBD8_41D7_79C0451C5FE7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9680C3_8168_5008_41D7_BF610954DCBA, this.camera_99C172D4_851D_5812_41DE_0A619DB429C9); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.53,
   "hfov": 43.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_1_1_0_map.gif",
      "width": 122,
      "height": 200
     }
    ]
   },
   "pitch": -12.69
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A7EC9E24_836B_B745_41DB_96CC40F1AA43",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.84,
   "hfov": 5.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.5
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7E18EE_8368_5CC8_41BD_A690B896FF21",
   "yaw": 7.84,
   "pitch": -2.5,
   "distance": 100,
   "hfov": 5.16
  }
 ],
 "id": "overlay_A7D3D2C2_8368_AF38_41DB_798703D28E1D",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.4,
   "hfov": 5.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.61
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7EE8EE_8368_5CC8_41CC_6E618C5D49E7",
   "yaw": -36.4,
   "pitch": -1.61,
   "distance": 100,
   "hfov": 5.16
  }
 ],
 "id": "overlay_A773A85E_8368_FBC8_41BF_81C030FE0434",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B, this.camera_99C9E2CA_851D_5876_41C0_966045C125CC); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_4_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_4_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_4_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_4_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_902C1156_853F_B81E_41D4_0F07AE572FB1",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.56,
   "hfov": 5.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.24
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_92733857_853D_A81D_41C4_CE5CB66C566A",
   "yaw": 166.56,
   "pitch": -10.24,
   "distance": 100,
   "hfov": 5.19
  }
 ],
 "id": "overlay_936C7C50_853E_E813_41DD_C885BDABAB63",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD, this.camera_99BB7323_851D_5835_41DD_68D9EB5FD1E9); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.18,
   "hfov": 47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_0_HS_0_1_0_map.gif",
      "width": 62,
      "height": 200
     }
    ]
   },
   "pitch": -15.76
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_90195315_8198_F008_419B_4983981E5263",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.29,
   "hfov": 7.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.45
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -137.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_1_HS_1_0.png",
      "width": 171,
      "height": 171
     }
    ]
   },
   "pitch": -2.45,
   "hfov": 7.53
  }
 ],
 "id": "overlay_93B9F8AE_8198_7019_41C3_9383BC07FB3B",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366, this.camera_9AE24624_851D_5833_41C6_BBFB550A39FF); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.95,
   "hfov": 61.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_0_1_0_map.gif",
      "width": 147,
      "height": 200
     }
    ]
   },
   "pitch": 2.6
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_73FDFBF7_7D8F_8E57_41D5_C6644A4B3E5F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77253312_7D7B_FFAE_41B1_09F420FC7578, this.camera_9A2175DF_851D_580D_41CB_64E395397AC2); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.11,
   "hfov": 62.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_1_1_0_map.gif",
      "width": 116,
      "height": 200
     }
    ]
   },
   "pitch": 3.46
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_734F255A_7D8E_9A59_41B7_5524BDBF6CED",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE, this.camera_9AF2F614_851D_5813_41C2_7284386876C5); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.68,
   "hfov": 30.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_2_1_0_map.gif",
      "width": 68,
      "height": 200
     }
    ]
   },
   "pitch": 0.19
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_72EE4A79_7D8D_8E5A_41D6_407DC4DA4E56",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3, this.camera_9AD125EF_851D_580D_41D6_BB3AF2E82900); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.92,
   "hfov": 31.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_3_1_0_map.gif",
      "width": 67,
      "height": 200
     }
    ]
   },
   "pitch": 0.19
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6D896540_7D8B_FBA9_41DC_94EF3FB8C83D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3, this.camera_9AC30603_851D_5BF5_41D7_11B421D9A1A0); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.91,
   "hfov": 38.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_4_1_0_map.gif",
      "width": 81,
      "height": 200
     }
    ]
   },
   "pitch": -1.19
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6D127D82_7D8B_8AAE_41D1_B99F1905795B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB, this.camera_9A2F65CF_851D_580D_41D5_901FA65A2A57); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.12,
   "hfov": 33.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_5_1_0_map.gif",
      "width": 99,
      "height": 200
     }
    ]
   },
   "pitch": 0.82
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6D3D049E_7D95_FAD6_41D9_427BB529862F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.22,
   "hfov": 3.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.28
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC409394_8369_AD58_41D8_EDC5520D7562",
   "yaw": 168.22,
   "pitch": -4.28,
   "distance": 100,
   "hfov": 3.4
  }
 ],
 "id": "overlay_9B126B25_8169_BD78_41DA_BDCD3C344C27",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.9,
   "hfov": 3.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9ED9C811_8299_DB58_41B7_72AEAEB1E41A",
   "yaw": -20.9,
   "pitch": -3.27,
   "distance": 100,
   "hfov": 3.69
  }
 ],
 "id": "overlay_9DDDD1D9_8168_ECCB_41D3_8450457CCB9B",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.93,
   "hfov": 3.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.22
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9ED80811_8299_DB58_41E0_362E0E9AD65E",
   "yaw": -68.93,
   "pitch": -2.22,
   "distance": 100,
   "hfov": 3.69
  }
 ],
 "id": "overlay_9DB7FA2F_8168_FF48_41DF_FDCE022D0F4D",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.35,
   "hfov": 3.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.76
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9ED84811_8299_DB58_41A1_5435D6EFE19B",
   "yaw": 50.35,
   "pitch": -2.76,
   "distance": 100,
   "hfov": 3.69
  }
 ],
 "id": "overlay_984C6800_8168_DB38_41D2_BC5D944268B4",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.68,
   "hfov": 3.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.88
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC3F7394_8369_AD58_41DF_34025D35EF52",
   "yaw": 134.68,
   "pitch": -8.88,
   "distance": 100,
   "hfov": 3.59
  }
 ],
 "id": "overlay_98317F46_8298_5538_41B5_E0541819AB8E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9680C3_8168_5008_41D7_BF610954DCBA, this.camera_981C238F_851D_580D_41D5_17B9CEB3F295); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A7687A95_8369_FF5B_41C7_F1899E466B9F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.98,
   "hfov": 9.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 17.15
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 124.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_0_HS_1_0.png",
      "width": 217,
      "height": 228
     }
    ]
   },
   "pitch": 17.15,
   "hfov": 9.12
  }
 ],
 "id": "overlay_A53DE1A7_8368_6D78_41D2_5FAD89CBD6EF",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A91EC1B_8168_B038_41D1_D09E94B250D8_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40, this.camera_9AB69658_851D_5813_41B5_B6524A351D03); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A9A6C756_8379_B5D9_41BE_FF4313A91737",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40, this.camera_9AA68668_851D_5833_41AB_A01F3836A28C); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_1_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_1_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_1_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_1_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_AEB97B5C_8379_DDC8_41D8_729D933E4FF2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.56,
   "hfov": 8.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 17.02
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7D18F5_8368_5CD8_41D7_0583ECC16B30",
   "yaw": 167.56,
   "pitch": 17.02,
   "distance": 100,
   "hfov": 8.4
  }
 ],
 "id": "overlay_AA79EACD_8378_DCCB_41CF_A9F98C5B9BA0",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9651C3_8168_B008_41D1_35265ABE32B4, this.camera_A558F673_851D_5815_41A1_120B5308DFCF); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.88,
   "hfov": 56.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_3_1_6_map.gif",
      "width": 76,
      "height": 200
     }
    ]
   },
   "pitch": 1.49
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_AB8F44ED_8378_B4C8_41C4_48EC4518BE10",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.85,
   "hfov": 2.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.62
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF7D88F5_8368_5CD8_41C7_6AE631A77522",
   "yaw": -5.85,
   "pitch": -0.62,
   "distance": 100,
   "hfov": 2.3
  }
 ],
 "id": "overlay_AA94F67E_837B_D7C8_41CB_91EEF5C51A20",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E, this.camera_9B31D4A4_851D_5833_41DB_86EFE7C19857); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.83,
   "hfov": 30.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0_HS_0_1_0_map.gif",
      "width": 100,
      "height": 200
     }
    ]
   },
   "pitch": -12.37
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_90DAC027_8198_5017_41D5_AB58C81E27B9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.09,
   "hfov": 4.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.71
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9CFF2B5D_81E8_5038_41DE_31568A9BAB58",
   "yaw": -69.09,
   "pitch": -5.71,
   "distance": 100,
   "hfov": 4.25
  }
 ],
 "id": "overlay_90378D00_819B_D008_41A8_81F6BFAF62D4",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_771DBC9A_7D7A_8AD9_41BA_57E02A725A27, this.camera_9B2184AE_851D_580F_41D7_1C192CD1C675); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.15,
   "hfov": 19.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_0_HS_2_1_0_map.gif",
      "width": 25,
      "height": 200
     }
    ]
   },
   "pitch": -18.53
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_93C33366_8198_5009_41D8_F71B9D8FC7A0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.39,
   "hfov": 7.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.22
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 106.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_1_HS_3_0.png",
      "width": 171,
      "height": 171
     }
    ]
   },
   "pitch": -7.22,
   "hfov": 7.48
  }
 ],
 "id": "overlay_93351E0B_8198_7018_41C9_CF0A448F730F",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B, this.camera_99AE732F_851D_580D_41AF_A5E4ED063C6C); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.02,
   "hfov": 56.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_0_1_0_map.gif",
      "width": 144,
      "height": 200
     }
    ]
   },
   "pitch": -16.83
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A25A0154_8398_6DD8_41C8_F20D7EEBF891",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.4,
   "hfov": 4.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.24
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF84C8E5_8368_5CF8_41A6_84C6DAD7C28B",
   "yaw": 107.4,
   "pitch": -10.24,
   "distance": 100,
   "hfov": 4.94
  }
 ],
 "id": "overlay_A3B0D180_8398_AD38_41A7_9B122ED4F83C",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E, this.camera_985AC345_851D_587D_41BD_BC663392CA17); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.82,
   "hfov": 31.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_2_1_0_map.gif",
      "width": 155,
      "height": 200
     }
    ]
   },
   "pitch": -4.61
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A23B491F_8399_FD47_41D9_6A62D4F0CF8E",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A901509_8169_D018_41B2_80398562CF8E, this.camera_99A7933B_851D_5815_41D2_F1279899FA5A); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.07,
   "hfov": 50.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_3_1_0_map.gif",
      "width": 86,
      "height": 200
     }
    ]
   },
   "pitch": -3.12
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A36A1636_8398_5758_41D7_2056F46AB954",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.3,
   "hfov": 3.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.05
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF85C8E6_8368_5CF8_41D0_119DDD9091FD",
   "yaw": -55.3,
   "pitch": -5.05,
   "distance": 100,
   "hfov": 3.19
  }
 ],
 "id": "overlay_A0ADDB46_839F_BD39_41DB_8374363077AF",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.31,
   "hfov": 3.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.16
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8598E6_8368_5CF8_41BE_B60D93345063",
   "yaw": 12.31,
   "pitch": -5.16,
   "distance": 100,
   "hfov": 3.19
  }
 ],
 "id": "overlay_A30C04CF_839F_D4C8_41DA_C5F8407B21CC",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "rotate": false,
 "hfov": 30,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_8A97757C_8169_B0F9_41BE_F1769D222827_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 110,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
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
 "backgroundOpacity": 0,
 "width": "91.304%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "height": "85.959%",
 "layout": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 0,
 "width": 330,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AFCE9653_8369_D7D8_41DF_A43CD9D42FEF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AFCEA653_8369_D7D8_41AC_FEE066200BA4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_77253312_7D7B_FFAE_41B1_09F420FC7578_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B244D747_8298_B5C7_41D6_BD57D6C70CC8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B2442747_8298_B5C7_41B1_CA56781955F9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_77105D8D_7D7B_8ABA_41C9_1DDCEF7F45AB_0_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9C811B5B_81E8_5038_41B4_9C3BAC5FC00D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CFEBB5C_81E8_5038_4145_E81FC85B0D64",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CFE1B5C_81E8_5038_41BF_80DC3A24990A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_1_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CFF9B5D_81E8_5038_41C3_ADEB48919AF0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771F378C_7D7A_86B9_41D0_DE3989B1B88E_1_HS_7_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7868E8_8368_5CCD_41DE_864C6E36212C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_91B88A32_8526_A816_41DD_73159A1D74D8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8D6F34F7_8169_F1F7_41B4_C06E75D9A18E_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8C58D1_8368_5CD8_41B1_A698902074B7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D86B1B9_7D9D_FADB_41D7_7D2212C6DBE5_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7AB8E7_8368_5CF8_41DA_616748ACFF21",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7B68E7_8368_5CF8_41CF_7D567AA003A6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A901509_8169_D018_41B2_80398562CF8E_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8D48D7_8368_5CD8_419A_6FE6DEFFECD7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8258D8_8368_5CC8_41BB_CAA274B36A30",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8FD60B_7D9D_B9BF_41CB_038D0A2333CA_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF82B8D8_8368_5CC8_41C5_9C7C781B15AA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8D58F1_7D9D_8A6B_41C6_B1FB4C13D743_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7F38EE_8368_5CC8_41C3_538EE6291B3B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A9680C3_8168_5008_41D7_BF610954DCBA_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9C834B53_81E8_500F_41C2_5F1DD18C33A4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_1_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9C80EB59_81E8_5038_41D4_8A65B14495EA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9C805B5A_81E8_5038_41B9_72A5E6BB7C3A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_77125FF3_7D7A_866E_41D3_CE47580C665C_1_HS_5_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7378F6_8368_5CD8_41E0_1AEC7D9A3855",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7348F6_8368_5CC5_41CE_5703BF2CBFE9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A9651C3_8168_B008_41D1_35265ABE32B4_0_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AFCF9652_8369_D7D8_41C1_1EFF31866E7F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AFCFF652_8369_D7D8_41DE_D211BF4A9540",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_76AA40EC_7D7B_BA7A_41BB_A2A47A9F9366_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF83A8D9_8368_5CC8_41A6_56DD9D03113C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A95C50B_8168_D01F_41DF_0D5A9E57CF96_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8688DF_8368_5CC8_41DC_2CF755BC15BB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_1_0.png",
   "width": 480,
   "height": 510
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8788E0_8368_5CF8_41C0_E148A839E0EB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8458E0_8368_5CF8_41D1_DFA26A764819",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A9155ED_8168_5018_41C0_5CF33CCF1D9B_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9C81DB5A_81E8_5038_41DF_A4F3D1087F5D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771F0294_7D7A_BEA9_4184_B29C074C4714_1_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CFDBB5E_81E8_5038_41BB_EC6D27DE4C6E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_1_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CFD3B5F_81E8_5038_41D8_223A6A7BC5F8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6DF7E5A1_7D9A_9AEB_41C0_E676D84B15CB_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF80A8DE_8368_5CC8_41CB_783CFA441A79",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8D6D668F_8168_5018_41DA_D53E80E7CFDD_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF72C8FC_8368_5CC8_41AC_2833828A2A20",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A909718_8168_5039_41D3_6144A42FFF11_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF78B8ED_8368_5CC8_41D5_0AA526F2D399",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A90B57A_8169_D0F9_419E_F42F8CAD2212_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8CC8D1_8368_5CD8_41DF_A1BFF34F7787",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D88D39B_7D9D_9EDF_41D5_F4BDABC5B7E5_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF81B8DF_8368_5CC8_41C4_BFF3AD8F72C4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0_HS_1_0.png",
   "width": 380,
   "height": 570
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8618DF_8368_5CC8_41A9_7F8C71F608F6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8D6CF678_8168_70F8_41D3_1FCEA9EB81E1_0_HS_3_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CFBCB66_81E8_5008_41D3_24631912E78A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_1_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CFB6B67_81E8_5008_41D9_CFCE5768A4FF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8399A4_7D9D_8AEA_41D8_AF5248DF7DCE_1_HS_4_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CF81B69_81E8_5018_41C2_9066EB36BDAC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9DEBDD9C_8565_E813_41D1_17C7E311ABA6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_8_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9DEBFD9C_8565_E813_41D7_24942FBE8532",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_9_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9DEB9D9C_8565_E813_41C1_A622EE041DD6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_10_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9DEBBD9C_8565_E813_41B6_FD122C5AADF4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_0_HS_11_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CF97B6B_81E8_5018_41DE_83FF87D45700",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_1_HS_12_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CF92B6B_81E8_5018_41D1_1555CD12B7F0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6D8DCE7D_7D9D_865B_41DE_3A84DA65C26F_1_HS_13_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9C828B50_81E8_5009_41DB_69E3B9E3D2D6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B2451746_8298_B539_41C8_88A008BF17AD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_5_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_8B8635EE_8527_F80F_41D5_B9AACF02DBCE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771019F9_7D7B_8A5A_41B0_E9401BD812C3_0_HS_6_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7E18EE_8368_5CC8_41BD_A690B896FF21",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7EE8EE_8368_5CC8_41CC_6E618C5D49E7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_92733857_853D_A81D_41C4_CE5CB66C566A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8D6C2680_8168_5008_41A8_B0DC56E60D40_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AC409394_8369_AD58_41D8_EDC5520D7562",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_6_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9ED9C811_8299_DB58_41B7_72AEAEB1E41A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_7_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9ED80811_8299_DB58_41E0_362E0E9AD65E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_8_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9ED84811_8299_DB58_41A1_5435D6EFE19B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_9_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AC3F7394_8369_AD58_41DF_34025D35EF52",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7712E5CF_7D7B_9AB6_41DC_129D11C5DA26_0_HS_10_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7D18F5_8368_5CD8_41D7_0583ECC16B30",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF7D88F5_8368_5CD8_41C7_6AE631A77522",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A926437_8168_F008_41D2_D6CCDFAF0570_0_HS_4_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_9CFF2B5D_81E8_5038_41DE_31568A9BAB58",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_771A99F2_7D7A_8A6E_41D5_CA01D3C1F6AD_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF84C8E5_8368_5CF8_41A6_84C6DAD7C28B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF85C8E6_8368_5CF8_41D0_119DDD9091FD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_4_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF8598E6_8368_5CF8_41BE_B60D93345063",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8A97757C_8169_B0F9_41BE_F1769D222827_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "rowCount": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "class": "IconButton",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "width": 36,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "cursor": "hand"
},
{
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "width": "90%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "right": 9,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "cursor": "hand"
},
{
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "backgroundOpacity": 0.97,
 "width": "100%",
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 40,
 "overflow": "scroll",
 "paddingLeft": 40,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#003366"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "horizontal",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- Buttons set"
 },
 "shadow": false,
 "height": "100%"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "minWidth": 40,
 "height": "25%",
 "class": "Image",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "top": "19.82%",
 "bottom": "8.01%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 14,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 1"
 },
 "shadow": false
},
{
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "label": "20th FLOOR >",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "click": "this.mainPlayList.set('selectedIndex', 23)",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Tour Info"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "class": "Button",
 "label": "21st FLOOR >",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
}],
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
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
