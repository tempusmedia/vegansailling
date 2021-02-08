/*
 *  Name : Floorplan
 *  Description : Displays floating custom maps
 *  Author : John Barounis
 *  Version : 0.0.1
*/

THEASYS.theme.autoLoadFunction('floorplan','init');

THEASYS.theme.modules.floorplan.initialized = 0;

THEASYS.theme.modules.floorplan.guiCreated = 0;

THEASYS.theme.modules.floorplan.map_gui_mode = 0;

THEASYS.theme.modules.floorplan.customMapPosition = {0:{x:0,y:0,scale:1}};

THEASYS.theme.modules.floorplan.init = function( ){

    if( this.guiCreated ){

        return false;

    }

    var custom_map_status = 0;

    var options = THEASYS.renderer.vars.get('options');

    if( 'maps_custom_position' in options && options.maps_custom_position ){

        this.customMapPosition = JSON.parse(options.maps_custom_position);

    }

    var tour_rnd = THEASYS.renderer.vars.get('tour_rnd');

    if( 'tour' in THEASYS.cache.obj.tours[tour_rnd] && !THEASYS.fn.is_empty(THEASYS.cache.obj.tours[tour_rnd].tour) ){

        if( ( 'floorplan' in THEASYS.cache.obj.tours[tour_rnd].tour ) && THEASYS.cache.obj.tours[tour_rnd].tour.floorplan ){

            custom_map_status = 1;

        }

        if( !parseInt( options.maps_custom_show, 10 ) ){

            custom_map_status = 0;

        }

    }

    if( custom_map_status ){

        var viewer_wrapper = $('#viewer_wrapper');
        var viewer = $('#viewer');

        var html = `
            <div id="floorplan_wrapper">
                <div id="floorplan_img_wrapper">
                    <img src="" id="floorplan_img" alt="Floorplan Image" />
                </div>
                <div id="floorplan_img_pins"></div>
                <div id="floorplan_radar" data-panorama="0"></div>
            </div>
        `;

        THEASYS.theme.appendHtml(html,document.getElementById('viewer_wrapper'));

        this.guiCreated = 1;

        if( this.map_gui_mode > 0 ){

            this.loadMapButton(map_status);

        }

    }

    THEASYS.renderer.event.on('fovChange',function(){

        THEASYS.theme.modules.maps.onFovChange();

    });

    THEASYS.renderer.event.on('processPanoramaAfter',function(action){

        var loadedOnce = THEASYS.renderer.vars.get('loadedOnce');

        if( loadedOnce ){

            //THEASYS.theme.modules.maps.init();
            THEASYS.theme.modules.maps.createMapRadar(action);

        }

    });

    THEASYS.renderer.event.on('panoramaToScene',function(action){

        var loadedOnce = THEASYS.renderer.vars.get('loadedOnce');

        if( loadedOnce ){

            THEASYS.theme.modules.maps.customMap.setCustomMapRadar(action);

        }

    });

    THEASYS.renderer.event.on('toggleVr',function( vr ){

        var isMobile = THEASYS.renderer.vars.get('device.isMobile');

        if( vr ){

            if( isMobile ){

                $('#map_button_wrapper').addClass('hidden');

                THEASYS.theme.modules.maps.toogle(1);

            }

        } else {

            if( isMobile ){

                $('#map_button_wrapper').removeClass('hidden');

            }

        }

    });

    THEASYS.renderer.event.sendOn('resize',function(){

        //return [ 'maps' , $('#map-wrapper').outerWidth() || 0 ];
        return $('#map-wrapper').outerWidth();
        //return { maps : $('#map-wrapper').outerWidth() || 0 };

    });

    THEASYS.renderer.event.on('resize',function(){

        if( THEASYS.theme.modules.maps.map_gui_mode === 1 ){

            var window_height = $(window).height();

            $('#map_geo-wrapper').css({height: window_height });

        }

        if( THEASYS.theme.modules.maps.map_gui_mode === 2 ){

            var window_height = $(window).height();

            $('#map_custom-wrapper').css({height: window_height });

        }

        if( THEASYS.theme.modules.maps.map_gui_mode === 3 ){

            $('#map_custom-img-wrapper').height($('#map').height());

            var window_height = $(window).height();
            var map_height = $('#map_geo-wrapper').height();
            var resizer_height = $('#map_resizer-wrapper').height();

            $('#map_custom-wrapper').css({height: window_height - ( map_height + resizer_height )  });

        }

        if( THEASYS.theme.modules.maps.map_gui_mode ){

            var map_button_wrapper = $('#map_button_wrapper');

            map_button_wrapper.css({

              top: ( $(window).height() - map_button_wrapper.outerHeight() ) / 2 ,

            });

        }

    });

    THEASYS.renderer.event.on('gyroscope',function( state ){

        if( !state ){

            THEASYS.theme.modules.maps.rotateCustomMapRadar();

            THEASYS.theme.modules.maps.setMapRadarOrientation();

        }

    });

    THEASYS.renderer.event.on('userMovePanorama',function( w ){

        if( w === 'in' || w === 'out' ){

            THEASYS.theme.modules.maps.setRadarMarkerWidth();

        }

    });

    THEASYS.renderer.event.on('goTo',function( ){

        THEASYS.theme.modules.maps.rotateCustomMapRadar();

    });

    THEASYS.renderer.event.on('render',function( ){

        var device = THEASYS.renderer.vars.get('device');
        var controls = THEASYS.renderer.vars.get('controls');

        if( device.isMobile && !THEASYS.fn.is_empty(controls) ){

            var dlon = 180 + controls.update();

            THEASYS.theme.modules.maps.rotateCustomMapRadar(dlon);

            THEASYS.theme.modules.maps.setRadarOrientation(dlon);

        }

    });

    this.initialized = true;

    if( custom_map_status === 1 ){

        if( ~~options.maps_opended ){

            //map_button_wrapper.find('.map').trigger('click');

            THEASYS.theme.modules.floorplan.toogle(false);

        }

    }

    THEASYS.theme.modules.floorplan.toogle(false);


};

