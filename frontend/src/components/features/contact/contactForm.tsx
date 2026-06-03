// 'use client';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { useState } from 'react';

// const schema = z.object({
//   name:    z.string().min(2, 'Name must be at least 2 characters'),
//   email:   z.string().email('Enter a valid email address'),
//   phone:   z.string().max(20).optional().or(z.literal('')),
//   subject: z.string().min(3, 'Subject must be at least 3 characters'),
//   message: z.string().min(10, 'Message must be at least 10 characters'),
// });

// export default function ContactPage() {
//   const [status, setStatus] = useState(null); // 'success' | 'error' | null

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm({ resolver: zodResolver(schema) });

//   const onSubmit = async (data) => {
//     setStatus(null);
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (res.ok) {
//         setStatus('success');
//         reset();
//       } else {
//         const body = await res.json();
//         console.error(body);
//         setStatus('error');
//       }
//     } catch {
//       setStatus('error');
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//         <h1 className="text-2xl font-semibold text-gray-900 mb-1">Get in touch</h1>
//         <p className="text-sm text-gray-500 mb-6">
//           We'll get back to you within 24 hours.
//         </p>

//         {status === 'success' && (
//           <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm mb-5">
//             ✅ Message sent! We'll be in touch soon.
//           </div>
//         )}
//         {status === 'error' && (
//           <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm mb-5">
//             ❌ Something went wrong. Please try again.
//           </div>
//         )}

//         <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
//           {/* Name + Email */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Full name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 {...register('name')}
//                 placeholder="Jane Smith"
//                 className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition
//                   focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
//                   ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
//               />
//               {errors.name && (
//                 <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 {...register('email')}
//                 type="email"
//                 placeholder="jane@example.com"
//                 className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition
//                   focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
//                   ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
//               />
//               {errors.email && (
//                 <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Phone + Subject */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone <span className="text-gray-400 font-normal">(optional)</span>
//               </label>
//               <input
//                 {...register('phone')}
//                 type="tel"
//                 placeholder="+1 555 000 0000"
//                 className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none
//                   focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Subject <span className="text-red-500">*</span>
//               </label>
//               <input
//                 {...register('subject')}
//                 placeholder="How can we help?"
//                 className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition
//                   focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
//                   ${errors.subject ? 'border-red-400' : 'border-gray-200'}`}
//               />
//               {errors.subject && (
//                 <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Message <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               {...register('message')}
//               rows={5}
//               placeholder="Tell us more about your inquiry..."
//               className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition resize-y
//                 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
//                 ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
//             />
//             {errors.message && (
//               <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-gray-900 hover:bg-gray-700 disabled:opacity-50
//               text-white text-sm font-medium py-2.5 rounded-lg transition"
//           >
//             {isSubmitting ? 'Sending…' : 'Send message'}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }