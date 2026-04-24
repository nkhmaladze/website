import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/"
          className="mb-10 inline-flex font-mono text-xs uppercase tracking-wider text-muted-foreground transition-opacity hover:opacity-70"
        >
          ← Back home
        </Link>

        <h1 className="mb-2 font-heading text-3xl font-medium md:text-4xl">Terms of Service</h1>
        <p className="mb-10 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Flipped Social, Inc.
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-foreground">
          <p>
            These User Terms of Service (the "Terms") constitute a legally binding agreement between
            you and Flipped Social, Inc., a Delaware corporation ("Flipped," "we," "our," or "us"),
            whose principal offices are located at 131 Continental Dr, Suite 305, Newark, DE 19713.
            These Terms govern your access to and use of the Flipped mobile application, website, and
            related services (collectively, the "Services"). These Terms apply to users located in the
            United States.
          </p>
          <p>
            By creating an Account, tapping "I Agree," or otherwise accessing or using the Services,
            you acknowledge that you have read, understood, and agree to be bound by these Terms and
            our Privacy Policy, which is incorporated herein by reference.
          </p>

          <div className="rounded-sm border border-border bg-muted/30 p-4 space-y-3">
            <p className="font-medium uppercase text-xs tracking-wider">
              Please read these terms carefully.
            </p>
            <p>
              Section 16 (Dispute Resolution; Binding Arbitration; Class Action Waiver) contains a
              binding arbitration provision and class action waiver that affect your legal rights.
              Unless you opt out in accordance with Section 16, you agree to resolve disputes with
              Flipped through individual binding arbitration and waive your right to a jury trial and
              your right to participate in a class action.
            </p>
            <p>
              New York Residents: pursuant to New York General Business Law § 394-C, you have the
              right to cancel this agreement without penalty or obligation within three (3) business
              days after the date you sign or agree to it. See Section 7.5 for instructions.
            </p>
            <p>
              If you or any other person is in immediate danger, call 911 or your local emergency
              services immediately.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">Article 1. Definitions</h2>
            <p>
              For purposes of these Terms, the following capitalized terms have the meanings set forth
              below:
            </p>
            <ul className="space-y-2 pl-4 text-muted-foreground">
              <li>
                <span className="text-foreground">"Account"</span> means the personal user profile,
                preferences, activity history, and associated data you maintain within the Services.
              </li>
              <li>
                <span className="text-foreground">"Agreement"</span> means these Terms together with
                the Privacy Policy and any other policies expressly incorporated by reference.
              </li>
              <li>
                <span className="text-foreground">"App"</span> means the Flipped mobile software
                application, in any version or form, made available by Flipped.
              </li>
              <li>
                <span className="text-foreground">"Cancellation"</span> means the act of canceling a
                confirmed Date without rescheduling.
              </li>
              <li>
                <span className="text-foreground">"Date"</span> means an in-person meeting between
                two Users arranged through the Services and held at a Date Venue.
              </li>
              <li>
                <span className="text-foreground">"Date Credit"</span> means the refundable monetary
                deposit described in Section 8, which secures a User's commitment to attend a
                confirmed Date. Date Credits are sometimes referred to in the App as your "deposit"
                or "date token."
              </li>
              <li>
                <span className="text-foreground">"Date Venue"</span> means the third-party public
                venue (typically a restaurant or similar establishment) selected by Flipped at which a
                Date is scheduled to occur. The exact identity and address of the Date Venue are
                disclosed to Users no earlier than approximately twenty-four (24) hours prior to the
                scheduled Date, as further described in Section 7.3.
              </li>
              <li>
                <span className="text-foreground">"Match"</span> means a mutual indication of
                interest between two Users, generated by the Services, that may lead to a confirmed
                Date.
              </li>
              <li>
                <span className="text-foreground">"Roses"</span> means the virtual, non-monetary,
                non-refundable in-app tokens offered by Flipped and governed by Section 7.6.
              </li>
              <li>
                <span className="text-foreground">"User," "you," or "your"</span> means any
                individual who creates an Account, accesses, or uses the Services.
              </li>
              <li>
                <span className="text-foreground">"Vendor"</span> means any third-party operator of
                a Date Venue.
              </li>
            </ul>
            <p>
              Flipped is not a matchmaking service, escort service, or background-check provider, and
              makes no representations, warranties, or guarantees regarding the identity, character,
              conduct, suitability, or compatibility of any User. Flipped does not guarantee romantic
              chemistry, compatibility, or any particular outcome from use of the Services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 2. Eligibility, Registration, and Account Use
            </h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.1 Eligibility
              </h3>
              <p>
                To access or use the Services, you represent and warrant that you: (a) are at least
                eighteen (18) years of age; (b) have provided your accurate date of birth during
                registration and have not manipulated the age-verification process; (c) have the
                legal capacity to enter into a binding contract under the laws of your jurisdiction;
                (d) are located in the United States; (e) have not previously been suspended, banned,
                or otherwise removed from the Services; and (f) are not required to register as a sex
                offender in any jurisdiction.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.2 Account Registration
              </h3>
              <p>
                You agree to provide accurate, current, and complete information when creating your
                Account, including your legal first name (pseudonyms are permitted where indicated),
                date of birth, phone number, gender, sexual orientation, race/ethnicity, and at least
                one clear and accurate profile photograph. You agree to promptly update your
                information as necessary to keep it accurate. You are solely responsible for
                safeguarding your login credentials and for all activities that occur under your
                Account. Notify Flipped immediately at{" "}
                <a
                  href="mailto:support@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  support@flippedsocial.com
                </a>{" "}
                if you become aware of any unauthorized access to your Account.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.3 Phone Number Requirement and Uniqueness
              </h3>
              <p>
                A valid, unique U.S. phone number is required to create and maintain an Account. Each
                phone number may be associated with only one Account at any time. You agree not to
                use virtual phone numbers, VoIP numbers, or temporary phone numbers to circumvent
                this requirement. Flipped uses phone number uniqueness as a primary mechanism for
                preventing duplicate or banned-user re-registration; however, Flipped cannot guarantee
                that all circumvention attempts will be detected.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.4 One Account Per User
              </h3>
              <p>
                You may maintain only one (1) active Account at any time. Creating multiple Accounts,
                including to circumvent a suspension or ban, constitutes a material breach of these
                Terms and may result in immediate permanent termination of all associated Accounts.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.5 Identity Verification
              </h3>
              <p>
                Flipped uses a third-party face-scanning service to compare a selfie you submit
                against your profile photographs, to help verify that your profile accurately
                represents your appearance. By submitting a selfie, you consent to this automated
                comparison process. Flipped does not independently store raw biometric identifiers or
                templates. Flipped does not conduct criminal background checks and makes no
                representation or warranty regarding the truthfulness, accuracy, or completeness of
                any information provided by Users.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                2.6 Assumption of Risk
              </h3>
              <p className="uppercase font-medium text-xs leading-relaxed">
                You acknowledge and agree that meeting new people, including in public settings,
                involves inherent risks, including the risk of physical harm, emotional distress,
                theft, or economic loss. You are solely responsible for your own safety before,
                during, and after any Date. You agree to take all reasonable precautions in all
                communications and interactions with other Users, and you assume all risk associated
                with such interactions, except to the extent such risk arises from Flipped's own
                gross negligence or willful misconduct.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">Article 3. Prohibited Conduct</h2>
            <p>You agree that you will not, and will not attempt to:</p>
            <ul className="space-y-1 pl-4 text-muted-foreground">
              <li>
                • Harass, threaten, abuse, stalk, intimidate, defame, or otherwise harm any User,
                Vendor employee, or third party, whether on or off the platform;
              </li>
              <li>
                • Engage in any unlawful conduct, including fraud, scams, solicitation of prostitution
                or commercial sexual services, human trafficking, or other criminal activity;
              </li>
              <li>
                • Misrepresent your identity, age, appearance, marital status, occupation, or other
                material attributes in your profile or during a Date;
              </li>
              <li>
                • Use the Services while impaired by alcohol or controlled substances in a manner that
                endangers yourself or others, or arrive at a Date Venue in an intoxicated state;
              </li>
              <li>
                • Upload, post, transmit, or display any content that is unlawful, defamatory,
                obscene, sexually explicit, hateful, harassing, violent, or that infringes the rights
                of any third party;
              </li>
              <li>
                • Solicit money, gifts, loans, financial information, or investments from other Users;
              </li>
              <li>
                • Discriminate against, demean, or harass other Users on the basis of race, ethnicity,
                gender, sexual orientation, religion, disability, or any other protected
                characteristic;
              </li>
              <li>
                • Record other Users (audio, video, or photography) during a Date without their
                explicit prior consent;
              </li>
              <li>
                • Attempt to move a Date to a location other than the assigned Date Venue, or arrange
                private meetings outside the platform's scheduling system to circumvent Date Credits
                or other platform requirements;
              </li>
              <li>
                • Exchange personal contact information (phone numbers, social media handles, email
                addresses) with other Users for the purpose of bypassing the platform's scheduling,
                deposit, or communication systems;
              </li>
              <li>
                • Use the Services for any commercial purpose not expressly authorized by Flipped,
                including advertising, promotion, solicitation, or recruitment;
              </li>
              <li>
                • Reverse engineer, decompile, disassemble, scrape, crawl, or otherwise attempt to
                derive source code, algorithms, or underlying data structures of the Services;
              </li>
              <li>
                • Use any automated system, bot, script, or data-mining tool to access or interact
                with the Services;
              </li>
              <li>
                • Interfere with, disrupt, or impose an unreasonable load on the Services or their
                underlying infrastructure;
              </li>
              <li>
                • Circumvent any technical protection measure, rate limit, age gate, or access
                restriction;
              </li>
              <li>
                • Leave a Date prematurely without reasonable justification where the other User has
                reported such conduct; or
              </li>
              <li>
                • Use the Services in any manner that violates applicable federal, state, local, or
                international law.
              </li>
            </ul>
            <p>
              Flipped enforces a zero-tolerance policy with respect to physical violence, sexual
              misconduct, harassment, hate speech, and fraud. Flipped may immediately and without
              prior notice suspend or permanently terminate the Account of any User suspected of such
              conduct. Where safety is at stake, Flipped may act on reported or suspected violations
              even where evidence is limited or not conclusively verified. Flipped prioritizes user
              safety over user retention in all enforcement decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 4. Suspension and Termination
            </h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                4.1 Termination by Flipped
              </h3>
              <p>
                Flipped may warn, restrict, suspend, or permanently terminate your Account, with or
                without notice, in its sole discretion, where Flipped has a good-faith belief that:
                (a) you have violated these Terms or the User Guidelines; (b) you have engaged in
                conduct that may harm Flipped, other Users, Vendors, or third parties; (c) Flipped is
                required to do so by law or by order of a governmental authority; (d) continued
                provision of the Services to you is no longer commercially reasonable; or (e) your
                Account has been inactive for an extended period. Enforcement actions may be graduated
                based on severity and frequency, ranging from warnings and temporary restrictions to
                permanent termination, as further described in the User Guidelines.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                4.2 Termination by You
              </h3>
              <p>
                You may terminate your Account at any time by using the account deletion feature
                within the App or by contacting{" "}
                <a
                  href="mailto:support@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  support@flippedsocial.com
                </a>
                . Termination does not entitle you to a refund of any fees previously paid, except as
                expressly set forth in Section 7.5 or Section 8, or as required by applicable law.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                4.3 Effect of Termination
              </h3>
              <p>
                Upon termination of your Account for any reason: (a) your right to access and use the
                Services immediately ceases; (b) any confirmed Dates associated with your Account
                will be automatically canceled; (c) Flipped will refund any unforfeited Date Credits
                to your original payment method within thirty (30) days, except where such Credits
                have been forfeited under Section 8 or the Date Adjustment Policy; (d) unused Roses
                are forfeited upon termination; (e) Flipped may retain certain information as
                necessary to comply with legal obligations, prevent fraud, enforce these Terms, and
                prevent re-registration by banned Users; and (f) Sections 3, 5, 6, 8 (forfeiture
                provisions), 9, 10, 11, 12, 13, 14, 15, 16, and 17 shall survive termination of your
                Account.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                4.4 Credits Upon Ban
              </h3>
              <p>
                If your Account is terminated by Flipped for a violation of these Terms, any
                remaining Date Credit balance is subject to forfeiture. However, if you believe your
                termination was erroneous, you may request a review of your Date Credit balance at{" "}
                <a
                  href="mailto:support@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  support@flippedsocial.com
                </a>{" "}
                within fourteen (14) days of termination. Flipped will review such requests in good
                faith; all decisions are made at Flipped's sole discretion. Roses are non-refundable
                and are forfeited upon termination under all circumstances.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">Article 5. User Content</h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.1 Responsibility for Content
              </h3>
              <p>
                You are solely responsible for all photographs, text, prompts, messages, and other
                materials you submit, post, or display through the Services (collectively, "User
                Content"). You represent and warrant that: (a) you own or have obtained all necessary
                rights, licenses, and consents to submit such User Content; (b) the User Content does
                not violate any third-party intellectual property, privacy, or other rights; (c) the
                User Content does not violate applicable law; and (d) all photographs you submit
                accurately represent your current appearance.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.2 License Grant to Flipped
              </h3>
              <p>
                By submitting User Content, you hereby grant Flipped a worldwide, non-exclusive,
                royalty-free, sublicensable, and transferable license to host, store, reproduce,
                modify, adapt, publish, translate, publicly display, and distribute your User Content,
                solely for the purposes of operating, providing, improving, and promoting the
                Services, including use in marketing materials, advertising, social media promotion,
                and product development. This license terminates upon deletion of the relevant User
                Content or termination of your Account, except that: (a) Flipped may retain and
                continue to use User Content that has already been incorporated into marketing or
                promotional materials prior to deletion or termination; and (b) Flipped may retain
                backup or archival copies as required by law or for legitimate business purposes.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.3 Content Moderation and AI Processing
              </h3>
              <p>
                Flipped uses automated content moderation tools, including AI services provided by
                Anthropic, PBC (Claude) and OpenAI, Inc., to scan User Content for sexually explicit,
                violent, hateful, or otherwise policy-violating material. Flagged content may be
                reviewed by Flipped's team and may result in content removal or account action.
                Profile content may also be processed by Flipped's internal classification systems to
                verify that profiles meet platform standards.
              </p>
              <p>
                Flipped reserves the right, but assumes no obligation, to review, monitor, remove,
                refuse, or delay activation of any User Content or Account at any time, with or
                without notice, for any reason, including suspected violation of these Terms or the
                User Guidelines.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.4 Profile Pre-Approval
              </h3>
              <p>
                Profiles may be reviewed by Flipped before activation. Flipped reserves the right to
                request profile edits, delay account activation, or reject accounts that do not meet
                platform standards, as determined in Flipped's sole discretion.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.5 False Reporting
              </h3>
              <p>
                Reports submitted through the Services must be truthful and submitted in good faith.
                Submitting false, misleading, or malicious reports constitutes a violation of these
                Terms and may itself result in enforcement action against the reporting User.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                5.6 Feedback
              </h3>
              <p>
                If you submit suggestions, ideas, or feedback regarding the Services ("Feedback"), you
                grant Flipped a perpetual, irrevocable, worldwide, royalty-free license to use such
                Feedback for any purpose without compensation or attribution to you.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 6. SMS Communications; TCPA Consent
            </h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                6.1 Consent to Receive SMS
              </h3>
              <p>
                By providing your phone number and creating an Account, you expressly consent to
                receive recurring automated and non-automated text messages (SMS) from Flipped at the
                phone number you provide. These messages may include:
              </p>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>• Match notifications and Date confirmations</li>
                <li>• Date reminders and logistical updates (e.g., venue information)</li>
                <li>• Safety alerts and account notifications</li>
                <li>• Marketing and promotional messages, where separately opted in</li>
              </ul>
              <p>
                This consent is not a condition of purchasing any goods or services. Message frequency
                varies. Standard message and data rates may apply depending on your carrier plan.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                6.2 Opt-Out and Opt-Back-In
              </h3>
              <p>
                To opt out of all SMS communications from Flipped, reply STOP to any message or
                update your notification preferences within the App. You acknowledge that opting out
                of SMS will also discontinue time-sensitive transactional messages delivered via SMS,
                including Date confirmations and reminders, which may affect your ability to use the
                Services effectively. You may opt back in at any time by replying START to a prior
                Flipped message or by updating your in-app notification preferences.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                6.3 Email Notifications
              </h3>
              <p>
                Flipped may also communicate with you by email regarding your Account, Dates, and,
                where consented, marketing promotions. You may opt out of marketing emails at any
                time by clicking the unsubscribe link in any marketing email. Opting out of marketing
                emails does not affect transactional communications related to your Account or Dates.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 7. Payments, Fees, and Cancellation Rights
            </h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                7.1 Payment Processing
              </h3>
              <p>
                Flipped may charge fees for certain features, including Date Credits (Section 8),
                optional premium subscription tiers, and Roses (Section 7.6). All payments are
                processed by third-party payment processors, including Stripe, Inc. and Apple Inc.
                (Apple Pay). By initiating a payment, you authorize Flipped and its payment
                processors to charge the applicable amounts to your designated payment method. You
                agree to comply with the terms and conditions of the applicable payment processor.
                Flipped does not store your raw payment credentials.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                7.2 Pricing and Taxes
              </h3>
              <p>
                All fees are stated in U.S. dollars and are exclusive of any applicable taxes, which
                are your sole responsibility. Flipped reserves the right to modify pricing at any time
                upon notice; modifications will not affect fees for transactions already completed.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                7.3 Date Venue Disclosure Model
              </h3>
              <p>
                You acknowledge and agree that, as a core and material feature of the Services,
                Flipped will not disclose the exact name or street address of a Date Venue until
                approximately twenty-four (24) hours prior to the scheduled Date. This
                delayed-disclosure model is integral to the Flipped experience. At the time you
                confirm a Date and authorize the corresponding Date Credit, Flipped will disclose: (a)
                the general neighborhood of the Date Venue (e.g., "Lower East Side, Manhattan"); (b)
                an approximate price range for food and beverages; and (c) the scheduled date and
                time. You acknowledge that dissatisfaction with the specific Date Venue selected does
                not constitute a valid basis for a refund of your Date Credit, except as otherwise
                required by applicable law. Flipped reserves the right to change the assigned Date
                Venue after confirmation at its sole discretion; Users will be notified of any such
                change as promptly as reasonably practicable.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                7.4 Processing Fee
              </h3>
              <p>
                A processing fee of $0.99 (plus any applicable taxes) may be assessed per Date Credit
                transaction to cover payment processing costs. This fee is non-refundable regardless
                of the outcome of the associated Date.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                7.5 New York Three-Day Cancellation Right
              </h3>
              <p>
                If you are a resident of the State of New York, you have the right to cancel this
                Agreement, without any penalty or further obligation, by delivering written notice of
                cancellation to Flipped at{" "}
                <a
                  href="mailto:support@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  support@flippedsocial.com
                </a>{" "}
                no later than midnight of the third (3rd) business day following the date on which you
                first agreed to these Terms. Upon timely cancellation, Flipped will refund all amounts
                paid by you within thirty (30) days. This right does not affect your other rights
                under applicable law. Residents of other states may have similar statutory
                cancellation rights; nothing in these Terms is intended to waive or limit any
                non-waivable consumer protection right available to you under the laws of your state.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                7.6 Roses (Virtual Tokens)
              </h3>
              <p>
                Roses are a limited, non-exclusive, revocable, non-transferable license to access a
                feature of the Services. Roses have no monetary value, do not constitute property or a
                stored-value instrument, and may not be redeemed for cash, exchanged, gifted, or
                transferred under any circumstances, except as expressly required by applicable law.
                Flipped may modify, suspend, or discontinue Roses at any time. All unused Roses are
                forfeited upon termination of your Account for any reason.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                7.7 Premium Subscriptions
              </h3>
              <p>
                If you purchase an auto-renewing subscription, you authorize Flipped (or the
                applicable app store) to charge your payment method on a recurring basis until you
                cancel. You may cancel auto-renewal at any time through your Apple App Store account
                settings. Cancellation will take effect at the end of the then-current billing period;
                no refund will be issued for the current period except as required by applicable law.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 8. Date Credits (Deposits)
            </h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                8.1 Purpose
              </h3>
              <p>
                Date Credits are refundable monetary deposits collected by Flipped to encourage
                attendance, deter no-shows, and maintain the quality and reliability of the Services.
                Date Credits are not service fees, gratuities, or payments to Flipped for goods or
                services rendered. Date Credits appear in your in-app wallet and may be applied
                toward future Dates or refunded to your original payment method, subject to the
                conditions below.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                8.2 Amount
              </h3>
              <p>
                The Date Credit deposit is twenty-five U.S. dollars ($25.00) per User per Date, plus
                the $0.99 processing fee described in Section 7.4. Flipped reserves the right to
                modify the deposit amount upon prospective notice to Users; any modification will not
                affect Deposits already collected for confirmed Dates.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                8.3 Wallet and Redemption
              </h3>
              <p>
                Collected Date Credits appear in your in-app wallet. After a qualifying Date, you may
                choose to: (a) apply the Credit toward your next Date; or (b) request a refund to
                your original payment method by tapping "Refund to Original Payment Method" in your
                profile. Refunds to original payment method will be processed within ten (10) business
                days.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                8.4 Refund Conditions
              </h3>
              <p>
                Subject to Section 8.5, your Date Credit will be refunded in full if you arrive at
                the Date Venue no later than fifteen (15) minutes after the scheduled start time and
                otherwise comply with these Terms and the User Guidelines throughout the Date.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                8.5 Forfeiture
              </h3>
              <p>
                Your Date Credit will be forfeited in full and retained by Flipped as liquidated
                damages in any of the following circumstances:
              </p>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • You fail to appear at the Date Venue at any time during the scheduled Date (a
                  "no-show");
                </li>
                <li>• You arrive more than fifteen (15) minutes after the scheduled start time;</li>
                <li>
                  • You cancel a confirmed Date less than twenty-four (24) hours before the scheduled
                  start time, except in cases of documented emergency as determined by Flipped in its
                  reasonable discretion;
                </li>
                <li>
                  • You engage in conduct at the Date Venue that violates Article 3 or that results
                  in your removal from the Date Venue by Vendor staff or law enforcement;
                </li>
                <li>
                  • You materially misrepresent your identity, appearance, or profile in connection
                  with the Date, as reported by the other User and determined by Flipped; or
                </li>
                <li>
                  • You leave a Date prematurely without reasonable justification and the other User
                  reports such conduct, as determined by Flipped in its reasonable discretion.
                </li>
              </ul>
              <p>
                Where one User's Date Credit is forfeited, Flipped will use reasonable efforts to
                compensate the non-offending User, which may include a full or partial credit to their
                wallet. The actual damages caused by no-shows, late arrivals, and last-minute
                cancellations are difficult to ascertain; the forfeited Credit represents a reasonable
                estimate of such damages and is not a penalty.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                8.6 Disputes
              </h3>
              <p>
                If you believe your Date Credit has been improperly forfeited, you may submit a
                written dispute to{" "}
                <a
                  href="mailto:support@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  support@flippedsocial.com
                </a>{" "}
                within fourteen (14) days of the scheduled Date. Flipped will investigate in good
                faith and respond within a reasonable time. Flipped's resolution is final within the
                platform and is subject to the dispute resolution provisions of Section 16.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 9. Date Scheduling and Adjustments
            </h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                9.1 Scheduling Process
              </h3>
              <p>Dates are arranged through the following process:</p>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • One User sends an invite to a Match, submits a Date Credit, and proposes their
                  availability. Submission of the Date Credit constitutes confirmation of the inviting
                  User's intent and availability.
                </li>
                <li>
                  • The invited User must accept the invite and submit their own Date Credit within
                  forty-eight (48) hours of receipt (or such other period as Flipped may specify).
                  Failure to do so within this window may result in cancellation of the Match without
                  penalty to either User.
                </li>
                <li>
                  • Once both Users have submitted Date Credits and availability, Flipped coordinates
                  and assigns a Date time and Date Venue at its sole discretion.
                </li>
                <li>
                  • If User availability does not align, Flipped may request additional availability
                  from either User. Failure to respond within forty-eight (48) hours may result in
                  cancellation of the Match.
                </li>
                <li>
                  • Flipped may ask Users to confirm attendance prior to the scheduled Date. Failure
                  to confirm within the required window may result in cancellation and Date Credit
                  forfeiture.
                </li>
                <li>
                  • A limited system communication channel (e.g., for messages such as "running late"
                  or "I'm wearing white") may be made available shortly before the Date for logistical
                  purposes only. This channel is not a general messaging feature.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                9.2 Rescheduling
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • <span className="text-foreground">More than 24 hours before:</span> Either User
                  may request to reschedule without penalty. Date Credits are retained.
                </li>
                <li>
                  • <span className="text-foreground">Within 24 hours:</span> Rescheduling requires
                  the other User's acceptance. If the other User declines, the rescheduling request
                  is treated as a Cancellation by the requesting User, and the requesting User's Date
                  Credit may be forfeited under Section 8.5.
                </li>
                <li>
                  • <span className="text-foreground">Repeated rescheduling:</span> Multiple
                  rescheduling requests for the same Date may be treated as a Cancellation at
                  Flipped's discretion.
                </li>
                <li>
                  • <span className="text-foreground">Non-response:</span> If a User fails to respond
                  to a valid rescheduling request within forty-eight (48) hours, the Date may be
                  canceled on that User's behalf, and their Date Credit may be forfeited.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                9.3 Cancellation
              </h3>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • <span className="text-foreground">Pre-confirmation:</span> Before a Date is
                  confirmed by Flipped, either User may cancel without penalty and both Date Credits
                  will be returned in full.
                </li>
                <li>
                  • <span className="text-foreground">Post-confirmation:</span> Cancellations after
                  Date confirmation are subject to the forfeiture provisions of Section 8.5.
                </li>
                <li>
                  • <span className="text-foreground">Account changes:</span> If a User's Account is
                  suspended, banned, or deleted, any scheduled Dates are automatically canceled. The
                  non-offending User's Date Credit will be returned.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                9.4 Graduated Enforcement for Attendance Violations
              </h3>
              <p>
                Users who exhibit patterns of non-attendance, late cancellation, or repeated
                rescheduling may be subject to graduated enforcement measures, including:
              </p>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>• Temporary account restrictions or limited scheduling access</li>
                <li>
                  • Requirement to pre-fund a new Date Credit before scheduling additional Dates
                </li>
                <li>• Temporary suspension</li>
                <li>• Permanent ban for repeated or severe offenses</li>
              </ul>
              <p>
                All enforcement decisions are made at Flipped's sole discretion. Users may appeal
                enforcement decisions by contacting{" "}
                <a
                  href="mailto:support@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  support@flippedsocial.com
                </a>
                ; Flipped will review appeals in good faith, though all final decisions remain with
                Flipped.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                9.5 Circumvention Prohibited
              </h3>
              <p>
                Exchanging personal contact information with other Users for the purpose of arranging
                meetings outside the Services, bypassing the Date Credit system, or otherwise
                circumventing the platform's scheduling infrastructure constitutes a material breach
                of these Terms. Flipped may forfeit Date Credits, suspend, or permanently ban Users
                found to have engaged in such conduct.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 10. Venue Relationships and Future Partnerships
            </h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.1 Current Venue Relationships
              </h3>
              <p>
                Flipped currently assigns Date Venues to confirmed Dates from a curated list of public
                establishments (restaurants and similar venues). Flipped does not currently have
                formal revenue-sharing or referral agreements with venue operators. Flipped does not
                share User personal information with Venue operators.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.2 Future Commercial Arrangements
              </h3>
              <p>
                Flipped intends to develop formal commercial relationships with Vendors, which may
                include referral fees, venue reservation systems, or sponsored Date Venues. If and
                when such arrangements are established, Flipped will disclose any material impact on
                Users. Flipped reserves the right to include sponsored or partner venues in its Date
                Venue rotation without prior individual notice to Users, provided that sponsored Dates
                are treated in all material respects the same as non-sponsored Dates.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                10.3 Future Group Dates and Hosted Experiences
              </h3>
              <p>
                Flipped may in the future introduce group date features, user-hosted experiences
                (similar to third-party hosted events), and multi-match social events. Any such
                features will be governed by supplemental terms published at the time of their launch.
                By using those features when available, you will be deemed to have agreed to the
                applicable supplemental terms. Nothing in these Terms grants you any current right to
                access group date or hosted experience features not yet launched.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">Article 11. Intellectual Property</h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                11.1 Flipped's Property
              </h3>
              <p>
                The Services, including all software, app design, user interface, graphics, logos,
                trademarks, trade dress, matching algorithms, proprietary scoring systems, and all
                other content (excluding User Content), are the exclusive property of Flipped or its
                licensors and are protected by United States and international intellectual property
                laws. No rights in the Services are granted to you except the limited license set
                forth in Section 11.2.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                11.2 License to Use the Services
              </h3>
              <p>
                Subject to your ongoing compliance with these Terms, Flipped grants you a limited,
                non-exclusive, non-transferable, non-sublicensable, revocable license to download,
                install, and use the App on a compatible iOS device that you own or control, solely
                for your personal, non-commercial use. This license does not include the right to:
                (a) sublicense, sell, resell, or transfer the App; (b) modify, translate, or create
                derivative works based on the App; (c) reverse engineer or attempt to extract source
                code from the App; or (d) use the App for any commercial purpose.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                11.3 Trademarks
              </h3>
              <p>
                "Flipped," the Flipped logo, and other Flipped marks and trade dress are trademarks
                or registered trademarks of Flipped Social, Inc. You may not use any Flipped mark in
                any manner without the prior written consent of Flipped.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                11.4 DMCA Notice and Takedown
              </h3>
              <p>
                Flipped respects the intellectual property rights of others and complies with the
                Digital Millennium Copyright Act, 17 U.S.C. § 512 (the "DMCA"). If you believe
                material on the Services infringes your copyright, submit a written notification to
                Flipped's Designated Copyright Agent containing the following information as required
                by 17 U.S.C. § 512(c)(3): (a) your physical or electronic signature; (b)
                identification of the copyrighted work; (c) identification of the allegedly
                infringing material and information sufficient to locate it; (d) your contact
                information; (e) a statement of good-faith belief that the use is not authorized;
                and (f) a statement under penalty of perjury that the information is accurate and
                that you are authorized to act on behalf of the copyright owner.
              </p>
              <p className="text-muted-foreground">
                Designated Copyright Agent: Flipped Social, Inc., Attn: Copyright Agent, 131
                Continental Dr, Suite 305, Newark, DE 19713. Email:{" "}
                <a
                  href="mailto:dmca@flippedsocial.com"
                  className="text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  dmca@flippedsocial.com
                </a>
              </p>
              <p>
                Flipped will respond to valid DMCA notices in accordance with applicable law,
                including disabling access to allegedly infringing material and, where appropriate,
                terminating the accounts of repeat infringers.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">Article 12. Privacy and Data</h2>
            <p>
              Flipped's collection, use, and disclosure of personal information is governed by the{" "}
              <Link
                to="/privacy-policy"
                className="underline underline-offset-4 hover:opacity-70"
              >
                Flipped Privacy Policy
              </Link>
              , incorporated into these Terms by reference. By using the Services, you acknowledge
              that you have read and understood the Privacy Policy.
            </p>
            <p>
              In providing the Services, Flipped uses the following categories of third-party service
              providers: (a) Stripe, Inc. and Apple Inc. for payment processing; (b) Supabase, Inc.
              for backend data storage; (c) Cloudflare, Inc. for content delivery and security; (d)
              Anthropic, PBC and OpenAI, Inc. for AI-powered content moderation and classification of
              User-submitted profile content; (e) PostHog, Inc. for product analytics; and (f)
              Nightwatch for backend observability. By using the Services, you consent to the transfer
              of your information to such providers as necessary to operate the Services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 13. Advertising and Commercial Features
            </h2>
            <p>
              Flipped may display third-party or Flipped-branded advertisements within the Services,
              now or in the future. Advertisements may be contextual (based on in-app content or
              general location) or based on general demographic attributes derived from your profile.
              Flipped does not use cross-app behavioral tracking or sell your personal information to
              advertising networks.
            </p>
            <p>
              Flipped may enter into commercial arrangements with brands, Vendors, and other partners,
              including sponsored Date Venues, co-branded experiences, and promotional offers made
              available within the Services. Participation in sponsored or promotional features is
              always voluntary. Material commercial relationships that affect your Date experience will
              be disclosed to you within the App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">Article 14. Minor Safety</h2>
            <p>
              The Services are intended exclusively for adults eighteen (18) years of age or older.
              Users are required to provide their date of birth during registration, and access is
              denied to individuals who do not meet the minimum age requirement. Flipped does not
              knowingly collect personal information from anyone under eighteen. If Flipped becomes
              aware that a User is under eighteen, Flipped will immediately terminate the Account and
              delete associated personal information in accordance with applicable law.
            </p>
            <p>
              Flipped cooperates with the National Center for Missing & Exploited Children (NCMEC),
              law enforcement, and other appropriate authorities in connection with the protection of
              minors. If you believe a minor is using the Services, report it immediately to{" "}
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
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 15. Disclaimers; Limitation of Liability; Indemnification
            </h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                15.1 Disclaimer of Warranties
              </h3>
              <p className="uppercase text-xs leading-relaxed font-medium">
                To the fullest extent permitted by applicable law, the Services are provided on an
                "as is" and "as available" basis, with all faults and without warranty of any kind.
                Flipped expressly disclaims all warranties, whether express, implied, statutory, or
                otherwise, including any implied warranties of merchantability, fitness for a
                particular purpose, title, and non-infringement. Flipped makes no warranty that: (a)
                the Services will meet your requirements or expectations; (b) the Services will be
                uninterrupted, timely, secure, or error-free; (c) any User will be compatible, safe,
                honest, or suitable; (d) any Date will result in romantic compatibility, chemistry,
                or any other outcome; or (e) any content or information provided through the Services
                will be accurate or complete.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                15.2 Limitation of Liability
              </h3>
              <p className="uppercase text-xs leading-relaxed font-medium">
                To the fullest extent permitted by applicable law, in no event will Flipped, its
                affiliates, or its or their respective officers, directors, employees, agents, or
                licensors be liable for any indirect, incidental, special, consequential, exemplary,
                or punitive damages, or for any loss of profits, revenue, data, goodwill, or business
                opportunities, arising out of or relating to these Terms or the Services, whether
                based on contract, tort, strict liability, or any other legal theory, even if Flipped
                has been advised of the possibility of such damages.
              </p>
              <p className="uppercase text-xs leading-relaxed font-medium">
                To the fullest extent permitted by applicable law, Flipped's total cumulative
                liability to you arising out of or relating to these Terms or the Services shall not
                exceed the greater of: (a) the total amounts actually paid by you to Flipped in the
                twelve (12) months preceding the event giving rise to the claim; or (b) one hundred
                U.S. dollars ($100.00).
              </p>
              <p>
                The foregoing limitations do not apply to: (a) Flipped's own gross negligence or
                willful misconduct; (b) death or personal injury caused by Flipped's negligence; (c)
                liabilities that cannot be limited or excluded under applicable law; or (d) fraud or
                fraudulent misrepresentation by Flipped. Some jurisdictions do not allow the exclusion
                or limitation of certain damages, so some or all of the above limitations may not
                apply to you.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                15.3 Third-Party Conduct and Venues
              </h3>
              <p>
                Flipped is not responsible for the conduct of any User, Vendor, or other third party,
                whether online or offline. Flipped does not own, operate, manage, or control any Date
                Venue and is not responsible for the food, beverages, service, safety conditions,
                accessibility, pricing, or any other aspect of any Date Venue or the experience
                therein. Any dispute between you and a Vendor must be resolved directly with the
                Vendor.
              </p>
              <p>
                Flipped's involvement is limited to the coordination of the Date; what happens during
                and after the Date is outside of Flipped's control and responsibility, subject only to
                Flipped's own gross negligence or willful misconduct.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                15.4 Indemnification
              </h3>
              <p>
                You agree to indemnify, defend (at Flipped's option), and hold harmless Flipped, its
                affiliates, and their respective officers, directors, employees, agents, and licensors
                from and against any and all claims, liabilities, damages, losses, penalties, and
                expenses (including reasonable attorneys' fees and costs) arising out of or relating
                to: (a) your use of the Services; (b) your User Content; (c) your violation of these
                Terms or any applicable law or regulation; (d) your interactions with other Users,
                Vendors, or third parties; (e) any misrepresentation you make; or (f) any claim that
                your User Content infringes the rights of any third party. Flipped reserves the right,
                at its own expense, to assume the exclusive defense and control of any matter
                otherwise subject to indemnification by you, in which event you agree to cooperate
                with Flipped's defense of such matter.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 16. Dispute Resolution; Binding Arbitration; Class Action Waiver
            </h2>
            <div className="rounded-sm border border-border bg-muted/30 p-4">
              <p className="font-medium uppercase text-xs tracking-wider">
                Please read this section carefully. It significantly affects your legal rights,
                including your right to file a lawsuit in court and to have a jury hear your claims.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                16.1 Informal Resolution
              </h3>
              <p>
                Before initiating any formal dispute resolution proceeding, you agree to first contact
                Flipped at{" "}
                <a
                  href="mailto:legal@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  legal@flippedsocial.com
                </a>{" "}
                and provide a written description of the dispute, your name and contact information,
                and the relief sought. Both parties agree to attempt in good faith to resolve the
                dispute informally for a period of at least sixty (60) days from the date Flipped
                receives your written notice before initiating arbitration or other formal proceedings.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                16.2 Agreement to Arbitrate
              </h3>
              <p>
                If informal resolution fails, you and Flipped agree that any dispute, claim, or
                controversy arising out of or relating to these Terms or the breach, termination,
                enforcement, interpretation, or validity thereof, or to the use of the Services
                (collectively, a "Dispute"), shall be resolved exclusively through final and binding
                individual arbitration administered by the American Arbitration Association ("AAA"),
                except as expressly provided in Section 16.5. This arbitration agreement is governed
                by the Federal Arbitration Act ("FAA"), 9 U.S.C. § 1 et seq., and shall survive
                termination of these Terms.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                16.3 Arbitration Rules and Procedure
              </h3>
              <p>
                The arbitration shall be administered by the AAA in accordance with the AAA Consumer
                Arbitration Rules then in effect, as modified by these Terms. The arbitration shall be
                conducted by a single, neutral arbitrator. The arbitration shall be seated in New
                York, New York; however, you may elect to participate by telephone, video conference,
                or document submission, or in person at a location reasonably convenient to you as
                agreed with the arbitrator. The arbitrator's award will be in writing and will include
                the essential findings and conclusions on which the award is based. Judgment on the
                award may be entered in any court of competent jurisdiction.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                16.4 Class Action Waiver
              </h3>
              <p className="uppercase text-xs leading-relaxed font-medium">
                You and Flipped agree that each party may bring claims against the other only in an
                individual capacity, and not as a plaintiff or class member in any purported class,
                collective, consolidated, mass, or representative action or proceeding. The arbitrator
                may not consolidate more than one person's claims and may not preside over any form of
                representative, class, or collective proceeding. If this class action waiver is found
                to be unenforceable as to any particular claim or request for relief, then that claim
                or request for relief shall be severed from the arbitration and resolved in a court of
                competent jurisdiction, while the remaining claims shall proceed in arbitration on an
                individual basis.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                16.5 Exceptions to Arbitration
              </h3>
              <p>
                Notwithstanding Section 16.2, the following Disputes are not subject to binding
                arbitration:
              </p>
              <ul className="space-y-1 pl-4 text-muted-foreground">
                <li>
                  • Any individual claim properly brought in a small-claims court of competent
                  jurisdiction, so long as the action remains in that court and proceeds only on an
                  individual basis;
                </li>
                <li>
                  • Any claim relating to the ownership, validity, or infringement of Flipped's
                  intellectual property rights; and
                </li>
                <li>
                  • As required by the Ending Forced Arbitration of Sexual Assault and Sexual
                  Harassment Act of 2021, 9 U.S.C. § 401 et seq. (the "EFAA"), any Dispute alleging
                  conduct constituting sexual assault or sexual harassment, which, at the election of
                  the claimant, may be brought in a court of competent jurisdiction, notwithstanding
                  any other provision of this Section 16.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                16.6 Arbitration Costs and Fees
              </h3>
              <p>
                Payment of all AAA filing, administration, and arbitrator fees shall be governed by
                the AAA Consumer Arbitration Rules. Flipped will pay any filing fees that the AAA
                determines to be Flipped's responsibility under the Consumer Arbitration Rules. To the
                extent required to render this arbitration agreement enforceable, Flipped will pay any
                portion of the arbitrator's fees that would otherwise be your responsibility.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                16.7 Severability of Arbitration Provisions
              </h3>
              <p>
                If any portion of this Section 16, other than the Class Action Waiver in Section
                16.4, is found to be unenforceable, that portion shall be severed and the remainder
                of this Section 16 shall continue in full force and effect. If the Class Action
                Waiver in Section 16.4 is found to be unenforceable in its entirety, this entire
                Section 16 shall be null and void, and disputes shall be resolved in a court of
                competent jurisdiction.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">Article 17. Force Majeure</h2>
            <p>
              Flipped shall not be liable for any failure or delay in performance under these Terms
              resulting from causes beyond its reasonable control, including but not limited to: acts
              of God; natural disasters; war; terrorism; civil unrest; government action, orders, or
              regulation; pandemic or epidemic; public health emergency; labor disputes or strikes;
              telecommunications or internet failures; power outages; or failures of third-party
              service providers or infrastructure. Flipped will use reasonable efforts to resume
              affected Services as promptly as practicable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">
              Article 18. Modifications to the Services and Terms
            </h2>
            <p>
              Flipped reserves the right to modify, suspend, or discontinue all or any portion of the
              Services at any time, with or without notice, and shall not be liable to you for any
              such modification, suspension, or discontinuation. Flipped may also modify these Terms
              from time to time. If Flipped makes a material change to these Terms, Flipped will
              provide reasonable advance notice through the App or by email to the address associated
              with your Account. Your continued use of the Services after the effective date of any
              modification constitutes your acceptance of the modified Terms. If you do not agree to
              the modified Terms, your sole remedy is to terminate your Account prior to the effective
              date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider">Article 19. General Provisions</h2>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.1 Governing Law
              </h3>
              <p>
                These Terms and any Dispute arising out of or relating to them or the Services shall
                be governed by and construed in accordance with the laws of the State of Delaware,
                without regard to its conflict-of-laws principles, except that the FAA governs the
                interpretation and enforcement of Section 16.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.2 Entire Agreement
              </h3>
              <p>
                These Terms, together with the Privacy Policy, User Guidelines, Date Adjustment
                Policy, and any other documents expressly incorporated by reference, constitute the
                entire agreement between you and Flipped regarding the Services and supersede all
                prior or contemporaneous communications, agreements, representations, and
                understandings, whether oral or written, regarding the same subject matter.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.3 Severability
              </h3>
              <p>
                If any provision of these Terms is held by a court or arbitrator of competent
                jurisdiction to be invalid, illegal, or unenforceable, that provision shall be
                enforced to the maximum extent permitted by law, and the remaining provisions shall
                continue in full force and effect.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.4 No Waiver
              </h3>
              <p>
                No failure or delay by Flipped in exercising any right, power, or remedy under these
                Terms shall constitute a waiver of that right, power, or remedy. No single or partial
                exercise of any right shall preclude any other or further exercise thereof.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.5 Assignment
              </h3>
              <p>
                You may not assign or transfer these Terms, or any of your rights or obligations
                hereunder, whether by operation of law or otherwise, without Flipped's prior written
                consent. Any purported assignment without consent is null and void. Flipped may assign
                these Terms and any of its rights or obligations hereunder at any time without notice
                or consent, including in connection with a merger, acquisition, or sale of assets.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.6 Notices
              </h3>
              <p>
                Flipped may provide notices to you by email, push notification, in-app message, or by
                posting on its website. You may provide notices to Flipped at:{" "}
                <a
                  href="mailto:legal@flippedsocial.com"
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  legal@flippedsocial.com
                </a>
                , or by mail to Flipped Social, Inc., Attn: Legal, 131 Continental Dr, Suite 305,
                Newark, DE 19713. Notices are deemed received when sent by email (absent a delivery
                failure notification) or three (3) days after mailing.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.7 No Third-Party Beneficiaries
              </h3>
              <p>
                These Terms are entered into solely for the benefit of you and Flipped and do not
                confer any rights or remedies on any third party, including Vendors.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.8 Relationship of the Parties
              </h3>
              <p>
                Nothing in these Terms creates a partnership, joint venture, agency, franchise,
                employment, or fiduciary relationship between you and Flipped. You have no authority
                to make representations or incur obligations on behalf of Flipped.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.9 Headings
              </h3>
              <p>
                Section and article headings are included for convenience only and shall not affect
                the interpretation or construction of these Terms.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                19.10 Contact
              </h3>
              <p className="text-muted-foreground">
                Legal:{" "}
                <a
                  href="mailto:legal@flippedsocial.com"
                  className="text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  legal@flippedsocial.com
                </a>{" "}
                | Support:{" "}
                <a
                  href="mailto:support@flippedsocial.com"
                  className="text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  support@flippedsocial.com
                </a>{" "}
                | Safety:{" "}
                <a
                  href="mailto:safety@flippedsocial.com"
                  className="text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  safety@flippedsocial.com
                </a>{" "}
                | DMCA:{" "}
                <a
                  href="mailto:dmca@flippedsocial.com"
                  className="text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  dmca@flippedsocial.com
                </a>{" "}
                | Privacy:{" "}
                <a
                  href="mailto:privacy@flippedsocial.com"
                  className="text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  privacy@flippedsocial.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Flipped Social, Inc., 131 Continental Dr, Suite 305, Newark, DE 19713
              </p>
            </div>
          </section>

          <div className="rounded-sm border border-border bg-muted/30 p-4">
            <p className="uppercase text-xs leading-relaxed font-medium">
              By tapping "I Agree," creating an Account, or otherwise accessing or using the
              Services, you acknowledge that you have read, understood, and agree to be bound by
              these Terms of Service in their entirety, including the binding arbitration provision
              and class action waiver in Section 16.
            </p>
          </div>

          <p className="border-t border-border pt-8 font-mono text-xs text-muted-foreground">
            Copyright © Flipped Social, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
