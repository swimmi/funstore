
class FunClock extends BaseComponent {


    constructor(container, parameters) {
        super(container, parameters);
        this.id = "00000001";
        this.name = "clock";
        this.path = this.basePath + this.name + "/";
        this.setup();
    }

    start() {
        console.log(`Width: ${this.width}`);
    }
    stop() {
        console.log("stop");
    }

    setup() {
        insertStyle(this.path + "css/style.css");
        insertScript(this.path + "js/moment.min.js");
        insertScript(this.path + "js/script.js");

        var src = this.basePath + this.name + "/html/content.html";
        var theme = "light";

        if (this.parameters.theme == "dark") {
            theme = "dark"
        }

        this.container.load(src, function(){

            var root = $(this).children()[0];
            $(root).addClass(theme);
        });
    }
}