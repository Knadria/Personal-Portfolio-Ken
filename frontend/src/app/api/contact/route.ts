// import { NextResponse } from 'next/server';
// import pool from '@/src/lib/db';
// import { z } from 'zod';

// // Server-side validation schema
// const contactSchema = z.object({
//   name:    z.string().min(2).max(100),
//   email:   z.string().email(),
//   phone:   z.string().max(20).optional().or(z.literal('')),
//   subject: z.string().min(3).max(200),
//   message: z.string().min(10).max(2000),
// });

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     // Validate input
//     const parsed = contactSchema.safeParse(body);
//     if (!parsed.success) {
//       return NextResponse.json(
//         { success: false, errors: parsed.error.flatten().fieldErrors },
//         { status: 422 }
//       );
//     }

//     const { name, email, phone, subject, message } = parsed.data;

//     // Insert into MySQL
//     const [result] = await pool.execute(
//       `INSERT INTO contacts (name, email, phone, subject, message)
//        VALUES (?, ?, ?, ?, ?)`,
//       [name, email, phone || null, subject, message]
//     );

//     return NextResponse.json(
//       { success: true, id: result.insertId },
//       { status: 201 }
//     );
//   } catch (err) {
//     console.error('Contact form error:', err);
//     return NextResponse.json(
//       { success: false, error: 'Server error. Please try again later.' },
//       { status: 500 }
//     );
//   }
// }