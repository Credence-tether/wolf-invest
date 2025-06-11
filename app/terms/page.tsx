export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Terms and Conditions</h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">1. Acceptance of Terms</h2>
              <p>
                By accessing and using WOLV-INVEST platform, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">2. Investment Services</h2>
              <p>
                WOLV-INVEST provides cryptocurrency investment services with daily returns ranging from 2-5%. All
                investments are subject to market risks and past performance does not guarantee future results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Understand the risks associated with cryptocurrency investments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">4. Investment Plans</h2>
              <p>
                We offer four distinct investment plans: Basic ($200-$999), Amateur ($1,000-$1,999), Retirement
                (custom), and VIP (custom). Each plan has specific terms, ROI rates, and withdrawal periods.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">5. Withdrawal Policy</h2>
              <p>
                Capital returns are available after a 20-day withdrawal period. Daily ROI payments are processed for 7
                days. All withdrawals are subject to verification and may take 1-3 business days to process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">6. Risk Disclosure</h2>
              <p>
                Cryptocurrency investments carry significant risks including but not limited to market volatility,
                regulatory changes, and technology risks. You may lose some or all of your invested capital.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">7. Limitation of Liability</h2>
              <p>
                WOLV-INVEST shall not be liable for any direct, indirect, incidental, special, or consequential damages
                resulting from the use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">8. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Users will be notified of significant changes
                via email or platform notifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">9. Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at legal@wolv-invest.com or through our customer
                support channels.
              </p>
            </section>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Last updated: January 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
