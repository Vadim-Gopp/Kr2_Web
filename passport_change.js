function switchToLatin() {
    document.getElementById('lastName').innerText = 'GOPP';
    document.getElementById('firstName').innerText = 'VADIM';
    document.getElementById('middleName').innerText = 'VADIMOVICH';
    document.getElementById('birthDate').innerText = '02.26.2005';
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", switchToLatin)