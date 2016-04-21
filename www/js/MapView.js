var MapView = function() {
    var map = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map',
        controls: ol.control.defaults({
            attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
            })
        }),
        view: new ol.View({
            center: [0, 0],
            zoom: 14
        })
    });          
    
    this.initialize = function() {
        console.log("MapView: initialize");
        this.$el = $('<div/>');
    };

    this.render = function() {
        console.log("MapView: render");
        this.$el.html(this.template());
        this.getLocation();
        return this;    
    };

    this.getLocation = function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            $('.content', this.$el).html('Lat: ' + position.coords.latitude + ',<br>Lon: ' + position.coords.longitude);
        },
        function() {
            alert('Error getting location');
        });
    };

    this.initialize();
};
