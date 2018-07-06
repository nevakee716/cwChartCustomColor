(function(cwApi, $) { 
  "use strict";


    /********************************************************************************
    Configs : list the view with the color chart
    *********************************************************************************/
    cwCustomerSiteActions.cwChartCustomColors = {};
    cwCustomerSiteActions.cwChartCustomColors.ColorByView = {};

    // custom colors for specifics views
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.index_process_lifecycle_deliver = {};
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.index_process_lifecycle_deliver.colors = ['#0A5294','#093395','#091397','#200899','#42089B','#65089D','#89079F','#A10795','#A30773','#A5064F','#A7062B','#A90505','#AB2B05','#AD5204','#AF7A04','#B1A303','#98B303','#71B502','#48B702','#1FB901','#01BB0D','#00BD38','#00BF64'];
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.index_process_lifecycle_deliver.mapping = {Tâche : '#EEEEEE'};
    // default color 
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.default = {};
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.default.colors = ['#000000', '#999999', '#FFFFFF', '#d84a28', '#93341f', '#c3c9ca', '#dd5b26', '#1b5894', '#e68d45', '#93351f', '#ba3d25', '#67b0d6', '#d74927', '#e58941', '#d84a28', '#67b0d6', '#ba3d25', '#93341f', '#e68d44', '#e68d44', '#dd5b26', '#c4c9ca', '#59a2cc'];
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.default.mapping = {Tâche : '#EEEEEE'};


    /********************************************************************************
    Custom Action for Single Page : See Impact here http://bit.ly/2qy5bvB
    *********************************************************************************/
    cwCustomerSiteActions.doActionsForSingle_Custom = function (rootNode) { 
        var currentView, url,i;
        currentView = cwAPI.getCurrentView();

        for(i in cwAPI.customLibs.doActionForSingle) {
            if(cwAPI.customLibs.doActionForSingle.hasOwnProperty(i)) {
                if (typeof(cwAPI.customLibs.doActionForSingle[i]) === "function"){
                    if(currentView) {
                        cwAPI.customLibs.doActionForSingle[i](rootNode,currentView.cwView);
                    } else {
                        cwAPI.customLibs.doActionForSingle[i](rootNode,null);
                    }
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
            cwApi.cwReporting.colorRange = cwCustomerSiteActions.cwChartCustomColors.ColorByView[cwView].colors;
        } else {
            cwApi.cwReporting.colorRange = cwCustomerSiteActions.cwChartCustomColors.ColorByView.default.colors;
        }
        
    };




    cwApi.CwCharts.CwChart.prototype.updateCommonOptionsProperties = function(options) {
        var mapping,colors,cwView = cwAPI.getCurrentView();
        var self = this;
        if(cwView && cwView.cwView && cwCustomerSiteActions.cwChartCustomColors.ColorByView.hasOwnProperty(cwView) ) {
            mapping = cwCustomerSiteActions.cwChartCustomColors.ColorByView[cwView].mapping;
            colors = cwCustomerSiteActions.cwChartCustomColors.ColorByView[cwView].colors;
        } else {
            mapping = cwCustomerSiteActions.cwChartCustomColors.ColorByView.default.mapping;
            colors = cwCustomerSiteActions.cwChartCustomColors.ColorByView.default.colors;
        }

        if(options && options.series) {
            options.series.forEach(function(s) {
                s.data.forEach(function(d,i) {
                    if(mapping.hasOwnProperty(d.category)) {
                        cwApi.cwReporting.colorRange[i] = mapping[d.category];
                    } 
                });
            });
        };




        options.legend = {};
        if (this.title !== null) {
            options.title = {
                text: this.title,
                font: 'large inherits'
            };
        }
        options.theme = 'metro';
        options.width = '100%';
        options.tooltip = {
            visible: true,
            font: 'inherit',
            opacity: 1
        };
        if (!cwApi.isUndefined(this.seriesClick)) {
            options.seriesClick = this.seriesClick;
        }
        options.seriesColors = cwAPI.cwReporting.colorRange;
        options.chartArea = {
            background: "transparent"
        };
    };

    /********************************************************************************
    Configs : add trigger for single and index
    *********************************************************************************/
    if(cwAPI.customLibs === undefined) { cwAPI.customLibs = {};}
    if(cwAPI.customLibs.doActionForSingle === undefined) { cwAPI.customLibs.doActionForSingle = {};}
    if(cwAPI.customLibs.doActionForIndex === undefined) { cwAPI.customLibs.doActionForIndex = {};}
    cwAPI.customLibs.doActionForSingle.cwChartCustomColors = cwCustomerSiteActions.cwChartCustomColors.changeColors; 
    cwAPI.customLibs.doActionForIndex.cwChartCustomColors = cwCustomerSiteActions.cwChartCustomColors.changeColors; 

}(cwAPI, jQuery));
