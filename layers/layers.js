var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_Voyagernolabelsretina_1 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_strandbeskyttedeomrderstrandbeskyttelse_2 = new ol.format.GeoJSON();
var features_strandbeskyttedeomrderstrandbeskyttelse_2 = format_strandbeskyttedeomrderstrandbeskyttelse_2.readFeatures(json_strandbeskyttedeomrderstrandbeskyttelse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttedeomrderstrandbeskyttelse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttedeomrderstrandbeskyttelse_2.addFeatures(features_strandbeskyttedeomrderstrandbeskyttelse_2);
var lyr_strandbeskyttedeomrderstrandbeskyttelse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttedeomrderstrandbeskyttelse_2, 
                style: style_strandbeskyttedeomrderstrandbeskyttelse_2,
                popuplayertitle: 'strandbeskyttede områder — strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/strandbeskyttedeomrderstrandbeskyttelse_2.png" /> strandbeskyttede områder — strandbeskyttelse'
            });
var format_FrededeomrderomridsafkommuneFrededeomrder_3 = new ol.format.GeoJSON();
var features_FrededeomrderomridsafkommuneFrededeomrder_3 = format_FrededeomrderomridsafkommuneFrededeomrder_3.readFeatures(json_FrededeomrderomridsafkommuneFrededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrededeomrderomridsafkommuneFrededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrededeomrderomridsafkommuneFrededeomrder_3.addFeatures(features_FrededeomrderomridsafkommuneFrededeomrder_3);
var lyr_FrededeomrderomridsafkommuneFrededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrededeomrderomridsafkommuneFrededeomrder_3, 
                style: style_FrededeomrderomridsafkommuneFrededeomrder_3,
                popuplayertitle: 'Fredede områder + omrids af kommune — Fredede områder',
                interactive: false,
    title: 'Fredede områder + omrids af kommune — Fredede områder<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_3_0.png" /> Damhuså<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_3_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_3_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_3_3.png" /> Vestvolden<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_3_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_3_5.png" /> <br />' });
var format_Frededeomrderomridsafkommunekommuneplan_4 = new ol.format.GeoJSON();
var features_Frededeomrderomridsafkommunekommuneplan_4 = format_Frededeomrderomridsafkommunekommuneplan_4.readFeatures(json_Frededeomrderomridsafkommunekommuneplan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrderomridsafkommunekommuneplan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrderomridsafkommunekommuneplan_4.addFeatures(features_Frededeomrderomridsafkommunekommuneplan_4);
var lyr_Frededeomrderomridsafkommunekommuneplan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrderomridsafkommunekommuneplan_4, 
                style: style_Frededeomrderomridsafkommunekommuneplan_4,
                popuplayertitle: 'Fredede områder + omrids af kommune — kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrderomridsafkommunekommuneplan_4.png" /> Fredede områder + omrids af kommune — kommuneplan'
            });
