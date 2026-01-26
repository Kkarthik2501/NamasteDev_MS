

 const { SendEmailCommand } = require('@aws-sdk/client-ses');
 const { sesClient } =require('./sesClient');


const createSendEmailCommand = (toAddress, fromAddress,username) => {
  return new SendEmailCommand({
    Destination: {
     
      CcAddresses: [
       
      ],
      ToAddresses: [
        toAddress,
        
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: `${username} has sent you a connection request on DevTinder. Log in to your account to review and respond to the request.`,
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Connection request on DevTinder`,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

const run = async (username) => {
  const sendEmailCommand = createSendEmailCommand(
    "karthiksonu25@gmail.com",
    "info@thedevtinder.in",
    username
  );

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (caught) {
    if (caught instanceof Error && caught.name === "MessageRejected") {
      /** @type { import('@aws-sdk/client-ses').MessageRejected} */
      const messageRejectedError = caught;
      return messageRejectedError;
    }
    throw caught;
  }
};

module.exports = { run };
