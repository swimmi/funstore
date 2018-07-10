
class FunClock extends BaseComponent {

    constructor(container, parameters) {
        super("clock", container, parameters);
        this.id = "00000001";
        this.setup();
    }

    get theme() {
        return this.parameters.theme;
    }

    set theme(value) {
        this.parameters.theme = value;
        this.invalidate();
    }

    get language() {
        return this.parameters.language;
    }

    set language(value) {
        this.parameters.language = value;
        this.invalidate();
    }

    setup() {
        this.config();

        var fun = this;
        this.load(function(){
            fun.invalidate();
        });
    }

    invalidate() {

        var root = this.container.find("div")[0];
        $(root).toggleClass("dark light");
        $(root).data("language", this.language);
    }
}