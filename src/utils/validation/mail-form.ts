import { z } from 'zod';

const mailFormSchema = z.object({
  companyName: z.string().min(1, 'Company Name is required'),
  yourName: z.string().min(1, 'Your Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  postCode: z.string().min(1, 'Post Code is required').optional(),
  address: z.string().min(1, 'Address is required').optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

export const systemEngineerFormSchema = z.object({
  
})

export default mailFormSchema;