import MainHeader from "@/components/header";
import React from "react";

const page = () => {
  return (
    <>
      <MainHeader />
      <main className="w-full max-w-screen-xl mx-auto flex flex-col items-center  mt-[200px]">
        <div className="w-full min-h-[400px] rounded-4xl bg-[#00ff4c56] svgbg flex flex-col items-center p-8 *:text-center">
          <br />
          <h1 className="text-6xl  font-medium">Our</h1>
          <h1 className="text-6xl  font-medium">Privacy & Policy</h1>
          <br />
          <div className="flex flex-col items-center text-center gap-4 p-6 max-w-2xl mx-auto">
            <p className="font-bold text-lg">Introduction:</p>
            <p>
              <b>User-Provided Data:</b> Your name, phone number, and any
              messages or media you send to the bot.
            </p>
            <p>
              <b>Automated Data:</b> Metadata such as timestamps and message
              status (e.g., delivered, read).
            </p>

            <p className="font-bold text-lg"> How We Use Your Information</p>
            <p>We use your data for the following purposes:</p>
            <p>To provide responses and automated services via WhatsApp.</p>
            <p>To improve and optimize our bot’s performance.</p>
            <p>
              To comply with legal obligations and prevent fraudulent
              activities.
            </p>

            <p className="font-bold text-lg"> Data Sharing and Disclosure</p>
            <p>
              We do not sell, rent, or trade your personal data. However, we may
              share your information:
            </p>
            <p>
              <b>With WhatsApp and Meta:</b> As required by the WhatsApp Cloud
              API’s terms and policies.
            </p>
            <p>
              <b>With Service Providers:</b> If necessary for hosting,
              analytics, or technical support.
            </p>
            <p>
              <b>For Legal Compliance:</b> If required by law or to protect our
              rights and users.
            </p>

            <p className="font-bold text-lg">Data Security</p>
            <p>
              We implement reasonable security measures to protect your personal
              information. However, as no system is completely secure, we
              encourage users to avoid sharing sensitive information via the
              bot.
            </p>

            <p className="font-bold text-lg"> Data Retention</p>
            <p>
              We retain your data only as long as necessary to fulfill the
              intended purposes. If you wish to have your data deleted, please
              contact us.
            </p>

            <p className="font-bold text-lg"> Your Rights</p>
            <p>You have the right to:</p>
            <p>Request access to the data we hold about you.</p>
            <p>Request correction or deletion of your data.</p>
            <p>Opt out of automated interactions with our bot.</p>

            <p className="font-bold text-lg"> Third-Party Links</p>
            <p>
              Our bot may share links to third-party websites or services. We
              are not responsible for the privacy practices of those third
              parties.
            </p>

            <p className="font-bold text-lg"> Changes to This Policy</p>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be communicated via WhatsApp or an updated version on our
              website.
            </p>

            <p className="font-bold text-lg">. Contact Us</p>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us at
              <a
                href="mailto:timcodes117@gmail.com"
                className="text-blue-500 underline"
              >
                timcodes117@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
