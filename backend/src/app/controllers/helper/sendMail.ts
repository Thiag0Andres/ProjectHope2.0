const mailer = require("../../../services/mailer");

/**
 * SendMail helper
 */
async function sendMail({ req, token }: any) {
  console.log(token);
  let args = {
    to: req.body.email,
    from: "thiagoapalacios@gmail.com",
    template: "forgot/forgot",
    context: { token: token },
  };

  console.log(args);

  try {
    mailer
      .sendMail(args)
      .then((res: any) => {
        console.log("mailer.sendMail", res);
      })
      .catch((err: any) => {
        console.log("Errors occurred, failed to deliver message");
        console.log("Mailtrap error", err);
      });
  } catch (err) {
    console.log({ err });
    return 0;
  }
}

module.exports = sendMail;
