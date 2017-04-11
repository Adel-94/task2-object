function task(idName) {
    var self=this;
    this.main = document.getElementById(idName);
    this.img = self.main.children[0];

this.img.addEventListener('click', function (event) {
        self.x = event.clientX;
        self.y = event.clientY;

        self.span = document.createElement('span');
        self.span.className = 'badge';
        self.span.style.top = self.y;
        self.span.style.left = self.x;
        self.main.appendChild(self.span);
    });

    this.main.addEventListener('click', function (event) {
        if (event.target.className == 'badge') {
            self.main.removeChild(event.target);
        }
    })
}