# Backend Authentication API

## Overview
Node.js Express REST API for user authentication with email verification and password reset functionality.

## Features
- User Registration & Login
- Email Verification (Mailtrap)
- Password Reset
- JWT Authentication
- MongoDB Database
- Secure Password Hashing

## Installation

### Prerequisites
- Node.js 16+
- MongoDB
- Mailtrap Account (for email testing)

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd Node-Auth/backend

# Install dependencies
npm install

# Create environment variables
cp .env.example .env
```

### Environment Variables
```env
MONGODB_URI=mongodb://localhost:27017/auth
JWT_SECRET=your_jwt_secret_here
MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=your_mailtrap_endpoint
CLIENT_URL=http://localhost:3000
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/verify-email` - Email verification
- `POST /api/auth/forgot-password` - Request password reset

### Protected Routes
All protected routes require JWT token in cookies.

## Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  isVerified: Boolean (default: false),
  verificationToken: String,
  verificationTokenExpire: Date,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  lastLogin: Date
}
```

## Email Templates
- Verification Email with 6-digit code
- Welcome Email after verification
- Password Reset Email with reset link

## Security Features
- bcrypt password hashing
- JWT token authentication
- Email verification
- Password reset tokens (1 hour expiry)
- Input validation
- Rate limiting (recommended)

## Development

### Start Development Server
```bash
npm run dev
```

### Start Production Server
```bash
npm start
```

## Project Structure
```
backend/
  controllers/     # Route handlers
  models/          # Database schemas
  routes/          # API routes
  middleware/      # Authentication middleware
  mailtrap/        # Email services
  utils/           # Helper functions
  db/             # Database connection
  index.js        # Server entry point
```

## Dependencies
- express - Web framework
- mongoose - MongoDB ODM
- bcrypt - Password hashing
- jsonwebtoken - JWT tokens
- mailtrap - Email service
- dotenv - Environment variables

## Testing
```bash
# Test with Postman or curl
# Server runs on http://localhost:3000
```

## Deployment
1. Set production environment variables
2. Build for production
3. Deploy to hosting service (Heroku, Vercel, etc.)

## License
ISC
