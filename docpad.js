'use strict';

module.exports = {

    // =================================
    // Template Data
    // =================================

    templateData: {

        // Meta tags
        site: {
            url: 'http://coffeeandcodeproject.github.io/website',
            title: 'Coffee and Code',
            description: 'Um espaço colaborativo e de aprendizado para os desenvolvedores web da comunidade brasileira.',
            keywords: 'coffeeandcode, website, aprendizado, espaço colaborativo, desenvolvimento web',
            styles: [
                '/css/style.css',
                'http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900'
            ],
            scripts: [
                '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
                '/js/main.js'
            ],
            analytics: ''
        },

        // Pages
        pages: [
            { url: 'sobre', name: 'Sobre' },
            { url: 'screencasts', name: 'ScreenCasts' },
            { url: 'contribua', name: 'Contribua' }
        ],

        // Social
        // socials: [
        //     { url: 'https://www.facebook.com/coffeeandcodeproject', name: 'Facebook' },
        //     { url: 'https://twitter.com/coffeeandcodebr', name: 'Twitter' },
        //     { url: 'https://github.com/CoffeeAndCodeProject', name: 'GitHub' }
        // ],

        // Sections
        sections: [
            'learning',
            'topics',
            'guides',
            'magneto'
        ],

        labels: {
            learning: 'Aprendizado',
            topics:   'Tópicos',
            guides:   'Guias',
            magneto:  'Magneto'
        },

        // DocPad Plugins
        plugins: {
            stylus: {
                stylusLibraries: {
                    nib: true
                },
                stylusOptions: {
                    compress: true,
                    'include css': true
                }
            }
        }
    }
};
