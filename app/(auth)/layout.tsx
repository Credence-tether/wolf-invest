export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">W</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">WOLV-INVEST</h1>
                <p className="text-blue-200">Invest Smarter</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Start Your Investment Journey Today
              </h2>
              <p className="text-lg text-blue-200">
                Join thousands of investors earning consistent returns with our secure cryptocurrency investment platform.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold">2-5%</div>
                <div className="text-sm text-blue-200">Daily ROI</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-blue-200">Investors</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">SEC</div>
                <div className="text-sm text-blue-200">Regulated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}
