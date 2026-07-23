import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — AgentWatch",
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung" updated="Juli 2026">
      <LegalSection title="1. Verantwortlicher">
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
          Jannik Olsson
          <br />
          Brombergweg 19
          <br />
          72124 Pliezhausen
          <br />
          E-Mail: achretype@gmail.com
        </p>
      </LegalSection>

      <LegalSection title="2. Hosting">
        <p>
          Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
          91789, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel
          automatisch technische Zugriffsdaten (Server-Logs), die der Browser
          übermittelt — insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
          aufgerufene Seite sowie Browser- und Betriebssystem-Informationen.
          Diese Verarbeitung ist zum technischen Betrieb und zur Absicherung der
          Website erforderlich (Art. 6 Abs. 1 lit. f DSGVO — berechtigtes
          Interesse an einem sicheren und stabilen Betrieb).
        </p>
        <p>
          Dabei kann eine Übermittlung von Daten in die USA stattfinden.
          Einzelheiten zu den von Vercel eingesetzten Garantien (z. B.
          Standardvertragsklauseln) finden sich in der Datenschutzerklärung von
          Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            className="text-text-primary underline underline-offset-2"
          >
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="3. Keine Cookies, kein Tracking, keine Analyse-Tools">
        <p>
          Diese Website setzt keine Cookies, kein Analyse-Tool (z. B. Google
          Analytics) und keine Marketing- oder Tracking-Skripte ein. Es findet
          keine Erstellung von Nutzungsprofilen statt.
        </p>
      </LegalSection>

      <LegalSection title="4. Schriftarten">
        <p>
          Diese Website nutzt die Schriftarten Inter und JetBrains Mono. Die
          Schriftdateien werden beim Build der Website eingebunden und beim
          Seitenaufruf vom eigenen Server ausgeliefert — es findet keine
          Verbindung zu Servern von Google statt, es werden keine Daten an
          Google übertragen.
        </p>
      </LegalSection>

      <LegalSection title="5. Externe Links">
        <p>
          Der Installationshinweis auf dieser Seite verweist auf das öffentliche
          GitHub-Repository von AgentWatch
          (github.com/Antrox007/AgentWatch). Beim Klick auf einen solchen Link
          wird diese Website verlassen; für die Datenverarbeitung durch GitHub
          gilt die Datenschutzerklärung von GitHub Inc.
        </p>
      </LegalSection>

      <LegalSection title="6. Deine Rechte">
        <p>
          Nach der DSGVO besteht das Recht auf Auskunft (Art. 15), Berichtigung
          (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art.
          18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen die
          Verarbeitung (Art. 21) betreffend deine personenbezogenen Daten. Für
          Fragen oder zur Ausübung dieser Rechte genügt eine E-Mail an{" "}
          <a
            href="mailto:achretype@gmail.com"
            className="text-text-primary underline underline-offset-2"
          >
            achretype@gmail.com
          </a>
          .
        </p>
        <p>
          Zudem besteht ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO), zuständig ist der
          Landesbeauftragte für den Datenschutz und die Informationsfreiheit
          Baden-Württemberg.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
