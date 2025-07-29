import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5000, // Limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
});
