
class FunText extends BaseComponent {

    constructor(container, parameters) {
        super("text", container, parameters);
        this.id = "00000001";
        this.setup();
    }

    setup() {
        this.config();

        var text = this.parameters.text;
        var effect = this.parameters.effect;
        var color = this.parameters.color;

        var a = document.createElement("a");
        a.innerText = text;
        var p = document.createElement("p");
        p.appendChild(a);
        $(p).addClass(color);

        var cls = "";
        switch (effect) {
            case "shine":
                cls = "text-shine";
                break;
            case "milky":
                cls = "text-milky";
                break;
        }

        this.container.addClass(cls);
        this.container.html(p);
    }
}