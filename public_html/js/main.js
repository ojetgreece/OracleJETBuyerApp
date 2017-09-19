require.config({
    baseUrl: 'js',
    paths: {
        'knockout': 'libs/knockout/knockout-3.4.0.debug',
        'jquery': 'libs/jquery/jquery-3.1.1',
        'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
        'promise': 'libs/es6-promise/es6-promise',
        'hammerjs': 'libs/hammer/hammer-2.0.8',
        'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
        'ojs': 'libs/oj/v3.2.0/debug',
        'ojL10n': 'libs/oj/v3.2.0/ojL10n',
        'ojtranslations': 'libs/oj/v3.2.0/resources',
        'text': 'libs/require/text',
        'signals': 'libs/js-signals/signals',
        'customElements': 'libs/webcomponents/CustomElements',
        'proj4': 'libs/proj4js/dist/proj4-src',
        'css': 'libs/require-css/css',
        'app': 'app',
        'buyer': 'modules/buyer',
        'authenticator': 'modules/authenticator',
        'sales': 'modules/sales'
    },
    waitSeconds: 2
});
require(["ojs/ojcore", "knockout", "app", "ojs/ojknockout", "ojs/ojinputtext"], (oj, ko, appViewModel) => {
    ko.applyBindings(new appViewModel());
});