"use client";

import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar variant="sticky" />
      <TermsOfServiceSection />
      <Footer />
    </main>
  );
}

function TermsOfServiceSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white" data-testid="section-terms-of-service">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#042940] leading-[1.05] tracking-tighter mb-12"
            data-testid="text-terms-heading"
          >
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-[#042940] space-y-8" data-testid="content-terms-of-service">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Terms</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                By accessing{" "}
                <a
                  href="https://www.tenthrock.com"
                  className="text-[#042940] font-bold underline hover:text-[#c5d520] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-terms-website"
                >
                  www.tenthrock.com
                </a>
                , you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for compliance with all applicable laws. If you do not agree with any of these terms, you are prohibited from using or accessing this Site.
              </p>
              <p className="text-base leading-relaxed text-[#042940]/90 mt-4">
                The materials contained in this Website, including but not limited to all information, text, images, video, audio, and the design, selection and arrangement thereof are protected by the United States and international copyright and trademark law.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Use License</h2>
              <p className="text-base leading-relaxed text-[#042940]/90 mb-4">
                Permission is granted to temporarily download one copy of the materials on Tenth Rock, LLC's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-[#042940]/90">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or any public display;</li>
                <li>attempt to reverse engineer any software contained on Tenth Rock, LLC's Website;</li>
                <li>remove any copyright or other proprietary notations from the materials;</li>
                <li>transferring the materials to another person or "mirror" the materials on any other server;</li>
                <li>engage in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Site, or while using this Site;</li>
              </ul>
              <p className="text-base leading-relaxed text-[#042940]/90 mt-4">
                This will allow Tenth Rock, LLC to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Disclaimer</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                All the materials on Tenth Rock, LLC's Website are provided "as is". Tenth Rock, LLC makes no warranties, which may be expressed or implied, therefore negating all other warranties. Furthermore, Tenth Rock, LLC does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Limitations</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                Tenth Rock, LLC or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on Tenth Rock, LLC's Website, even if Tenth Rock, LLC or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Revisions and Errata</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                The materials appearing on Tenth Rock, LLC's Website may include technical, typographical, or photographic errors. Tenth Rock, LLC will not promise that any of the materials on this Website are accurate, complete, or current. Tenth Rock, LLC may change the materials contained on its Website at any time without notice. Tenth Rock, LLC does not make any commitment to update the materials.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Links</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                Tenth Rock, LLC has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Tenth Rock, LLC of the site. The use of any linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Site Terms of Use Modifications</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                Tenth Rock, LLC may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Your Privacy</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                Please read our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#042940] font-bold underline hover:text-[#c5d520] transition-colors"
                  data-testid="link-terms-privacy-policy"
                >
                  Privacy Policy
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Governing Law</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                Any claim related to Tenth Rock, LLC's Website shall be governed by the laws of us without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#042940] mb-4 tracking-tighter leading-tight">Entire Agreement</h2>
              <p className="text-base leading-relaxed text-[#042940]/90">
                These Terms and Conditions of Use, our Privacy Policy, and any other document we deem relevant constitute the sole and entire agreement between you and Tenth Rock, LLC with respect to our Site and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, with respect to our Site.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
