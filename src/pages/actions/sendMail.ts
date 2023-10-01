import emailjs from "@emailjs/browser";

const sendMail = (templateParams: any) => {
  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParams,
      "jAB7HSWiJXvbmvSRA"
    )
    .then(
      (response: any) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error: any) => {
        console.log("FAILED...", error);
      }
    );
};

export default sendMail;
