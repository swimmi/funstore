class FunBallPool extends BaseComponent {

    constructor(container, parameters) {
        super("ballpool", container, parameters);
        this.id = "00000005";
        this.setup();
    }

    setup() {
        this.config();
        
        this.container.html("<div id='ballPool'></div>");
    }

    addBall() {
        createBall();
    }
}