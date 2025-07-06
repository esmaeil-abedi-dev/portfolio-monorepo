import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Login | Esmaeil Abedi Admin",
  description: "Login to Esmaeil Abedi's admin panel",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side - login form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 lg:flex-none lg:max-w-md xl:max-w-lg">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
            <p className="text-gray-600">
              Welcome back! Please sign in to continue.
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-accent hover:text-accent-dark">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right side - image and branding */}
      <div className="hidden lg:block relative w-0 flex-1 bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <div className="mb-8">
            {/* Logo/Avatar placeholder - would be replaced with actual image */}
            <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-primary">EA</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Esmaeil Abedi</h2>
          <p className="text-white/80 max-w-md text-center mb-8">
            Content Management System for your personal website. Manage your projects, 
            blog posts, and personal information from this admin panel.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center">
              <div className="font-bold text-2xl">24</div>
              <div className="text-sm text-white/70">Blog Posts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center">
              <div className="font-bold text-2xl">12</div>
              <div className="text-sm text-white/70">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center">
              <div className="font-bold text-2xl">5+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
