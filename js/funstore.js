class BaseComponent {

    constructor(name, container, parameters) {
        this.name = name;
        this.container = $(container);
        this.parameters = parameters;
        this.properties = {};
        this.basePath = "./lib/component/";
        this.path = this.basePath + this.name + "/";
        this.configFile = this.path + "config.json";
        this.srcFile = this.path + "content.html";
    }

    config() {
        var fun = this;
        $.getJSON(this.configFile, function(data) {
            fun.configData = data;
            $.each(data.styles, function(_, file) {
                insertStyle(`${fun.path}css/${file}`);
            });
            $.each(data.scripts, function(_, file) {
                insertScript(`${fun.path}js/${file}`);
            });
        });
    }

    load(todo) {
        this.container.load(this.srcFile, todo);
    }
}


function insertStyle(file) {
    var link = `<link rel='stylesheet' href='${file}' />`;
    $($("head")[0]).append(link);
}
function insertScript(file) {
    var script = `<script src='${file}' ></script>`;
    $($("body")[0]).append(script);
}