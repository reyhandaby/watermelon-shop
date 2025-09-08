"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '@/lib/backendless';
import NetworkStatus from "@/components/NetworkStatus";
import BackendlessStatusChecker from "@/components/BackendlessStatusChecker";
import BackendlessTroubleshooting from '@/components/BackendlessTroubleshooting';

export default function Register() {


const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords do not match')
        .required('Confirm password is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
});
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    return (
        <section className="bg-white min-h-screen">
                <NetworkStatus />
                <BackendlessStatusChecker />
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <Image className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" width={32} height={32} />
                        Flowbite
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create an account
                            </h1>
                            <Formik
                                initialValues={{ email: '', password: '', confirmPassword: '', terms: false }}
                                validationSchema={RegisterSchema}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                    setError("");
                                    setSuccess("");
                                    try {
                                        await registerUser(values.email, values.password);
                                        setSuccess("Registration successful!");
                                        resetForm();
                                    } catch (err) {
                                        setError(
                                            (err as any)?.response?.data?.message || 
                                            (err as Error)?.message || 
                                            "Registration failed"
                                        );
                                    }
                                    setSubmitting(false);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="space-y-4 md:space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                            <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" />
                                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                            <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        <div>
                                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                                            <Field type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <Field id="terms" name="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                                <ErrorMessage name="terms" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                        </div>

                                        {error && (
                                            <div className="text-red-500 text-sm mb-2 p-2 bg-red-50 rounded border border-red-200">
                                                <p className="font-medium">Error:</p>
                                                <p>{error}</p>
                                                {error.includes('Network error') && (
                                                    <p className="mt-1 text-xs">Please check your internet connection and try again.</p>
                                                )}
                                                {error.includes('Network error') || error.includes('Unable to connect') ? (
                                                  <BackendlessTroubleshooting />
                                                ) : null}
                                            </div>
                                        )}
                                        {success && <div className="text-green-600 text-sm mb-2 p-2 bg-green-50 rounded border border-green-200">{success}</div>}
                                        <button type="submit" disabled={isSubmitting} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                                            {isSubmitting ? 'Registering...' : 'Create an account'}
                                        </button>
                                        <p className="text-sm font-light text-gray-500">Already have an account? <a href="/login" className="text-blue-700 font-medium text-primary-600 hover:underline">Login here</a></p>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
    );
}