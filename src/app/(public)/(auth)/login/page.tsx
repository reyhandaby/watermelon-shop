"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "@/lib/backendless";
import NetworkStatus from "@/components/NetworkStatus";
import BackendlessStatusChecker from "@/components/BackendlessStatusChecker";
import BackendlessTroubleshooting from "@/components/BackendlessTroubleshooting";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <NetworkStatus />
      <BackendlessStatusChecker />
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-md">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setError("");
            setSuccess("");
            try {
              await loginUser(values.email, values.password);
              setSuccess("Login successful!");
            } catch (err) {
              setError(
                (err as any)?.response?.data?.message || 
                (err as Error)?.message || 
                "Login failed"
              );
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
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
              {success && (
                <div className="text-green-600 text-sm mb-2">{success}</div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <p className="mt-4 text-sm text-gray-400">
                Don&apos;t have an account yet?{" "}
                <Link href="/register" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}