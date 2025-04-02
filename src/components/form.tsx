// components/RegistrationForm.tsx
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormStore } from './FormStore';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  contact: z.string().min(6, 'Contact info must be at least 6 characters'),
  email: z.string().email('Invalid email address'),
  education: z.string().min(10, 'Please provide educational background'),
  experience: z.string().min(10, 'Please describe your experience'),
  currentProject: z.enum(['Yes', 'No']),
  registrationType: z.enum(['Developer', 'Project']),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegistrationForm({ className }: { className?: string }) {
  const router = useRouter();
  const { setFormData } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    // Add your submission logic here
    console.log('Form submitted:', data);
  };

  const currentProject = watch('currentProject');

  return (
    <div>
      <motion.button
        onClick={() => router.back()}
        className={`group fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 p-4 shadow-lg hover:shadow-xl ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        aria-label="Go back"
      >
        <ChevronLeft className="h-6 w-6 text-white transition-transform group-hover:-translate-x-1" />
        <span className="hidden text-sm font-semibold text-white md:block">
          Back
        </span>
      </motion.button>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join BuyGet</h1>
            <p className="text-gray-600">
              Start your journey with us - let's create something amazing together!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Details Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Personal Details</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    {...register('name')}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none px-4 py-3"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Info</label>
                  <input
                    {...register('contact')}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none px-4 py-3"
                    placeholder="Your contact details"
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none px-4 py-3"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Background Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Professional Background</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Education</label>
                  <textarea
                    {...register('education')}
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none px-4 py-3"
                    placeholder="Your educational background"
                  />
                  {errors.education && (
                    <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Experience</label>
                  <textarea
                    {...register('experience')}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none px-4 py-3"
                    placeholder="Describe your experience"
                  />
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Project Involvement Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Project Involvement</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Are you currently working on a project?
                  </label>
                  <div className="flex gap-6">
                    {['Yes', 'No'].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={option}
                          {...register('currentProject')}
                          className="h-4 w-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.currentProject && (
                    <p className="text-red-500 text-sm mt-1">{errors.currentProject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Registration Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Developer', 'Project'].map((option) => (
                      <label
                        key={option}
                        className={`p-4 border rounded-lg cursor-pointer transition-all focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 ${
                          currentProject === 'No' && option === 'Project'
                            ? 'opacity-50 cursor-not-allowed'
                            : 'border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          value={option}
                          {...register('registrationType')}
                          className="h-4 w-4 text-indigo-600 focus:ring-0"
                          disabled={currentProject === 'No' && option === 'Project'}
                        />
                        <span className="ml-2 font-medium text-gray-800">
                          {option === 'Developer' ? 'Developer Registration' : 'Project Collaboration'}
                        </span>
                        <p className="mt-2 text-sm text-gray-500">
                          {option === 'Developer'
                            ? 'Join our in-house development team'
                            : 'Collaborate on your project with us'}
                        </p>
                      </label>
                    ))}
                  </div>
                  {errors.registrationType && (
                    <p className="text-red-500 text-sm mt-1">{errors.registrationType.message}</p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