var format_lokalplaner_hvidovrelokalplaner_5 = new ol.format.GeoJSON();
var features_lokalplaner_hvidovrelokalplaner_5 = format_lokalplaner_hvidovrelokalplaner_5.readFeatures(json_lokalplaner_hvidovrelokalplaner_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplaner_hvidovrelokalplaner_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplaner_hvidovrelokalplaner_5.addFeatures(features_lokalplaner_hvidovrelokalplaner_5);
var lyr_lokalplaner_hvidovrelokalplaner_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplaner_hvidovrelokalplaner_5, 
                style: style_lokalplaner_hvidovrelokalplaner_5,
                popuplayertitle: 'lokalplaner_hvidovre — lokalplaner',
                interactive: true,
    title: 'lokalplaner_hvidovre — lokalplaner<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_0.png" /> 1012930<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_1.png" /> 1024399<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_2.png" /> 1053515<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_3.png" /> 1054617<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_4.png" /> 1061002<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_5.png" /> 1061022<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_6.png" /> 1061038<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_7.png" /> 1061103<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_8.png" /> 1061140<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_9.png" /> 1061206<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_10.png" /> 1061209<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_11.png" /> 1061210<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_12.png" /> 1061704<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_13.png" /> 1061715<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_14.png" /> 1061718<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_15.png" /> 1061734<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_16.png" /> 1061739<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_17.png" /> 1061746<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_18.png" /> 1061753<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_19.png" /> 1061756<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_20.png" /> 1061757<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_21.png" /> 1061824<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_22.png" /> 1061828<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_23.png" /> 1061829<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_24.png" /> 1061833<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_25.png" /> 1062026<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_26.png" /> 1062080<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_27.png" /> 1062111<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_28.png" /> 1062117<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_29.png" /> 1062118<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_30.png" /> 1062121<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_31.png" /> 1070479<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_32.png" /> 1071381<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_33.png" /> 1074662<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_34.png" /> 1074664<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_35.png" /> 1074665<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_36.png" /> 1074675<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_37.png" /> 1075214<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_38.png" /> 1075219<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_39.png" /> 1075387<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_40.png" /> 1075393<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_41.png" /> 1075550<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_42.png" /> 1075552<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_43.png" /> 1075553<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_44.png" /> 1075577<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_45.png" /> 1075593<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_46.png" /> 1075598<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_47.png" /> 1075609<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_48.png" /> 1075667<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_49.png" /> 1075669<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_50.png" /> 1075682<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_51.png" /> 1075695<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_52.png" /> 1075708<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_53.png" /> 1075710<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_54.png" /> 1075718<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_55.png" /> 1075749<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_56.png" /> 1075751<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_57.png" /> 1075752<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_58.png" /> 1075779<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_59.png" /> 1075795<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_60.png" /> 1075800<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_61.png" /> 1075801<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_62.png" /> 1075815<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_63.png" /> 1075877<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_64.png" /> 1075891<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_65.png" /> 1075893<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_66.png" /> 1075897<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_67.png" /> 1075900<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_68.png" /> 1075902<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_69.png" /> 1075905<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_70.png" /> 1075906<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_71.png" /> 1075907<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_72.png" /> 1075908<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_73.png" /> 1076003<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_74.png" /> 1076004<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_75.png" /> 1076010<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_76.png" /> 1076019<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_77.png" /> 1076041<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_78.png" /> 1076064<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_79.png" /> 1076086<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_80.png" /> 1076094<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_81.png" /> 1076107<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_82.png" /> 1076114<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_83.png" /> 1076115<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_84.png" /> 1076126<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_85.png" /> 1076129<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_86.png" /> 1076287<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_87.png" /> 1076379<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_88.png" /> 1076865<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_89.png" /> 1076868<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_90.png" /> 1076874<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_91.png" /> 1076892<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_92.png" /> 1076901<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_93.png" /> 1076902<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_94.png" /> 1076905<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_95.png" /> 1076939<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_96.png" /> 1076943<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_97.png" /> 1076961<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_98.png" /> 1076968<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_99.png" /> 1077070<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_100.png" /> 1077082<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_101.png" /> 1077085<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_102.png" /> 1077086<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_103.png" /> 1077558<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_104.png" /> 1077565<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_105.png" /> 1077899<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_106.png" /> 1078061<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_107.png" /> 1078066<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_108.png" /> 1078074<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_109.png" /> 1078075<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_110.png" /> 1078077<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_111.png" /> 1078080<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_112.png" /> 1078184<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_113.png" /> 1078227<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_114.png" /> 1078229<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_115.png" /> 1078231<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_116.png" /> 1078248<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_117.png" /> 1078270<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_118.png" /> 1078272<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_119.png" /> 1078274<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_120.png" /> 1078275<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_121.png" /> 1078279<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_122.png" /> 1078282<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_123.png" /> 1078288<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_124.png" /> 1078289<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_125.png" /> 1078346<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_126.png" /> 1078447<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_127.png" /> 1078464<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_128.png" /> 1078465<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_129.png" /> 1078468<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_130.png" /> 1079122<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_131.png" /> 1079123<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_132.png" /> 1079666<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_133.png" /> 1079671<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_134.png" /> 1081381<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_135.png" /> 1084485<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_136.png" /> 1084491<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_137.png" /> 1084492<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_138.png" /> 1103656<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_139.png" /> 1103890<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_140.png" /> 1104764<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_141.png" /> 1109560<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_142.png" /> 1328884<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_143.png" /> 1359142<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_144.png" /> 1359145<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_145.png" /> 1369547<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_146.png" /> 1374739<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_147.png" /> 1792902<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_148.png" /> 1869505<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_149.png" /> 2136388<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_150.png" /> 2186492<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_151.png" /> 2269185<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_152.png" /> 2641209<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_153.png" /> 2702963<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_154.png" /> 2702964<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_155.png" /> 2702965<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_156.png" /> 2702968<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_157.png" /> 2702969<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_158.png" /> 2702993<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_159.png" /> 2702994<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_160.png" /> 2969850<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_161.png" /> 2978253<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_162.png" /> 3016098<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_163.png" /> 3016099<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_164.png" /> 3016102<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_165.png" /> 3016103<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_166.png" /> 3016105<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_167.png" /> 3186913<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_168.png" /> 3188617<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_169.png" /> 3188619<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_170.png" /> 3812280<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_171.png" /> 3964626<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_172.png" /> 3964627<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_173.png" /> 3964812<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_174.png" /> 9419556<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_175.png" /> 9431987<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_176.png" /> 9431989<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_177.png" /> 9431990<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_178.png" /> 9431991<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_179.png" /> 9431992<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_180.png" /> 9431993<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_181.png" /> 9431994<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_182.png" /> 9690454<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_183.png" /> 9717080<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_184.png" /> 9731022<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_185.png" /> 9732835<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_186.png" /> 9732862<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_187.png" /> 9753254<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_188.png" /> 10353005<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_189.png" /> 10456675<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_190.png" /> 10478656<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_191.png" /> 10840028<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_192.png" /> 10900534<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_193.png" /> 10906517<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_194.png" /> 10985743<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_195.png" /> 11021467<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_196.png" /> 11126774<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_197.png" /> 11159816<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_198.png" /> 11176926<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_199.png" /> 11185105<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_200.png" /> 11198619<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_201.png" /> 11228193<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_202.png" /> 11240317<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_203.png" /> 11252419<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_204.png" /> 11307736<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_205.png" /> 11307768<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_206.png" /> 11317442<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_207.png" /> 11347122<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_5_208.png" /> <br />' });
