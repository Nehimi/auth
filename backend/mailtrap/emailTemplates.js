// Reusable styles for consistency
const STYLES = {
  body: `
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  container: `
    max-width: 500px;
    width: 90%;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 20px;
  `,
  header: `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px 30px;
    text-align: center;
  `,
  icon: `
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #667eea;
    font-weight: bold;
  `,
  title: `
    color: white;
    margin: 0;
    font-size: 28px;
    font-weight: 700;
  `,
  subtitle: `
    color: rgba(255, 255, 255, 0.9);
    margin: 10px 0 0;
    font-size: 16px;
  `,
  content: `
    padding: 40px 30px;
  `,
  paragraph: `
    color: #4a5568;
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 30px;
  `,
  alert: `
    background: #fef5e7;
    border-left: 4px solid #f39c12;
    padding: 15px;
    border-radius: 8px;
    margin: 30px 0;
  `,
  alertText: `
    color: #856404;
    margin: 0;
    font-size: 14px;
    display: flex;
    align-items: center;
  `,
  notice: `
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    margin: 30px 0;
  `,
  noticeText: `
    color: #6c757d;
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
  `,
  footer: `
    background: #f8f9fa;
    padding: 30px;
    text-align: center;
    border-top: 1px solid #e9ecef;
  `
};

// Reusable components
const createHeader = (icon, title, subtitle) => `
  <div style="${STYLES.header}">
    <div style="${STYLES.icon}">${icon}</div>
    <h1 style="${STYLES.title}">${title}</h1>
    <p style="${STYLES.subtitle}">${subtitle}</p>
  </div>
`;

const createVerificationCode = (code) => `
  <div style="
    background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
    border: 2px dashed #cbd5e0;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    margin: 30px 0;
  ">
    <p style="
      color: #718096;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 15px;
      font-weight: 600;
    ">Verification Code</p>
    <div style="
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 8px;
      color: #2d3748;
      font-family: 'Courier New', monospace;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    ">${code}</div>
  </div>
`;

const createAlert = (message, icon = '') => `
  <div style="${STYLES.alert}">
    <p style="${STYLES.alertText}">
      <span style="margin-right: 8px;">${icon}</span>
      ${message}
    </p>
  </div>
`;

const createSecurityNotice = (message) => `
  <div style="${STYLES.notice}">
    <p style="${STYLES.noticeText}">
      <strong style="color: #495057;"> Security Tip:</strong><br>
      ${message}
    </p>
  </div>
`;

const createFooter = () => `
  <div style="${STYLES.footer}">
    <p style="color: #6c757d; margin: 0 0 10px; font-size: 14px;">Best regards,</p>
    <p style="color: #2d3748; margin: 0; font-size: 16px; font-weight: 600;">The Team</p>
    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef;">
      <p style="color: #adb5bd; font-size: 12px; margin: 0;"> 2026 Your Company. All rights reserved.</p>
    </div>
  </div>
`;

const createEmailWrapper = (content) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
  </head>
  <body style="${STYLES.body}">
    <div style="${STYLES.container}">
      ${content}
    </div>
  </body>
  </html>
`;

export const verificationEmailTemplate = (name, code) => {
  const content = `
    ${createHeader('?', 'Welcome aboard!', 'Just one more step to get started')}
    
    <div style="${STYLES.content}">
      <p style="${STYLES.paragraph}">Hi <strong style="color: #2d3748;">${name}</strong>,</p>
      
      <p style="${STYLES.paragraph}">Thank you for signing up! Please use the verification code below to complete your registration:</p>
      
      ${createVerificationCode(code)}
      
      ${createAlert('This code will expire in <strong>10 minutes</strong> for security reasons.', '')}
      
      ${createSecurityNotice('If you didn\'t request this verification, please ignore this email. Your account remains secure.')}
    </div>
    
    ${createFooter()}
  `;
  
  return createEmailWrapper(content);
};

export const welcomeEmailTemplate = (name) => {
  const content = `
    ${createHeader('', 'Welcome! ' + name, 'Your account has been successfully verified')}
    
    <div style="${STYLES.content}">
      <p style="${STYLES.paragraph}">Thank you for joining Liddo notes! Your email has been verified and you're all set to start using our platform.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="http://localhost:3000/login" style="
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 25px;
          font-weight: bold;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
        ">Get Started</a>
      </div>
    </div>
    
    ${createFooter()}
  `;
  
  return createEmailWrapper(content);
};

export const passwordResetEmailTemplate = (name, resetURL) => {
  const content = `
    ${createHeader('?', 'Password Reset Requested', 'Follow the steps below to reset your password')}
    
    <div style="${STYLES.content}">
      <p style="${STYLES.paragraph}">Hi <strong style="color: #2d3748;">${name}</strong>,</p>
      
      <p style="${STYLES.paragraph}">We received a request to reset your password. Please follow the steps below to complete the process:</p>
      
      <p>${resetURL}
      </p>  
      ${createVerificationCode(resetURL)} 
      
      ${createAlert('This code will expire in <strong>10 minutes</strong> for security reasons.', '')}
      
      ${createSecurityNotice('If you didn\'t request this reset, please ignore this email. Your account remains secure.')}
    </div>
    
    ${createFooter()}
  `;
  
  return createEmailWrapper(content);
};
