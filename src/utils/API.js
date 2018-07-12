import axios from 'axios';

export default {
  sendEmail: () => {
    axios({
      method: 'post',
      url: 'https://api.mailgun.net/v3/mailgunDomainName/messages',
      auth: {
        username: 'api',
        password: 'apiKey',
      },
      params: {
        from: 'Awesome Development Team <noreply@yourdomain.com>',
        to: 'testing@example.com',
        subject: 'Hello',
        text: 'Welcome to the team!',
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (reject) => {
        console.log(reject);
      },
    );
  },
};
