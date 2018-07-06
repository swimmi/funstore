
class FunButton extends BaseComponent {


    constructor(container, parameters) {
        super("button", container, parameters);
        this.id = "00000002";
        this.setup();
    }

    get color() {
        return this.parameters.color;
    }

    set color(value) {
        this.container.removeClass(this.color).addClass(value);
    }

    get shape() {
        return this.parameters.shape;
    }
    set shape(value) {
        this.container.removeClass(this.shape).addClass(value);
    }

    setup() {
        this.config();

        var onClick = this.parameters.onClick;
        this.container.on("click", this, onClick);

        this.container.addClass("button");

        var color = this.parameters.color;
        switch(color) {
            case "orange":
            case "blue":
            case "green":
            case "pink":
                this.color = color;
            break
        }
        var shape = this.parameters.shape;
        switch(shape) {
            case "oval":
            case "shield":
            case "drop":
            case "knife":
            case "morph":
            case "knife":
            case "skew":
                this.shape = shape;
            break
        }

    }
}