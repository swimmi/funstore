class FunFirework extends BaseComponent {

    constructor(container, parameters) {
        super("firework", container, parameters);
        this.id = "00000007";
        this.setup();
    }

    setup() {
        this.config();
        
        this.container.html("<canvas id='firework'></canvas>");
    }
}