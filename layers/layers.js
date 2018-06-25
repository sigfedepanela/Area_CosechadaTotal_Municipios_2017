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
            });var format_MunicipiosProductoresdeCaaPanelera_1 = new ol.format.GeoJSON();
var features_MunicipiosProductoresdeCaaPanelera_1 = format_MunicipiosProductoresdeCaaPanelera_1.readFeatures(json_MunicipiosProductoresdeCaaPanelera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosProductoresdeCaaPanelera_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MunicipiosProductoresdeCaaPanelera_1.addFeatures(features_MunicipiosProductoresdeCaaPanelera_1);var lyr_MunicipiosProductoresdeCaaPanelera_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosProductoresdeCaaPanelera_1, 
                style: style_MunicipiosProductoresdeCaaPanelera_1,
    title: 'Municipios Productores de Caña Panelera<br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPanelera_1_0.png" />  0 - 100 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPanelera_1_1.png" />  100 - 300 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPanelera_1_2.png" />  300 - 500 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPanelera_1_3.png" />  500 - 700 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPanelera_1_4.png" />  700 - 900 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPanelera_1_5.png" />  900 - 2000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPanelera_1_6.png" />  2000 - 5000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPanelera_1_7.png" />  5000 - 8950 <br />'
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
            });var format_reaCosechadadeCaaPaneleraHectareas2017_3 = new ol.format.GeoJSON();
var features_reaCosechadadeCaaPaneleraHectareas2017_3 = format_reaCosechadadeCaaPaneleraHectareas2017_3.readFeatures(json_reaCosechadadeCaaPaneleraHectareas2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaCosechadadeCaaPaneleraHectareas2017_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reaCosechadadeCaaPaneleraHectareas2017_3.addFeatures(features_reaCosechadadeCaaPaneleraHectareas2017_3);var lyr_reaCosechadadeCaaPaneleraHectareas2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaCosechadadeCaaPaneleraHectareas2017_3, 
                style: style_reaCosechadadeCaaPaneleraHectareas2017_3,
                title: '<img src="styles/legend/reaCosechadadeCaaPaneleraHectareas2017_3.png" /> Área Cosechada de Caña Panelera (Hectareas) - 2017'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_MunicipiosProductoresdeCaaPanelera_1.setVisible(true);lyr_DepartamentosdeColombia_2.setVisible(true);lyr_reaCosechadadeCaaPaneleraHectareas2017_3.setVisible(false);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_MunicipiosProductoresdeCaaPanelera_1,lyr_DepartamentosdeColombia_2,lyr_reaCosechadadeCaaPaneleraHectareas2017_3];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'No': 'No', });
lyr_MunicipiosProductoresdeCaaPanelera_1.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', });
lyr_DepartamentosdeColombia_2.set('fieldAliases', {'DEPT': 'DEPT', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_reaCosechadadeCaaPaneleraHectareas2017_3.set('fieldAliases', {});
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', 'No': 'TextEdit', });
lyr_MunicipiosProductoresdeCaaPanelera_1.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', });
lyr_DepartamentosdeColombia_2.set('fieldImages', {'DEPT': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_reaCosechadadeCaaPaneleraHectareas2017_3.set('fieldImages', {});
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', 'No': 'inline label', });
lyr_MunicipiosProductoresdeCaaPanelera_1.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', });
lyr_DepartamentosdeColombia_2.set('fieldLabels', {'DEPT': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_reaCosechadadeCaaPaneleraHectareas2017_3.set('fieldLabels', {});
lyr_reaCosechadadeCaaPaneleraHectareas2017_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});