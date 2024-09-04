import emailjs from "emailjs-com";

const sendEmail = (data) => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  if (!serviceId || !templateId || !userId) {
    return Promise.reject("Missing environment variables.");
  }

  return emailjs.send(serviceId, templateId, data, userId);
};

export default { sendEmail };
