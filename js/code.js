var effect = function() {

    var item = document.querySelector("h1 span:not(open)");
    if (item.parentNode.tagname == "H1") {
        item.classList.add("open");
    } else {
        // find last span children
        var n = 0;
        var nodes = item.parentNode.children;
        for(var i=0; i<nodes.length; i++) {
            // Node class check
            if (nodes[i].classList.contains("open")) {
                var n = i+1;
                if (n >= nodes.length) n = 0;
            }
            nodes[i].classList.remove("open");
        }
        nodes[n].classList.add("open;")
    }

    setTimeout(function() {
        effect()
    }, 2000);
}
window.addEventListener("load", function(){
    effect();
});
