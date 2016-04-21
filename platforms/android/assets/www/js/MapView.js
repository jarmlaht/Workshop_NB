var MapView = function() {
	
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
            $('.coordinates', this.$el).html(position.coords.latitude + ',' + position.coords.longitude);
            console.log('Lat: ' + position.coords.latitude + ',<br>Lon: ' + position.coords.longitude);
        },
        function() {
            alert('Error getting location');
        });
    };

    this.initialize();
};

