| **Name** | **cwChartCustomColor** | **Version** | 
| --- | --- | --- |
| **Updated by** | Mathias PFAUWADEL | 1.0 |


## Patch Notes

* 1.0 : 1st version working

## TBD

* Handle Tabs
* More Options

## Description 
Allow you to change colors of charts depending on the view (indexPage or objectPage). You can also change the defaults colors

## Screen Shot

<img src="https://raw.githubusercontent.com/nevakee716/cwChartCustomColor/master/screen/1.jpg" alt="Drawing" style="width: 95%;"/>

## Evolve Configuration
This is a specific so no layout to configure on Evolve

## Options 

to be configure in C:\Casewise\Evolve\Site\bin\webDesigner\custom\Marketplace\libs\cwChartCustomColor\src\cwChartCustomColor.js

cwCustomerSiteActions.cwChartCustomColors.ColorByView.default allow to change the default color set for chart
cwCustomerSiteActions.cwChartCustomColors.ColorByView.{name of the view} allow to change the default color set for chart
<img src="https://raw.githubusercontent.com/nevakee716/cwChartCustomColor/master/screen/2.jpg" alt="Drawing" style="width: 95%;"/>

Color must in hex value. You can select has many color as you want, the chart will pick them in order, if a chart need 6 colors and you put only 5 in cwCustomerSiteActions.cwChartCustomColors.ColorByView.{name of the view}, it will use the color number 1 for the 6th color.
