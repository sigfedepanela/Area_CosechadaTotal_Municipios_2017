var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_DepartamentosProductoresdeCaaPanelera_1 = new ol.format.GeoJSON();
var features_DepartamentosProductoresdeCaaPanelera_1 = format_DepartamentosProductoresdeCaaPanelera_1.readFeatures(json_DepartamentosProductoresdeCaaPanelera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosProductoresdeCaaPanelera_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DepartamentosProductoresdeCaaPanelera_1.addFeatures(features_DepartamentosProductoresdeCaaPanelera_1);var lyr_DepartamentosProductoresdeCaaPanelera_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosProductoresdeCaaPanelera_1, 
                style: style_DepartamentosProductoresdeCaaPanelera_1,
    title: 'Departamentos Productores de Caña Panelera<br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_0.png" />  0 - 100 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_1.png" />  100 - 300 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_2.png" />  300 - 500 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_3.png" />  500 - 700 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_4.png" />  700 - 900 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_5.png" />  900 - 2000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_6.png" />  2000 - 5000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_7.png" />  5000 - 8950 <br />'
        });var format_DepartamentosdeColombia_2 = new ol.format.GeoJSON();
var features_DepartamentosdeColombia_2 = format_DepartamentosdeColombia_2.readFeatures(json_DepartamentosdeColombia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosdeColombia_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DepartamentosdeColombia_2.addFeatures(features_DepartamentosdeColombia_2);var lyr_DepartamentosdeColombia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosdeColombia_2, 
                style: style_DepartamentosdeColombia_2,
                title: '<img src="styles/legend/DepartamentosdeColombia_2.png" /> Departamentos de Colombia '
            });var format_reaCosechadadeCaaPaneleraToneladas2017_3 = new ol.format.GeoJSON();
var features_reaCosechadadeCaaPaneleraToneladas2017_3 = format_reaCosechadadeCaaPaneleraToneladas2017_3.readFeatures(json_reaCosechadadeCaaPaneleraToneladas2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaCosechadadeCaaPaneleraToneladas2017_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reaCosechadadeCaaPaneleraToneladas2017_3.addFeatures(features_reaCosechadadeCaaPaneleraToneladas2017_3);var lyr_reaCosechadadeCaaPaneleraToneladas2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaCosechadadeCaaPaneleraToneladas2017_3, 
                style: style_reaCosechadadeCaaPaneleraToneladas2017_3,
                title: '<img src="styles/legend/reaCosechadadeCaaPaneleraToneladas2017_3.png" /> Área Cosechada de Caña Panelera (Toneladas) - 2017'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_DepartamentosProductoresdeCaaPanelera_1.setVisible(true);lyr_DepartamentosdeColombia_2.setVisible(true);lyr_reaCosechadadeCaaPaneleraToneladas2017_3.setVisible(false);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_DepartamentosProductoresdeCaaPanelera_1,lyr_DepartamentosdeColombia_2,lyr_reaCosechadadeCaaPaneleraToneladas2017_3];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'No': 'No', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', });
lyr_DepartamentosdeColombia_2.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'No': 'No', });
lyr_reaCosechadadeCaaPaneleraToneladas2017_3.set('fieldAliases', {});
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', 'No': 'TextEdit', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', });
lyr_DepartamentosdeColombia_2.set('fieldImages', {'nombre_dep': 'TextEdit', 'No': 'TextEdit', });
lyr_reaCosechadadeCaaPaneleraToneladas2017_3.set('fieldImages', {});
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', 'No': 'inline label', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', });
lyr_DepartamentosdeColombia_2.set('fieldLabels', {'nombre_dep': 'inline label', 'No': 'inline label', });
lyr_reaCosechadadeCaaPaneleraToneladas2017_3.set('fieldLabels', {});
lyr_reaCosechadadeCaaPaneleraToneladas2017_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});