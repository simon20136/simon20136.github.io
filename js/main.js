"use strict";
{
    const divContainer = document.getElementById('container');
    const divBtn = document.getElementById('btn');
    
    checkBoxProc();
    
    function checkBoxProc() {
        let score = 100;
        const num = 9;
        const h1Title = document.getElementById('title');
        h1Title.textContent = '９つの箱をクリックして当たりを探そう';
    
        const winner = Math.floor(Math.random() * num);
    
        for(let i=0; i<num; i++) {
            const divBox = document.createElement('div');
            divBox.classList.add('box');
            divContainer.appendChild(divBox);
    
            divBox.addEventListener('click', () => {
                if (i === winner) {
                    divBox.classList.add('win');
                    divBox.textContent = '当たり(^^)/';
                    h1Title.textContent = 'おめでとう！ 得点は' + score.toString(10) + '点です';
                } else {
                    divBox.classList.add('lose');
                    divBox.textContent = 'はずれ(T_T)';
                    score -= 10;
                }
            });
        }
    }

    divBtn.addEventListener('click', () => {
        divContainer.innerHTML = '';
        checkBoxProc();
    });

}