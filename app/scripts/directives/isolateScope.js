'use strict';

function IsolateScope(){
    
    return{
        scope: {
            //name: '@', //  <my-dir name="{{name}}" />    -->
            beer: '=', //  <my-dir beer="beer" />       <-->
            action: '&'
        },
        template: '<button ng-click="action();">Request Another</button>'
    };
};

module.exports = IsolateScope;