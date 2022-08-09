const submit = document.querySelector(".send");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const Name = document.querySelector(".name");

function Menu(e) {
    let list = document.querySelector('ul');
e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}

const sendEmail = () => {
    Email.send({
        SecureToken : "effaf952-f5b4-482e-9b18-a4b72042ba1f",
        Host : "smtp.elasticemail.com",
        Username : "ashish-makes@gmail.com",
        Password : "42BD017CE4A916FAC9D7484BA57DF6FA8C17",
        To : 'ashish-makes@gmail.com',
        From : email.value,
        Subject : "Email from Portfolio",
        Body : message.value
    }).then(
      message => alert(message)
    );
    reset()
}

const reset = () => {
    Name.value = ''
    email.value = ''
    message.value = ''
}

submit.addEventListener("click", sendEmail)