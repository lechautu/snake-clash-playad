var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointSpring' )
  var i643 = data
  i642.spring = i643[0]
  i642.damper = i643[1]
  i642.targetPosition = i643[2]
  return i642
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor' )
  var i645 = data
  i644.m_TargetVelocity = i645[0]
  i644.m_Force = i645[1]
  i644.m_FreeSpin = i645[2]
  return i644
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointLimits' )
  var i647 = data
  i646.m_Min = i647[0]
  i646.m_Max = i647[1]
  i646.m_Bounciness = i647[2]
  i646.m_BounceMinVelocity = i647[3]
  i646.m_ContactDistance = i647[4]
  i646.minBounce = i647[5]
  i646.maxBounce = i647[6]
  return i646
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointDrive' )
  var i649 = data
  i648.m_PositionSpring = i649[0]
  i648.m_PositionDamper = i649[1]
  i648.m_MaximumForce = i649[2]
  i648.m_UseAcceleration = i649[3]
  return i648
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i651 = data
  i650.m_Spring = i651[0]
  i650.m_Damper = i651[1]
  return i650
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i653 = data
  i652.m_Limit = i653[0]
  i652.m_Bounciness = i653[1]
  i652.m_ContactDistance = i653[2]
  return i652
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i655 = data
  i654.m_ExtremumSlip = i655[0]
  i654.m_ExtremumValue = i655[1]
  i654.m_AsymptoteSlip = i655[2]
  i654.m_AsymptoteValue = i655[3]
  i654.m_Stiffness = i655[4]
  return i654
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i657 = data
  i656.m_LowerAngle = i657[0]
  i656.m_UpperAngle = i657[1]
  return i656
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i659 = data
  i658.m_MotorSpeed = i659[0]
  i658.m_MaximumMotorTorque = i659[1]
  return i658
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i661 = data
  i660.m_DampingRatio = i661[0]
  i660.m_Frequency = i661[1]
  i660.m_Angle = i661[2]
  return i660
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i663 = data
  i662.m_LowerTranslation = i663[0]
  i662.m_UpperTranslation = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i664 = root || new pc.UnityMaterial()
  var i665 = data
  i664.name = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'shader')
  i664.renderQueue = i665[3]
  i664.enableInstancing = !!i665[4]
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i667[i + 0]) );
  }
  i664.floatParameters = i666
  var i669 = i665[6]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i669[i + 0]) );
  }
  i664.colorParameters = i668
  var i671 = i665[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i671[i + 0]) );
  }
  i664.vectorParameters = i670
  var i673 = i665[8]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i673[i + 0]) );
  }
  i664.textureParameters = i672
  var i675 = i665[9]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i675[i + 0]) );
  }
  i664.materialFlags = i674
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i679 = data
  i678.name = i679[0]
  i678.value = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i683 = data
  i682.name = i683[0]
  i682.value = new pc.Color(i683[1], i683[2], i683[3], i683[4])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = new pc.Vec4( i687[1], i687[2], i687[3], i687[4] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'value')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i695 = data
  i694.name = i695[0]
  i694.enabled = !!i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i697 = data
  i696.name = i697[0]
  i696.width = i697[1]
  i696.height = i697[2]
  i696.mipmapCount = i697[3]
  i696.anisoLevel = i697[4]
  i696.filterMode = i697[5]
  i696.hdr = !!i697[6]
  i696.format = i697[7]
  i696.wrapMode = i697[8]
  i696.alphaIsTransparency = !!i697[9]
  i696.alphaSource = i697[10]
  i696.graphicsFormat = i697[11]
  i696.sRGBTexture = !!i697[12]
  i696.desiredColorSpace = i697[13]
  i696.wrapU = i697[14]
  i696.wrapV = i697[15]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i699 = data
  i698.name = i699[0]
  i698.halfPrecision = !!i699[1]
  i698.useSimplification = !!i699[2]
  i698.useUInt32IndexFormat = !!i699[3]
  i698.vertexCount = i699[4]
  i698.aabb = i699[5]
  var i701 = i699[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( !!i701[i + 0] );
  }
  i698.streams = i700
  i698.vertices = i699[7]
  var i703 = i699[8]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i703[i + 0]) );
  }
  i698.subMeshes = i702
  var i705 = i699[9]
  var i704 = []
  for(var i = 0; i < i705.length; i += 16) {
    i704.push( new pc.Mat4().setData(i705[i + 0], i705[i + 1], i705[i + 2], i705[i + 3],  i705[i + 4], i705[i + 5], i705[i + 6], i705[i + 7],  i705[i + 8], i705[i + 9], i705[i + 10], i705[i + 11],  i705[i + 12], i705[i + 13], i705[i + 14], i705[i + 15]) );
  }
  i698.bindposes = i704
  var i707 = i699[10]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i707[i + 0]) );
  }
  i698.blendShapes = i706
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i713 = data
  i712.triangles = i713[0]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i719 = data
  i718.name = i719[0]
  var i721 = i719[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i721[i + 0]) );
  }
  i718.frames = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i723 = data
  i722.position = new pc.Vec3( i723[0], i723[1], i723[2] )
  i722.scale = new pc.Vec3( i723[3], i723[4], i723[5] )
  i722.rotation = new pc.Quat(i723[6], i723[7], i723[8], i723[9])
  return i722
}

Deserializers["SnakeClash.Snake.SnakeSegmentNode"] = function (request, data, root) {
  var i724 = root || request.c( 'SnakeClash.Snake.SnakeSegmentNode' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'bodyVisual')
  request.r(i725[2], i725[3], 0, i724, 'tailVisual')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'sharedMesh')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'additionalVertexStreams')
  i728.enabled = !!i729[2]
  request.r(i729[3], i729[4], 0, i728, 'sharedMaterial')
  var i731 = i729[5]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.sharedMaterials = i730
  i728.receiveShadows = !!i729[6]
  i728.shadowCastingMode = i729[7]
  i728.sortingLayerID = i729[8]
  i728.sortingOrder = i729[9]
  i728.lightmapIndex = i729[10]
  i728.lightmapSceneIndex = i729[11]
  i728.lightmapScaleOffset = new pc.Vec4( i729[12], i729[13], i729[14], i729[15] )
  i728.lightProbeUsage = i729[16]
  i728.reflectionProbeUsage = i729[17]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i735 = data
  i734.name = i735[0]
  i734.tagId = i735[1]
  i734.enabled = !!i735[2]
  i734.isStatic = !!i735[3]
  i734.layer = i735[4]
  return i734
}

Deserializers["SnakeClash.Resources.FoodItem"] = function (request, data, root) {
  var i736 = root || request.c( 'SnakeClash.Resources.FoodItem' )
  var i737 = data
  i736.levelReward = i737[0]
  return i736
}

Deserializers["SnakeClash.Resources.CoinPickup"] = function (request, data, root) {
  var i738 = root || request.c( 'SnakeClash.Resources.CoinPickup' )
  var i739 = data
  i738.coinValue = i739[0]
  return i738
}

