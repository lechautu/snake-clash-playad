var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointSpring' )
  var i439 = data
  i438.spring = i439[0]
  i438.damper = i439[1]
  i438.targetPosition = i439[2]
  return i438
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointMotor' )
  var i441 = data
  i440.m_TargetVelocity = i441[0]
  i440.m_Force = i441[1]
  i440.m_FreeSpin = i441[2]
  return i440
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointLimits' )
  var i443 = data
  i442.m_Min = i443[0]
  i442.m_Max = i443[1]
  i442.m_Bounciness = i443[2]
  i442.m_BounceMinVelocity = i443[3]
  i442.m_ContactDistance = i443[4]
  i442.minBounce = i443[5]
  i442.maxBounce = i443[6]
  return i442
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointDrive' )
  var i445 = data
  i444.m_PositionSpring = i445[0]
  i444.m_PositionDamper = i445[1]
  i444.m_MaximumForce = i445[2]
  i444.m_UseAcceleration = i445[3]
  return i444
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i447 = data
  i446.m_Spring = i447[0]
  i446.m_Damper = i447[1]
  return i446
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i449 = data
  i448.m_Limit = i449[0]
  i448.m_Bounciness = i449[1]
  i448.m_ContactDistance = i449[2]
  return i448
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i451 = data
  i450.m_ExtremumSlip = i451[0]
  i450.m_ExtremumValue = i451[1]
  i450.m_AsymptoteSlip = i451[2]
  i450.m_AsymptoteValue = i451[3]
  i450.m_Stiffness = i451[4]
  return i450
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i453 = data
  i452.m_LowerAngle = i453[0]
  i452.m_UpperAngle = i453[1]
  return i452
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i455 = data
  i454.m_MotorSpeed = i455[0]
  i454.m_MaximumMotorTorque = i455[1]
  return i454
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i457 = data
  i456.m_DampingRatio = i457[0]
  i456.m_Frequency = i457[1]
  i456.m_Angle = i457[2]
  return i456
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i459 = data
  i458.m_LowerTranslation = i459[0]
  i458.m_UpperTranslation = i459[1]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i460 = root || new pc.UnityMaterial()
  var i461 = data
  i460.name = i461[0]
  request.r(i461[1], i461[2], 0, i460, 'shader')
  i460.renderQueue = i461[3]
  i460.enableInstancing = !!i461[4]
  var i463 = i461[5]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i463[i + 0]) );
  }
  i460.floatParameters = i462
  var i465 = i461[6]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i465[i + 0]) );
  }
  i460.colorParameters = i464
  var i467 = i461[7]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i467[i + 0]) );
  }
  i460.vectorParameters = i466
  var i469 = i461[8]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i469[i + 0]) );
  }
  i460.textureParameters = i468
  var i471 = i461[9]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i471[i + 0]) );
  }
  i460.materialFlags = i470
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i475 = data
  i474.name = i475[0]
  i474.value = i475[1]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i479 = data
  i478.name = i479[0]
  i478.value = new pc.Color(i479[1], i479[2], i479[3], i479[4])
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i483 = data
  i482.name = i483[0]
  i482.value = new pc.Vec4( i483[1], i483[2], i483[3], i483[4] )
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i487 = data
  i486.name = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'value')
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i491 = data
  i490.name = i491[0]
  i490.enabled = !!i491[1]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i493 = data
  i492.name = i493[0]
  i492.width = i493[1]
  i492.height = i493[2]
  i492.mipmapCount = i493[3]
  i492.anisoLevel = i493[4]
  i492.filterMode = i493[5]
  i492.hdr = !!i493[6]
  i492.format = i493[7]
  i492.wrapMode = i493[8]
  i492.alphaIsTransparency = !!i493[9]
  i492.alphaSource = i493[10]
  i492.graphicsFormat = i493[11]
  i492.sRGBTexture = !!i493[12]
  i492.desiredColorSpace = i493[13]
  i492.wrapU = i493[14]
  i492.wrapV = i493[15]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i495 = data
  i494.name = i495[0]
  i494.atlasId = i495[1]
  i494.mipmapCount = i495[2]
  i494.hdr = !!i495[3]
  i494.size = i495[4]
  i494.anisoLevel = i495[5]
  i494.filterMode = i495[6]
  var i497 = i495[7]
  var i496 = []
  for(var i = 0; i < i497.length; i += 4) {
    i496.push( UnityEngine.Rect.MinMaxRect(i497[i + 0], i497[i + 1], i497[i + 2], i497[i + 3]) );
  }
  i494.rects = i496
  i494.wrapU = i495[8]
  i494.wrapV = i495[9]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i501 = data
  i500.name = i501[0]
  i500.index = i501[1]
  i500.startup = !!i501[2]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i503 = data
  i502.aspect = i503[0]
  i502.orthographic = !!i503[1]
  i502.orthographicSize = i503[2]
  i502.backgroundColor = new pc.Color(i503[3], i503[4], i503[5], i503[6])
  i502.nearClipPlane = i503[7]
  i502.farClipPlane = i503[8]
  i502.fieldOfView = i503[9]
  i502.depth = i503[10]
  i502.clearFlags = i503[11]
  i502.cullingMask = i503[12]
  i502.rect = i503[13]
  request.r(i503[14], i503[15], 0, i502, 'targetTexture')
  i502.usePhysicalProperties = !!i503[16]
  i502.focalLength = i503[17]
  i502.sensorSize = new pc.Vec2( i503[18], i503[19] )
  i502.lensShift = new pc.Vec2( i503[20], i503[21] )
  i502.gateFit = i503[22]
  i502.commandBufferCount = i503[23]
  i502.cameraType = i503[24]
  i502.enabled = !!i503[25]
  return i502
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i505 = data
  i504.m_RenderShadows = !!i505[0]
  i504.m_RequiresDepthTextureOption = i505[1]
  i504.m_RequiresOpaqueTextureOption = i505[2]
  i504.m_CameraType = i505[3]
  var i507 = i505[4]
  var i506 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i507.length; i += 2) {
  request.r(i507[i + 0], i507[i + 1], 1, i506, '')
  }
  i504.m_Cameras = i506
  i504.m_RendererIndex = i505[5]
  i504.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i505[6] )
  request.r(i505[7], i505[8], 0, i504, 'm_VolumeTrigger')
  i504.m_VolumeFrameworkUpdateModeOption = i505[9]
  i504.m_RenderPostProcessing = !!i505[10]
  i504.m_Antialiasing = i505[11]
  i504.m_AntialiasingQuality = i505[12]
  i504.m_StopNaN = !!i505[13]
  i504.m_Dithering = !!i505[14]
  i504.m_ClearDepth = !!i505[15]
  i504.m_AllowXRRendering = !!i505[16]
  i504.m_AllowHDROutput = !!i505[17]
  i504.m_UseScreenCoordOverride = !!i505[18]
  i504.m_ScreenSizeOverride = new pc.Vec4( i505[19], i505[20], i505[21], i505[22] )
  i504.m_ScreenCoordScaleBias = new pc.Vec4( i505[23], i505[24], i505[25], i505[26] )
  i504.m_RequiresDepthTexture = !!i505[27]
  i504.m_RequiresColorTexture = !!i505[28]
  i504.m_Version = i505[29]
  i504.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i505[30], i504.m_TaaSettings)
  return i504
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i511 = data
  i510.m_Quality = i511[0]
  i510.m_FrameInfluence = i511[1]
  i510.m_JitterScale = i511[2]
  i510.m_MipBias = i511[3]
  i510.m_VarianceClampScale = i511[4]
  i510.m_ContrastAdaptiveSharpening = i511[5]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i513 = data
  i512.name = i513[0]
  i512.tagId = i513[1]
  i512.enabled = !!i513[2]
  i512.isStatic = !!i513[3]
  i512.layer = i513[4]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i515 = data
  i514.type = i515[0]
  i514.color = new pc.Color(i515[1], i515[2], i515[3], i515[4])
  i514.cullingMask = i515[5]
  i514.intensity = i515[6]
  i514.range = i515[7]
  i514.spotAngle = i515[8]
  i514.shadows = i515[9]
  i514.shadowNormalBias = i515[10]
  i514.shadowBias = i515[11]
  i514.shadowStrength = i515[12]
  i514.shadowResolution = i515[13]
  i514.lightmapBakeType = i515[14]
  i514.renderMode = i515[15]
  request.r(i515[16], i515[17], 0, i514, 'cookie')
  i514.cookieSize = i515[18]
  i514.shadowNearPlane = i515[19]
  i514.occlusionMaskChannel = i515[20]
  i514.enabled = !!i515[21]
  return i514
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i517 = data
  i516.m_Version = i517[0]
  i516.m_UsePipelineSettings = !!i517[1]
  i516.m_AdditionalLightsShadowResolutionTier = i517[2]
  i516.m_LightLayerMask = i517[3]
  i516.m_RenderingLayers = i517[4]
  i516.m_CustomShadowLayers = !!i517[5]
  i516.m_ShadowLayerMask = i517[6]
  i516.m_ShadowRenderingLayers = i517[7]
  i516.m_LightCookieSize = new pc.Vec2( i517[8], i517[9] )
  i516.m_LightCookieOffset = new pc.Vec2( i517[10], i517[11] )
  i516.m_SoftShadowQuality = i517[12]
  return i516
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i519 = data
  i518.priority = i519[0]
  i518.blendDistance = i519[1]
  i518.weight = i519[2]
  request.r(i519[3], i519[4], 0, i518, 'sharedProfile')
  i518.m_IsGlobal = !!i519[5]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i521 = data
  i520.ambientIntensity = i521[0]
  i520.reflectionIntensity = i521[1]
  i520.ambientMode = i521[2]
  i520.ambientLight = new pc.Color(i521[3], i521[4], i521[5], i521[6])
  i520.ambientSkyColor = new pc.Color(i521[7], i521[8], i521[9], i521[10])
  i520.ambientGroundColor = new pc.Color(i521[11], i521[12], i521[13], i521[14])
  i520.ambientEquatorColor = new pc.Color(i521[15], i521[16], i521[17], i521[18])
  i520.fogColor = new pc.Color(i521[19], i521[20], i521[21], i521[22])
  i520.fogEndDistance = i521[23]
  i520.fogStartDistance = i521[24]
  i520.fogDensity = i521[25]
  i520.fog = !!i521[26]
  request.r(i521[27], i521[28], 0, i520, 'skybox')
  i520.fogMode = i521[29]
  var i523 = i521[30]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i523[i + 0]) );
  }
  i520.lightmaps = i522
  i520.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i521[31], i520.lightProbes)
  i520.lightmapsMode = i521[32]
  i520.mixedBakeMode = i521[33]
  i520.environmentLightingMode = i521[34]
  i520.ambientProbe = new pc.SphericalHarmonicsL2(i521[35])
  i520.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i521[36])
  i520.useReferenceAmbientProbe = !!i521[37]
  request.r(i521[38], i521[39], 0, i520, 'customReflection')
  request.r(i521[40], i521[41], 0, i520, 'defaultReflection')
  i520.defaultReflectionMode = i521[42]
  i520.defaultReflectionResolution = i521[43]
  i520.sunLightObjectId = i521[44]
  i520.pixelLightCount = i521[45]
  i520.defaultReflectionHDR = !!i521[46]
  i520.hasLightDataAsset = !!i521[47]
  i520.hasManualGenerate = !!i521[48]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'lightmapColor')
  request.r(i527[2], i527[3], 0, i526, 'lightmapDirection')
  request.r(i527[4], i527[5], 0, i526, 'shadowMask')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i528 = root || new UnityEngine.LightProbes()
  var i529 = data
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i537 = data
  i536.AdditionalLightsRenderingMode = i537[0]
  i536.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i537[1], i536.LightRenderingMode)
  i536.MainLightRenderingModeValue = i537[2]
  i536.SupportsMainLightShadows = !!i537[3]
  i536.MainLightShadowmapResolutionValue = i537[4]
  i536.SupportsSoftShadows = !!i537[5]
  i536.SoftShadowQualityValue = i537[6]
  i536.ShadowDistance = i537[7]
  i536.ShadowCascadeCount = i537[8]
  i536.Cascade2Split = i537[9]
  i536.Cascade3Split = new pc.Vec2( i537[10], i537[11] )
  i536.Cascade4Split = new pc.Vec3( i537[12], i537[13], i537[14] )
  i536.CascadeBorder = i537[15]
  i536.ShadowDepthBias = i537[16]
  i536.ShadowNormalBias = i537[17]
  i536.RequireDepthTexture = !!i537[18]
  i536.RequireOpaqueTexture = !!i537[19]
  i536.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i537[20], i536.scriptableRendererData)
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i539 = data
  i538.Disabled = i539[0]
  i538.PerVertex = i539[1]
  i538.PerPixel = i539[2]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i541 = data
  i540.opaqueLayerMask = i541[0]
  i540.transparentLayerMask = i541[1]
  var i543 = i541[2]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i543[i + 0]) );
  }
  i540.RenderObjectsFeatures = i542
  i540.name = i541[3]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i547 = data
  i546.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i547[0], i546.settings)
  i546.name = i547[1]
  i546.typeName = i547[2]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i549 = data
  var i551 = i549[0]
  var i550 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i551.length; i += 1) {
    i550.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i551[i + 0]));
  }
  i548.ShaderCompilationErrors = i550
  i548.name = i549[1]
  i548.guid = i549[2]
  var i553 = i549[3]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( i553[i + 0] );
  }
  i548.shaderDefinedKeywords = i552
  var i555 = i549[4]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i555[i + 0]) );
  }
  i548.passes = i554
  var i557 = i549[5]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i557[i + 0]) );
  }
  i548.usePasses = i556
  var i559 = i549[6]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i559[i + 0]) );
  }
  i548.defaultParameterValues = i558
  request.r(i549[7], i549[8], 0, i548, 'unityFallbackShader')
  i548.readDepth = !!i549[9]
  i548.hasDepthOnlyPass = !!i549[10]
  i548.isCreatedByShaderGraph = !!i549[11]
  i548.disableBatching = !!i549[12]
  i548.compiled = !!i549[13]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i563 = data
  i562.shaderName = i563[0]
  i562.errorMessage = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i568 = root || new pc.UnityShaderPass()
  var i569 = data
  i568.id = i569[0]
  i568.subShaderIndex = i569[1]
  i568.name = i569[2]
  i568.passType = i569[3]
  i568.grabPassTextureName = i569[4]
  i568.usePass = !!i569[5]
  i568.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[6], i568.zTest)
  i568.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[7], i568.zWrite)
  i568.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[8], i568.culling)
  i568.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i569[9], i568.blending)
  i568.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i569[10], i568.alphaBlending)
  i568.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[11], i568.colorWriteMask)
  i568.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[12], i568.offsetUnits)
  i568.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[13], i568.offsetFactor)
  i568.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[14], i568.stencilRef)
  i568.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[15], i568.stencilReadMask)
  i568.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[16], i568.stencilWriteMask)
  i568.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i569[17], i568.stencilOp)
  i568.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i569[18], i568.stencilOpFront)
  i568.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i569[19], i568.stencilOpBack)
  var i571 = i569[20]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i571[i + 0]) );
  }
  i568.tags = i570
  var i573 = i569[21]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( i573[i + 0] );
  }
  i568.passDefinedKeywords = i572
  var i575 = i569[22]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i575[i + 0]) );
  }
  i568.passDefinedKeywordGroups = i574
  var i577 = i569[23]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i577[i + 0]) );
  }
  i568.variants = i576
  var i579 = i569[24]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i579[i + 0]) );
  }
  i568.excludedVariants = i578
  i568.hasDepthReader = !!i569[25]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i581 = data
  i580.val = i581[0]
  i580.name = i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i583 = data
  i582.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[0], i582.src)
  i582.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[1], i582.dst)
  i582.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i583[2], i582.op)
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i585 = data
  i584.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i585[0], i584.pass)
  i584.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i585[1], i584.fail)
  i584.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i585[2], i584.zFail)
  i584.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i585[3], i584.comp)
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i589 = data
  i588.name = i589[0]
  i588.value = i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i593 = data
  var i595 = i593[0]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( i595[i + 0] );
  }
  i592.keywords = i594
  i592.hasDiscard = !!i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i599 = data
  i598.passId = i599[0]
  i598.subShaderIndex = i599[1]
  var i601 = i599[2]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( i601[i + 0] );
  }
  i598.keywords = i600
  i598.vertexProgram = i599[3]
  i598.fragmentProgram = i599[4]
  i598.exportedForWebGl2 = !!i599[5]
  i598.readDepth = !!i599[6]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'shader')
  i604.pass = i605[2]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i609 = data
  i608.name = i609[0]
  i608.type = i609[1]
  i608.value = new pc.Vec4( i609[2], i609[3], i609[4], i609[5] )
  i608.textureValue = i609[6]
  i608.shaderPropertyFlag = i609[7]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i611 = data
  i610.name = i611[0]
  i610.ascent = i611[1]
  i610.originalLineHeight = i611[2]
  i610.fontSize = i611[3]
  var i613 = i611[4]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i613[i + 0]) );
  }
  i610.characterInfo = i612
  request.r(i611[5], i611[6], 0, i610, 'texture')
  i610.originalFontSize = i611[7]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i617 = data
  i616.index = i617[0]
  i616.advance = i617[1]
  i616.bearing = i617[2]
  i616.glyphWidth = i617[3]
  i616.glyphHeight = i617[4]
  i616.minX = i617[5]
  i616.maxX = i617[6]
  i616.minY = i617[7]
  i616.maxY = i617[8]
  i616.uvBottomLeftX = i617[9]
  i616.uvBottomLeftY = i617[10]
  i616.uvBottomRightX = i617[11]
  i616.uvBottomRightY = i617[12]
  i616.uvTopLeftX = i617[13]
  i616.uvTopLeftY = i617[14]
  i616.uvTopRightX = i617[15]
  i616.uvTopRightY = i617[16]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i619 = data
  i618.name = i619[0]
  i618.bytes64 = i619[1]
  i618.data = i619[2]
  return i618
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i621 = data
  var i623 = i621[0]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 1, i622, '')
  }
  i620.components = i622
  return i620
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i627 = data
  i626.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i627[0], i626.mode)
  i626.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i627[1], i626.neutralHDRRangeReductionMode)
  i626.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i627[2], i626.acesPreset)
  i626.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i627[3], i626.hueShiftAmount)
  i626.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i627[4], i626.detectPaperWhite)
  i626.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i627[5], i626.paperWhite)
  i626.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i627[6], i626.detectBrightnessLimits)
  i626.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i627[7], i626.minNits)
  i626.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i627[8], i626.maxNits)
  i626.active = !!i627[9]
  return i626
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i629 = data
  i628.m_Value = i629[0]
  i628.m_OverrideState = !!i629[1]
  return i628
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i631 = data
  i630.m_Value = i631[0]
  i630.m_OverrideState = !!i631[1]
  return i630
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i633 = data
  i632.m_Value = i633[0]
  i632.m_OverrideState = !!i633[1]
  return i632
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i635 = data
  i634.m_Value = i635[0]
  i634.m_OverrideState = !!i635[1]
  return i634
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i637 = data
  i636.m_Value = !!i637[0]
  i636.m_OverrideState = !!i637[1]
  return i636
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i639 = data
  i638.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i639[0], i638.skipIterations)
  i638.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i639[1], i638.threshold)
  i638.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i639[2], i638.intensity)
  i638.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i639[3], i638.scatter)
  i638.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i639[4], i638.clamp)
  i638.tint = request.d('UnityEngine.Rendering.ColorParameter', i639[5], i638.tint)
  i638.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i639[6], i638.highQualityFiltering)
  i638.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i639[7], i638.downscale)
  i638.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i639[8], i638.maxIterations)
  i638.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i639[9], i638.dirtTexture)
  i638.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i639[10], i638.dirtIntensity)
  i638.active = !!i639[11]
  return i638
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i641 = data
  i640.m_Value = i641[0]
  i640.m_OverrideState = !!i641[1]
  return i640
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i643 = data
  i642.m_Value = i643[0]
  i642.m_OverrideState = !!i643[1]
  return i642
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i645 = data
  i644.m_Value = new pc.Color(i645[0], i645[1], i645[2], i645[3])
  i644.m_OverrideState = !!i645[4]
  return i644
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i647 = data
  i646.m_Value = i647[0]
  i646.m_OverrideState = !!i647[1]
  return i646
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i649 = data
  i648.dimension = i649[0]
  request.r(i649[1], i649[2], 0, i648, 'm_Value')
  i648.m_OverrideState = !!i649[3]
  return i648
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i651 = data
  i650.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i651[0], i650.mode)
  i650.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i651[1], i650.quality)
  i650.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i651[2], i650.intensity)
  i650.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i651[3], i650.clamp)
  i650.active = !!i651[4]
  return i650
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i653 = data
  i652.m_Value = i653[0]
  i652.m_OverrideState = !!i653[1]
  return i652
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i655 = data
  i654.m_Value = i655[0]
  i654.m_OverrideState = !!i655[1]
  return i654
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i657 = data
  i656.color = request.d('UnityEngine.Rendering.ColorParameter', i657[0], i656.color)
  i656.center = request.d('UnityEngine.Rendering.Vector2Parameter', i657[1], i656.center)
  i656.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i657[2], i656.intensity)
  i656.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i657[3], i656.smoothness)
  i656.rounded = request.d('UnityEngine.Rendering.BoolParameter', i657[4], i656.rounded)
  i656.active = !!i657[5]
  return i656
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i659 = data
  i658.m_Value = new pc.Vec2( i659[0], i659[1] )
  i658.m_OverrideState = !!i659[2]
  return i658
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i660 = root || request.c( 'TMPro.TMP_Settings' )
  var i661 = data
  i660.assetVersion = i661[0]
  i660.m_TextWrappingMode = i661[1]
  i660.m_enableKerning = !!i661[2]
  var i663 = i661[3]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(i663[i + 0]);
  }
  i660.m_ActiveFontFeatures = i662
  i660.m_enableExtraPadding = !!i661[4]
  i660.m_enableTintAllSprites = !!i661[5]
  i660.m_enableParseEscapeCharacters = !!i661[6]
  i660.m_EnableRaycastTarget = !!i661[7]
  i660.m_GetFontFeaturesAtRuntime = !!i661[8]
  i660.m_missingGlyphCharacter = i661[9]
  i660.m_ClearDynamicDataOnBuild = !!i661[10]
  i660.m_warningsDisabled = !!i661[11]
  request.r(i661[12], i661[13], 0, i660, 'm_defaultFontAsset')
  i660.m_defaultFontAssetPath = i661[14]
  i660.m_defaultFontSize = i661[15]
  i660.m_defaultAutoSizeMinRatio = i661[16]
  i660.m_defaultAutoSizeMaxRatio = i661[17]
  i660.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i661[18], i661[19] )
  i660.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i661[20], i661[21] )
  i660.m_autoSizeTextContainer = !!i661[22]
  i660.m_IsTextObjectScaleStatic = !!i661[23]
  var i665 = i661[24]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i660.m_fallbackFontAssets = i664
  i660.m_matchMaterialPreset = !!i661[25]
  i660.m_HideSubTextObjects = !!i661[26]
  request.r(i661[27], i661[28], 0, i660, 'm_defaultSpriteAsset')
  i660.m_defaultSpriteAssetPath = i661[29]
  i660.m_enableEmojiSupport = !!i661[30]
  i660.m_MissingCharacterSpriteUnicode = i661[31]
  var i667 = i661[32]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 1, i666, '')
  }
  i660.m_EmojiFallbackTextAssets = i666
  i660.m_defaultColorGradientPresetsPath = i661[33]
  request.r(i661[34], i661[35], 0, i660, 'm_defaultStyleSheet')
  i660.m_StyleSheetsResourcePath = i661[36]
  request.r(i661[37], i661[38], 0, i660, 'm_leadingCharacters')
  request.r(i661[39], i661[40], 0, i660, 'm_followingCharacters')
  i660.m_UseModernHangulLineBreakingRules = !!i661[41]
  return i660
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i674 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i675 = data
  i674.normalStyle = i675[0]
  i674.normalSpacingOffset = i675[1]
  i674.boldStyle = i675[2]
  i674.boldSpacing = i675[3]
  i674.italicStyle = i675[4]
  i674.tabSize = i675[5]
  request.r(i675[6], i675[7], 0, i674, 'atlas')
  i674.m_SourceFontFileGUID = i675[8]
  i674.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i675[9], i674.m_CreationSettings)
  request.r(i675[10], i675[11], 0, i674, 'm_SourceFontFile')
  i674.m_SourceFontFilePath = i675[12]
  i674.m_AtlasPopulationMode = i675[13]
  i674.InternalDynamicOS = !!i675[14]
  var i677 = i675[15]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i677.length; i += 1) {
    i676.add(request.d('UnityEngine.TextCore.Glyph', i677[i + 0]));
  }
  i674.m_GlyphTable = i676
  var i679 = i675[16]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('TMPro.TMP_Character', i679[i + 0]));
  }
  i674.m_CharacterTable = i678
  var i681 = i675[17]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i674.m_AtlasTextures = i680
  i674.m_AtlasTextureIndex = i675[18]
  i674.m_IsMultiAtlasTexturesEnabled = !!i675[19]
  i674.m_GetFontFeatures = !!i675[20]
  i674.m_ClearDynamicDataOnBuild = !!i675[21]
  i674.m_AtlasWidth = i675[22]
  i674.m_AtlasHeight = i675[23]
  i674.m_AtlasPadding = i675[24]
  i674.m_AtlasRenderMode = i675[25]
  var i683 = i675[26]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('UnityEngine.TextCore.GlyphRect', i683[i + 0]));
  }
  i674.m_UsedGlyphRects = i682
  var i685 = i675[27]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('UnityEngine.TextCore.GlyphRect', i685[i + 0]));
  }
  i674.m_FreeGlyphRects = i684
  i674.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i675[28], i674.m_FontFeatureTable)
  i674.m_ShouldReimportFontFeatures = !!i675[29]
  var i687 = i675[30]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 1, i686, '')
  }
  i674.m_FallbackFontAssetTable = i686
  var i689 = i675[31]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('TMPro.TMP_FontWeightPair', i689[i + 0]) );
  }
  i674.m_FontWeightTable = i688
  var i691 = i675[32]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('TMPro.TMP_FontWeightPair', i691[i + 0]) );
  }
  i674.fontWeights = i690
  i674.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i675[33], i674.m_fontInfo)
  var i693 = i675[34]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i693.length; i += 1) {
    i692.add(request.d('TMPro.TMP_Glyph', i693[i + 0]));
  }
  i674.m_glyphInfoList = i692
  i674.m_KerningTable = request.d('TMPro.KerningTable', i675[35], i674.m_KerningTable)
  var i695 = i675[36]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i674.fallbackFontAssets = i694
  i674.m_Version = i675[37]
  i674.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i675[38], i674.m_FaceInfo)
  request.r(i675[39], i675[40], 0, i674, 'm_Material')
  return i674
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i696 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i697 = data
  i696.sourceFontFileName = i697[0]
  i696.sourceFontFileGUID = i697[1]
  i696.faceIndex = i697[2]
  i696.pointSizeSamplingMode = i697[3]
  i696.pointSize = i697[4]
  i696.padding = i697[5]
  i696.paddingMode = i697[6]
  i696.packingMode = i697[7]
  i696.atlasWidth = i697[8]
  i696.atlasHeight = i697[9]
  i696.characterSetSelectionMode = i697[10]
  i696.characterSequence = i697[11]
  i696.referencedFontAssetGUID = i697[12]
  i696.referencedTextAssetGUID = i697[13]
  i696.fontStyle = i697[14]
  i696.fontStyleModifier = i697[15]
  i696.renderMode = i697[16]
  i696.includeFontFeatures = !!i697[17]
  return i696
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i701 = data
  i700.m_Index = i701[0]
  i700.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i701[1], i700.m_Metrics)
  i700.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i701[2], i700.m_GlyphRect)
  i700.m_Scale = i701[3]
  i700.m_AtlasIndex = i701[4]
  i700.m_ClassDefinitionType = i701[5]
  return i700
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i703 = data
  i702.m_Width = i703[0]
  i702.m_Height = i703[1]
  i702.m_HorizontalBearingX = i703[2]
  i702.m_HorizontalBearingY = i703[3]
  i702.m_HorizontalAdvance = i703[4]
  return i702
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i705 = data
  i704.m_X = i705[0]
  i704.m_Y = i705[1]
  i704.m_Width = i705[2]
  i704.m_Height = i705[3]
  return i704
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i708 = root || request.c( 'TMPro.TMP_Character' )
  var i709 = data
  i708.m_ElementType = i709[0]
  i708.m_Unicode = i709[1]
  i708.m_GlyphIndex = i709[2]
  i708.m_Scale = i709[3]
  return i708
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i714 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('TMPro.MultipleSubstitutionRecord', i717[i + 0]));
  }
  i714.m_MultipleSubstitutionRecords = i716
  var i719 = i715[1]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('TMPro.LigatureSubstitutionRecord', i719[i + 0]));
  }
  i714.m_LigatureSubstitutionRecords = i718
  var i721 = i715[2]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i721[i + 0]));
  }
  i714.m_GlyphPairAdjustmentRecords = i720
  var i723 = i715[3]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i723[i + 0]));
  }
  i714.m_MarkToBaseAdjustmentRecords = i722
  var i725 = i715[4]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i725.length; i += 1) {
    i724.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i725[i + 0]));
  }
  i714.m_MarkToMarkAdjustmentRecords = i724
  return i714
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i729 = data
  i728.m_TargetGlyphID = i729[0]
  i728.m_SubstituteGlyphIDs = i729[1]
  return i728
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i733 = data
  i732.m_ComponentGlyphIDs = i733[0]
  i732.m_LigatureGlyphID = i733[1]
  return i732
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i737 = data
  i736.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i737[0], i736.m_FirstAdjustmentRecord)
  i736.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i737[1], i736.m_SecondAdjustmentRecord)
  i736.m_FeatureLookupFlags = i737[2]
  return i736
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i739 = data
  i738.m_GlyphIndex = i739[0]
  i738.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i739[1], i738.m_GlyphValueRecord)
  return i738
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i741 = data
  i740.m_XPlacement = i741[0]
  i740.m_YPlacement = i741[1]
  i740.m_XAdvance = i741[2]
  i740.m_YAdvance = i741[3]
  return i740
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i745 = data
  i744.m_BaseGlyphID = i745[0]
  i744.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i745[1], i744.m_BaseGlyphAnchorPoint)
  i744.m_MarkGlyphID = i745[2]
  i744.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i745[3], i744.m_MarkPositionAdjustment)
  return i744
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i749 = data
  i748.m_BaseMarkGlyphID = i749[0]
  i748.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i749[1], i748.m_BaseMarkGlyphAnchorPoint)
  i748.m_CombiningMarkGlyphID = i749[2]
  i748.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i749[3], i748.m_CombiningMarkPositionAdjustment)
  return i748
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i752 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'regularTypeface')
  request.r(i753[2], i753[3], 0, i752, 'italicTypeface')
  return i752
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i755 = data
  i754.Name = i755[0]
  i754.PointSize = i755[1]
  i754.Scale = i755[2]
  i754.CharacterCount = i755[3]
  i754.LineHeight = i755[4]
  i754.Baseline = i755[5]
  i754.Ascender = i755[6]
  i754.CapHeight = i755[7]
  i754.Descender = i755[8]
  i754.CenterLine = i755[9]
  i754.SuperscriptOffset = i755[10]
  i754.SubscriptOffset = i755[11]
  i754.SubSize = i755[12]
  i754.Underline = i755[13]
  i754.UnderlineThickness = i755[14]
  i754.strikethrough = i755[15]
  i754.strikethroughThickness = i755[16]
  i754.TabWidth = i755[17]
  i754.Padding = i755[18]
  i754.AtlasWidth = i755[19]
  i754.AtlasHeight = i755[20]
  return i754
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.TMP_Glyph' )
  var i759 = data
  i758.id = i759[0]
  i758.x = i759[1]
  i758.y = i759[2]
  i758.width = i759[3]
  i758.height = i759[4]
  i758.xOffset = i759[5]
  i758.yOffset = i759[6]
  i758.xAdvance = i759[7]
  i758.scale = i759[8]
  return i758
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i760 = root || request.c( 'TMPro.KerningTable' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('TMPro.KerningPair', i763[i + 0]));
  }
  i760.kerningPairs = i762
  return i760
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i766 = root || request.c( 'TMPro.KerningPair' )
  var i767 = data
  i766.xOffset = i767[0]
  i766.m_FirstGlyph = i767[1]
  i766.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i767[2], i766.m_FirstGlyphAdjustments)
  i766.m_SecondGlyph = i767[3]
  i766.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i767[4], i766.m_SecondGlyphAdjustments)
  i766.m_IgnoreSpacingAdjustments = !!i767[5]
  return i766
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i769 = data
  i768.m_FaceIndex = i769[0]
  i768.m_FamilyName = i769[1]
  i768.m_StyleName = i769[2]
  i768.m_PointSize = i769[3]
  i768.m_Scale = i769[4]
  i768.m_UnitsPerEM = i769[5]
  i768.m_LineHeight = i769[6]
  i768.m_AscentLine = i769[7]
  i768.m_CapLine = i769[8]
  i768.m_MeanLine = i769[9]
  i768.m_Baseline = i769[10]
  i768.m_DescentLine = i769[11]
  i768.m_SuperscriptOffset = i769[12]
  i768.m_SuperscriptSize = i769[13]
  i768.m_SubscriptOffset = i769[14]
  i768.m_SubscriptSize = i769[15]
  i768.m_UnderlineOffset = i769[16]
  i768.m_UnderlineThickness = i769[17]
  i768.m_StrikethroughOffset = i769[18]
  i768.m_StrikethroughThickness = i769[19]
  i768.m_TabWidth = i769[20]
  return i768
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'spriteSheet')
  var i773 = i771[2]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('TMPro.TMP_Sprite', i773[i + 0]));
  }
  i770.spriteInfoList = i772
  var i775 = i771[3]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 1, i774, '')
  }
  i770.fallbackSpriteAssets = i774
  var i777 = i771[4]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('TMPro.TMP_SpriteCharacter', i777[i + 0]));
  }
  i770.m_SpriteCharacterTable = i776
  var i779 = i771[5]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('TMPro.TMP_SpriteGlyph', i779[i + 0]));
  }
  i770.m_GlyphTable = i778
  i770.m_Version = i771[6]
  i770.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i771[7], i770.m_FaceInfo)
  request.r(i771[8], i771[9], 0, i770, 'm_Material')
  return i770
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_Sprite' )
  var i783 = data
  i782.name = i783[0]
  i782.hashCode = i783[1]
  i782.unicode = i783[2]
  i782.pivot = new pc.Vec2( i783[3], i783[4] )
  request.r(i783[5], i783[6], 0, i782, 'sprite')
  i782.id = i783[7]
  i782.x = i783[8]
  i782.y = i783[9]
  i782.width = i783[10]
  i782.height = i783[11]
  i782.xOffset = i783[12]
  i782.yOffset = i783[13]
  i782.xAdvance = i783[14]
  i782.scale = i783[15]
  return i782
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i789 = data
  i788.m_Name = i789[0]
  i788.m_ElementType = i789[1]
  i788.m_Unicode = i789[2]
  i788.m_GlyphIndex = i789[3]
  i788.m_Scale = i789[4]
  return i788
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'sprite')
  i792.m_Index = i793[2]
  i792.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i793[3], i792.m_Metrics)
  i792.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i793[4], i792.m_GlyphRect)
  i792.m_Scale = i793[5]
  i792.m_AtlasIndex = i793[6]
  i792.m_ClassDefinitionType = i793[7]
  return i792
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i795 = data
  var i797 = i795[0]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('TMPro.TMP_Style', i797[i + 0]));
  }
  i794.m_StyleList = i796
  return i794
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TMP_Style' )
  var i801 = data
  i800.m_Name = i801[0]
  i800.m_HashCode = i801[1]
  i800.m_OpeningDefinition = i801[2]
  i800.m_ClosingDefinition = i801[3]
  i800.m_OpeningTagArray = i801[4]
  i800.m_ClosingTagArray = i801[5]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i803 = data
  var i805 = i803[0]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i805[i + 0]) );
  }
  i802.files = i804
  i802.componentToPrefabIds = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i809 = data
  i808.path = i809[0]
  request.r(i809[1], i809[2], 0, i808, 'unityObject')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i811 = data
  var i813 = i811[0]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i813[i + 0]) );
  }
  i810.scriptsExecutionOrder = i812
  var i815 = i811[1]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i815[i + 0]) );
  }
  i810.sortingLayers = i814
  var i817 = i811[2]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i817[i + 0]) );
  }
  i810.cullingLayers = i816
  i810.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i811[3], i810.timeSettings)
  i810.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i811[4], i810.physicsSettings)
  i810.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i811[5], i810.physics2DSettings)
  i810.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i811[6], i810.qualitySettings)
  i810.enableRealtimeShadows = !!i811[7]
  i810.enableAutoInstancing = !!i811[8]
  i810.enableStaticBatching = !!i811[9]
  i810.enableDynamicBatching = !!i811[10]
  i810.lightmapEncodingQuality = i811[11]
  i810.desiredColorSpace = i811[12]
  var i819 = i811[13]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i810.allTags = i818
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i823 = data
  i822.name = i823[0]
  i822.value = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i827 = data
  i826.id = i827[0]
  i826.name = i827[1]
  i826.value = i827[2]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i831 = data
  i830.id = i831[0]
  i830.name = i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i833 = data
  i832.fixedDeltaTime = i833[0]
  i832.maximumDeltaTime = i833[1]
  i832.timeScale = i833[2]
  i832.maximumParticleTimestep = i833[3]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i835 = data
  i834.gravity = new pc.Vec3( i835[0], i835[1], i835[2] )
  i834.defaultSolverIterations = i835[3]
  i834.bounceThreshold = i835[4]
  i834.autoSyncTransforms = !!i835[5]
  i834.autoSimulation = !!i835[6]
  var i837 = i835[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i837[i + 0]) );
  }
  i834.collisionMatrix = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i841 = data
  i840.enabled = !!i841[0]
  i840.layerId = i841[1]
  i840.otherLayerId = i841[2]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'material')
  i842.gravity = new pc.Vec2( i843[2], i843[3] )
  i842.positionIterations = i843[4]
  i842.velocityIterations = i843[5]
  i842.velocityThreshold = i843[6]
  i842.maxLinearCorrection = i843[7]
  i842.maxAngularCorrection = i843[8]
  i842.maxTranslationSpeed = i843[9]
  i842.maxRotationSpeed = i843[10]
  i842.baumgarteScale = i843[11]
  i842.baumgarteTOIScale = i843[12]
  i842.timeToSleep = i843[13]
  i842.linearSleepTolerance = i843[14]
  i842.angularSleepTolerance = i843[15]
  i842.defaultContactOffset = i843[16]
  i842.autoSimulation = !!i843[17]
  i842.queriesHitTriggers = !!i843[18]
  i842.queriesStartInColliders = !!i843[19]
  i842.callbacksOnDisable = !!i843[20]
  i842.reuseCollisionCallbacks = !!i843[21]
  i842.autoSyncTransforms = !!i843[22]
  var i845 = i843[23]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i845[i + 0]) );
  }
  i842.collisionMatrix = i844
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i849 = data
  i848.enabled = !!i849[0]
  i848.layerId = i849[1]
  i848.otherLayerId = i849[2]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i853[i + 0]) );
  }
  i850.qualityLevels = i852
  var i855 = i851[1]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i850.names = i854
  i850.shadows = i851[2]
  i850.anisotropicFiltering = i851[3]
  i850.antiAliasing = i851[4]
  i850.lodBias = i851[5]
  i850.shadowCascades = i851[6]
  i850.shadowDistance = i851[7]
  i850.shadowmaskMode = i851[8]
  i850.shadowProjection = i851[9]
  i850.shadowResolution = i851[10]
  i850.softParticles = !!i851[11]
  i850.softVegetation = !!i851[12]
  i850.activeColorSpace = i851[13]
  i850.desiredColorSpace = i851[14]
  i850.masterTextureLimit = i851[15]
  i850.maxQueuedFrames = i851[16]
  i850.particleRaycastBudget = i851[17]
  i850.pixelLightCount = i851[18]
  i850.realtimeReflectionProbes = !!i851[19]
  i850.shadowCascade2Split = i851[20]
  i850.shadowCascade4Split = new pc.Vec3( i851[21], i851[22], i851[23] )
  i850.streamingMipmapsActive = !!i851[24]
  i850.vSyncCount = i851[25]
  i850.asyncUploadBufferSize = i851[26]
  i850.asyncUploadTimeSlice = i851[27]
  i850.billboardsFaceCameraPosition = !!i851[28]
  i850.shadowNearPlaneOffset = i851[29]
  i850.streamingMipmapsMemoryBudget = i851[30]
  i850.maximumLODLevel = i851[31]
  i850.streamingMipmapsAddAllCameras = !!i851[32]
  i850.streamingMipmapsMaxLevelReduction = i851[33]
  i850.streamingMipmapsRenderersPerFrame = i851[34]
  i850.resolutionScalingFixedDPIFactor = i851[35]
  i850.streamingMipmapsMaxFileIORequests = i851[36]
  i850.currentQualityLevel = i851[37]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i859 = data
  i858.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i859[0], i858.Event)
  i858.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i859[1], i858.filterSettings)
  i858.overrideMaterialId = i859[2]
  i858.overrideMaterialPassIndex = i859[3]
  i858.overrideShaderId = i859[4]
  i858.overrideShaderPassIndex = i859[5]
  i858.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i859[6], i858.overrideMode)
  i858.overrideDepthState = !!i859[7]
  i858.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i859[8], i858.depthCompareFunction)
  i858.enableWrite = !!i859[9]
  i858.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i859[10], i858.stencilSettings)
  i858.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i859[11], i858.cameraSettings)
  return i858
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i861 = data
  i860.m_XCoordinate = i861[0]
  i860.m_YCoordinate = i861[1]
  return i860
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i863 = data
  i862.m_XPositionAdjustment = i863[0]
  i862.m_YPositionAdjustment = i863[1]
  return i862
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i865 = data
  i864.xPlacement = i865[0]
  i864.yPlacement = i865[1]
  i864.xAdvance = i865[2]
  i864.yAdvance = i865[3]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i867 = data
  i866.Value = i867[0]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i869 = data
  i868.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i869[0], i868.RenderQueueType)
  i868.LayerMask = i869[1]
  var i871 = i869[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.PassNames = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i873 = data
  i872.overrideStencilState = !!i873[0]
  i872.stencilReference = i873[1]
  i872.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i873[2], i872.stencilCompareFunctionValue)
  i872.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i873[3], i872.passOperationValue)
  i872.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i873[4], i872.failOperationValue)
  i872.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i873[5], i872.zFailOperationValue)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i875 = data
  i874.overrideCamera = !!i875[0]
  i874.restoreCamera = !!i875[1]
  i874.offset = new pc.Vec4( i875[2], i875[3], i875[4], i875[5] )
  i874.cameraFieldOfView = i875[6]
  return i874
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[30],"31":[1],"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[40],"48":[40],"49":[40],"50":[40],"51":[40],"52":[40],"53":[1],"54":[55],"56":[57],"58":[57],"59":[60],"61":[62],"63":[59],"64":[60],"65":[1],"4":[1],"6":[5],"66":[60],"67":[68,60],"69":[55],"70":[68,60],"71":[60],"72":[60],"73":[55,60],"74":[60,68],"75":[76],"77":[76],"78":[76],"79":[60],"80":[60],"81":[59],"82":[68,60],"83":[60],"84":[59],"85":[60],"86":[60],"87":[60],"88":[60],"89":[60],"90":[60],"91":[60],"92":[60],"93":[60],"94":[68,60],"95":[60],"96":[60],"97":[60],"98":[60],"99":[68,60],"100":[60],"101":[62],"102":[62],"103":[62],"104":[62],"105":[1],"106":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","UnityEngine.CanvasRenderer","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.71f1";

Deserializers.productName = "snake-clash-playad-unity";

Deserializers.lunaInitializationTime = "03/28/2026 18:40:38";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "463120e2abeea4803a204fae3acb7ca9";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.19.0\ncom.unity.render-pipelines.universal: 17.3.0\ncom.unity.timeline: 1.8.11\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "455bb359-5fcd-4993-99d1-dab32b21df48";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

