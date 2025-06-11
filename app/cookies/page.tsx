export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Cookie Policy</h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">Types of Cookies We Use</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation, access to secure areas, and authentication.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Performance Cookies</h3>
                  <p>
                    These cookies collect information about how visitors use our website, such as which pages are
                    visited most often. This data helps us improve our website's performance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Functionality Cookies</h3>
                  <p>
                    These cookies allow our website to remember choices you make and provide enhanced, more personal
                    features, such as remembering your login details.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Analytics Cookies</h3>
                  <p>
                    We use analytics cookies to understand how our website is being used and to improve user experience.
                    These cookies collect anonymous information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">Managing Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but
                you can modify your browser settings to decline cookies if you prefer. However, this may prevent you
                from taking full advantage of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">Third-Party Cookies</h2>
              <p>
                We may use third-party services that place cookies on your device. These services help us analyze
                website traffic, provide customer support, and improve our services. We do not control these third-party
                cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">Updates to This Policy</h2>
              <p>
                We may update this cookie policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at cookies@wolv-invest.com or
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
