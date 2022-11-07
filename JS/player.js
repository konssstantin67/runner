let player = {
    x: 0,
    y: 0,

    /**
     * метод задает пользователю новое расположение.
     * @param {{x:int, y:int}} nextPoint координаты куда перемещается игрок.
     */
    changePosition(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

};