Deserializers["SnakeClash.Resources.ChestPickup"] = function (request, data, root) {
  var i740 = root || request.c( 'SnakeClash.Resources.ChestPickup' )
  var i741 = data
  i740.coinsPerChest = i741[0]
  i740.burstRange = i741[1]
  i740.burstTotalDuration = i741[2]
  request.r(i741[3], i741[4], 0, i740, 'animator')
  request.r(i741[5], i741[6], 0, i740, 'levelText')
  request.r(i741[7], i741[8], 0, i740, 'camTransform')
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'animatorController')
  request.r(i743[2], i743[3], 0, i742, 'avatar')
  i742.updateMode = i743[4]
  i742.hasTransformHierarchy = !!i743[5]
  i742.applyRootMotion = !!i743[6]
  var i745 = i743[7]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.humanBones = i744
  i742.enabled = !!i743[8]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'sharedMesh')
  var i751 = i749[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.bones = i750
  i748.updateWhenOffscreen = !!i749[3]
  i748.localBounds = i749[4]
  request.r(i749[5], i749[6], 0, i748, 'rootBone')
  var i753 = i749[7]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i753[i + 0]) );
  }
  i748.blendShapesWeights = i752
  i748.enabled = !!i749[8]
  request.r(i749[9], i749[10], 0, i748, 'sharedMaterial')
  var i755 = i749[11]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i748.sharedMaterials = i754
  i748.receiveShadows = !!i749[12]
  i748.shadowCastingMode = i749[13]
  i748.sortingLayerID = i749[14]
  i748.sortingOrder = i749[15]
  i748.lightmapIndex = i749[16]
  i748.lightmapSceneIndex = i749[17]
  i748.lightmapScaleOffset = new pc.Vec4( i749[18], i749[19], i749[20], i749[21] )
  i748.lightProbeUsage = i749[22]
  i748.reflectionProbeUsage = i749[23]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i759 = data
  i758.weight = i759[0]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i761 = data
  i760.pivot = new pc.Vec2( i761[0], i761[1] )
  i760.anchorMin = new pc.Vec2( i761[2], i761[3] )
  i760.anchorMax = new pc.Vec2( i761[4], i761[5] )
  i760.sizeDelta = new pc.Vec2( i761[6], i761[7] )
  i760.anchoredPosition3D = new pc.Vec3( i761[8], i761[9], i761[10] )
  i760.rotation = new pc.Quat(i761[11], i761[12], i761[13], i761[14])
  i760.scale = new pc.Vec3( i761[15], i761[16], i761[17] )
  return i760
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TextMeshPro' )
  var i763 = data
  i762._SortingLayer = i763[0]
  i762._SortingLayerID = i763[1]
  i762._SortingOrder = i763[2]
  i762.m_hasFontAssetChanged = !!i763[3]
  request.r(i763[4], i763[5], 0, i762, 'm_renderer')
  i762.m_maskType = i763[6]
  i762.m_text = i763[7]
  i762.m_isRightToLeft = !!i763[8]
  request.r(i763[9], i763[10], 0, i762, 'm_fontAsset')
  request.r(i763[11], i763[12], 0, i762, 'm_sharedMaterial')
  var i765 = i763[13]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.m_fontSharedMaterials = i764
  request.r(i763[14], i763[15], 0, i762, 'm_fontMaterial')
  var i767 = i763[16]
  var i766 = []
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 2, i766, '')
  }
  i762.m_fontMaterials = i766
  i762.m_fontColor32 = UnityEngine.Color32.ConstructColor(i763[17], i763[18], i763[19], i763[20])
  i762.m_fontColor = new pc.Color(i763[21], i763[22], i763[23], i763[24])
  i762.m_enableVertexGradient = !!i763[25]
  i762.m_colorMode = i763[26]
  i762.m_fontColorGradient = request.d('TMPro.VertexGradient', i763[27], i762.m_fontColorGradient)
  request.r(i763[28], i763[29], 0, i762, 'm_fontColorGradientPreset')
  request.r(i763[30], i763[31], 0, i762, 'm_spriteAsset')
  i762.m_tintAllSprites = !!i763[32]
  request.r(i763[33], i763[34], 0, i762, 'm_StyleSheet')
  i762.m_TextStyleHashCode = i763[35]
  i762.m_overrideHtmlColors = !!i763[36]
  i762.m_faceColor = UnityEngine.Color32.ConstructColor(i763[37], i763[38], i763[39], i763[40])
  i762.m_fontSize = i763[41]
  i762.m_fontSizeBase = i763[42]
  i762.m_fontWeight = i763[43]
  i762.m_enableAutoSizing = !!i763[44]
  i762.m_fontSizeMin = i763[45]
  i762.m_fontSizeMax = i763[46]
  i762.m_fontStyle = i763[47]
  i762.m_HorizontalAlignment = i763[48]
  i762.m_VerticalAlignment = i763[49]
  i762.m_textAlignment = i763[50]
  i762.m_characterSpacing = i763[51]
  i762.m_characterHorizontalScale = i763[52]
  i762.m_wordSpacing = i763[53]
  i762.m_lineSpacing = i763[54]
  i762.m_lineSpacingMax = i763[55]
  i762.m_paragraphSpacing = i763[56]
  i762.m_charWidthMaxAdj = i763[57]
  i762.m_TextWrappingMode = i763[58]
  i762.m_wordWrappingRatios = i763[59]
  i762.m_overflowMode = i763[60]
  request.r(i763[61], i763[62], 0, i762, 'm_linkedTextComponent')
  request.r(i763[63], i763[64], 0, i762, 'parentLinkedComponent')
  i762.m_enableKerning = !!i763[65]
  var i769 = i763[66]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(i769[i + 0]);
  }
  i762.m_ActiveFontFeatures = i768
  i762.m_enableExtraPadding = !!i763[67]
  i762.checkPaddingRequired = !!i763[68]
  i762.m_isRichText = !!i763[69]
  i762.m_parseCtrlCharacters = !!i763[70]
  i762.m_isOrthographic = !!i763[71]
  i762.m_isCullingEnabled = !!i763[72]
  i762.m_horizontalMapping = i763[73]
  i762.m_verticalMapping = i763[74]
  i762.m_uvLineOffset = i763[75]
  i762.m_geometrySortingOrder = i763[76]
  i762.m_IsTextObjectScaleStatic = !!i763[77]
  i762.m_VertexBufferAutoSizeReduction = !!i763[78]
  i762.m_useMaxVisibleDescender = !!i763[79]
  i762.m_pageToDisplay = i763[80]
  i762.m_margin = new pc.Vec4( i763[81], i763[82], i763[83], i763[84] )
  i762.m_isUsingLegacyAnimationComponent = !!i763[85]
  i762.m_isVolumetricText = !!i763[86]
  request.r(i763[87], i763[88], 0, i762, 'm_Material')
  i762.m_EmojiFallbackSupport = !!i763[89]
  i762.m_Maskable = !!i763[90]
  i762.m_Color = new pc.Color(i763[91], i763[92], i763[93], i763[94])
  i762.m_RaycastTarget = !!i763[95]
  i762.m_RaycastPadding = new pc.Vec4( i763[96], i763[97], i763[98], i763[99] )
  return i762
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.VertexGradient' )
  var i771 = data
  i770.topLeft = new pc.Color(i771[0], i771[1], i771[2], i771[3])
  i770.topRight = new pc.Color(i771[4], i771[5], i771[6], i771[7])
  i770.bottomLeft = new pc.Color(i771[8], i771[9], i771[10], i771[11])
  i770.bottomRight = new pc.Color(i771[12], i771[13], i771[14], i771[15])
  return i770
}

Deserializers["SnakeClash.Snake.AISnakeController"] = function (request, data, root) {
  var i774 = root || request.c( 'SnakeClash.Snake.AISnakeController' )
  var i775 = data
  i774.moveSpeed = i775[0]
  i774.turnSpeed = i775[1]
  request.r(i775[2], i775[3], 0, i774, 'bodyController')
  request.r(i775[4], i775[5], 0, i774, 'brain')
  i774.snakeName = i775[6]
  i774.initialLevel = i775[7]
  i774.initialSegments = i775[8]
  return i774
}

Deserializers["SnakeClash.Snake.AISnakeBrain"] = function (request, data, root) {
  var i776 = root || request.c( 'SnakeClash.Snake.AISnakeBrain' )
  var i777 = data
  i776.decisionInterval = i777[0]
  i776.detectionRadius = i777[1]
  request.r(i777[2], i777[3], 0, i776, 'owner')
  return i776
}

Deserializers["SnakeClash.Snake.SnakeBodyController"] = function (request, data, root) {
  var i778 = root || request.c( 'SnakeClash.Snake.SnakeBodyController' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'headVisual')
  request.r(i779[2], i779[3], 0, i778, 'segmentPrefab')
  request.r(i779[4], i779[5], 0, i778, 'headTransform')
  i778.segmentSpacing = i779[6]
  i778.initialSegments = i779[7]
  return i778
}

Deserializers["SnakeClash.Snake.SnakeCollisionResolver"] = function (request, data, root) {
  var i780 = root || request.c( 'SnakeClash.Snake.SnakeCollisionResolver' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'owner')
  i780.resourceRadius = i781[2]
  i780.magnetSpeed = i781[3]
  i780.combatRadius = i781[4]
  return i780
}

Deserializers["SnakeClash.UI.SnakeLevelUI"] = function (request, data, root) {
  var i782 = root || request.c( 'SnakeClash.UI.SnakeLevelUI' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'owner')
  request.r(i783[2], i783[3], 0, i782, 'levelText')
  request.r(i783[4], i783[5], 0, i782, 'camTransform')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i785 = data
  i784.name = i785[0]
  i784.atlasId = i785[1]
  i784.mipmapCount = i785[2]
  i784.hdr = !!i785[3]
  i784.size = i785[4]
  i784.anisoLevel = i785[5]
  i784.filterMode = i785[6]
  var i787 = i785[7]
  var i786 = []
  for(var i = 0; i < i787.length; i += 4) {
    i786.push( UnityEngine.Rect.MinMaxRect(i787[i + 0], i787[i + 1], i787[i + 2], i787[i + 3]) );
  }
  i784.rects = i786
  i784.wrapU = i785[8]
  i784.wrapV = i785[9]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i791 = data
  i790.name = i791[0]
  i790.index = i791[1]
  i790.startup = !!i791[2]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i793 = data
  i792.aspect = i793[0]
  i792.orthographic = !!i793[1]
  i792.orthographicSize = i793[2]
  i792.backgroundColor = new pc.Color(i793[3], i793[4], i793[5], i793[6])
  i792.nearClipPlane = i793[7]
  i792.farClipPlane = i793[8]
  i792.fieldOfView = i793[9]
  i792.depth = i793[10]
  i792.clearFlags = i793[11]
  i792.cullingMask = i793[12]
  i792.rect = i793[13]
  request.r(i793[14], i793[15], 0, i792, 'targetTexture')
  i792.usePhysicalProperties = !!i793[16]
  i792.focalLength = i793[17]
  i792.sensorSize = new pc.Vec2( i793[18], i793[19] )
  i792.lensShift = new pc.Vec2( i793[20], i793[21] )
  i792.gateFit = i793[22]
  i792.commandBufferCount = i793[23]
  i792.cameraType = i793[24]
  i792.enabled = !!i793[25]
  return i792
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i795 = data
  i794.m_RenderShadows = !!i795[0]
  i794.m_RequiresDepthTextureOption = i795[1]
  i794.m_RequiresOpaqueTextureOption = i795[2]
  i794.m_CameraType = i795[3]
  var i797 = i795[4]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 1, i796, '')
  }
  i794.m_Cameras = i796
  i794.m_RendererIndex = i795[5]
  i794.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i795[6] )
  request.r(i795[7], i795[8], 0, i794, 'm_VolumeTrigger')
  i794.m_VolumeFrameworkUpdateModeOption = i795[9]
  i794.m_RenderPostProcessing = !!i795[10]
  i794.m_Antialiasing = i795[11]
  i794.m_AntialiasingQuality = i795[12]
  i794.m_StopNaN = !!i795[13]
  i794.m_Dithering = !!i795[14]
  i794.m_ClearDepth = !!i795[15]
  i794.m_AllowXRRendering = !!i795[16]
  i794.m_AllowHDROutput = !!i795[17]
  i794.m_UseScreenCoordOverride = !!i795[18]
  i794.m_ScreenSizeOverride = new pc.Vec4( i795[19], i795[20], i795[21], i795[22] )
  i794.m_ScreenCoordScaleBias = new pc.Vec4( i795[23], i795[24], i795[25], i795[26] )
  i794.m_RequiresDepthTexture = !!i795[27]
  i794.m_RequiresColorTexture = !!i795[28]
  i794.m_Version = i795[29]
  i794.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i795[30], i794.m_TaaSettings)
  return i794
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i801 = data
  i800.m_Quality = i801[0]
  i800.m_FrameInfluence = i801[1]
  i800.m_JitterScale = i801[2]
  i800.m_MipBias = i801[3]
  i800.m_VarianceClampScale = i801[4]
  i800.m_ContrastAdaptiveSharpening = i801[5]
  return i800
}

