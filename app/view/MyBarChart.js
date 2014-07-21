/*
 * File: app/view/MyBarChart.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('test.view.MyBarChart', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.mybarchart',

    requires: [
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.Legend'
    ],

    config: {
        styleHtmlContent: true,
        store: 'ChartStore',
        colors: [
            '#115fa6',
            '#94ae0a',
            '#a61120',
            '#ff8809',
            '#ffd13e',
            '#a61187',
            '#24ad9a',
            '#7c7474',
            '#a66111'
        ],
        axes: [
            {
                type: 'category',
                fields: [
                    'name'
                ]
            },
            {
                type: 'numeric',
                fields: [
                    'OrderCount',
                    'OrderAmount'
                ],
                grid: {
                    odd: {
                        fill: '#e8e8e8'
                    }
                },
                position: 'left'
            }
        ],
        series: [
            {
                type: 'bar',
                xField: 'name',
                yField: [
                    'OrderCount',
                    'OrderAmount'
                ],
                stacked: false
            }
        ],
        interactions: [
            {
                type: 'panzoom'
            }
        ],
        legend: {
            xtype: 'legend',
            centered: false,
            styleHtmlContent: true,
            store: 'ChartStore'
        }
    }

});