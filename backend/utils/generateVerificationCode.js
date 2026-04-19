import crypto from 'crypto';
const generateVerificationCode = () => {
  return crypto.randomInt(0, 1000000)
    .toString()
    .padStart(6, '0');
};

export default generateVerificationCode;