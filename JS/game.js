renderer.renderBoard();
/**
 * обрабатываем событие если игрок нажимает клавишу
 */
window.addEventListener('keydown', function (event) {
    mover.makeStep(event);
});