"use strict"

{
    game9boxProc();
    btnClickProc();

    function game9boxProc() {
        const hDiv = document.createElement('div');
        hDiv.classList.add('h_box');
        document.body.appendChild(hDiv);
        hDiv.textContent = 'Check 9 box';

        const parentDiv = document.createElement('div');
        parentDiv.classList.add('p_box');
        document.body.appendChild(parentDiv);
        
        const num = 9;
        const winner = Math.floor(Math.random() * num);
    
        let score = 100;
        let flag = true;

        for (let i=0; i<num; i++) {
            const childDiv = document.createElement('div');
            childDiv.classList.add('c_box');
    
            childDiv.addEventListener('click', () => {
                if(i === winner) {
                    childDiv.classList.add('win');
                    childDiv.textContent = 'あたり (^^)/';
                    flag = false;
                    hDiv.textContent = '得点は' + String(score) + '点です';
                } else {
                    childDiv.classList.add('lose');
                    childDiv.textContent = 'はずれ (T_T)';
                    if(flag === true) {
                        score -= 10;
                    }
                }
            });
            parentDiv.appendChild(childDiv);
        }
    }
    
    function btnClickProc() {
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('btn');
        btnDiv.textContent = 'もう一回';
        document.body.appendChild(btnDiv);
        btnDiv.addEventListener('click', () => {
            document.location.reload();
        });
    }

    // C言語のように関数を定義したあとに置かなくてもよい
    // game9boxProc();
    // btnClickProc();
}