var format_EUDLgerHospitalRdhusHospital_6 = new ol.format.GeoJSON();
var features_EUDLgerHospitalRdhusHospital_6 = format_EUDLgerHospitalRdhusHospital_6.readFeatures(json_EUDLgerHospitalRdhusHospital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDLgerHospitalRdhusHospital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDLgerHospitalRdhusHospital_6.addFeatures(features_EUDLgerHospitalRdhusHospital_6);
var lyr_EUDLgerHospitalRdhusHospital_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDLgerHospitalRdhusHospital_6, 
                style: style_EUDLgerHospitalRdhusHospital_6,
                popuplayertitle: 'EUD, Læger, Hospital, Rådhus — Hospital',
                interactive: true,
                title: '<img src="styles/legend/EUDLgerHospitalRdhusHospital_6.png" /> EUD, Læger, Hospital, Rådhus — Hospital'
            });
var format_EUDLgerHospitalRdhusEUDHvidovre_7 = new ol.format.GeoJSON();
var features_EUDLgerHospitalRdhusEUDHvidovre_7 = format_EUDLgerHospitalRdhusEUDHvidovre_7.readFeatures(json_EUDLgerHospitalRdhusEUDHvidovre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDLgerHospitalRdhusEUDHvidovre_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDLgerHospitalRdhusEUDHvidovre_7.addFeatures(features_EUDLgerHospitalRdhusEUDHvidovre_7);
var lyr_EUDLgerHospitalRdhusEUDHvidovre_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDLgerHospitalRdhusEUDHvidovre_7, 
                style: style_EUDLgerHospitalRdhusEUDHvidovre_7,
                popuplayertitle: 'EUD, Læger, Hospital, Rådhus — EUD Hvidovre',
                interactive: true,
                title: '<img src="styles/legend/EUDLgerHospitalRdhusEUDHvidovre_7.png" /> EUD, Læger, Hospital, Rådhus — EUD Hvidovre'
            });
