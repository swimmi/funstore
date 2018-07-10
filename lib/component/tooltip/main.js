
class FunTooltip extends BaseComponent {

    constructor(container, parameters) {
        super("tooltip", container, parameters);
        this.id = "00000009";
        this.setup();
    }

    setup() {
        this.config();

        var title = this.parameters.title;
        var steps = this.parameters.steps;

        this.load(function() {
            $.each(steps, function(i, v) {
                $(".tooltip-container h1").text(title);
                $(".tooltip-container .slider-turn").append(`<p>${v}</p>`);
                $(".tooltip-container ul").append(`<li data-num=${i+1}></li>`);
            });
        });
    }

    hide() {
        hideTooltip();
    }

    show() {
        showTooltip();
    }
}