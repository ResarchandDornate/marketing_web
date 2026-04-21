export const metadata = {
  title: 'Privacy Policy | UnityESS',
  description: 'Privacy Policy for UnityESS - Learn how we collect, use, and protect your personal information.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[rgb(58,88,129)] py-24 overflow-hidden">
        {/* Geometric network mesh pattern */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
          viewBox="0 0 1200 400"
        >
          <defs>
            <radialGradient id="meshFade" cx="85%" cy="50%" r="60%">
              <stop offset="0%" stopColor="white" stopOpacity="0.12" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="400" fill="url(#meshFade)" />
          {/* Connection lines */}
          <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
            <line x1="620" y1="50" x2="720" y2="120" />
            <line x1="720" y1="120" x2="850" y2="80" />
            <line x1="850" y1="80" x2="950" y2="150" />
            <line x1="950" y1="150" x2="1080" y2="100" />
            <line x1="1080" y1="100" x2="1150" y2="60" />
            <line x1="720" y1="120" x2="780" y2="200" />
            <line x1="780" y1="200" x2="850" y2="80" />
            <line x1="780" y1="200" x2="900" y2="250" />
            <line x1="900" y1="250" x2="950" y2="150" />
            <line x1="950" y1="150" x2="1050" y2="220" />
            <line x1="1050" y1="220" x2="1080" y2="100" />
            <line x1="1050" y1="220" x2="1150" y2="180" />
            <line x1="1150" y1="180" x2="1150" y2="60" />
            <line x1="620" y1="50" x2="680" y2="160" />
            <line x1="680" y1="160" x2="720" y2="120" />
            <line x1="680" y1="160" x2="780" y2="200" />
            <line x1="900" y1="250" x2="1000" y2="310" />
            <line x1="1000" y1="310" x2="1050" y2="220" />
            <line x1="1000" y1="310" x2="1100" y2="340" />
            <line x1="1100" y1="340" x2="1150" y2="180" />
            <line x1="850" y1="80" x2="920" y2="30" />
            <line x1="920" y1="30" x2="1080" y2="100" />
            <line x1="920" y1="30" x2="950" y2="150" />
            <line x1="780" y1="200" x2="820" y2="300" />
            <line x1="820" y1="300" x2="900" y2="250" />
            <line x1="820" y1="300" x2="1000" y2="310" />
            <line x1="620" y1="50" x2="550" y2="130" />
            <line x1="550" y1="130" x2="680" y2="160" />
            <line x1="1100" y1="340" x2="1180" y2="300" />
            <line x1="1180" y1="300" x2="1150" y2="180" />
            <line x1="550" y1="130" x2="600" y2="250" />
            <line x1="600" y1="250" x2="680" y2="160" />
            <line x1="600" y1="250" x2="780" y2="200" />
            <line x1="600" y1="250" x2="820" y2="300" />
            <line x1="1050" y1="220" x2="1100" y2="340" />
          </g>
          {/* Nodes / dots */}
          <g fill="rgba(255,255,255,0.35)">
            <circle cx="620" cy="50" r="3" />
            <circle cx="720" cy="120" r="4" />
            <circle cx="850" cy="80" r="3.5" />
            <circle cx="950" cy="150" r="4" />
            <circle cx="1080" cy="100" r="3" />
            <circle cx="1150" cy="60" r="2.5" />
            <circle cx="780" cy="200" r="4" />
            <circle cx="900" cy="250" r="3.5" />
            <circle cx="1050" cy="220" r="3" />
            <circle cx="1150" cy="180" r="3.5" />
            <circle cx="680" cy="160" r="3" />
            <circle cx="1000" cy="310" r="3" />
            <circle cx="1100" cy="340" r="2.5" />
            <circle cx="920" cy="30" r="3" />
            <circle cx="820" cy="300" r="3.5" />
            <circle cx="550" cy="130" r="3" />
            <circle cx="1180" cy="300" r="2.5" />
            <circle cx="600" cy="250" r="3" />
          </g>
          {/* Highlighted dots */}
          <g fill="rgba(255,255,255,0.6)">
            <circle cx="720" cy="120" r="2" />
            <circle cx="950" cy="150" r="2" />
            <circle cx="780" cy="200" r="2" />
            <circle cx="1050" cy="220" r="2" />
            <circle cx="850" cy="80" r="1.5" />
            <circle cx="900" cy="250" r="1.5" />
          </g>
        </svg>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-none text-gray-600 text-[15px] leading-[1.8]">

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Privacy Policy of UnityESS</h2>
          <p className="mb-5">
            One of our top goals at UnityESS,{' '}
            <a href="https://unityess.ai" className="text-accent hover:underline">https://unityess.ai</a>,
            is the privacy of our visitors. This document outlines the types of information that UnityESS collects
            and records alongside how we use it.
          </p>
          <p className="mb-5">
            Please do not hesitate to contact us if you have any additional concerns or seek extra information
            about our Privacy Policy.
          </p>
          <p className="mb-5">
            This Privacy Policy only applies to our online activities and is applicable for visitors to our website
            who share and/or gather information with UnityESS. This policy does not apply to data acquired offline
            or through channels other than this website.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Consent</h2>
          <p className="mb-5">
            By using our website, you consent to and agree to the terms of our Privacy Policy.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Information We Collect</h2>
          <p className="mb-5">
            If you are asked to provide personal information, the reason for doing so will also be made clear to you
            at the same time. Only then will we ask you to provide your personal information.
          </p>
          <p className="mb-5">
            We may obtain additional information about you if you contact us directly, such as your name, email address,
            phone number, the contents of any message and/or attachments you send us, and any other information you
            wish to provide.
          </p>
          <p className="mb-5">
            When you fill out our contact or inquiry forms, request a quote for our Battery Energy Storage Systems (BESS),
            or reach out to us via email, phone, or WhatsApp, we may ask for your contact information such as your name,
            company name, address, email address, and phone number.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">How Do We Use Your Information?</h2>
          <p className="mb-5">
            We use the data we collect in a variety of ways, including to provide, operate, and maintain our website.
            We continuously work to improve, personalize, and expand our website and services. We use the information to
            recognize and evaluate how you use our website, and to develop new products, services, features, and capabilities
            in the field of energy storage solutions.
          </p>
          <p className="mb-5">
            We may communicate with you, either directly or through one of our partners, for several reasons including
            customer support, responding to your inquiries about our BESS products such as Model A, Model B, Model C,
            and Unity Infinity, providing you with website updates, product information, industry insights, and marketing
            and promotional content related to our energy storage systems.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Log Files</h2>
          <p className="mb-5">
            UnityESS uses log files as a normal operation. When people visit websites, these files keep track of who they are.
            It is something that all hosting companies conduct as part of their analytics. Internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and perhaps the number
            of clicks are among the data gathered by log files. These are not linked to any personally identifiable information.
            The information is collected to evaluate trends, operate the site, track users&apos; movements on the site, and
            compile demographic data.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Privacy Policies of Advertising Partners</h2>
          <p className="mb-5">
            Third-party ad servers or ad networks may employ technologies such as cookies, JavaScript, or Web Beacons in their
            adverts and links on UnityESS, which are delivered directly to users&apos; browsers. When this happens, your IP
            address gets immediately sent to them. These technologies are used to assess the efficacy of their advertising
            campaigns and/or to tailor the advertising material you see on websites you visit.
          </p>
          <p className="mb-5">
            Third-party cookies are used by third-party advertising partners, and UnityESS has no access to or control over them.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Third-Party Privacy Policies</h2>
          <p className="mb-5">
            Other advertisers or websites are not covered by UnityESS&apos;s Privacy Policy. As a result, we recommend that you
            read the Privacy Policies of these third-party ad servers for more information. It may provide information about their
            policies alongside instructions about how to opt-out of particular alternatives.
          </p>
          <p className="mb-5">
            You may disable cookies in your browser by changing the settings. Detailed information on cookie management with
            various web browsers can be found on the respective browsers&apos; webpages.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Rights to Data Protection under the GDPR</h2>
          <p className="mb-5">
            We want to make sure you understand your data protection rights completely. Every user has the following rights:
          </p>
          <p className="mb-5">
            <span className="font-medium text-gray-700">The right to access</span> &ndash; You have the right to a copy of your
            personal information. For this service, we may charge you a small fee.
          </p>
          <p className="mb-5">
            <span className="font-medium text-gray-700">Rectification right</span> &ndash; You have the right to request that we
            correct any information we have about you if it is incorrect. You also have the right to request that any information
            you have provided to us that is incomplete should be completed immediately.
          </p>
          <p className="mb-5">
            <span className="font-medium text-gray-700">Erasure rights</span> &ndash; Under certain circumstances, you have the right
            to request that we delete your data.
          </p>
          <p className="mb-5">
            <span className="font-medium text-gray-700">Object to processing rights</span> &ndash; Under certain circumstances, you
            have the right to object to our processing of your data.
          </p>
          <p className="mb-5">
            <span className="font-medium text-gray-700">Data portability rights</span> &ndash; Under some circumstances, you have the
            right to request that we transfer the data we&apos;ve acquired to another organization or directly to you.
          </p>
          <p className="mb-5">
            If you submit a request, you will receive a response within one month. Please do contact us if you wish to exercise
            any of these rights.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Children&apos;s Information</h2>
          <p className="mb-5">
            Adding protection for youngsters when accessing the internet is another of our top priorities. Parents and guardians
            are encouraged to observe, participate in, and/or supervise and manage their children&apos;s online activities.
          </p>
          <p className="mb-5">
            UnityESS does not intentionally collect Personal Identifiable Information from children below thirteen. If your child
            provided any information on our website, we strongly encourage you to notify us immediately so that we can get this
            information removed from our database.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">Contact Us</h2>
          <p className="mb-5">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-6 text-gray-600">
            <p className="font-semibold text-gray-800 mb-3">UnityESS</p>
            <div className="space-y-1.5">
              <p><span className="text-gray-700">Address:</span> A-87, Okhla Phase - II, New Delhi, India</p>
              <p><span className="text-gray-700">Phone:</span> +91-1800-2026-252</p>
              <p><span className="text-gray-700">Email:</span>{' '}
                <a href="mailto:info@ornatesolar.com" className="text-accent hover:underline">info@ornatesolar.com</a>
              </p>
              <p><span className="text-gray-700">Website:</span>{' '}
                <a href="https://unityess.ai" className="text-accent hover:underline">unityess.ai</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
