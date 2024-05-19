let obj = {
    className: 'open menu',

    addClass(cls) {
        let classes = this.className.split(' ');
        if (!classes.includes(cls)) {
            classes.push(cls);
            this.className = classes.join(' ');
        }
        return this;
    },
    
    removeClass(cls) {
        let classes = this.className.split(' ');
        this.className = classes.filter(c => c !== cls).join(' ');
        return this;
    }
};

console.log(obj.addClass('new')); 
console.log(obj.addClass('open')); 
console.log(obj.removeClass('menu'));
console.log(obj.removeClass('nonexistent')); 
console.log(obj.addClass('menu')); 
