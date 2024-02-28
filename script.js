alert('Benvindo a teu perfil de Usuario')

// Funcion aumentar seguidores

let seguidores = document.getElementById('num-seguidores');
let buttonFollow = document.getElementById('follow-user');
let textButton = document.getElementById('follow-user').innerText;

console.log(textButton);

numeroSeguidores = parseFloat(seguidores.innerText.replace('.', ''));

buttonFollow.addEventListener('click', () => {
    if (numeroSeguidores == 1206) {
        numeroSeguidores += 1;
        seguindoText = "Seguindo";
        seguidores.textContent = numeroSeguidores.toLocaleString();
        buttonFollow.textContent = seguindoText;
    } else {
        numeroSeguidores -=1;
        seguindoText = "Seguir";
        buttonFollow.textContent = seguindoText;
        seguidores.textContent = numeroSeguidores.toLocaleString();
    }
});
