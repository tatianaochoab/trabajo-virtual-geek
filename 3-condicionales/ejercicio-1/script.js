//----------NADIE SIN AVATAR------------

const avatar = `<img src='http://placehold.it/300x300'>`;

let otherAvatar = `<img src='http://placehold.it/300x300'>`;

function usuario(){
    if (otherAvatar === '') {
        return (avatar);
    } else{
        return (otherAvatar);
    }
}

document.getElementById('avatar').innerHTML = usuario();