Deserializers["SnakeClash.Support.ArenaCameraFollow"] = function (request, data, root) {
  var i802 = root || request.c( 'SnakeClash.Support.ArenaCameraFollow' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'target')
  i802.offset = new pc.Vec3( i803[2], i803[3], i803[4] )
  i802.smoothSpeed = i803[5]
  return i802
}

Deserializers["SnakeClash.Core.GameManager"] = function (request, data, root) {
  var i804 = root || request.c( 'SnakeClash.Core.GameManager' )
  var i805 = data
  i804.winCoinTarget = i805[0]
  i804.OnGameStart = request.d('UnityEngine.Events.UnityEvent', i805[1], i804.OnGameStart)
  i804.OnGameWin = request.d('UnityEngine.Events.UnityEvent', i805[2], i804.OnGameWin)
  i804.OnGameFail = request.d('UnityEngine.Events.UnityEvent', i805[3], i804.OnGameFail)
  request.r(i805[4], i805[5], 0, i804, 'playerSnakeController')
  request.r(i805[6], i805[7], 0, i804, 'mainCamera')
  i804.maxSegments = i805[8]
  return i804
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i807 = data
  i806.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i807[0], i806.m_PersistentCalls)
  return i806
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i809 = data
  var i811 = i809[0]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('UnityEngine.Events.PersistentCall', i811[i + 0]));
  }
  i808.m_Calls = i810
  return i808
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_Target')
  i814.m_TargetAssemblyTypeName = i815[2]
  i814.m_MethodName = i815[3]
  i814.m_Mode = i815[4]
  i814.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i815[5], i814.m_Arguments)
  i814.m_CallState = i815[6]
  return i814
}

Deserializers["SnakeClash.Resources.FoodManager"] = function (request, data, root) {
  var i816 = root || request.c( 'SnakeClash.Resources.FoodManager' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'foodPrefab')
  i816.maxAmbientFood = i817[2]
  i816.spawnRadius = i817[3]
  return i816
}

Deserializers["SnakeClash.Resources.CoinManager"] = function (request, data, root) {
  var i818 = root || request.c( 'SnakeClash.Resources.CoinManager' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'coinPrefab')
  i818.initialPoolSize = i819[2]
  return i818
}

Deserializers["SnakeClash.Resources.ChestManager"] = function (request, data, root) {
  var i820 = root || request.c( 'SnakeClash.Resources.ChestManager' )
  var i821 = data
  i820.levelRequireIncrement = i821[0]
  request.r(i821[1], i821[2], 0, i820, 'chestPrefab')
  request.r(i821[3], i821[4], 0, i820, 'chestIndicator')
  request.r(i821[5], i821[6], 0, i820, 'initialSpawnPoint')
  return i820
}

Deserializers["SnakeClash.Core.AudioManager"] = function (request, data, root) {
  var i822 = root || request.c( 'SnakeClash.Core.AudioManager' )
  var i823 = data
  i822.poolSize = i823[0]
  i822.defaultVolume = i823[1]
  request.r(i823[2], i823[3], 0, i822, 'eatClip')
  request.r(i823[4], i823[5], 0, i822, 'openChestClip')
  request.r(i823[6], i823[7], 0, i822, 'winClip')
  request.r(i823[8], i823[9], 0, i822, 'killClip')
  request.r(i823[10], i823[11], 0, i822, 'loseClip')
  request.r(i823[12], i823[13], 0, i822, 'growClip')
  return i822
}

Deserializers["SnakeClash.Core.ArenaManager"] = function (request, data, root) {
  var i824 = root || request.c( 'SnakeClash.Core.ArenaManager' )
  var i825 = data
  i824.arenaSize = new pc.Vec2( i825[0], i825[1] )
  request.r(i825[2], i825[3], 0, i824, 'foodManager')
  request.r(i825[4], i825[5], 0, i824, 'aiSnakePrefab')
  i824.aiCount = i825[6]
  request.r(i825[7], i825[8], 0, i824, 'playerSnake')
  return i824
}

Deserializers["SnakeClash.Snake.PlayerSnakeController"] = function (request, data, root) {
  var i826 = root || request.c( 'SnakeClash.Snake.PlayerSnakeController' )
  var i827 = data
  i826.moveSpeed = i827[0]
  i826.turnSpeed = i827[1]
  request.r(i827[2], i827[3], 0, i826, 'bodyController')
  i826.snakeName = i827[4]
  i826.initialLevel = i827[5]
  i826.initialSegments = i827[6]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i829 = data
  i828.planeDistance = i829[0]
  i828.referencePixelsPerUnit = i829[1]
  i828.isFallbackOverlay = !!i829[2]
  i828.renderMode = i829[3]
  i828.renderOrder = i829[4]
  i828.sortingLayerName = i829[5]
  i828.sortingOrder = i829[6]
  i828.scaleFactor = i829[7]
  request.r(i829[8], i829[9], 0, i828, 'worldCamera')
  i828.overrideSorting = !!i829[10]
  i828.pixelPerfect = !!i829[11]
  i828.targetDisplay = i829[12]
  i828.overridePixelPerfect = !!i829[13]
  i828.enabled = !!i829[14]
  return i828
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i831 = data
  i830.m_UiScaleMode = i831[0]
  i830.m_ReferencePixelsPerUnit = i831[1]
  i830.m_ScaleFactor = i831[2]
  i830.m_ReferenceResolution = new pc.Vec2( i831[3], i831[4] )
  i830.m_ScreenMatchMode = i831[5]
  i830.m_MatchWidthOrHeight = i831[6]
  i830.m_PhysicalUnit = i831[7]
  i830.m_FallbackScreenDPI = i831[8]
  i830.m_DefaultSpriteDPI = i831[9]
  i830.m_DynamicPixelsPerUnit = i831[10]
  i830.m_PresetInfoIsWorld = !!i831[11]
  return i830
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i833 = data
  i832.m_IgnoreReversedGraphics = !!i833[0]
  i832.m_BlockingObjects = i833[1]
  i832.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i833[2] )
  return i832
}

Deserializers["SnakeClash.UI.ResultPanel"] = function (request, data, root) {
  var i834 = root || request.c( 'SnakeClash.UI.ResultPanel' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'panelRoot')
  request.r(i835[2], i835[3], 0, i834, 'stageClearRoot')
  request.r(i835[4], i835[5], 0, i834, 'swallowedRoot')
  request.r(i835[6], i835[7], 0, i834, 'retryButton')
  request.r(i835[8], i835[9], 0, i834, 'retryButtonRoot')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i837 = data
  i836.cullTransparentMesh = !!i837[0]
  return i836
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Image' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Sprite')
  i838.m_Type = i839[2]
  i838.m_PreserveAspect = !!i839[3]
  i838.m_FillCenter = !!i839[4]
  i838.m_FillMethod = i839[5]
  i838.m_FillAmount = i839[6]
  i838.m_FillClockwise = !!i839[7]
  i838.m_FillOrigin = i839[8]
  i838.m_UseSpriteMesh = !!i839[9]
  i838.m_PixelsPerUnitMultiplier = i839[10]
  request.r(i839[11], i839[12], 0, i838, 'm_Material')
  i838.m_Maskable = !!i839[13]
  i838.m_Color = new pc.Color(i839[14], i839[15], i839[16], i839[17])
  i838.m_RaycastTarget = !!i839[18]
  i838.m_RaycastPadding = new pc.Vec4( i839[19], i839[20], i839[21], i839[22] )
  return i838
}

Deserializers["SnakeClash.UI.VirtualJoystickView"] = function (request, data, root) {
  var i840 = root || request.c( 'SnakeClash.UI.VirtualJoystickView' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'container')
  request.r(i841[2], i841[3], 0, i840, 'joystickHandle')
  i840.joystickLimit = i841[4]
  return i840
}

Deserializers["SnakeClash.UI.OffScreenIndicator"] = function (request, data, root) {
  var i842 = root || request.c( 'SnakeClash.UI.OffScreenIndicator' )
  var i843 = data
  i842.margin = i843[0]
  i842.rotationOffset = i843[1]
  request.r(i843[2], i843[3], 0, i842, 'iconImage')
  request.r(i843[4], i843[5], 0, i842, 'chestIcon')
  request.r(i843[6], i843[7], 0, i842, 'mainCam')
  return i842
}

