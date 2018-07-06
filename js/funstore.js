class BaseComponent {

    
    constructor(name, container, parameters) {
        this.name = name;
        this.container = $(container);
        this.parameters = parameters;
        this.basePath = "./lib/component/";
        this.path = this.basePath + this.name + "/";
    }

    config() {

        var config = this.path + "config.json";
        var fun = this;
        $.getJSON(config, function(data) {
            $.each(data.styles, function(_, file) {
                fun.insertStyle(`css/${fun.path}${file}`);
            });
            $.each(data.scripts, function(_, file) {
                fun.insertScript(`js/${fun.path}${file}`);
            });
        });
    }
}


function insertStyle(file) {
    var link = `<link rel='stylesheet' href='${file}' />`;
    $($("head")[0]).append(link);
}
function insertScript(file) {
    var script = `<script src='${file}' ></script>`;
    $($("body")[0]).before(script);
}

function useComponent(arrays) {
    var array = arrays.split(' ');
    $.each(array, function(_, item) {
        $.getScript("./lib/component/" + item + "/main.js");
    });
}