let renderer = {
    /**
     * метод рисует игровое поле и игрока на нем.
     */
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderUserPosition(player);
    },
    
    generateBoard() {
        let board = '';
        for (let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += '</tr>';            
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    getSquere(position) {
        /** 
         * Если ячейка с переданными координатоми есть, то возвращает её
         * координаты, иначе null.
         * @param {{x: number, y: number}} position объект с координатами.
         * @returns {HTMLTableCellElement|null} координата ячейки, иначе null.
         */
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
    },

    /**
     * метод рисует расположение игрока для указанной координаты.
     * @param {{x: number, y: number}} position 
     */
    renderUserPosition(position) {
        let squere = this.getSquere(position);
        squere.classList.add('user');
    },

    /**
     * метод удаляет пользователя с игрового поля. у тега td  удаляет
     * класс '.user'
     */
    clearUserPosition() {
        document.querySelector('.user').classList.remove('user')
    }
};