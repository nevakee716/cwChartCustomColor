(function(cwApi, $) { 
  "use strict";


    /********************************************************************************
    Configs : list the view with the color chart
    *********************************************************************************/
    cwCustomerSiteActions.cwChartCustomColors = {};
    cwCustomerSiteActions.cwChartCustomColors.ColorByView = {};

    // custom colors for specifics views
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.index_process_lifecycle_deliver = ['#0A5294','#093395','#091397','#200899','#42089B','#65089D','#89079F','#A10795','#A30773','#A5064F','#A7062B','#A90505','#AB2B05','#AD5204','#AF7A04','#B1A303','#98B303','#71B502','#48B702','#1FB901','#01BB0D','#00BD38','#00BF64'];
   
    // default color 
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.default = ['#5aa2cc', '#2262a0', '#8ac9de', '#d84a28', '#93341f', '#c3c9ca', '#dd5b26', '#1b5894', '#e68d45', '#93351f', '#ba3d25', '#67b0d6', '#d74927', '#e58941', '#d84a28', '#67b0d6', '#ba3d25', '#93341f', '#e68d44', '#e68d44', '#dd5b26', '#c4c9ca', '#59a2cc'];



    /********************************************************************************
    Custom Action for Single Page : See Impact here http://bit.ly/2qy5bvB
    *********************************************************************************/
    cwCustomerSiteActions.doActionsForSingle_Custom = function (rootNode) { 
        var currentView, url,i;
        currentView = cwAPI.getCurrentView();

        for(i in cwAPI.customLibs.doActionForSingle) {
            if(cwAPI.customLibs.doActionForSingle.hasOwnProperty(i)) {
                if (typeof(cwAPI.customLibs.doActionForSingle[i]) === "function"){
                    cwAPI.customLibs.doActionForSingle[i](rootNode,currentView.cwView);
                }   
            }
        }
    };


    /********************************************************************************
    Custom Action for Index Page : See Impact here http://bit.ly/2qy5bvB
    *********************************************************************************/
    cwCustomerSiteActions.doActionsForIndex_Custom = function (rootNode) { 
        var currentView, url,i;
        currentView = cwAPI.getCurrentView();

        for(i in cwAPI.customLibs.doActionForIndex) {
            if(cwAPI.customLibs.doActionForIndex.hasOwnProperty(i)) {
                if (typeof(cwAPI.customLibs.doActionForIndex[i]) === "function"){
                    cwAPI.customLibs.doActionForIndex[i](rootNode,currentView.cwView);
                }   
            }
        }
    };

    cwCustomerSiteActions.cwChartCustomColors.changeColors = function(rootNode,cwView){
        if(cwCustomerSiteActions.cwChartCustomColors.ColorByView.hasOwnProperty(cwView) ) {
            cwApi.cwReporting.colorRange = cwCustomerSiteActions.cwChartCustomColors.ColorByView[cwView];
        } else {
            cwApi.cwReporting.colorRange = cwCustomerSiteActions.cwChartCustomColors.ColorByView.default;
        }
        
    };


    /********************************************************************************
    Configs : add trigger for single and index
    *********************************************************************************/
    if(cwAPI.customLibs.doActionForSingle === undefined) { cwAPI.customLibs.doActionForSingle = {};}
    if(cwAPI.customLibs.doActionForIndex === undefined) { cwAPI.customLibs.doActionForIndex = {};}
    cwAPI.customLibs.doActionForSingle.cwChartCustomColors = cwCustomerSiteActions.cwChartCustomColors.changeColors; 
    cwAPI.customLibs.doActionForIndex.cwChartCustomColors = cwCustomerSiteActions.cwChartCustomColors.changeColors; 

}(cwAPI, jQuery));
