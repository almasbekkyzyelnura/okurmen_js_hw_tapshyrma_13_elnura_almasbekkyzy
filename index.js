function eliChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;


   
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ( j==0 ) flag = !flag;

            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

            

            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}


eliChess(); 

/*
$(function () {
    function createChess() {
        let mainBlock = $('.main-block');
        let block;
        let flag = true;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (j == 0) flag = !flag;

                block = $('<div></div>');

                if (flag) block.addClass('block black');
                else block.addClass('block white');

                mainBlock.append(block);
                flag = !flag;
            }
        }
    }
    createChess();
});
*/