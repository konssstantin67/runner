let mover = {

    /**
     * метод проверяет существует ли ячейка куда может перейти пользователь.
     * @param {{x: number, y: number}} nextPoint координаты ячейки
     * @returns {boolean} если ячейка существует true, иначе false.
     */
    canPlayerMakeStep(nextPoint) {
        return renderer.getSquere(nextPoint) != null;
    },

    /**
     * метод выполянет перемещение игрока по полю.
     * @param {KeybordEvebt} event объект события нажатия клавиши.
     */
    makeStep(event) {
        let newPosition = this.getNewPosition(event);
        if (this.arePositionEqual(player, newPosition)) {
            return;
        }
        if (!this.canPlayerMakeStep(newPosition)) {
            return;
        }
        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(newPosition);
    },

    /**
     * в зависимости от такого какую клавишу нажал игрок метод возвращает 
     * координаты новой ячейки, либо если нельзя туда переместиться, то
     * координаты текущей ячейки
     * @param {KeybordEvebt} event объектсобытия нажатия клавиши.
     * @returns {{x: number, y: number}}
     */
    getNewPosition(event) {
        switch (event.key) {
            case 'ArrowUp':
                return {
                    x: player.x,
                    y: player.y - 1
                };
            case 'ArrowDown':
                return {
                    x: player.x,
                    y: player.y + 1
                };
            case 'ArrowLeft':
                return {
                    x: player.x - 1,
                    y: player.y
                };
            case 'ArrowRight':
                return {
                    x: player.x + 1,
                    y: player.y
                };
            default:
                return {
                    x: player.x,
                    y: player.y
                };
        }
    },
    
    /**
     * Метод проверяет совадают ли координаты двух позиций.
     * @param {{x: number, y: number}} curPos текущая позиция
     * @param {{x: number, y: number}} newPos новая позиция
     * @returns {boolean} если совпадают то true иначе false.
     */
    arePositionEqual(curPos, newPos) {
        return curPos.x == newPos.x && curPos.y == newPos.y;
    },

    renderUserPosition(position) {
        let squere = this.getSquere(position);
        squere.classList.add('user')
    },


};