| **Name** | **cwChartCustomColor** | **Version** | 
| --- | --- | --- |
| **Updated by** | Mathias PFAUWADEL | 1.1 |


## Patch Notes

* 1.1 : Allow Remapping of Color
* 1.0 : 1st version working

## TBD

* More Options

## Description 
Allow you to change colors of charts depending on the view (indexPage or objectPage). You can also change the defaults colors. You can map a color to a value

## Screen Shot

<img src="https://raw.githubusercontent.com/nevakee716/cwChartCustomColor/master/screen/1.jpg" alt="Drawing" style="width: 95%;"/>

## Evolve Configuration
This is a specific so no layout to configure on Evolve

## Options 

to be configure in C:\Casewise\Evolve\Site\bin\webDesigner\custom\Marketplace\libs\cwChartCustomColor\src\cwChartCustomColor.js

cwCustomerSiteActions.cwChartCustomColors.ColorByView.default allow to change the default color set for chart, so it will be apply to all page that don't have a specific set of color
cwCustomerSiteActions.cwChartCustomColors.ColorByView.{name of the view} allow to change the default color set for chart
````
    // custom colors for specifics views
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.index_process_lifecycle_deliver = {};
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.index_process_lifecycle_deliver.colors = ['#0A5294','#093395','#091397','#200899','#42089B','#65089D','#89079F','#A10795','#A30773','#A5064F','#A7062B','#A90505','#AB2B05','#AD5204','#AF7A04','#B1A303','#98B303','#71B502','#48B702','#1FB901','#01BB0D','#00BD38','#00BF64'];
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.index_process_lifecycle_deliver.mapping = {Tâche : '#EEEEEE'};
    // default color 
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.default = {};
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.default.colors = ['#000000', '#999999', '#FFFFFF', '#d84a28', '#93341f', '#c3c9ca', '#dd5b26', '#1b5894', '#e68d45', '#93351f', '#ba3d25', '#67b0d6', '#d74927', '#e58941', '#d84a28', '#67b0d6', '#ba3d25', '#93341f', '#e68d44', '#e68d44', '#dd5b26', '#c4c9ca', '#59a2cc'];
    cwCustomerSiteActions.cwChartCustomColors.ColorByView.default.mapping = {Tâche : '#EEEEEE'};
````
Colors define the set of color.  Color must in hex value. You can select has many color as you want, the chart will pick them in order, if a chart need 6 colors and you put only 5 in cwCustomerSiteActions.cwChartCustomColors.ColorByView.{name of the view}, it will use the color number 1 for the 6th color.

If you want a value to have a specific color, use mapping and attach a color to a label


