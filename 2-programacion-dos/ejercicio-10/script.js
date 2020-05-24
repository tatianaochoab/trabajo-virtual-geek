function horasVividas(anos) {
    anos = anos * 24 * 365;

    return (anos);
}

const html = `He vivido ${horasVividas(24)} horas`;
document.getElementById('tiempo').innerHTML = html;

horasVividas(24);
