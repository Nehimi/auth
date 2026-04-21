import { verificationEmailTemplate, welcomeEmailTemplate } from "./emailTemplates.js";
import { mailtrapClient,sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken, name = "User") => {
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your email",
            html:verificationEmailTemplate(name, verificationToken),
            category:"email verification",    
        });    
        
        console.log("Verification email sent successfully",response);
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to send verification email "+err.message);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Welcome to Liddo notes",
            html: welcomeEmailTemplate(name),
            category: "welcome email"
        });
        console.log("Welcome email sent successfully", response);
    }
    catch(err) {
        console.log(err);
        throw new Error("Failed to send welcome email " + err.message);
    }
}
