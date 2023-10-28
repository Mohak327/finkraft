import bcrypt from 'bcryptjs';

// Function to hash a password
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Function to compare a plain password with a hashed password
const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export { hashPassword, comparePasswords };
