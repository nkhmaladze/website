import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/"
          className="mb-10 inline-flex font-mono text-xs uppercase tracking-wider text-muted-foreground transition-opacity hover:opacity-70"
        >
          ← Back home
        </Link>

        <h1 className="mb-2 font-heading text-3xl font-medium md:text-4xl">Privacy Policy</h1>
        <p className="mb-10 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Flipped Social, Inc.
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-foreground">
          <p>
            Flipped Social, Inc. ("Flipped," "we," "our," or "us") is a Delaware corporation operating
            a mobile application designed to facilitate real-life, in-person dates between adults. We
            are committed to handling your personal information responsibly and transparently. This
            Privacy Policy explains what information we collect, why we collect it, how we use and
            share it, how long we keep it, and what rights and choices you have. It applies to all
            users of the Flipped mobile application and related services (collectively, the
            "Services") in the United States.
          </p>
          <p>
            This Privacy Policy is incorporated into and forms part of our User Terms of Service. By
            creating an account or using the Services, you acknowledge that you have read and
            understood this Policy.
          </p>
          <p className="text-muted-foreground">
            Questions? Contact us at:{" "}
            <a
              href="mailto:privacy@flippedsocial.com"
              className="text-foreground underline underline-offset-4 hover:opacity-70"
            >
              privacy@flippedsocial.com
            </a>{" "}
            | 131 Continental Dr, Suite 305, Newark, DE 19713
          </p>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">1. Information We Collect</h2>
            <p>
              We collect the categories of information described below. Some information is provided
              directly by you; some is generated automatically when you use the Services.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-6 text-left font-mono text-xs uppercase tracking-wider">
                      Category
                    </th>
                    <th className="py-2 text-left font-mono text-xs uppercase tracking-wider">
                      Examples
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 pr-6 align-top font-medium">Profile Data</td>
                    <td className="py-3 text-muted-foreground">
                      Name, age, gender, sexual orientation, race/ethnicity, religion, political views
                      (optional), occupation, education, relationship preferences, interests, photos,
                      written prompts
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 align-top font-medium">Contact &amp; Identity</td>
                    <td className="py-3 text-muted-foreground">
                      Phone number (required), email address (where provided), selfie image used for
                      face-scan verification
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 align-top font-medium">Location Data</td>
                    <td className="py-3 text-muted-foreground">
                      General location (city/zip) for matching; approximate location when en route to
                      a confirmed Date
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 align-top font-medium">Behavioral &amp; Usage</td>
                    <td className="py-3 text-muted-foreground">
                      Swipes, likes, matches, in-app interactions, session events, feature engagement,
                      drop-off points (via PostHog)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 align-top font-medium">Device &amp; Technical</td>
                    <td className="py-3 text-muted-foreground">
                      IP address, device type, operating system, app version, server request logs,
                      exception logs, query performance data (via Nightwatch)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 align-top font-medium">Payment Data</td>
                    <td className="py-3 text-muted-foreground">
                      Transaction records only; payment instrument data held by Stripe or Apple Pay,
                      not Flipped
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 align-top font-medium">Communications</td>
                    <td className="py-3 text-muted-foreground">
                      System messages, safety reports, dispute submissions, support correspondence
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 align-top font-medium">Biometric-Adjacent</td>
                    <td className="py-3 text-muted-foreground">
                      Selfie images processed by third-party face-scan service for identity
                      verification; raw biometric templates not stored by Flipped
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                1.1 Sensitive Personal Information
              </h3>
              <p>
                Certain categories of information we collect are considered sensitive under applicable
                law, including racial or ethnic origin, religious beliefs, sexual orientation, and
                where provided, political views. We collect this information solely to facilitate
                matching and personalize your experience. Race/ethnicity and sexual orientation are
                required to use core matching features; religion and political views include a "prefer
                not to say" option. We do not use sensitive personal information for advertising
                targeting and do not sell it to third parties.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                1.2 Biometric-Adjacent Data and Face Scanning
              </h3>
              <p>
                To help verify that your profile photos accurately represent your appearance, we use a
                third-party face-scan service to compare a selfie you submit against your profile
                photographs. Flipped does not independently store raw biometric identifiers or
                biometric templates. The third-party service's handling of this data is governed by
                its own practices, and we contractually require such providers to use your data only
                to perform services on our behalf.
              </p>
              <p>
                Residents of Illinois, Texas, Washington, and other states with biometric privacy
                laws: by submitting a selfie for verification, you consent to the collection and use
                of your facial geometry data for identity verification as described in this Policy.
                You may withdraw this consent by deleting your account, which will terminate your
                access to the Services.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                1.3 Information We Do Not Collect
              </h3>
              <p>
                We do not collect or store your full payment card number, bank account details, or
                other raw financial credentials. Payment processing is handled entirely by Stripe,
                Inc. and Apple Inc. (Apple Pay), and we receive only transaction confirmation records.
              </p>
              <p>
                We do not deploy cross-site advertising trackers such as the Meta Pixel or Google
                Analytics tags.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">2. How We Collect Information</h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.1 Directly From You
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>• Account registration: name, phone number, birthday, gender, photos, prompts</li>
                <li>
                  • Profile setup: preferences, interests, lifestyle attributes, and sensitive
                  demographic data
                </li>
                <li>
                  • In-app actions: swipes, invites, system messages, reports, dispute submissions
                </li>
                <li>
                  • Payment initiation (processed by Stripe or Apple Pay; we do not receive raw
                  payment credentials)
                </li>
                <li>• Communications with our support team</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.2 Automatically When You Use the App
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • Product analytics via PostHog, Inc.: in-app events, navigation flows, session
                  data, and drop-off points, used solely for internal product improvement. PostHog is
                  configured as a data processor acting on our behalf and is not permitted to use this
                  data for its own commercial purposes.
                </li>
                <li>
                  • Backend observability via Nightwatch: server request logs, query performance,
                  exception reports, and application logs for system health monitoring.
                </li>
                <li>
                  • IP address and basic device/OS information derived from server-side request
                  headers.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.3 From Third Parties
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>• Identity verification results returned by our third-party face-scan provider</li>
                <li>
                  • Transaction status and payment confirmation from Stripe, Inc. and Apple Inc.
                </li>
                <li>• Safety and fraud signals from service providers acting on our behalf</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">3. How We Use Your Information</h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                3.1 Providing and Operating the Services
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>• Creating and maintaining your account and profile</li>
                <li>• Generating matches based on your profile, preferences, and location</li>
                <li>
                  • Coordinating and confirming Dates, including assigning a Date Venue and time
                </li>
                <li>• Processing and managing Date Credits (deposits) and refunds</li>
                <li>
                  • Sending match notifications, Date confirmations, reminders, and system messages
                  via SMS and email
                </li>
                <li>• Enforcing attendance, cancellation, and conduct policies</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                3.2 Safety, Security, and Content Moderation
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>• Verifying profile photo accuracy through automated face-scan comparison</li>
                <li>
                  • Scanning user-submitted content (photos, prompts, and messages) for sexually
                  explicit, violent, or otherwise policy-violating material using AI-powered
                  moderation tools, including services provided by Anthropic, PBC (Claude) and
                  OpenAI, Inc. Content flagged by these systems may be reviewed by our team and may
                  result in removal or account action.
                </li>
                <li>
                  • Investigating reports of misconduct, harassment, fraud, or safety violations
                </li>
                <li>
                  • Detecting and preventing fake accounts, platform abuse, and fraudulent activity
                </li>
                <li>
                  • Cooperating with law enforcement and regulatory authorities as required by law or
                  to protect user safety
                </li>
                <li>• Retaining records of banned users to prevent re-registration</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                3.3 Product Analytics and Improvement
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • Analyzing engagement, feature adoption, session flows, and drop-off events
                  through PostHog to improve product design and performance
                </li>
                <li>
                  • Monitoring backend performance and system health through Nightwatch
                </li>
                <li>
                  • Conducting internal research to develop new features, including future offerings
                  such as group dates and user-hosted experiences
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                3.4 Marketing and Communications
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • Sending marketing and promotional communications to users who have opted in
                </li>
                <li>
                  • Using profile content in anonymized or non-personally-identifiable form for
                  marketing materials, subject to the license in our Terms of Service
                </li>
                <li>
                  • Displaying contextual or demographic-based advertisements within the Services
                  (current or future); we do not use cross-app behavioral advertising profiles
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                3.5 Legal and Compliance
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • Complying with applicable federal, state, and local laws and regulations
                </li>
                <li>
                  • Enforcing our Terms of Service, this Privacy Policy, and our User Guidelines
                </li>
                <li>• Establishing, exercising, or defending legal claims</li>
                <li>
                  • Responding to valid legal process, including subpoenas and law enforcement
                  requests
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">4. Legal Bases for Processing</h2>
            <p>Flipped processes your personal information on the following grounds:</p>
            <ul className="space-y-1 pl-4 text-muted-foreground">
              <li>
                • <span className="text-foreground">Contract performance:</span> processing necessary
                to provide the Services you have requested.
              </li>
              <li>
                • <span className="text-foreground">Legitimate interests:</span> fraud prevention,
                safety, security, product analytics, and platform improvement, where those interests
                are not overridden by your rights.
              </li>
              <li>
                • <span className="text-foreground">Consent:</span> processing of sensitive personal
                information, biometric-adjacent data, SMS marketing, and certain analytics where
                consent is required by applicable law.
              </li>
              <li>
                • <span className="text-foreground">Legal obligation:</span> processing required to
                comply with law, respond to legal process, or cooperate with authorities.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">5. How We Share Your Information</h2>
            <p>We do not sell your personal information. We share information only as described below.</p>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.1 With Other Users
              </h3>
              <p>
                Your profile (first name, photos, prompts, general attributes) is visible to other
                users as part of the matching experience. Your phone number and precise contact
                details are not shared with other users.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.2 With Service Providers
              </h3>
              <p>
                We share information with third-party vendors who process data on our behalf under
                contractual confidentiality and data protection obligations. Current service provider
                categories include:
              </p>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>• Payment processing: Stripe, Inc.; Apple Inc. (Apple Pay)</li>
                <li>• Backend infrastructure and data storage: Supabase, Inc.</li>
                <li>• Content delivery and security: Cloudflare, Inc.</li>
                <li>• Identity verification (face scanning): Didit Identity, Inc.</li>
                <li>
                  • AI-powered content moderation: Anthropic, PBC (Claude); OpenAI Group.
                </li>
                <li>• Product analytics: PostHog, Inc.</li>
                <li>• Backend observability: Nightwatch</li>
                <li>• SMS and notification delivery: Twilio, Inc.</li>
              </ul>
              <p>
                We do not permit service providers to use your personal information for their own
                commercial purposes beyond performing services for us.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.3 With Venue Partners
              </h3>
              <p>
                Flipped assigns Date Venues to confirmed Dates. We do not share your personal
                information with venue operators. Venues receive only the information necessary to
                anticipate a reservation or visit, with no user-identifying data.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.4 For Legal and Safety Reasons
              </h3>
              <p>
                We may disclose your information to law enforcement, courts, regulators, or other
                authorities where we are legally required to do so, or where we have a good-faith
                belief that disclosure is necessary to comply with a legal obligation, protect the
                safety of any person, prevent or investigate illegal activity or fraud, or protect
                Flipped from legal liability. We cooperate with the National Center for Missing &
                Exploited Children (NCMEC) and other child safety organizations in connection with
                the protection of minors.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.5 In Connection With Business Transfers
              </h3>
              <p>
                If Flipped is involved in a merger, acquisition, financing, or sale of assets, your
                information may be transferred as part of that transaction. We will provide notice to
                affected users as required by applicable law.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.6 With Your Consent
              </h3>
              <p>
                We may share your information for other purposes where we have obtained your explicit
                consent.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">6. SMS Communications and TCPA Compliance</h2>
            <p>
              By providing your phone number and creating an account, you expressly consent to receive
              text messages (SMS) from Flipped at the number you provide. Message types include:
            </p>
            <ul className="space-y-1 pl-4 text-muted-foreground">
              <li>• Match notifications and Date confirmations</li>
              <li>• Date reminders and logistical updates</li>
              <li>• Safety alerts and account notifications</li>
              <li>• Marketing and promotional messages (only where separately opted in)</li>
            </ul>
            <p>
              Message frequency varies. Standard message and data rates may apply. To opt out of all
              SMS, reply STOP to any message or update your preferences in the App. Note that opting
              out of SMS will also opt you out of time-sensitive transactional SMS, including Date
              reminders. You may opt back in by replying START or updating in-app preferences. We do
              not share your phone number with third parties for their marketing purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">7. Tracking Technologies</h2>
            <p>
              Because the Services are delivered through a native iOS application, Flipped does not
              use browser cookies or cross-site tracking technologies, and does not deploy the Meta
              Pixel, Google Analytics tag, or similar third-party advertising trackers.
            </p>
            <p>
              Within the app, PostHog collects product analytics data including in-app event tracking
              and funnel analysis, solely for internal product analysis. This data is stored in the
              United States and is not used for advertising profiling or shared with advertising
              networks.
            </p>
            <p>
              Nightwatch collects backend observability data solely for system performance monitoring
              and error diagnosis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">8. Data Retention</h2>
            <p>
              We retain your personal information as long as your account is active or as needed to
              provide the Services, comply with legal obligations, resolve disputes, prevent fraud, and
              enforce our agreements:
            </p>
            <ul className="space-y-1 pl-4 text-muted-foreground">
              <li>
                • <span className="text-foreground">Active accounts:</span> retained for the duration
                of activity and a reasonable period thereafter.
              </li>
              <li>
                • <span className="text-foreground">Deleted accounts:</span> deleted or anonymized
                within a reasonable period, except data retained for legal, fraud prevention, or
                safety purposes, including records necessary to prevent re-registration by banned
                users.
              </li>
              <li>
                • <span className="text-foreground">Suspended and banned accounts:</span> sufficient
                identifying data retained to prevent re-registration and support legal or safety
                investigations.
              </li>
              <li>
                • <span className="text-foreground">Payment records:</span> retained as required by
                applicable tax and financial regulations.
              </li>
              <li>
                • <span className="text-foreground">Safety and legal records:</span> retained for the
                duration of any applicable statute of limitations.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">9. Data Security</h2>
            <p>
              We implement administrative, technical, and physical safeguards to protect your personal
              information from unauthorized access, use, disclosure, alteration, or destruction. All
              data is stored in the United States. We use encrypted transmission (TLS) for data in
              transit and access controls for data at rest.
            </p>
            <p>
              No method of electronic storage or transmission is completely secure. We cannot
              guarantee absolute security. In the event of a data breach affecting your rights, we
              will notify affected users and relevant authorities as required by applicable law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">10. Your Rights and Choices</h2>
            <p>
              Depending on your state of residence, you may have the following rights regarding your
              personal information. We will honor applicable rights upon verified request.
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.1 Access and Portability
              </h3>
              <p>
                You may request a copy of the personal information we hold about you in a structured,
                commonly used format.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.2 Correction
              </h3>
              <p>
                You may update or correct profile information through the App at any time. For data
                not accessible in-app, contact{" "}
                <a
                  href="mailto:privacy@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  privacy@flippedsocial.com
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.3 Deletion
              </h3>
              <p>
                You may request deletion of your personal information by deleting your account
                through the App or by contacting{" "}
                <a
                  href="mailto:privacy@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  privacy@flippedsocial.com
                </a>
                . Deletion is subject to the retention obligations in Section 8.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.4 Opt-Out of Marketing Communications
              </h3>
              <p>
                You may opt out of marketing SMS or emails by following the unsubscribe instructions
                in any message or updating your in-app notification preferences. Opting out of
                marketing does not affect transactional communications necessary to operate the
                Services.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.5 Sensitive Information
              </h3>
              <p>
                You may request that we limit use of your sensitive personal information to purposes
                strictly necessary to provide the Services. Note that certain sensitive data is
                required for core features, and limiting its use may impair your access to the
                Services.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.6 California Residents (CCPA/CPRA)
              </h3>
              <p>
                California residents have the right to: (a) know what personal information is
                collected, used, shared, or sold; (b) delete personal information (subject to
                exceptions); (c) opt out of sale or sharing for cross-context behavioral advertising
                (Flipped does not sell or share for this purpose); (d) correct inaccurate personal
                information; (e) limit use of sensitive personal information; and (f) not be
                discriminated against for exercising these rights. To submit a verifiable consumer
                request, contact{" "}
                <a
                  href="mailto:privacy@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  privacy@flippedsocial.com
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.7 Other State Privacy Laws
              </h3>
              <p>
                Residents of Virginia, Colorado, Connecticut, Texas, Oregon, and other states with
                comprehensive privacy laws may have similar rights. We will honor applicable rights
                upon verified request submitted to{" "}
                <a
                  href="mailto:privacy@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  privacy@flippedsocial.com
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.8 How to Submit a Request
              </h3>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  privacy@flippedsocial.com
                </a>{" "}
                | Mail: 131 Continental Dr, Suite 305, Newark, DE 19713. We may verify your identity
                before processing your request and will respond within the timeframes required by
                applicable law.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">11. Children's Privacy</h2>
            <p>
              The Services are intended exclusively for individuals eighteen (18) years of age or
              older. We do not knowingly collect personal information from anyone under eighteen. Users
              must provide their date of birth during registration, and access is denied to those who
              do not meet the minimum age requirement. If we become aware of personal information
              collected from a minor, we will promptly delete it and terminate the associated account.
              To report a potential minor, contact{" "}
              <a
                href="mailto:safety@flippedsocial.com"
                className="underline underline-offset-4 hover:opacity-70"
              >
                safety@flippedsocial.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">12. Third-Party Services</h2>
            <p>
              The Services may integrate with or reference third-party services, including payment
              processors, identity verification providers, and analytics platforms. This Privacy
              Policy does not govern third-party services. We encourage you to review the privacy
              policies of any third-party service you interact with in connection with the Services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              13. Artificial Intelligence and Automated Processing
            </h2>
            <p>Flipped uses AI and automated processing in the following contexts:</p>
            <ul className="space-y-2 pl-4 text-muted-foreground">
              <li>
                • <span className="text-foreground">Matching algorithm:</span> Our internal system
                uses your profile data and preferences to generate match suggestions through automated
                processing.
              </li>
              <li>
                • <span className="text-foreground">Content moderation:</span> User-submitted
                content, including photos, prompts, and messages, is processed by AI-powered tools
                provided by Anthropic, PBC (Claude) and OpenAI, Inc. to detect sexually explicit,
                violent, hateful, or otherwise policy-violating material. Flagged content may be
                reviewed by our team. Automated moderation decisions resulting in account action are
                subject to human review and our appeals process.
              </li>
              <li>
                • <span className="text-foreground">Identity verification:</span> Selfie images are
                processed by a third-party face-scan service using automated comparison technology to
                verify profile photo accuracy.
              </li>
            </ul>
            <p>
              We do not use fully automated decision-making to make final decisions with significant
              effects on users without the opportunity for human review.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">14. Future Features and Data Practices</h2>
            <p>
              Flipped intends to introduce additional features over time, which may include group
              dates, user-hosted experiences, venue partnerships, and advertising. As these features
              are developed and launched, we will update this Privacy Policy to reflect material
              changes to our data practices and notify you as described in Section 15.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">15. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              technology, or legal requirements. When we make material changes, we will notify you by
              email (if provided) and/or by a prominent notice within the App before the change
              becomes effective. The "Last Updated" date at the top reflects the most recent revision.
              Your continued use of the Services after the effective date constitutes acceptance of the
              revised Policy. If you disagree, you should discontinue use and delete your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">16. Contact Us</h2>
            <p>
              For questions, concerns, or requests regarding this Privacy Policy or our data
              practices:
            </p>
            <p className="text-muted-foreground">
              Flipped Social, Inc. — Attn: Privacy
              <br />
              131 Continental Dr, Suite 305
              <br />
              Newark, DE 19713
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@flippedsocial.com"
                className="text-foreground underline underline-offset-4 hover:opacity-70"
              >
                privacy@flippedsocial.com
              </a>
            </p>
            <p>
              We will respond to all verified inquiries within the timeframes required by applicable
              law.
            </p>
          </section>

          <p className="border-t border-border pt-8 font-mono text-xs text-muted-foreground">
            Copyright © Flipped Social, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
