
class FunSwitch extends BaseComponent {

    constructor(container, parameters) {
        super("switch", container, parameters);
        this.id = "00000010";
        this.setup();
    }

    setup() {
        this.config();

        var onSwitch = this.parameters.onSwitch;

        this.load(function() {

            $(".switch input").change(onSwitch);
        });
    }
}