(() => {
    //try to get the bject and do stuff with it

    const waypoint = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('section2'),
        // what should we do when we hit the waypoint? ths is up to you.
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled up!')
          this.element.innerHTML +=  `<p>Added this with Waypoint! We are scrolling ${direction}</p>`
        }
    })

    const waypoint2 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('section3'),
        // what should we do when we hit the waypoint? ths is up to you.
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!')
        },

        offset: 200
    })

    const svgGraphic = document.querySelector(".svg-wrapper");

    svgGraphic.addEventListener("click", () => {
        console.log(this.querySelector('.svg-graphic'));
    }) 
})();