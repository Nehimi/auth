import { verificationEmailTemplate } from "./emailTemplates.js";
import { mailtrapClient,sender } from "./mailtrap.config.js";
 export const sendVerificationEmail = async (email,verficationToken) => {
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your email",
            html:verificationEmailTemplate("User",verficationToken).replace("{{code}}",verficationToken),
            category:"email verification",    
        });    
        
        console.log("Verification email sent successfully",response);
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to send verification email "+err.message);
    }

}
