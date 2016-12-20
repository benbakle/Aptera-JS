// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

var require = {
        baseUrl: '',
        shim : {
            "bootstrap" : {"deps" : ['jquery']}
        },
        paths: {
            jquery: '../lib/jquery-3.1.1',
            bootstrap: '../lib/bootstrap',
            print: '../lib/print',
            aptera: '../lib/apteraJS/aptera',
            web: '../lib/apteraJS/web',
            list: '../lib/apteraJS/list'


        }
};
