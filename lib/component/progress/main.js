
class FunProgress extends BaseComponent {

    constructor(container, parameters) {
        super("progress", container, parameters);
        this.id = "00000004";
        this.setup();
    }

    get progress() {
        return this.parameters.progress;
    }
    set progress(value) {
        this.parameters.progress = value;
        this.invalidate();
    }

    setup() {
        this.config();

        var fun = this;
        var src = this.path + "/html/content.html";
        this.container.load(src, function(){
            fun.invalidate();
        });
    }

    invalidate() {
        var progress = this.parameters.progress;
        var color = this.parameters.color;
        var bar = $(".loading-bar .amount");
        bar.addClass(color);
        bar.width(progress + "%");
        bar.find("span").text(progress);
    }
}