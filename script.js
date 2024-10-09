let cells = document.querySelectorAll('.cells')
let turn = 0

console.log(cells);

cells.forEach(element => {
    element.addEventListener('click', async() => {
        turn++
        id = element.getAttribute('id')
        console.log(id);
        elem = document.getElementById(id)

        if (turn % 2 == 0) {
            elem.innerHTML = 'X'
            checkResult()
        } else if (turn % 2 != 0) {
            elem.innerHTML = 'O'
            checkResult()
        }
    })
});

function checkResult() {
    box0 = document.getElementById('0')
    box1 = document.getElementById('1')
    box2 = document.getElementById('2')
    box3 = document.getElementById('3')
    box4 = document.getElementById('4')
    box5 = document.getElementById('5')
    box6 = document.getElementById('6')
    box7 = document.getElementById('7')
    box8 = document.getElementById('8')

    if (turn > 4) {
        if (box0.innerHTML == 'X' && box1.innerHTML == 'X' && box2.innerHTML == 'X') {
            alert('Player 1 wins')
            reset()
        } else if (box3.innerHTML == 'X' && box4.innerHTML == 'X' && box5.innerHTML == 'X') {
            alert('Player 1 wins')
            reset()
        } else if (box6.innerHTML == 'X' && box7.innerHTML == 'X' && box8.innerHTML == 'X') {
            alert('Player 1 wins')
            reset()
        } else if (box0.innerHTML == 'O' && box1.innerHTML == 'O' && box2.innerHTML == 'O') {
            alert('Player 2 wins')
            reset()
        } else if (box3.innerHTML == 'O' && box4.innerHTML == 'O' && box5.innerHTML == 'O') {
            alert('Player 2 wins')
            reset()
        } else if (box6.innerHTML == 'O' && box7.innerHTML == 'O' && box8.innerHTML == 'O') {
            alert('Player 2 wins')
            reset()
        } else if (box0.innerHTML == 'X' && box4.innerHTML == 'X' && box8.innerHTML == 'X') {
            alert('Player 1 wins')
            reset()
        } else if (box0.innerHTML == 'O' && box4.innerHTML == 'O' && box8.innerHTML == 'O') {
            alert('Player 2 wins')
            reset()
        } else if (box2.innerHTML == 'X' && box4.innerHTML == 'X' && box6.innerHTML == 'X') {
            alert('Player 1 wins')
            reset()
        } else if (box2.innerHTML == 'O' && box4.innerHTML == 'O' && box6.innerHTML == 'O') {
            alert('Player 2 wins')
            reset()
        } else if (turn == 9) {
            alert('Match Draw')
            reset()
        }
    }
}

function reset() {
    turn = 0

    box0 = document.getElementById('0')
    box1 = document.getElementById('1')
    box2 = document.getElementById('2')
    box3 = document.getElementById('3')
    box4 = document.getElementById('4')
    box5 = document.getElementById('5')
    box6 = document.getElementById('6')
    box7 = document.getElementById('7')
    box8 = document.getElementById('8')

    box0.innerHTML = ''
    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''
    box4.innerHTML = ''
    box5.innerHTML = ''
    box6.innerHTML = ''
    box7.innerHTML = ''
    box8.innerHTML = ''
}