/* handshake animation */
const shakeButton = document.getElementById('shake-button');

const showHandshake = () => {
    document.getElementById('handshake').style.display = 'block';
    document.getElementById('shake-button').style.display = 'none';
    let greeting = document.getElementById('greeting');
    greeting.style.display = 'block';
    greeting.style.color = 'rgb(86,84,84)';
};

shakeButton.addEventListener('click',showHandshake);

/* 
** Projects animation:
** When hovering over the project element, set new styling
** When moving the cursor away from the project element, return styles back to non-hovering state
*/
/*
const projects = document.getElementsByClassName('project');

const updateProjectStyles = event => {
    let project = event.currentTarget;
    let image = project.querySelector('img');
    let projectDescription = project.querySelector('p');
    let header3 = project.querySelector('h3');
    projectDescription.style.display = 'block';
    image.style.opacity = 0.2;
    header3.style.display = 'none';
    image.style.transition = '0.3s';
};

const setOriginalProjectStyles = event => {
    let project = event.currentTarget;
    let image = project.querySelector('img');
    let projectDescription = project.querySelector('p');
    let header3 = project.querySelector('h3');
    projectDescription.style.display = 'none';
    image.style.opacity = 0.4;
    header3.style.display = 'block';
}

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('mouseover',updateProjectStyles);
    projects[i].addEventListener('mouseout',setOriginalProjectStyles);
}
*/