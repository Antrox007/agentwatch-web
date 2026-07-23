import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum — AgentWatch",
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" updated="Juli 2026">
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p>
          Jannik Olsson
          <br />
          Brombergweg 19
          <br />
          72124 Pliezhausen
          <br />
          Deutschland
        </p>
      </LegalSection>

      <LegalSection title="Vertreten durch">
        <p>Jannik Olsson</p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon: 07127 / 8889998
          <br />
          E-Mail: achretype@gmail.com
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
          keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7
          Abs. 1 DDG für eigene Inhalte auf dieser Seite nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Diese Seite enthält Links zu externen Websites Dritter (z. B. GitHub),
          auf deren Inhalte kein Einfluss besteht. Für diese fremden Inhalte kann
          daher keine Gewähr übernommen werden. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          AgentWatch ist Open-Source-Software und auf GitHub unter der
          MIT-Lizenz veröffentlicht. Die Inhalte dieser Website (Texte,
          Screenshots, Design) unterliegen, soweit nicht anders gekennzeichnet,
          dem deutschen Urheberrecht.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
