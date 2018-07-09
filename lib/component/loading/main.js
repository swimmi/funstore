
class FunLoading extends BaseComponent {

    constructor(container, parameters) {
        super("loading", container, parameters);
        this.id = "00000003";
        this.setup();
    }

    setup() {
        this.config();
        
        let styleIndex = this.parameters;
        var div = document.createElement("div");

        $.getJSON(this.configFile, function(data) {
            $(div).addClass(data.properties.style[styleIndex]);
        });

        this.container.addClass("loading_span");
        this.container.html(div);
    }
}