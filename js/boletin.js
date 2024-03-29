const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_h93b5z5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      document.getElementById('from_name').value = '';
            document.getElementById('email_id').value = '';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
