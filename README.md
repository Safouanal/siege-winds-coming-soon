# Siege Winds static web package

Status: **draft-not-deployed**. This directory is a local, account-neutral
publication-preparation artifact. A passing validator does not make it legal,
deployed, submission-ready, or matched to a frozen store binary.

## Intended public routes

- Landing page (English): `https://siegewinds.com/`
- Landing page (French): `https://siegewinds.com/fr`
- Landing page (Arabic, RTL): `https://siegewinds.com/ar`
- Privacy: `https://siegewinds.com/privacy`
- Privacy choices: `https://siegewinds.com/privacy#your-choices`
- Support: `https://siegewinds.com/support`
- Player support: `support@siegewinds.com`
- Privacy contact: `privacy@siegewinds.com`

The HTML is deliberately static and self-contained. It uses no scripts,
analytics, cookies, tracking pixels, or external resources. The landing pages
use project-local fonts and optimized copies of approved Siege Winds imagery;
the legal pages retain local system fonts only. All pages carry
`noindex, nofollow, noarchive`. The legal pages also retain their visible
`DRAFT — DO NOT DEPLOY` banner.

The landing page is available in English (`index.html`), French (`fr.html`),
and Arabic (`ar.html`). It makes only a `coming soon` claim: there are no fake
store buttons, signup forms, launch dates, reviews, player counts, or public
online-service claims.

The bundled Cinzel and Alegreya Sans web fonts retain their SIL Open Font
License 1.1 notices beside the font files under `assets/fonts/`. Their approved
sources and project use remain documented in `ASSET_SOURCES.md`.

## Required before deployment

1. Replace `PUBLIC LEGAL DEVELOPER NAME` and
   `PUBLIC LEGAL DEVELOPER ADDRESS` with verified public legal details.
2. Verify the existing `siegewinds.com` domain, TLS configuration, DNS,
   support mailbox, privacy mailbox, and the exact public routes above.
3. Freeze and inspect the actual iOS and Android release binaries.
4. Reconcile the text with the final UGS, Unity IAP, GMA, and UMP composition
   and configuration, then obtain account-owner and legal review.
5. Either exclude GMA and UMP from an offline binary and re-prove binary
   composition, or complete their live setup and update consent, advertising,
   privacy, and store disclosures before publication.
6. Remove the draft banner and `noindex` directives only in a separately
   reviewed deployment artifact. Do not weaken this tracked draft in place.

## Local validation

Run:

```sh
python3 Tools/validate_store_web_package.py
```

The expected result says `PASS` for the **local draft only**. A PASS is not
evidence of App Store or Google Play submission readiness and must never be used
as store, deployment, or legal proof.
