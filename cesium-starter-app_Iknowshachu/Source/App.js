var viewer = new Cesium.Viewer('cesiumContainer');

viewer.camera.viewRectangle(Cesium.Rectangle.fromDegrees(114.591,-45.837,148.970,-5.730));

viewer.dataSources.add(Cesium.KmlDataSource.load('http://naooooooo.github.io/20150704test/cesium-starter-app_Iknowshachu/Source/20150704KML.kml'));
