export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, make investments,
                or contact us for support. This includes personal information like name, email address, and financial
                information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our investment services</li>
                <li>To process transactions and send related information</li>
                <li>To send administrative information and updates</li>
                <li>To respond to your comments and questions</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular
                security audits.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our platform. You can
                control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">6. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">7. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at privacy@wolv-invest.com or
                through our customer support channels.
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
