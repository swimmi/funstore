class FunMenu extends BaseComponent {

    constructor(container, parameters) {
        super("menu", container, parameters);
        this.id = "00000008";
        this.setup();
    }

    setup() {
        this.config();

        var fun = this;
        this.load(function(){
            fun.invalidate();
        });
    }

    invalidate() {
        let i = 0;
        $.each(this.parameters, function(k, v) {
            var li = document.createElement("li");
            li.innerHTML = `<a href='#'><span><i class="fa fa-${v.icon}"></i></span></a>`;
            $(li).bind("click", v.onClick);
            $(li).css("transform", `rotate(${i*24}deg)`);
            $(li).find("a").css("transform", `rotate(${-(i*24)}deg)`);
            $(".flyout").append(li);
            i ++;
        });
    }
}