var format_EUDLgerHospitalRdhusRdhus_8 = new ol.format.GeoJSON();
var features_EUDLgerHospitalRdhusRdhus_8 = format_EUDLgerHospitalRdhusRdhus_8.readFeatures(json_EUDLgerHospitalRdhusRdhus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDLgerHospitalRdhusRdhus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDLgerHospitalRdhusRdhus_8.addFeatures(features_EUDLgerHospitalRdhusRdhus_8);
var lyr_EUDLgerHospitalRdhusRdhus_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDLgerHospitalRdhusRdhus_8, 
                style: style_EUDLgerHospitalRdhusRdhus_8,
                popuplayertitle: 'EUD, Læger, Hospital, Rådhus — Rådhus',
                interactive: true,
                title: '<img src="styles/legend/EUDLgerHospitalRdhusRdhus_8.png" /> EUD, Læger, Hospital, Rådhus — Rådhus'
            });
var format_EUDLgerHospitalRdhusLger_9 = new ol.format.GeoJSON();
var features_EUDLgerHospitalRdhusLger_9 = format_EUDLgerHospitalRdhusLger_9.readFeatures(json_EUDLgerHospitalRdhusLger_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDLgerHospitalRdhusLger_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDLgerHospitalRdhusLger_9.addFeatures(features_EUDLgerHospitalRdhusLger_9);
var lyr_EUDLgerHospitalRdhusLger_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDLgerHospitalRdhusLger_9, 
                style: style_EUDLgerHospitalRdhusLger_9,
                popuplayertitle: 'EUD, Læger, Hospital, Rådhus — Læger',
                interactive: true,
                title: '<img src="styles/legend/EUDLgerHospitalRdhusLger_9.png" /> EUD, Læger, Hospital, Rådhus — Læger'
            });
var format_thvo0001_temakortfolkeskoler_10 = new ol.format.GeoJSON();
var features_thvo0001_temakortfolkeskoler_10 = format_thvo0001_temakortfolkeskoler_10.readFeatures(json_thvo0001_temakortfolkeskoler_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thvo0001_temakortfolkeskoler_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thvo0001_temakortfolkeskoler_10.addFeatures(features_thvo0001_temakortfolkeskoler_10);
var lyr_thvo0001_temakortfolkeskoler_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thvo0001_temakortfolkeskoler_10, 
                style: style_thvo0001_temakortfolkeskoler_10,
                popuplayertitle: 'thvo0001_temakort — folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/thvo0001_temakortfolkeskoler_10.png" /> thvo0001_temakort — folkeskoler'
            });