Deserializers["SnakeClash.UI.HUDController"] = function (request, data, root) {
  var i844 = root || request.c( 'SnakeClash.UI.HUDController' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'coinProgressBar')
  request.r(i845[2], i845[3], 0, i844, 'onboardPanel')
  request.r(i845[4], i845[5], 0, i844, 'onboardChest')
  request.r(i845[6], i845[7], 0, i844, 'tutorHand')
  return i844
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.Slider' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_FillRect')
  request.r(i847[2], i847[3], 0, i846, 'm_HandleRect')
  i846.m_Direction = i847[4]
  i846.m_MinValue = i847[5]
  i846.m_MaxValue = i847[6]
  i846.m_WholeNumbers = !!i847[7]
  i846.m_Value = i847[8]
  i846.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i847[9], i846.m_OnValueChanged)
  i846.m_Navigation = request.d('UnityEngine.UI.Navigation', i847[10], i846.m_Navigation)
  i846.m_Transition = i847[11]
  i846.m_Colors = request.d('UnityEngine.UI.ColorBlock', i847[12], i846.m_Colors)
  i846.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i847[13], i846.m_SpriteState)
  i846.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i847[14], i846.m_AnimationTriggers)
  i846.m_Interactable = !!i847[15]
  request.r(i847[16], i847[17], 0, i846, 'm_TargetGraphic')
  return i846
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i849 = data
  i848.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i849[0], i848.m_PersistentCalls)
  return i848
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i851 = data
  i850.m_Mode = i851[0]
  i850.m_WrapAround = !!i851[1]
  request.r(i851[2], i851[3], 0, i850, 'm_SelectOnUp')
  request.r(i851[4], i851[5], 0, i850, 'm_SelectOnDown')
  request.r(i851[6], i851[7], 0, i850, 'm_SelectOnLeft')
  request.r(i851[8], i851[9], 0, i850, 'm_SelectOnRight')
  return i850
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i853 = data
  i852.m_NormalColor = new pc.Color(i853[0], i853[1], i853[2], i853[3])
  i852.m_HighlightedColor = new pc.Color(i853[4], i853[5], i853[6], i853[7])
  i852.m_PressedColor = new pc.Color(i853[8], i853[9], i853[10], i853[11])
  i852.m_SelectedColor = new pc.Color(i853[12], i853[13], i853[14], i853[15])
  i852.m_DisabledColor = new pc.Color(i853[16], i853[17], i853[18], i853[19])
  i852.m_ColorMultiplier = i853[20]
  i852.m_FadeDuration = i853[21]
  return i852
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_HighlightedSprite')
  request.r(i855[2], i855[3], 0, i854, 'm_PressedSprite')
  request.r(i855[4], i855[5], 0, i854, 'm_SelectedSprite')
  request.r(i855[6], i855[7], 0, i854, 'm_DisabledSprite')
  return i854
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i857 = data
  i856.m_NormalTrigger = i857[0]
  i856.m_HighlightedTrigger = i857[1]
  i856.m_PressedTrigger = i857[2]
  i856.m_SelectedTrigger = i857[3]
  i856.m_DisabledTrigger = i857[4]
  return i856
}

Deserializers["SnakeClash.UI.RotateOnZ"] = function (request, data, root) {
  var i858 = root || request.c( 'SnakeClash.UI.RotateOnZ' )
  var i859 = data
  i858.rotationSpeed = i859[0]
  i858.clockwise = !!i859[1]
  return i858
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i861 = data
  i860.m_hasFontAssetChanged = !!i861[0]
  request.r(i861[1], i861[2], 0, i860, 'm_baseMaterial')
  i860.m_maskOffset = new pc.Vec4( i861[3], i861[4], i861[5], i861[6] )
  i860.m_text = i861[7]
  i860.m_isRightToLeft = !!i861[8]
  request.r(i861[9], i861[10], 0, i860, 'm_fontAsset')
  request.r(i861[11], i861[12], 0, i860, 'm_sharedMaterial')
  var i863 = i861[13]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.m_fontSharedMaterials = i862
  request.r(i861[14], i861[15], 0, i860, 'm_fontMaterial')
  var i865 = i861[16]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i860.m_fontMaterials = i864
  i860.m_fontColor32 = UnityEngine.Color32.ConstructColor(i861[17], i861[18], i861[19], i861[20])
  i860.m_fontColor = new pc.Color(i861[21], i861[22], i861[23], i861[24])
  i860.m_enableVertexGradient = !!i861[25]
  i860.m_colorMode = i861[26]
  i860.m_fontColorGradient = request.d('TMPro.VertexGradient', i861[27], i860.m_fontColorGradient)
  request.r(i861[28], i861[29], 0, i860, 'm_fontColorGradientPreset')
  request.r(i861[30], i861[31], 0, i860, 'm_spriteAsset')
  i860.m_tintAllSprites = !!i861[32]
  request.r(i861[33], i861[34], 0, i860, 'm_StyleSheet')
  i860.m_TextStyleHashCode = i861[35]
  i860.m_overrideHtmlColors = !!i861[36]
  i860.m_faceColor = UnityEngine.Color32.ConstructColor(i861[37], i861[38], i861[39], i861[40])
  i860.m_fontSize = i861[41]
  i860.m_fontSizeBase = i861[42]
  i860.m_fontWeight = i861[43]
  i860.m_enableAutoSizing = !!i861[44]
  i860.m_fontSizeMin = i861[45]
  i860.m_fontSizeMax = i861[46]
  i860.m_fontStyle = i861[47]
  i860.m_HorizontalAlignment = i861[48]
  i860.m_VerticalAlignment = i861[49]
  i860.m_textAlignment = i861[50]
  i860.m_characterSpacing = i861[51]
  i860.m_characterHorizontalScale = i861[52]
  i860.m_wordSpacing = i861[53]
  i860.m_lineSpacing = i861[54]
  i860.m_lineSpacingMax = i861[55]
  i860.m_paragraphSpacing = i861[56]
  i860.m_charWidthMaxAdj = i861[57]
  i860.m_TextWrappingMode = i861[58]
  i860.m_wordWrappingRatios = i861[59]
  i860.m_overflowMode = i861[60]
  request.r(i861[61], i861[62], 0, i860, 'm_linkedTextComponent')
  request.r(i861[63], i861[64], 0, i860, 'parentLinkedComponent')
  i860.m_enableKerning = !!i861[65]
  var i867 = i861[66]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(i867[i + 0]);
  }
  i860.m_ActiveFontFeatures = i866
  i860.m_enableExtraPadding = !!i861[67]
  i860.checkPaddingRequired = !!i861[68]
  i860.m_isRichText = !!i861[69]
  i860.m_parseCtrlCharacters = !!i861[70]
  i860.m_isOrthographic = !!i861[71]
  i860.m_isCullingEnabled = !!i861[72]
  i860.m_horizontalMapping = i861[73]
  i860.m_verticalMapping = i861[74]
  i860.m_uvLineOffset = i861[75]
  i860.m_geometrySortingOrder = i861[76]
  i860.m_IsTextObjectScaleStatic = !!i861[77]
  i860.m_VertexBufferAutoSizeReduction = !!i861[78]
  i860.m_useMaxVisibleDescender = !!i861[79]
  i860.m_pageToDisplay = i861[80]
  i860.m_margin = new pc.Vec4( i861[81], i861[82], i861[83], i861[84] )
  i860.m_isUsingLegacyAnimationComponent = !!i861[85]
  i860.m_isVolumetricText = !!i861[86]
  request.r(i861[87], i861[88], 0, i860, 'm_Material')
  i860.m_EmojiFallbackSupport = !!i861[89]
  i860.m_Maskable = !!i861[90]
  i860.m_Color = new pc.Color(i861[91], i861[92], i861[93], i861[94])
  i860.m_RaycastTarget = !!i861[95]
  i860.m_RaycastPadding = new pc.Vec4( i861[96], i861[97], i861[98], i861[99] )
  return i860
}

Deserializers["SnakeClash.UI.MoveOnYLoop"] = function (request, data, root) {
  var i868 = root || request.c( 'SnakeClash.UI.MoveOnYLoop' )
  var i869 = data
  i868.duration = i869[0]
  i868.amount = i869[1]
  i868.autoStart = !!i869[2]
  return i868
}

Deserializers["SnakeClash.Support.LunaCTA"] = function (request, data, root) {
  var i870 = root || request.c( 'SnakeClash.Support.LunaCTA' )
  var i871 = data
  return i870
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.Button' )
  var i873 = data
  i872.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i873[0], i872.m_OnClick)
  i872.m_Navigation = request.d('UnityEngine.UI.Navigation', i873[1], i872.m_Navigation)
  i872.m_Transition = i873[2]
  i872.m_Colors = request.d('UnityEngine.UI.ColorBlock', i873[3], i872.m_Colors)
  i872.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i873[4], i872.m_SpriteState)
  i872.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i873[5], i872.m_AnimationTriggers)
  i872.m_Interactable = !!i873[6]
  request.r(i873[7], i873[8], 0, i872, 'm_TargetGraphic')
  return i872
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i875 = data
  i874.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i875[0], i874.m_PersistentCalls)
  return i874
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_ObjectArgument')
  i876.m_ObjectArgumentAssemblyTypeName = i877[2]
  i876.m_IntArgument = i877[3]
  i876.m_FloatArgument = i877[4]
  i876.m_StringArgument = i877[5]
  i876.m_BoolArgument = !!i877[6]
  return i876
}

