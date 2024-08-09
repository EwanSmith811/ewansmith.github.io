let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let skill = document.getElementById('skill')

window.addEventListener('scroll', () => { 
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    
});
document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('project-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('skill-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.skill-carousel');
    const inner = document.createElement('div');
    inner.classList.add('skill-carousel-inner');
    inner.innerHTML = carousel.innerHTML + carousel.innerHTML;
    carousel.innerHTML = '';
    carousel.appendChild(inner);
});

(function() {
    emailjs.init("YOUR_USER_ID");
  })();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const status = document.getElementById('status');
    const serviceID = 'service_stqh5m5'; 
    const templateID = 'template_woyb3h1'; 
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        status.innerHTML = "Message sent successfully!";
        status.style.color = "green";
      }, (err) => {
        status.innerHTML = "Failed to send message. Please try again.";
        status.style.color = "red";
      });
  
    this.reset();
  });
  document.addEventListener('scroll', function() {
    const targetImage = document.getElementById('hill1');
    const scrollThreshold = 1; 
    
    if (window.scrollY > scrollThreshold) {
        targetImage.style.display = 'none';
    } else {
        targetImage.style.display = 'block';
    }
});
