import { AlertTriangle, TrendingDown, Shield, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RiskDisclosurePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-red-600">Risk Disclosure Statement</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Important information about cryptocurrency investment risks
            </p>
          </div>

          <Alert className="mb-8 border-red-500 bg-red-50 dark:bg-red-950">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-red-800 dark:text-red-200">
              <strong>WARNING:</strong> Cryptocurrency investments carry significant risks and may result in substantial
              losses. Please read this disclosure carefully before investing.
            </AlertDescription>
          </Alert>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-red-600">Market Volatility Risk</h2>
              </div>
              <p>
                Cryptocurrency markets are highly volatile and unpredictable. Prices can fluctuate dramatically within
                short periods, potentially resulting in significant losses. Past performance does not guarantee future
                results.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-orange-500" />
                <h2 className="text-xl font-semibold text-orange-600">Regulatory Risk</h2>
              </div>
              <p>
                Cryptocurrency regulations are evolving and may change without notice. Regulatory actions by governments
                could impact the value of cryptocurrencies and the operation of our platform.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <Info className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold text-blue-600">Technology Risk</h2>
              </div>
              <p>
                Blockchain technology and cryptocurrency systems may experience technical issues, security breaches, or
                other technological failures that could affect your investments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Liquidity Risk</h2>
              <p>
                There may be periods when you cannot withdraw your investments due to market conditions, platform
                maintenance, or other factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Counterparty Risk</h2>
              <p>
                Your investments depend on the financial stability and operational integrity of WOLV-INVEST. While we
                implement security measures, there is always a risk of platform failure or insolvency.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Investment Suitability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Only invest money you can afford to lose completely</li>
                <li>Cryptocurrency investments may not be suitable for all investors</li>
                <li>Consider your financial situation, investment objectives, and risk tolerance</li>
                <li>Seek independent financial advice if needed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">No Guarantee of Returns</h2>
              <p>
                While we target daily ROI of 2-5%, these returns are not guaranteed. Market conditions, operational
                factors, and other risks may result in lower returns or losses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Platform-Specific Risks</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Withdrawal periods and restrictions may apply</li>
                <li>Platform policies may change with notice</li>
                <li>Technical issues may temporarily affect access to your account</li>
                <li>Customer support response times may vary</li>
              </ul>
            </section>

            <section className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h2 className="text-xl font-semibold mb-3 text-yellow-800 dark:text-yellow-200">
                Acknowledgment Required
              </h2>
              <p className="text-yellow-700 dark:text-yellow-300">
                By creating an account and investing with WOLV-INVEST, you acknowledge that you have read, understood,
                and accepted all the risks outlined in this disclosure. You confirm that you are investing at your own
                risk and that you may lose some or all of your invested capital.
              </p>
            </section>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Last updated: January 2024</p>
            <p className="mt-2">For questions, contact: risk@wolv-invest.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
