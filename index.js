const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
let index = 0;
let state = 0;

setInterval(() => {
    index = (index + 1) % items.length;
    document.getElementById(items[index]).scrollIntoView({
        behavior: 'smooth'
    });
}, 1500);

function handleNo() {
    if (state === 0) {
        document.querySelector('.no-btn').textContent = 'China, ¿estás segura?😢';
        document.getElementById('pika').classList.remove('hidden');
        state++;
    } else if (state === 1) {
        document.querySelector('.no-btn').style.transform = 'scale(0.7)';
        document.getElementById('yesbtn').style.transform = 'scale(1.3)';
        document.getElementById('yesbtn').classList.add('absolute');
        document.getElementById('yesbtn').classList.add('-top-30');
        document.getElementById('yesbtn').classList.add('-right-10');
        document.getElementById('yesbtn').classList.remove('btn-outline');
        document.querySelector('.no-btn').textContent = '¿Segura, segurita?😢';
        document.getElementById('pika').classList.add('hidden');
        document.getElementById('pika2').classList.remove('hidden');
        state++;
    } else if (state === 2) {
        document.getElementById('pika2').classList.remove('mx-auto');
        document.getElementById('yesbtn').style.transform = 'scale(2.5)';
        document.querySelector('.no-btn').style.transform = 'scale(0.4)';
        document.getElementById('yesbtn').classList.remove('-right-10');
        document.getElementById('yesbtn').classList.add('right-10');
        document.getElementById('pika2').classList.add('w-54');
        document.getElementById('pika2').classList.remove('w-36');
        document.querySelector('.no-btn').textContent = 'Último intento, ¿segura?😢';
        state++;
    } else {
        document.getElementById('yesbtn').style.transform = 'scale(1.5)';
        document.getElementById('yesbtn').classList.add('left-55');
        document.getElementById('yesbtn').classList.add('w-1/3');
        document.getElementById('pika2').src = '../assets/img/pika3.gif';
        document.querySelector('.no-btn').classList.add('hidden');
        state = 0;
    }
}

function handleYes() {
    document.getElementById('pika').classList.add('hidden');
    document.getElementById('pika2').classList.remove('hidden');
    document.getElementById('svmessage').classList.remove('hidden');
    document.getElementById('pika2').classList.add('w-54');
    document.getElementById('pika2').src = '../assets/img/pika4.gif';
    document.querySelector('.no-btn').classList.add('hidden');
    document.getElementById('yesbtn').classList.add('hidden');
}