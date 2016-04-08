'use strict';

function SharedScope(){

    return{
        restrict: 'EA',
        template: '<h4>Shared</h4> Ibu : {{beer.ibu}} StyleId: {{beer.styleId}}'
        // controller: controller as ctrl,
        // link: function(scope, element, attrs){}
    };
};

module.exports = SharedScope;