var format_thvo0001_temakorttogstationer_11 = new ol.format.GeoJSON();
var features_thvo0001_temakorttogstationer_11 = format_thvo0001_temakorttogstationer_11.readFeatures(json_thvo0001_temakorttogstationer_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thvo0001_temakorttogstationer_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thvo0001_temakorttogstationer_11.addFeatures(features_thvo0001_temakorttogstationer_11);
var lyr_thvo0001_temakorttogstationer_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thvo0001_temakorttogstationer_11, 
                style: style_thvo0001_temakorttogstationer_11,
                popuplayertitle: 'thvo0001_temakort — togstationer',
                interactive: true,
                title: '<img src="styles/legend/thvo0001_temakorttogstationer_11.png" /> thvo0001_temakort — togstationer'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_Voyagernolabelsretina_1.setVisible(true);lyr_strandbeskyttedeomrderstrandbeskyttelse_2.setVisible(true);lyr_FrededeomrderomridsafkommuneFrededeomrder_3.setVisible(true);lyr_Frededeomrderomridsafkommunekommuneplan_4.setVisible(true);lyr_lokalplaner_hvidovrelokalplaner_5.setVisible(true);lyr_EUDLgerHospitalRdhusHospital_6.setVisible(true);lyr_EUDLgerHospitalRdhusEUDHvidovre_7.setVisible(true);lyr_EUDLgerHospitalRdhusRdhus_8.setVisible(true);lyr_EUDLgerHospitalRdhusLger_9.setVisible(true);lyr_thvo0001_temakortfolkeskoler_10.setVisible(true);lyr_thvo0001_temakorttogstationer_11.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_Voyagernolabelsretina_1,lyr_strandbeskyttedeomrderstrandbeskyttelse_2,lyr_FrededeomrderomridsafkommuneFrededeomrder_3,lyr_Frededeomrderomridsafkommunekommuneplan_4,lyr_lokalplaner_hvidovrelokalplaner_5,lyr_EUDLgerHospitalRdhusHospital_6,lyr_EUDLgerHospitalRdhusEUDHvidovre_7,lyr_EUDLgerHospitalRdhusRdhus_8,lyr_EUDLgerHospitalRdhusLger_9,lyr_thvo0001_temakortfolkeskoler_10,lyr_thvo0001_temakorttogstationer_11];
lyr_strandbeskyttedeomrderstrandbeskyttelse_2.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_FrededeomrderomridsafkommuneFrededeomrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Frededeomrderomridsafkommunekommuneplan_4.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_lokalplaner_hvidovrelokalplaner_5.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_EUDLgerHospitalRdhusHospital_6.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDLgerHospitalRdhusEUDHvidovre_7.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDLgerHospitalRdhusRdhus_8.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDLgerHospitalRdhusLger_9.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_thvo0001_temakortfolkeskoler_10.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_thvo0001_temakorttogstationer_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_strandbeskyttedeomrderstrandbeskyttelse_2.set('fieldImages', {'fid': '', 'forretningshaendelse': '', 'senesteSagLokalId': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalId': '', 'paataenktHandling': '', 'registreringFra': '', 'virkningFra': '', 'virkningsaktoer': '', 'temaFladeID': '', 'tematype': '', 'jordstykkeLokalId': '', });
lyr_FrededeomrderomridsafkommuneFrededeomrder_3.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Frededeomrderomridsafkommunekommuneplan_4.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_lokalplaner_hvidovrelokalplaner_5.set('fieldImages', {'fid': '', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_EUDLgerHospitalRdhusHospital_6.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_EUDLgerHospitalRdhusEUDHvidovre_7.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_EUDLgerHospitalRdhusRdhus_8.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_EUDLgerHospitalRdhusLger_9.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_thvo0001_temakortfolkeskoler_10.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_thvo0001_temakorttogstationer_11.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_strandbeskyttedeomrderstrandbeskyttelse_2.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_FrededeomrderomridsafkommuneFrededeomrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Frededeomrderomridsafkommunekommuneplan_4.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_lokalplaner_hvidovrelokalplaner_5.set('fieldLabels', {'fid': 'no label', 'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_EUDLgerHospitalRdhusHospital_6.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_EUDLgerHospitalRdhusEUDHvidovre_7.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', });
lyr_EUDLgerHospitalRdhusRdhus_8.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', });
lyr_EUDLgerHospitalRdhusLger_9.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_thvo0001_temakortfolkeskoler_10.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_thvo0001_temakorttogstationer_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_thvo0001_temakorttogstationer_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});