THEASYS.theme.modules.maps.listenToEdits = function( obj ){

    for( var k in obj ){

        switch( k ){

            case'maps_close_on_actions':

                THEASYS.renderer.vars.set('options.maps_close_on_actions',+obj[k]);

            break;

            case'maps_geo_markers_show_panorama_title_on_hover':

                var value = +obj[k];

                THEASYS.renderer.vars.set('options.maps_geo_markers_show_panorama_title_on_hover',value);

                if( value ){

                    this.map.toggleMarkerTitles(1);

                } else {

                    this.map.toggleMarkerTitles(0);

                }

            break;

            case'maps_custom_markers_show_panorama_title_on_hover':

                var value = +obj[k];

                THEASYS.renderer.vars.set('options.maps_custom_markers_show_panorama_title_on_hover',value);

                if( value ){

                    this.customMap.customMapPinsTitles(1);

                } else {

                    this.customMap.customMapPinsTitles(0);

                }

            break;

            case'maps_custom_radar':

                var value = +obj[k];

                THEASYS.renderer.vars.set('options.maps_custom_radar',value);

                this.customMap.adjustCustomMapPins();

                this.customMap.rotateCustomMapRadar();

            break;

        }

    }

};

THEASYS.theme.modules.floorplan.toogle = function( state ){

    var map_button_wrapper = $('#map_button_wrapper');

    var map = $('#map');

    var map_wrapper = $('#map-wrapper');

    var jthis = map_button_wrapper.find('.map');

    if( state !== undefined  ){

    } else {

        state = jthis.hasClass('selected');

    }

    var device = THEASYS.renderer.vars.get('device');

    if( state ) {

        jthis.removeClass('selected');

        jthis.parent().removeClass('selected');

        map_wrapper.css('width','0px');

        this.adjustViewer();

        var draggableInstance = map_button_wrapper.draggable( "instance" );

        if( draggableInstance ){

            map_button_wrapper.draggable( "option", "disabled", true );

        }

    } else {

        jthis.addClass('selected');

        jthis.parent().addClass('selected');

        $('#map_custom-wrapper').css({width:'100%'});

        this.adjustViewer();

        this.customMap.loadCustomMap(this.customMapPosition);

        this.customMap.adjustCustomMapPins();

    }

}

THEASYS.theme.modules.floorplan.adjustViewer = function(w){

    THEASYS.renderer.resize();

    //this.customMap.adjustCustomMapPins();

    //this.customMap.adjustImage();

};

THEASYS.theme.modules.maps.setRadarMarkerWidth = function(){

    this.map.setRadarMarkerWidth();

};

THEASYS.theme.modules.maps.mapAutoShrink = function(){

    this.map.auto_shrink();

};

THEASYS.theme.modules.floorplan.rotateCustomMapRadar = function(dlon){

    if( dlon ){

        this.customMap.rotateCustomMapRadar(dlon);

    } else {

        this.customMap.rotateCustomMapRadar();

    }

};
