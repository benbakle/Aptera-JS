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
            aptera: '../lib/ApteraJS/aptera',
            web: '../lib/ApteraJS/Web/web',
            list: '../lib/ApteraJS/Web/list'


        }
};