Deserializers["SnakeClash.UI.PulseOnScale"] = function (request, data, root) {
  var i878 = root || request.c( 'SnakeClash.UI.PulseOnScale' )
  var i879 = data
  i878.pulseSpeed = i879[0]
  i878.pulseAmount = i879[1]
  i878.activeOnStart = !!i879[2]
  return i878
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'm_FirstSelected')
  i880.m_sendNavigationEvents = !!i881[2]
  i880.m_DragThreshold = i881[3]
  return i880
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i883 = data
  i882.m_HorizontalAxis = i883[0]
  i882.m_VerticalAxis = i883[1]
  i882.m_SubmitButton = i883[2]
  i882.m_CancelButton = i883[3]
  i882.m_InputActionsPerSecond = i883[4]
  i882.m_RepeatDelay = i883[5]
  i882.m_ForceModuleActive = !!i883[6]
  i882.m_SendPointerHoverToParent = !!i883[7]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i885 = data
  i884.ambientIntensity = i885[0]
  i884.reflectionIntensity = i885[1]
  i884.ambientMode = i885[2]
  i884.ambientLight = new pc.Color(i885[3], i885[4], i885[5], i885[6])
  i884.ambientSkyColor = new pc.Color(i885[7], i885[8], i885[9], i885[10])
  i884.ambientGroundColor = new pc.Color(i885[11], i885[12], i885[13], i885[14])
  i884.ambientEquatorColor = new pc.Color(i885[15], i885[16], i885[17], i885[18])
  i884.fogColor = new pc.Color(i885[19], i885[20], i885[21], i885[22])
  i884.fogEndDistance = i885[23]
  i884.fogStartDistance = i885[24]
  i884.fogDensity = i885[25]
  i884.fog = !!i885[26]
  request.r(i885[27], i885[28], 0, i884, 'skybox')
  i884.fogMode = i885[29]
  var i887 = i885[30]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i887[i + 0]) );
  }
  i884.lightmaps = i886
  i884.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i885[31], i884.lightProbes)
  i884.lightmapsMode = i885[32]
  i884.mixedBakeMode = i885[33]
  i884.environmentLightingMode = i885[34]
  i884.ambientProbe = new pc.SphericalHarmonicsL2(i885[35])
  i884.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i885[36])
  i884.useReferenceAmbientProbe = !!i885[37]
  request.r(i885[38], i885[39], 0, i884, 'customReflection')
  request.r(i885[40], i885[41], 0, i884, 'defaultReflection')
  i884.defaultReflectionMode = i885[42]
  i884.defaultReflectionResolution = i885[43]
  i884.sunLightObjectId = i885[44]
  i884.pixelLightCount = i885[45]
  i884.defaultReflectionHDR = !!i885[46]
  i884.hasLightDataAsset = !!i885[47]
  i884.hasManualGenerate = !!i885[48]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'lightmapColor')
  request.r(i891[2], i891[3], 0, i890, 'lightmapDirection')
  request.r(i891[4], i891[5], 0, i890, 'shadowMask')
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i892 = root || new UnityEngine.LightProbes()
  var i893 = data
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i901 = data
  i900.AdditionalLightsRenderingMode = i901[0]
  i900.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i901[1], i900.LightRenderingMode)
  i900.MainLightRenderingModeValue = i901[2]
  i900.SupportsMainLightShadows = !!i901[3]
  i900.MainLightShadowmapResolutionValue = i901[4]
  i900.SupportsSoftShadows = !!i901[5]
  i900.SoftShadowQualityValue = i901[6]
  i900.ShadowDistance = i901[7]
  i900.ShadowCascadeCount = i901[8]
  i900.Cascade2Split = i901[9]
  i900.Cascade3Split = new pc.Vec2( i901[10], i901[11] )
  i900.Cascade4Split = new pc.Vec3( i901[12], i901[13], i901[14] )
  i900.CascadeBorder = i901[15]
  i900.ShadowDepthBias = i901[16]
  i900.ShadowNormalBias = i901[17]
  i900.RequireDepthTexture = !!i901[18]
  i900.RequireOpaqueTexture = !!i901[19]
  i900.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i901[20], i900.scriptableRendererData)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i903 = data
  i902.Disabled = i903[0]
  i902.PerVertex = i903[1]
  i902.PerPixel = i903[2]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i905 = data
  i904.opaqueLayerMask = i905[0]
  i904.transparentLayerMask = i905[1]
  var i907 = i905[2]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i907[i + 0]) );
  }
  i904.RenderObjectsFeatures = i906
  i904.name = i905[3]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i911 = data
  i910.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i911[0], i910.settings)
  i910.name = i911[1]
  i910.typeName = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i915[i + 0]));
  }
  i912.ShaderCompilationErrors = i914
  i912.name = i913[1]
  i912.guid = i913[2]
  var i917 = i913[3]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i912.shaderDefinedKeywords = i916
  var i919 = i913[4]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i919[i + 0]) );
  }
  i912.passes = i918
  var i921 = i913[5]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i921[i + 0]) );
  }
  i912.usePasses = i920
  var i923 = i913[6]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i923[i + 0]) );
  }
  i912.defaultParameterValues = i922
  request.r(i913[7], i913[8], 0, i912, 'unityFallbackShader')
  i912.readDepth = !!i913[9]
  i912.hasDepthOnlyPass = !!i913[10]
  i912.isCreatedByShaderGraph = !!i913[11]
  i912.disableBatching = !!i913[12]
  i912.compiled = !!i913[13]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i927 = data
  i926.shaderName = i927[0]
  i926.errorMessage = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i932 = root || new pc.UnityShaderPass()
  var i933 = data
  i932.id = i933[0]
  i932.subShaderIndex = i933[1]
  i932.name = i933[2]
  i932.passType = i933[3]
  i932.grabPassTextureName = i933[4]
  i932.usePass = !!i933[5]
  i932.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[6], i932.zTest)
  i932.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[7], i932.zWrite)
  i932.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[8], i932.culling)
  i932.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i933[9], i932.blending)
  i932.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i933[10], i932.alphaBlending)
  i932.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[11], i932.colorWriteMask)
  i932.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[12], i932.offsetUnits)
  i932.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[13], i932.offsetFactor)
  i932.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[14], i932.stencilRef)
  i932.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[15], i932.stencilReadMask)
  i932.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[16], i932.stencilWriteMask)
  i932.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[17], i932.stencilOp)
  i932.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[18], i932.stencilOpFront)
  i932.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i933[19], i932.stencilOpBack)
  var i935 = i933[20]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i935[i + 0]) );
  }
  i932.tags = i934
  var i937 = i933[21]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i932.passDefinedKeywords = i936
  var i939 = i933[22]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i939[i + 0]) );
  }
  i932.passDefinedKeywordGroups = i938
  var i941 = i933[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i941[i + 0]) );
  }
  i932.variants = i940
  var i943 = i933[24]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i943[i + 0]) );
  }
  i932.excludedVariants = i942
  i932.hasDepthReader = !!i933[25]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i945 = data
  i944.val = i945[0]
  i944.name = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i947 = data
  i946.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[0], i946.src)
  i946.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[1], i946.dst)
  i946.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[2], i946.op)
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i949 = data
  i948.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[0], i948.pass)
  i948.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[1], i948.fail)
  i948.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[2], i948.zFail)
  i948.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[3], i948.comp)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i953 = data
  i952.name = i953[0]
  i952.value = i953[1]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i956.keywords = i958
  i956.hasDiscard = !!i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i963 = data
  i962.passId = i963[0]
  i962.subShaderIndex = i963[1]
  var i965 = i963[2]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i962.keywords = i964
  i962.vertexProgram = i963[3]
  i962.fragmentProgram = i963[4]
  i962.exportedForWebGl2 = !!i963[5]
  i962.readDepth = !!i963[6]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'shader')
  i968.pass = i969[2]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i973 = data
  i972.name = i973[0]
  i972.type = i973[1]
  i972.value = new pc.Vec4( i973[2], i973[3], i973[4], i973[5] )
  i972.textureValue = i973[6]
  i972.shaderPropertyFlag = i973[7]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i975 = data
  i974.name = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'texture')
  i974.aabb = i975[3]
  i974.vertices = i975[4]
  i974.triangles = i975[5]
  i974.textureRect = UnityEngine.Rect.MinMaxRect(i975[6], i975[7], i975[8], i975[9])
  i974.packedRect = UnityEngine.Rect.MinMaxRect(i975[10], i975[11], i975[12], i975[13])
  i974.border = new pc.Vec4( i975[14], i975[15], i975[16], i975[17] )
  i974.transparency = i975[18]
  i974.bounds = i975[19]
  i974.pixelsPerUnit = i975[20]
  i974.textureWidth = i975[21]
  i974.textureHeight = i975[22]
  i974.nativeSize = new pc.Vec2( i975[23], i975[24] )
  i974.pivot = new pc.Vec2( i975[25], i975[26] )
  i974.textureRectOffset = new pc.Vec2( i975[27], i975[28] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i977 = data
  i976.name = i977[0]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i979 = data
  i978.name = i979[0]
  i978.wrapMode = i979[1]
  i978.isLooping = !!i979[2]
  i978.length = i979[3]
  var i981 = i979[4]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i981[i + 0]) );
  }
  i978.curves = i980
  var i983 = i979[5]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i983[i + 0]) );
  }
  i978.events = i982
  i978.halfPrecision = !!i979[6]
  i978._frameRate = i979[7]
  i978.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i979[8], i978.localBounds)
  i978.hasMuscleCurves = !!i979[9]
  var i985 = i979[10]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i978.clipMuscleConstant = i984
  i978.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i979[11], i978.clipBindingConstant)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i989 = data
  i988.path = i989[0]
  i988.hash = i989[1]
  i988.componentType = i989[2]
  i988.property = i989[3]
  i988.keys = i989[4]
  var i991 = i989[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i991[i + 0]) );
  }
  i988.objectReferenceKeys = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i995 = data
  i994.time = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'value')
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i999 = data
  i998.functionName = i999[0]
  i998.floatParameter = i999[1]
  i998.intParameter = i999[2]
  i998.stringParameter = i999[3]
  request.r(i999[4], i999[5], 0, i998, 'objectReferenceParameter')
  i998.time = i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1001 = data
  i1000.center = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.extends = new pc.Vec3( i1001[3], i1001[4], i1001[5] )
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1004.genericBindings = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.pptrCurveMapping = i1008
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1011 = data
  i1010.name = i1011[0]
  var i1013 = i1011[1]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1013[i + 0]) );
  }
  i1010.layers = i1012
  var i1015 = i1011[2]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1015[i + 0]) );
  }
  i1010.parameters = i1014
  i1010.animationClips = i1011[3]
  i1010.avatarUnsupported = i1011[4]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.defaultWeight = i1019[1]
  i1018.blendingMode = i1019[2]
  i1018.avatarMask = i1019[3]
  i1018.syncedLayerIndex = i1019[4]
  i1018.syncedLayerAffectsTiming = !!i1019[5]
  i1018.syncedLayers = i1019[6]
  i1018.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1019[7], i1018.stateMachine)
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1021 = data
  i1020.id = i1021[0]
  i1020.name = i1021[1]
  i1020.path = i1021[2]
  var i1023 = i1021[3]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1023[i + 0]) );
  }
  i1020.states = i1022
  var i1025 = i1021[4]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1025[i + 0]) );
  }
  i1020.machines = i1024
  var i1027 = i1021[5]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1027[i + 0]) );
  }
  i1020.entryStateTransitions = i1026
  var i1029 = i1021[6]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1029[i + 0]) );
  }
  i1020.exitStateTransitions = i1028
  var i1031 = i1021[7]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1031[i + 0]) );
  }
  i1020.anyStateTransitions = i1030
  i1020.defaultStateId = i1021[8]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1035 = data
  i1034.id = i1035[0]
  i1034.name = i1035[1]
  i1034.cycleOffset = i1035[2]
  i1034.cycleOffsetParameter = i1035[3]
  i1034.cycleOffsetParameterActive = !!i1035[4]
  i1034.mirror = !!i1035[5]
  i1034.mirrorParameter = i1035[6]
  i1034.mirrorParameterActive = !!i1035[7]
  i1034.motionId = i1035[8]
  i1034.nameHash = i1035[9]
  i1034.fullPathHash = i1035[10]
  i1034.speed = i1035[11]
  i1034.speedParameter = i1035[12]
  i1034.speedParameterActive = !!i1035[13]
  i1034.tag = i1035[14]
  i1034.tagHash = i1035[15]
  i1034.writeDefaultValues = !!i1035[16]
  var i1037 = i1035[17]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 2, i1036, '')
  }
  i1034.behaviours = i1036
  var i1039 = i1035[18]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1039[i + 0]) );
  }
  i1034.transitions = i1038
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1045 = data
  i1044.fullPath = i1045[0]
  i1044.canTransitionToSelf = !!i1045[1]
  i1044.duration = i1045[2]
  i1044.exitTime = i1045[3]
  i1044.hasExitTime = !!i1045[4]
  i1044.hasFixedDuration = !!i1045[5]
  i1044.interruptionSource = i1045[6]
  i1044.offset = i1045[7]
  i1044.orderedInterruption = !!i1045[8]
  i1044.destinationStateId = i1045[9]
  i1044.isExit = !!i1045[10]
  i1044.mute = !!i1045[11]
  i1044.solo = !!i1045[12]
  var i1047 = i1045[13]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1047[i + 0]) );
  }
  i1044.conditions = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1051 = data
  i1050.mode = i1051[0]
  i1050.parameter = i1051[1]
  i1050.threshold = i1051[2]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1057 = data
  i1056.destinationStateId = i1057[0]
  i1056.isExit = !!i1057[1]
  i1056.mute = !!i1057[2]
  i1056.solo = !!i1057[3]
  var i1059 = i1057[4]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1059[i + 0]) );
  }
  i1056.conditions = i1058
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1063 = data
  i1062.defaultBool = !!i1063[0]
  i1062.defaultFloat = i1063[1]
  i1062.defaultInt = i1063[2]
  i1062.name = i1063[3]
  i1062.nameHash = i1063[4]
  i1062.type = i1063[5]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.bytes64 = i1065[1]
  i1064.data = i1065[2]
  return i1064
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1067 = data
  i1066.normalStyle = i1067[0]
  i1066.normalSpacingOffset = i1067[1]
  i1066.boldStyle = i1067[2]
  i1066.boldSpacing = i1067[3]
  i1066.italicStyle = i1067[4]
  i1066.tabSize = i1067[5]
  request.r(i1067[6], i1067[7], 0, i1066, 'atlas')
  i1066.m_SourceFontFileGUID = i1067[8]
  i1066.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1067[9], i1066.m_CreationSettings)
  request.r(i1067[10], i1067[11], 0, i1066, 'm_SourceFontFile')
  i1066.m_SourceFontFilePath = i1067[12]
  i1066.m_AtlasPopulationMode = i1067[13]
  i1066.InternalDynamicOS = !!i1067[14]
  var i1069 = i1067[15]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('UnityEngine.TextCore.Glyph', i1069[i + 0]));
  }
  i1066.m_GlyphTable = i1068
  var i1071 = i1067[16]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.add(request.d('TMPro.TMP_Character', i1071[i + 0]));
  }
  i1066.m_CharacterTable = i1070
  var i1073 = i1067[17]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1066.m_AtlasTextures = i1072
  i1066.m_AtlasTextureIndex = i1067[18]
  i1066.m_IsMultiAtlasTexturesEnabled = !!i1067[19]
  i1066.m_GetFontFeatures = !!i1067[20]
  i1066.m_ClearDynamicDataOnBuild = !!i1067[21]
  i1066.m_AtlasWidth = i1067[22]
  i1066.m_AtlasHeight = i1067[23]
  i1066.m_AtlasPadding = i1067[24]
  i1066.m_AtlasRenderMode = i1067[25]
  var i1075 = i1067[26]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('UnityEngine.TextCore.GlyphRect', i1075[i + 0]));
  }
  i1066.m_UsedGlyphRects = i1074
  var i1077 = i1067[27]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('UnityEngine.TextCore.GlyphRect', i1077[i + 0]));
  }
  i1066.m_FreeGlyphRects = i1076
  i1066.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1067[28], i1066.m_FontFeatureTable)
  i1066.m_ShouldReimportFontFeatures = !!i1067[29]
  var i1079 = i1067[30]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 1, i1078, '')
  }
  i1066.m_FallbackFontAssetTable = i1078
  var i1081 = i1067[31]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('TMPro.TMP_FontWeightPair', i1081[i + 0]) );
  }
  i1066.m_FontWeightTable = i1080
  var i1083 = i1067[32]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('TMPro.TMP_FontWeightPair', i1083[i + 0]) );
  }
  i1066.fontWeights = i1082
  i1066.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1067[33], i1066.m_fontInfo)
  var i1085 = i1067[34]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('TMPro.TMP_Glyph', i1085[i + 0]));
  }
  i1066.m_glyphInfoList = i1084
  i1066.m_KerningTable = request.d('TMPro.KerningTable', i1067[35], i1066.m_KerningTable)
  var i1087 = i1067[36]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 1, i1086, '')
  }
  i1066.fallbackFontAssets = i1086
  i1066.m_Version = i1067[37]
  i1066.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1067[38], i1066.m_FaceInfo)
  request.r(i1067[39], i1067[40], 0, i1066, 'm_Material')
  return i1066
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1089 = data
  i1088.sourceFontFileName = i1089[0]
  i1088.sourceFontFileGUID = i1089[1]
  i1088.faceIndex = i1089[2]
  i1088.pointSizeSamplingMode = i1089[3]
  i1088.pointSize = i1089[4]
  i1088.padding = i1089[5]
  i1088.paddingMode = i1089[6]
  i1088.packingMode = i1089[7]
  i1088.atlasWidth = i1089[8]
  i1088.atlasHeight = i1089[9]
  i1088.characterSetSelectionMode = i1089[10]
  i1088.characterSequence = i1089[11]
  i1088.referencedFontAssetGUID = i1089[12]
  i1088.referencedTextAssetGUID = i1089[13]
  i1088.fontStyle = i1089[14]
  i1088.fontStyleModifier = i1089[15]
  i1088.renderMode = i1089[16]
  i1088.includeFontFeatures = !!i1089[17]
  return i1088
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1093 = data
  i1092.m_Index = i1093[0]
  i1092.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1093[1], i1092.m_Metrics)
  i1092.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1093[2], i1092.m_GlyphRect)
  i1092.m_Scale = i1093[3]
  i1092.m_AtlasIndex = i1093[4]
  i1092.m_ClassDefinitionType = i1093[5]
  return i1092
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1095 = data
  i1094.m_Width = i1095[0]
  i1094.m_Height = i1095[1]
  i1094.m_HorizontalBearingX = i1095[2]
  i1094.m_HorizontalBearingY = i1095[3]
  i1094.m_HorizontalAdvance = i1095[4]
  return i1094
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1097 = data
  i1096.m_X = i1097[0]
  i1096.m_Y = i1097[1]
  i1096.m_Width = i1097[2]
  i1096.m_Height = i1097[3]
  return i1096
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.TMP_Character' )
  var i1101 = data
  i1100.m_ElementType = i1101[0]
  i1100.m_Unicode = i1101[1]
  i1100.m_GlyphIndex = i1101[2]
  i1100.m_Scale = i1101[3]
  return i1100
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('TMPro.MultipleSubstitutionRecord', i1109[i + 0]));
  }
  i1106.m_MultipleSubstitutionRecords = i1108
  var i1111 = i1107[1]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('TMPro.LigatureSubstitutionRecord', i1111[i + 0]));
  }
  i1106.m_LigatureSubstitutionRecords = i1110
  var i1113 = i1107[2]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1113[i + 0]));
  }
  i1106.m_GlyphPairAdjustmentRecords = i1112
  var i1115 = i1107[3]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1115[i + 0]));
  }
  i1106.m_MarkToBaseAdjustmentRecords = i1114
  var i1117 = i1107[4]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1117[i + 0]));
  }
  i1106.m_MarkToMarkAdjustmentRecords = i1116
  return i1106
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1121 = data
  i1120.m_TargetGlyphID = i1121[0]
  i1120.m_SubstituteGlyphIDs = i1121[1]
  return i1120
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1125 = data
  i1124.m_ComponentGlyphIDs = i1125[0]
  i1124.m_LigatureGlyphID = i1125[1]
  return i1124
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1129 = data
  i1128.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1129[0], i1128.m_FirstAdjustmentRecord)
  i1128.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1129[1], i1128.m_SecondAdjustmentRecord)
  i1128.m_FeatureLookupFlags = i1129[2]
  return i1128
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1131 = data
  i1130.m_GlyphIndex = i1131[0]
  i1130.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1131[1], i1130.m_GlyphValueRecord)
  return i1130
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1133 = data
  i1132.m_XPlacement = i1133[0]
  i1132.m_YPlacement = i1133[1]
  i1132.m_XAdvance = i1133[2]
  i1132.m_YAdvance = i1133[3]
  return i1132
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1137 = data
  i1136.m_BaseGlyphID = i1137[0]
  i1136.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1137[1], i1136.m_BaseGlyphAnchorPoint)
  i1136.m_MarkGlyphID = i1137[2]
  i1136.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1137[3], i1136.m_MarkPositionAdjustment)
  return i1136
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1141 = data
  i1140.m_BaseMarkGlyphID = i1141[0]
  i1140.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1141[1], i1140.m_BaseMarkGlyphAnchorPoint)
  i1140.m_CombiningMarkGlyphID = i1141[2]
  i1140.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1141[3], i1140.m_CombiningMarkPositionAdjustment)
  return i1140
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'regularTypeface')
  request.r(i1147[2], i1147[3], 0, i1146, 'italicTypeface')
  return i1146
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1149 = data
  i1148.Name = i1149[0]
  i1148.PointSize = i1149[1]
  i1148.Scale = i1149[2]
  i1148.CharacterCount = i1149[3]
  i1148.LineHeight = i1149[4]
  i1148.Baseline = i1149[5]
  i1148.Ascender = i1149[6]
  i1148.CapHeight = i1149[7]
  i1148.Descender = i1149[8]
  i1148.CenterLine = i1149[9]
  i1148.SuperscriptOffset = i1149[10]
  i1148.SubscriptOffset = i1149[11]
  i1148.SubSize = i1149[12]
  i1148.Underline = i1149[13]
  i1148.UnderlineThickness = i1149[14]
  i1148.strikethrough = i1149[15]
  i1148.strikethroughThickness = i1149[16]
  i1148.TabWidth = i1149[17]
  i1148.Padding = i1149[18]
  i1148.AtlasWidth = i1149[19]
  i1148.AtlasHeight = i1149[20]
  return i1148
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1153 = data
  i1152.id = i1153[0]
  i1152.x = i1153[1]
  i1152.y = i1153[2]
  i1152.width = i1153[3]
  i1152.height = i1153[4]
  i1152.xOffset = i1153[5]
  i1152.yOffset = i1153[6]
  i1152.xAdvance = i1153[7]
  i1152.scale = i1153[8]
  return i1152
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.KerningTable' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('TMPro.KerningPair', i1157[i + 0]));
  }
  i1154.kerningPairs = i1156
  return i1154
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.KerningPair' )
  var i1161 = data
  i1160.xOffset = i1161[0]
  i1160.m_FirstGlyph = i1161[1]
  i1160.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1161[2], i1160.m_FirstGlyphAdjustments)
  i1160.m_SecondGlyph = i1161[3]
  i1160.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1161[4], i1160.m_SecondGlyphAdjustments)
  i1160.m_IgnoreSpacingAdjustments = !!i1161[5]
  return i1160
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1163 = data
  i1162.m_FaceIndex = i1163[0]
  i1162.m_FamilyName = i1163[1]
  i1162.m_StyleName = i1163[2]
  i1162.m_PointSize = i1163[3]
  i1162.m_Scale = i1163[4]
  i1162.m_UnitsPerEM = i1163[5]
  i1162.m_LineHeight = i1163[6]
  i1162.m_AscentLine = i1163[7]
  i1162.m_CapLine = i1163[8]
  i1162.m_MeanLine = i1163[9]
  i1162.m_Baseline = i1163[10]
  i1162.m_DescentLine = i1163[11]
  i1162.m_SuperscriptOffset = i1163[12]
  i1162.m_SuperscriptSize = i1163[13]
  i1162.m_SubscriptOffset = i1163[14]
  i1162.m_SubscriptSize = i1163[15]
  i1162.m_UnderlineOffset = i1163[16]
  i1162.m_UnderlineThickness = i1163[17]
  i1162.m_StrikethroughOffset = i1163[18]
  i1162.m_StrikethroughThickness = i1163[19]
  i1162.m_TabWidth = i1163[20]
  return i1162
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_Settings' )
  var i1165 = data
  i1164.assetVersion = i1165[0]
  i1164.m_TextWrappingMode = i1165[1]
  i1164.m_enableKerning = !!i1165[2]
  var i1167 = i1165[3]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(i1167[i + 0]);
  }
  i1164.m_ActiveFontFeatures = i1166
  i1164.m_enableExtraPadding = !!i1165[4]
  i1164.m_enableTintAllSprites = !!i1165[5]
  i1164.m_enableParseEscapeCharacters = !!i1165[6]
  i1164.m_EnableRaycastTarget = !!i1165[7]
  i1164.m_GetFontFeaturesAtRuntime = !!i1165[8]
  i1164.m_missingGlyphCharacter = i1165[9]
  i1164.m_ClearDynamicDataOnBuild = !!i1165[10]
  i1164.m_warningsDisabled = !!i1165[11]
  request.r(i1165[12], i1165[13], 0, i1164, 'm_defaultFontAsset')
  i1164.m_defaultFontAssetPath = i1165[14]
  i1164.m_defaultFontSize = i1165[15]
  i1164.m_defaultAutoSizeMinRatio = i1165[16]
  i1164.m_defaultAutoSizeMaxRatio = i1165[17]
  i1164.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1165[18], i1165[19] )
  i1164.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1165[20], i1165[21] )
  i1164.m_autoSizeTextContainer = !!i1165[22]
  i1164.m_IsTextObjectScaleStatic = !!i1165[23]
  var i1169 = i1165[24]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 1, i1168, '')
  }
  i1164.m_fallbackFontAssets = i1168
  i1164.m_matchMaterialPreset = !!i1165[25]
  i1164.m_HideSubTextObjects = !!i1165[26]
  request.r(i1165[27], i1165[28], 0, i1164, 'm_defaultSpriteAsset')
  i1164.m_defaultSpriteAssetPath = i1165[29]
  i1164.m_enableEmojiSupport = !!i1165[30]
  i1164.m_MissingCharacterSpriteUnicode = i1165[31]
  var i1171 = i1165[32]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 1, i1170, '')
  }
  i1164.m_EmojiFallbackTextAssets = i1170
  i1164.m_defaultColorGradientPresetsPath = i1165[33]
  request.r(i1165[34], i1165[35], 0, i1164, 'm_defaultStyleSheet')
  i1164.m_StyleSheetsResourcePath = i1165[36]
  request.r(i1165[37], i1165[38], 0, i1164, 'm_leadingCharacters')
  request.r(i1165[39], i1165[40], 0, i1164, 'm_followingCharacters')
  i1164.m_UseModernHangulLineBreakingRules = !!i1165[41]
  return i1164
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'spriteSheet')
  var i1177 = i1175[2]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.TMP_Sprite', i1177[i + 0]));
  }
  i1174.spriteInfoList = i1176
  var i1179 = i1175[3]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 1, i1178, '')
  }
  i1174.fallbackSpriteAssets = i1178
  var i1181 = i1175[4]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.TMP_SpriteCharacter', i1181[i + 0]));
  }
  i1174.m_SpriteCharacterTable = i1180
  var i1183 = i1175[5]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('TMPro.TMP_SpriteGlyph', i1183[i + 0]));
  }
  i1174.m_GlyphTable = i1182
  i1174.m_Version = i1175[6]
  i1174.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1175[7], i1174.m_FaceInfo)
  request.r(i1175[8], i1175[9], 0, i1174, 'm_Material')
  return i1174
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1187 = data
  i1186.name = i1187[0]
  i1186.hashCode = i1187[1]
  i1186.unicode = i1187[2]
  i1186.pivot = new pc.Vec2( i1187[3], i1187[4] )
  request.r(i1187[5], i1187[6], 0, i1186, 'sprite')
  i1186.id = i1187[7]
  i1186.x = i1187[8]
  i1186.y = i1187[9]
  i1186.width = i1187[10]
  i1186.height = i1187[11]
  i1186.xOffset = i1187[12]
  i1186.yOffset = i1187[13]
  i1186.xAdvance = i1187[14]
  i1186.scale = i1187[15]
  return i1186
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1193 = data
  i1192.m_Name = i1193[0]
  i1192.m_ElementType = i1193[1]
  i1192.m_Unicode = i1193[2]
  i1192.m_GlyphIndex = i1193[3]
  i1192.m_Scale = i1193[4]
  return i1192
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'sprite')
  i1196.m_Index = i1197[2]
  i1196.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1197[3], i1196.m_Metrics)
  i1196.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1197[4], i1196.m_GlyphRect)
  i1196.m_Scale = i1197[5]
  i1196.m_AtlasIndex = i1197[6]
  i1196.m_ClassDefinitionType = i1197[7]
  return i1196
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.TMP_Style', i1201[i + 0]));
  }
  i1198.m_StyleList = i1200
  return i1198
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_Style' )
  var i1205 = data
  i1204.m_Name = i1205[0]
  i1204.m_HashCode = i1205[1]
  i1204.m_OpeningDefinition = i1205[2]
  i1204.m_ClosingDefinition = i1205[3]
  i1204.m_OpeningTagArray = i1205[4]
  i1204.m_ClosingTagArray = i1205[5]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1209[i + 0]) );
  }
  i1206.files = i1208
  i1206.componentToPrefabIds = i1207[1]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1213 = data
  i1212.path = i1213[0]
  request.r(i1213[1], i1213[2], 0, i1212, 'unityObject')
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1215 = data
  var i1217 = i1215[0]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1217[i + 0]) );
  }
  i1214.scriptsExecutionOrder = i1216
  var i1219 = i1215[1]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1219[i + 0]) );
  }
  i1214.sortingLayers = i1218
  var i1221 = i1215[2]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1221[i + 0]) );
  }
  i1214.cullingLayers = i1220
  i1214.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1215[3], i1214.timeSettings)
  i1214.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1215[4], i1214.physicsSettings)
  i1214.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1215[5], i1214.physics2DSettings)
  i1214.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1215[6], i1214.qualitySettings)
  i1214.enableRealtimeShadows = !!i1215[7]
  i1214.enableAutoInstancing = !!i1215[8]
  i1214.enableStaticBatching = !!i1215[9]
  i1214.enableDynamicBatching = !!i1215[10]
  i1214.lightmapEncodingQuality = i1215[11]
  i1214.desiredColorSpace = i1215[12]
  var i1223 = i1215[13]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( i1223[i + 0] );
  }
  i1214.allTags = i1222
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1227 = data
  i1226.name = i1227[0]
  i1226.value = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1231 = data
  i1230.id = i1231[0]
  i1230.name = i1231[1]
  i1230.value = i1231[2]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1235 = data
  i1234.id = i1235[0]
  i1234.name = i1235[1]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1237 = data
  i1236.fixedDeltaTime = i1237[0]
  i1236.maximumDeltaTime = i1237[1]
  i1236.timeScale = i1237[2]
  i1236.maximumParticleTimestep = i1237[3]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1239 = data
  i1238.gravity = new pc.Vec3( i1239[0], i1239[1], i1239[2] )
  i1238.defaultSolverIterations = i1239[3]
  i1238.bounceThreshold = i1239[4]
  i1238.autoSyncTransforms = !!i1239[5]
  i1238.autoSimulation = !!i1239[6]
  var i1241 = i1239[7]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1241[i + 0]) );
  }
  i1238.collisionMatrix = i1240
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1245 = data
  i1244.enabled = !!i1245[0]
  i1244.layerId = i1245[1]
  i1244.otherLayerId = i1245[2]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1247 = data
  request.r(i1247[0], i1247[1], 0, i1246, 'material')
  i1246.gravity = new pc.Vec2( i1247[2], i1247[3] )
  i1246.positionIterations = i1247[4]
  i1246.velocityIterations = i1247[5]
  i1246.velocityThreshold = i1247[6]
  i1246.maxLinearCorrection = i1247[7]
  i1246.maxAngularCorrection = i1247[8]
  i1246.maxTranslationSpeed = i1247[9]
  i1246.maxRotationSpeed = i1247[10]
  i1246.baumgarteScale = i1247[11]
  i1246.baumgarteTOIScale = i1247[12]
  i1246.timeToSleep = i1247[13]
  i1246.linearSleepTolerance = i1247[14]
  i1246.angularSleepTolerance = i1247[15]
  i1246.defaultContactOffset = i1247[16]
  i1246.autoSimulation = !!i1247[17]
  i1246.queriesHitTriggers = !!i1247[18]
  i1246.queriesStartInColliders = !!i1247[19]
  i1246.callbacksOnDisable = !!i1247[20]
  i1246.reuseCollisionCallbacks = !!i1247[21]
  i1246.autoSyncTransforms = !!i1247[22]
  var i1249 = i1247[23]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1249[i + 0]) );
  }
  i1246.collisionMatrix = i1248
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1253 = data
  i1252.enabled = !!i1253[0]
  i1252.layerId = i1253[1]
  i1252.otherLayerId = i1253[2]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1257[i + 0]) );
  }
  i1254.qualityLevels = i1256
  var i1259 = i1255[1]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( i1259[i + 0] );
  }
  i1254.names = i1258
  i1254.shadows = i1255[2]
  i1254.anisotropicFiltering = i1255[3]
  i1254.antiAliasing = i1255[4]
  i1254.lodBias = i1255[5]
  i1254.shadowCascades = i1255[6]
  i1254.shadowDistance = i1255[7]
  i1254.shadowmaskMode = i1255[8]
  i1254.shadowProjection = i1255[9]
  i1254.shadowResolution = i1255[10]
  i1254.softParticles = !!i1255[11]
  i1254.softVegetation = !!i1255[12]
  i1254.activeColorSpace = i1255[13]
  i1254.desiredColorSpace = i1255[14]
  i1254.masterTextureLimit = i1255[15]
  i1254.maxQueuedFrames = i1255[16]
  i1254.particleRaycastBudget = i1255[17]
  i1254.pixelLightCount = i1255[18]
  i1254.realtimeReflectionProbes = !!i1255[19]
  i1254.shadowCascade2Split = i1255[20]
  i1254.shadowCascade4Split = new pc.Vec3( i1255[21], i1255[22], i1255[23] )
  i1254.streamingMipmapsActive = !!i1255[24]
  i1254.vSyncCount = i1255[25]
  i1254.asyncUploadBufferSize = i1255[26]
  i1254.asyncUploadTimeSlice = i1255[27]
  i1254.billboardsFaceCameraPosition = !!i1255[28]
  i1254.shadowNearPlaneOffset = i1255[29]
  i1254.streamingMipmapsMemoryBudget = i1255[30]
  i1254.maximumLODLevel = i1255[31]
  i1254.streamingMipmapsAddAllCameras = !!i1255[32]
  i1254.streamingMipmapsMaxLevelReduction = i1255[33]
  i1254.streamingMipmapsRenderersPerFrame = i1255[34]
  i1254.resolutionScalingFixedDPIFactor = i1255[35]
  i1254.streamingMipmapsMaxFileIORequests = i1255[36]
  i1254.currentQualityLevel = i1255[37]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1265 = data
  i1264.weight = i1265[0]
  i1264.vertices = i1265[1]
  i1264.normals = i1265[2]
  i1264.tangents = i1265[3]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i1267 = data
  i1266.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1267[0], i1266.Event)
  i1266.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i1267[1], i1266.filterSettings)
  i1266.overrideMaterialId = i1267[2]
  i1266.overrideMaterialPassIndex = i1267[3]
  i1266.overrideShaderId = i1267[4]
  i1266.overrideShaderPassIndex = i1267[5]
  i1266.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1267[6], i1266.overrideMode)
  i1266.overrideDepthState = !!i1267[7]
  i1266.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1267[8], i1266.depthCompareFunction)
  i1266.enableWrite = !!i1267[9]
  i1266.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i1267[10], i1266.stencilSettings)
  i1266.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i1267[11], i1266.cameraSettings)
  return i1266
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1269 = data
  i1268.m_XCoordinate = i1269[0]
  i1268.m_YCoordinate = i1269[1]
  return i1268
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1271 = data
  i1270.m_XPositionAdjustment = i1271[0]
  i1270.m_YPositionAdjustment = i1271[1]
  return i1270
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1273 = data
  i1272.xPlacement = i1273[0]
  i1272.yPlacement = i1273[1]
  i1272.xAdvance = i1273[2]
  i1272.yAdvance = i1273[3]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i1275 = data
  i1274.Value = i1275[0]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i1277 = data
  i1276.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1277[0], i1276.RenderQueueType)
  i1276.LayerMask = i1277[1]
  var i1279 = i1277[2]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( i1279[i + 0] );
  }
  i1276.PassNames = i1278
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i1281 = data
  i1280.overrideStencilState = !!i1281[0]
  i1280.stencilReference = i1281[1]
  i1280.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1281[2], i1280.stencilCompareFunctionValue)
  i1280.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1281[3], i1280.passOperationValue)
  i1280.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1281[4], i1280.failOperationValue)
  i1280.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1281[5], i1280.zFailOperationValue)
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i1283 = data
  i1282.overrideCamera = !!i1283[0]
  i1282.restoreCamera = !!i1283[1]
  i1282.offset = new pc.Vec4( i1283[2], i1283[3], i1283[4], i1283[5] )
  i1282.cameraFieldOfView = i1283[6]
  return i1282
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[16],"69":[25],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[25],"92":[8],"93":[94],"95":[94],"38":[17],"96":[17],"97":[25],"27":[25],"98":[99],"100":[17],"101":[43,17],"102":[8],"103":[43,17],"104":[17],"105":[17],"14":[8,17],"50":[17,43],"106":[107],"108":[107],"109":[107],"110":[17],"111":[17],"40":[38],"44":[43,17],"112":[17],"39":[38],"113":[17],"114":[17],"115":[17],"116":[17],"117":[17],"118":[17],"119":[17],"120":[17],"121":[17],"122":[43,17],"123":[17],"124":[17],"125":[17],"48":[17],"126":[43,17],"127":[17],"128":[54],"129":[54],"55":[54],"130":[54],"131":[25],"132":[25]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","SnakeClash.Snake.SnakeSegmentNode","UnityEngine.GameObject","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","SnakeClash.Resources.FoodItem","SnakeClash.Resources.CoinPickup","SnakeClash.Resources.ChestPickup","UnityEngine.Animator","TMPro.TextMeshPro","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","SnakeClash.Snake.AISnakeController","SnakeClash.Snake.SnakeBodyController","SnakeClash.Snake.AISnakeBrain","SnakeClash.Snake.SnakeCollisionResolver","SnakeClash.UI.SnakeLevelUI","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","SnakeClash.Support.ArenaCameraFollow","SnakeClash.Core.GameManager","SnakeClash.Snake.PlayerSnakeController","SnakeClash.Resources.FoodManager","SnakeClash.Resources.CoinManager","SnakeClash.Resources.ChestManager","SnakeClash.UI.OffScreenIndicator","SnakeClash.Core.AudioManager","UnityEngine.AudioClip","SnakeClash.Core.ArenaManager","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","SnakeClash.UI.ResultPanel","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","SnakeClash.UI.VirtualJoystickView","SnakeClash.UI.HUDController","UnityEngine.UI.Slider","SnakeClash.UI.RotateOnZ","TMPro.TextMeshProUGUI","SnakeClash.UI.MoveOnYLoop","SnakeClash.Support.LunaCTA","SnakeClash.UI.PulseOnScale","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.71f1";

Deserializers.productName = "snake-clash-playad-unity";

Deserializers.lunaInitializationTime = "03/28/2026 19:06:31";

Deserializers.lunaDaysRunning = "0.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "35188";

Deserializers.projectId = "463120e2abeea4803a204fae3acb7ca9";

Deserializers.packagesInfo = "com.unity.render-pipelines.core: 17.3.0\ncom.unity.render-pipelines.universal: 17.3.0\ncom.unity.timeline: 1.8.11\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1688";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3973";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.snake-clash-playad-unity";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "60cc10d2-8b2b-44ce-a8b3-1f84e93288a5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

