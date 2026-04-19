// mailtrap/emailTemplates.js

export const verificationEmailTemplate = (name, code) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Email</title>
    </head>
    <body style="
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        max-width: 500px;
        width: 90%;
        background: white;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin: 20px;
      ">
        <!-- Header -->
        <div style="
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 30px;
          text-align: center;
        ">
          <div style="
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
          ">?</div>
          <h1 style="
            color: white;
            margin: 0;
            font-size: 28px;
            font-weight: 700;
          ">Welcome aboard!</h1>
          <p style="
            color: rgba(255, 255, 255, 0.9);
            margin: 10px 0 0;
            font-size: 16px;
          ">Just one more step to get started</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <p style="
            color: #4a5568;
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 30px;
          ">Hi <strong style="color: #2d3748;">${name}</strong>,</p>
          
          <p style="
            color: #4a5568;
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 30px;
          ">Thank you for signing up! Please use the verification code below to complete your registration:</p>
          
          <!-- Verification Code -->
          <div style="
            background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
            border: 2px dashed #cbd5e0;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
            position: relative;
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

          <!-- Expiry Notice -->
          <div style="
            background: #fef5e7;
            border-left: 4px solid #f39c12;
            padding: 15px;
            border-radius: 8px;
            margin: 30px 0;
          ">
            <p style="
              color: #856404;
              margin: 0;
              font-size: 14px;
              display: flex;
              align-items: center;
            ">
              <span style="margin-right: 8px;">?</span>
              This code will expire in <strong>10 minutes</strong> for security reasons.
            </p>
          </div>

          <!-- Security Notice -->
          <div style="
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin: 30px 0;
          ">
            <p style="
              color: #6c757d;
              font-size: 14px;
              margin: 0;
              line-height: 1.5;
            ">
              <strong style="color: #495057;">? Security Tip:</strong><br>
              If you didn't request this verification, please ignore this email. Your account remains secure.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="
          background: #f8f9fa;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e9ecef;
        ">
          <p style="
            color: #6c757d;
            margin: 0 0 10px;
            font-size: 14px;
          ">Best regards,</p>
          <p style="
            color: #2d3748;
            margin: 0;
            font-size: 16px;
            font-weight: 600;
          ">The Team</p>
          <div style="
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
          ">
            <p style="
              color: #adb5bd;
              font-size: 12px;
              margin: 0;
            "> 2026 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Password reset request email (when user asks for reset link)
export const PASSWORD_RESET_REQUEST_TEMPLATE = (resetLink) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset Request</title>
    </head>
    <body style="
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        max-width: 500px;
        width: 90%;
        background: white;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin: 20px;
      ">
        <!-- Header -->
        <div style="
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 30px;
          text-align: center;
        ">
          <div style="
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
          ">?</div>
          <h1 style="
            color: white;
            margin: 0;
            font-size: 28px;
            font-weight: 700;
          ">Password Reset</h1>
          <p style="
            color: rgba(255, 255, 255, 0.9);
            margin: 10px 0 0;
            font-size: 16px;
          ">You requested to reset your password</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <p style="
            color: #4a5568;
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 30px;
          ">Hello,</p>
          
          <p style="
            color: #4a5568;
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 30px;
          ">We received a request to reset your password. Click the button below to create a new password:</p>
          
          <!-- Reset Button -->
          <div style="text-align: center; margin: 40px 0;">
            <a href="${resetLink}" 
               style="
                 display: inline-block;
                 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                 color: white;
                 text-decoration: none;
                 padding: 18px 40px;
                 border-radius: 50px;
                 font-size: 16px;
                 font-weight: 600;
                 box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
                 transition: all 0.3s ease;
               ">
               Reset Password
            </a>
          </div>

          <!-- Security Notice -->
          <div style="
            background: #fef5e7;
            border-left: 4px solid #f39c12;
            padding: 15px;
            border-radius: 8px;
            margin: 30px 0;
          ">
            <p style="
              color: #856404;
              margin: 0;
              font-size: 14px;
              display: flex;
              align-items: center;
            ">
              <span style="margin-right: 8px;">?</span>
              This link will expire in <strong>15 minutes</strong> for security reasons.
            </p>
          </div>

          <!-- Alternative Link -->
          <div style="
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin: 30px 0;
          ">
            <p style="
              color: #6c757d;
              font-size: 14px;
              margin: 0 0 10px;
              line-height: 1.5;
            ">
              <strong style="color: #495057;">Can't click the button?</strong><br>
              Copy and paste this link into your browser:
            </p>
            <p style="
              word-break: break-all;
              color: #667eea;
              font-size: 12px;
              margin: 10px 0 0;
              font-family: 'Courier New', monospace;
            ">${resetLink}</p>
          </div>

          <!-- Warning -->
          <div style="
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin: 30px 0;
          ">
            <p style="
              color: #6c757d;
              font-size: 14px;
              margin: 0;
              line-height: 1.5;
            ">
              <strong style="color: #495057;">? Security Tip:</strong><br>
              If you didn't request this password reset, please ignore this email. Your account remains secure.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="
          background: #f8f9fa;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e9ecef;
        ">
          <p style="
            color: #6c757d;
            margin: 0 0 10px;
            font-size: 14px;
          ">Best regards,</p>
          <p style="
            color: #2d3748;
            margin: 0;
            font-size: 16px;
            font-weight: 600;
          ">The Team</p>
          <div style="
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
          ">
            <p style="
              color: #adb5bd;
              font-size: 12px;
              margin: 0;
            "> 2026 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};