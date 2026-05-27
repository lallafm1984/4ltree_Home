import type { Metadata } from "next";

const SITE_URL = "https://www.4ltree.com";
const PAGE_URL = `${SITE_URL}/winktimer/privacy`;
const CONTACT_EMAIL = "4ltree.service@gmail.com";

export const metadata: Metadata = {
  title: {
    absolute: "WinkTimer Privacy Policy | 4LTree",
  },
  description:
    "Privacy Policy for the WinkTimer mobile app, including camera-assisted timer controls, local storage, Firebase, analytics, and Google Mobile Ads.",
  alternates: {
    canonical: "/winktimer/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "4LTree",
    title: "WinkTimer Privacy Policy",
    description:
      "How WinkTimer handles app data, optional camera-assisted controls, Firebase services, analytics, and advertising data.",
    locale: "en_US",
  },
};

export default function WinkTimerPrivacyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-zinc-900">
      <article
        lang="en"
        className="mx-auto w-full max-w-3xl break-words px-5 py-12 sm:px-6 sm:py-16"
      >
        <header className="mb-12 border-b border-zinc-200 pb-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#4AADD9]">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            WinkTimer Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-zinc-500">Effective date: May 27, 2026</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            This Privacy Policy explains how WinkTimer (&quot;WinkTimer&quot;,
            &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles information
            when you use the WinkTimer mobile app.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Privacy contact:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="break-all font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-[#4AADD9] hover:decoration-[#4AADD9]"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </header>

        <div className="space-y-11 text-zinc-700">
          <Section title="Summary">
            <p>
              WinkTimer can be used as a basic timer or stopwatch without camera
              features. Camera access is optional and is used only for assisted
              modes such as Look Pause, Wink Control, and Smile Mode.
            </p>
            <Callout>
              Camera frames are analyzed on the device for timer control. We do
              not record, save, or upload camera photos or videos to our servers.
            </Callout>
            <p>
              The app stores timer settings and recent session records locally on
              your device. WinkTimer also uses Google services, including Firebase
              and Google Mobile Ads, which may process device, app, analytics,
              advertising, and anonymous authentication data as described below.
            </p>
          </Section>

          <Section title="Information We Handle">
            <SubSection title="Timer, stopwatch, settings, and history data">
              <p>
                WinkTimer stores some app data locally on your device so the app
                can function:
              </p>
              <ul>
                <li>timer and stopwatch mode settings;</li>
                <li>timer target durations and recent timer targets;</li>
                <li>app language and display settings;</li>
                <li>alert sound, vibration, and notification settings;</li>
                <li>camera detection sensitivity and calibration settings;</li>
                <li>rewarded-ad access status and expiration time;</li>
                <li>
                  recent session summaries, such as start time, end time, duration,
                  pause count, target duration, and whether a timer target was
                  completed.
                </li>
              </ul>
              <p>
                This data is used to run the timer, restore your settings, show
                session history, and manage temporary rewarded-ad access. This data
                is stored on your device using local app storage. Rewarded-ad access
                records may be protected using Android system security features
                where supported.
              </p>
            </SubSection>

            <SubSection title="Camera and face-detection data">
              <p>
                If you choose to use camera-assisted features, WinkTimer requests
                camera permission and uses the front camera to analyze whether a
                face is visible, whether you appear to be looking at the screen,
                wink state, smile state, and related detection confidence values.
              </p>
              <p>
                Camera-based processing is used to control timer behavior, support
                calibration, and display detection status. The app may process
                derived values such as eye-open probabilities, wink side, smile
                probability, face angle, face area ratio, confidence, and analysis
                timing. These derived readings are used for app functionality and
                are not used by us for advertising.
              </p>
              <p>
                WinkTimer does not record, save, or upload camera photos or videos
                to our servers. If you deny camera permission, the basic timer and
                stopwatch remain usable, but camera-assisted modes may not work.
              </p>
            </SubSection>

            <SubSection title="Device posture data">
              <p>
                For Flip Timer features, WinkTimer may use device motion sensor
                readings to determine whether the device is face up, face down, or
                unknown. This posture data is processed on the device to control
                timer actions. We do not use this posture data for advertising, and
                we do not upload it to our servers.
              </p>
            </SubSection>

            <SubSection title="Notifications, alarms, sound, and vibration">
              <p>
                WinkTimer may request notification permission and use system alarm,
                foreground service, sound, vibration, and audio settings to show
                timer status and play timer-end alerts. Notification text and alert
                settings are used only to provide timer functionality on your
                device.
              </p>
            </SubSection>

            <SubSection title="Clipboard data">
              <p>
                If you tap the option to copy a timer timeline, WinkTimer writes
                the generated timeline text to your device clipboard. This is a
                user-initiated action. We do not read unrelated clipboard contents
                and do not upload copied timeline text to our servers.
              </p>
            </SubSection>

            <SubSection title="Firebase anonymous authentication">
              <p>
                WinkTimer uses Firebase Authentication with anonymous sign-in. This
                may create an anonymous Firebase user identifier for the app
                installation. The app does not ask you to provide a name, email
                address, phone number, password, or social login for this anonymous
                sign-in.
              </p>
              <p>
                Firebase may process technical data needed to provide
                authentication, security, abuse prevention, and service operation.
                Google describes Firebase Authentication and anonymous sign-in in
                its own documentation and policies.
              </p>
            </SubSection>

            <SubSection title="Firebase analytics and app diagnostics">
              <p>
                WinkTimer includes Firebase/Google Analytics for app measurement.
                Firebase Analytics may collect app and device information such as
                app opens, session information, operating system, device model,
                approximate geography, app updates, app-instance identifiers, and
                mobile advertising identifiers where available. We use this
                information to understand app usage, reliability, and product
                performance.
              </p>
            </SubSection>

            <SubSection title="Advertising data">
              <p>
                WinkTimer uses Google Mobile Ads / AdMob to show banner ads and
                rewarded ads. Rewarded ads may be used to provide temporary access
                to assisted timer modes.
              </p>
              <p>
                The app requests non-personalized ads. Non-personalized ads are not
                based on your past behavior, but Google may still process
                information such as IP address, coarse location, cookies or mobile
                advertising identifiers, ad views, ad interactions, device
                information, and fraud-prevention signals for purposes such as ad
                delivery, frequency capping, aggregated reporting, security, and
                invalid-activity prevention.
              </p>
              <p>
                You can manage certain ad-related choices through your Android
                device settings, Google settings, and any consent or privacy
                controls made available by Google or the app.
              </p>
            </SubSection>

            <SubSection title="Information you send to us">
              <p>
                If you contact us for support, privacy, or legal requests, we may
                receive the information you choose to include, such as your email
                address, message content, device details, screenshots, or diagnostic
                information. We use this information to respond to your request and
                maintain app support records.
              </p>
            </SubSection>
          </Section>

          <Section title="Information We Do Not Collect">
            <p>WinkTimer does not ask for or intentionally collect:</p>
            <ul>
              <li>your name, email address, phone number, password, or social account login;</li>
              <li>precise GPS location;</li>
              <li>contacts, call logs, SMS, microphone recordings, photos, or files;</li>
              <li>health, financial, or payment information;</li>
              <li>camera photos or videos for upload to our servers.</li>
            </ul>
          </Section>

          <Section title="How We Use Information">
            <p>We use information handled by the app to:</p>
            <ul>
              <li>provide timer, stopwatch, alert, history, and assisted-control features;</li>
              <li>save your settings and recent records locally;</li>
              <li>process camera, face, wink, smile, and posture readings for timer control;</li>
              <li>show ads and grant rewarded-ad access where applicable;</li>
              <li>measure app usage, performance, and reliability;</li>
              <li>
                protect the app, advertising systems, and Firebase services from
                abuse or invalid activity;
              </li>
              <li>respond to support, privacy, and legal requests;</li>
              <li>comply with applicable law and platform requirements.</li>
            </ul>
          </Section>

          <Section title="Sharing and Third Parties">
            <p>We do not sell personal and sensitive user data.</p>
            <p>
              WinkTimer may share or allow processing of data with service
              providers that help operate the app:
            </p>
            <ul>
              <li>
                Google Firebase, for anonymous authentication, analytics, app
                measurement, security, and service operation;
              </li>
              <li>
                Google Mobile Ads / AdMob, for ad delivery, rewarded ads, reporting,
                frequency capping, and invalid-activity prevention;
              </li>
              <li>
                Android system services, for permissions, notifications, alarms,
                vibration, audio playback, camera access, and device sensors.
              </li>
            </ul>
            <p>
              These third-party services process data under their own terms and
              privacy policies. You can review Google&apos;s Privacy Policy at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="break-all font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-[#4AADD9] hover:decoration-[#4AADD9]"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </Section>

          <Section title="Data Retention and Deletion">
            <p>
              Local app data, such as settings, rewarded-access status, and session
              summaries, remains on your device until it is overwritten by app use,
              cleared through Android app storage settings, or removed by
              uninstalling the app.
            </p>
            <p>
              Camera frames and device posture readings are processed for live app
              functionality. We do not retain camera photos or videos on our
              servers.
            </p>
            <p>
              Firebase, Google Analytics, and Google Mobile Ads may retain data
              according to Google&apos;s policies and the configuration of those
              services. If you contact us about a privacy request, we will retain
              your request and related correspondence as needed to respond and
              comply with legal obligations.
            </p>
            <p>
              To delete local WinkTimer data, you can clear the app&apos;s storage
              in Android settings or uninstall the app. For privacy requests about
              data that may be processed through our service providers, contact us
              using the privacy contact listed above.
            </p>
          </Section>

          <Section title="Security">
            <p>
              We use reasonable technical and organizational measures to protect
              information handled by the app. Local app data is stored in the
              app&apos;s private storage area, and certain rewarded-access records
              may be stored using Android security features. Data transmitted by
              Google services is handled through those services&apos; security
              practices. No method of storage or transmission is completely secure.
            </p>
          </Section>

          <Section title="Your Choices">
            <p>You can control some data handling through your device and app choices:</p>
            <ul>
              <li>use the basic timer and stopwatch without enabling camera-assisted modes;</li>
              <li>deny or revoke camera permission in Android settings;</li>
              <li>deny or revoke notification permission in Android settings;</li>
              <li>clear WinkTimer app storage or uninstall the app to remove local app data;</li>
              <li>reset or manage your Android advertising ID and ad personalization settings;</li>
              <li>
                contact us for privacy questions, access requests, deletion
                requests, or other applicable rights.
              </li>
            </ul>
          </Section>

          <Section title="Children">
            <p>
              WinkTimer is a general-purpose timer app and is not directed to
              children under 13. We do not knowingly collect personal information
              from children under 13. If you believe a child has provided personal
              information to us, contact us so we can take appropriate action.
            </p>
          </Section>

          <Section title="International Processing">
            <p>
              Service providers such as Google may process information in countries
              other than your country of residence. Where required, we rely on
              appropriate legal mechanisms and service-provider safeguards for
              international processing.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy when the app, our data practices,
              or legal requirements change. The updated version will be identified
              by a new effective date. Your continued use of WinkTimer after an
              update means the updated policy applies to your use of the app.
            </p>
          </Section>

          <Section title="Contact">
            <p>For privacy questions or requests, contact:</p>
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-[#4AADD9] hover:decoration-[#4AADD9]"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-8">
      <h2 className="mb-4 border-b border-zinc-200 pb-2 text-xl font-semibold tracking-tight text-zinc-950">
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-7 sm:text-base [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
      {children}
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-4 border-[#6DBF4A] bg-zinc-50 py-3 pl-4 pr-3 text-sm font-medium leading-7 text-zinc-800">
      {children}
    </p>
  );
}
