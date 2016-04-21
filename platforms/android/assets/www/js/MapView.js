var MapView = function() {
	
    this.initialize = function() {
        console.log("MapView: initialize");
        this.$el = $('<div/>');
        this.render();
    };

    this.render = function() {
        console.log("MapView: render");
        this.$el.html(this.template());
        $('.content', this.$el).html('hiihaa');
        return this;    
    };

    this.getLocation = function(){
        navigator.geolocation.getCurrentPosition(function(position) {
        },
        function() {
            alert('Error getting location');
        });
        this.render();
    };

    this.initialize();
};

