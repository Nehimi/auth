<div align="center">

# 🔐 Auth System - Part 1

[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)

*A modern authentication system with email verification, built with Node.js and Express*

</div>

## 🌟 Features

- **🔐 Secure Authentication** - Password hashing with bcrypt
- **📧 Email Verification** - Beautiful HTML email templates with Mailtrap
- **🍪 JWT Token Management** - Secure cookie-based authentication
- **👤 User Management** - Complete user model with verification tokens
- **🛡️ Security First** - Input validation and error handling
- **🎨 Modern Design** - Clean, responsive email templates

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Mailtrap account (for email testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Node-Auth
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   ```
   
   Configure your backend `.env` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/auth
   JWT_SECRET=your-super-secret-jwt-key
   MAILTRAP_TOKEN=your-mailtrap-token
   MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/api/send
   MAILTRAP_SENDER_EMAIL=noreply@yourdomain.com
   CLIENT_URL=http://localhost:3000
   PORT=3000
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start Both Servers**
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

   **Backend:** `http://localhost:3000`  
   **Frontend:** `http://localhost:5173`

## 📁 Project Structure

```
Node-Auth/
├── backend/
│   ├── controllers/
│   │   └── auth.controller.js    # Authentication logic
│   ├── models/
│   │   └── user.model.js         # User schema and model
│   ├── routes/
│   │   └── auth.route.js         # Authentication routes
│   ├── utils/
│   │   ├── generateTokenAndSetCookies.js
│   │   └── generateVerificationCode.js
│   ├── mailtrap/
│   │   ├── emailTemplates.js     # Beautiful HTML email templates
│   │   └── emails.js             # Email sending logic
│   ├── db/
│   │   └── connectDB.js          # Database connection
│   └── index.js                  # Main server file
├── frontend/
│   src/
│     App.jsx                   # Main React component
│     index.css                 # Tailwind CSS + custom styles
│     main.jsx                  # React entry point
│   public/
│     index.html                # HTML template
│   dist/                       # Built production files
│   package.json               # Frontend dependencies
│   tailwind.config.js         # Tailwind configuration
│   postcss.config.js          # PostCSS configuration
│   vite.config.js             # Vite configuration
│   README.md                  # Frontend documentation Part 2)
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register new user with email verification |
| `POST` | `/api/auth/login` | User login (Coming soon) |
| `POST` | `/api/auth/logout` | User logout (Coming soon) |

### Request Examples

#### Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "user created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f8a9b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "isVerified": false,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

## 🎨 Email Templates

The system includes beautifully designed email templates:

### Verification Email
- Modern gradient design
- Clear verification code display
- Security notices and tips
- Mobile responsive layout

### Password Reset Email (Template Ready)
- Secure reset links
- Expiration warnings
- Alternative link options
- Professional styling

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT token handling
- **Mailtrap** - Email testing service

### Development Tools
- **nodemon** - Auto-restart development server
- **dotenv** - Environment variable management

## 🔧 Configuration

### Database Setup

1. **Local MongoDB**
   ```bash
   mongod
   ```

2. **MongoDB Atlas (Cloud)**
   - Create a free cluster
   - Get your connection string
   - Add to `.env` file

### Email Configuration

1. **Mailtrap Setup**
   - Create a Mailtrap account
   - Get your API token
   - Configure sender email
   - Add credentials to `.env`

## 📋 User Model Schema

```javascript
{
  name: String (required),
  email: String (unique, required),
  password: String (required, hashed),
  isVerified: Boolean (default: false),
  lastLogin: Date (default: Date.now),
  verificationToken: String,
  verificationTokenExpire: Date,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  timestamps: true
}
```

## 🔒 Security Features

- **Password Hashing** - bcrypt with salt rounds
- **JWT Tokens** - Secure authentication tokens
- **Input Validation** - Required field checks
- **Email Verification** - Prevents fake accounts
- **Token Expiration** - Time-limited verification codes
- **Error Handling** - Secure error responses

## 🚧 What's Next (Part 2)

- [ ] Complete login/logout functionality
- [ ] Password reset implementation
- [ ] Frontend development (React/Vue)
- [ ] Rate limiting
- [ ] Account lockout mechanisms
- [ ] Two-factor authentication
- [ ] Social login integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the package.json file for details.

## 📞 Support

If you have any questions or need support, please open an issue in the repository.

---

<div align="center">

**Built with ❤️ by [Your Name]**

*Part 1 of a complete authentication system*

</div>
