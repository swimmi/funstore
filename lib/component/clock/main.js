
class FunClock extends BaseComponent {

    constructor(container, parameters) {
        super("clock", container, parameters);
        this.id = "00000001";
        this.setup();
    }

    setup() {
        this.config();

        var src = this.path+ "/html/content.html";
        var theme = "light";
        var language = "en";
        theme = this.parameters.theme;
        language = this.parameters.language;

        this.container.load(src, function(){

            var root = $(this).children()[0];
            $(root).addClass(theme);
            $(root).data("language", language);
        });
    }
}