function sendMail() {
const contactForm = document.getElementById('contactForm');
const formData = {
name: contactForm.elements.name.value,
email: contactForm.elements.email.value,
phone: contactForm.elements.phone.value,
subject: contactForm.elements.subject.value,
message: contactForm.elements.msg.value
};

emailjs.send('service_i6k5i36', 'template_ju9cj1n', formData)
.then(() => {
alert('Your message has been sent successfully!');
contactForm.reset();
})
.catch((error) => {
alert('An error occurred while sending your message. Please try again later.');
console.error(error);
});
}