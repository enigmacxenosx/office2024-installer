/* Design: Deployment Console Editorial — asymmetric documentation rail, warm mineral paper, and Route Orange actions. */
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CircleAlert,
  Clipboard,
  Download,
  ExternalLink,
  FileCode2,
  FolderCog,
  HardDriveDownload,
  LaptopMinimal,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/office-setup-hero_2db37afe.png";
const DIAGRAM_IMAGE = "/manus-storage/office-deployment-diagram_73d8be4c.png";
const LOGO_IMAGE = "/manus-storage/office-setup-mark_be72a487.png";

const officeApps = ["Access", "Excel", "OneNote", "Outlook (classic)", "PowerPoint", "Publisher", "Word", "OneDrive Desktop"];

function copyText(text: string, setCopied: (value: string) => void, id: string) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => setCopied(id)).catch(() => setCopied(""));
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    setCopied(id);
  }
  window.setTimeout(() => setCopied(""), 2200);
}

function CommandStrip({ command, copied, onCopy }: { command: string; copied: boolean; onCopy: () => void }) {
  return (
    <div className="rounded-sm border border-white/10 bg-[#202a34] px-4 py-3.5 text-white shadow-[0_12px_30px_rgba(32,42,52,0.22)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Terminal className="h-4 w-4 shrink-0 text-[#f4855b]" aria-hidden="true" />
          <code className="truncate font-[IBM_Plex_Mono] text-[12px] font-medium tracking-[-0.02em] text-[#f5f1e8] sm:text-[13px]">
            {command}
          </code>
        </div>
        <button
          onClick={onCopy}
          className="action-lift flex shrink-0 items-center gap-1.5 rounded-sm border border-white/15 px-2.5 py-1.5 font-[IBM_Plex_Mono] text-[10px] font-medium uppercase tracking-[0.08em] text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4855b]"
          aria-label={`Copy ${command}`}
        >
          {copied ? <Check className="h-3.5 w-3.5 text-[#f4855b]" /> : <Clipboard className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

function DownloadLink({ href, label, detail }: { href: string; label: string; detail: string }) {
  return (
    <a
      href={href}
      download
      className="action-lift group flex items-center justify-between gap-4 border-t border-[#d9d1c1] py-3.5 first:border-t-0"
    >
      <span>
        <span className="block font-[IBM_Plex_Mono] text-[11px] font-semibold text-[#273845]">{label}</span>
        <span className="mt-1 block text-xs leading-5 text-[#6d706c]">{detail}</span>
      </span>
      <Download className="h-4 w-4 shrink-0 text-[#e25a2a] transition-transform duration-150 group-hover:translate-y-0.5" aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [copied, setCopied] = useState("");

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f6ef] text-[#26302e] selection:bg-[#e25a2a] selection:text-white">
      <div className="paper-grain pointer-events-none fixed inset-0 z-0 opacity-[0.25]" />

      <header className="relative z-10 border-b border-[#ded7c9] bg-[#f8f6ef]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e25a2a]">
            <img src={LOGO_IMAGE} alt="Office Setup Desk" className="h-10 w-10 object-contain" />
            <span className="leading-none">
              <span className="block text-[15px] font-extrabold tracking-[-0.04em] text-[#243440]">Office Setup Desk</span>
              <span className="mono-label mt-1.5 block text-[9px] font-semibold text-[#71808a]">LTSC 2024 deployment</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-bold text-[#526065] sm:flex" aria-label="Main navigation">
            <a href="#route" className="transition-colors hover:text-[#e25a2a]">Install route</a>
            <a href="#packages" className="transition-colors hover:text-[#e25a2a]">Packages</a>
            <a href="#references" className="transition-colors hover:text-[#e25a2a]">Official references</a>
          </nav>
          <a href="#packages" className="action-lift inline-flex items-center gap-2 bg-[#e25a2a] px-4 py-2.5 text-xs font-extrabold text-white shadow-[0_8px_18px_rgba(226,90,42,0.2)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e25a2a]">
            Get installer files <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="top" className="relative z-[1]">
        <section className="mx-auto max-w-[1440px] px-5 pt-7 sm:px-8 lg:px-10 lg:pt-10">
          <div className="relative min-h-[580px] overflow-hidden border border-[#ded7c9] bg-[#eae4d8] lg:min-h-[620px]">
            <img src={HERO_IMAGE} alt="A laptop and configuration checklist prepared for a software deployment" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f4f0e5] via-[#f4f0e5]/95 to-[#f4f0e5]/20" />
            <div className="relative flex min-h-[580px] max-w-3xl flex-col justify-between p-7 sm:p-10 lg:min-h-[620px] lg:p-14">
              <div className="reveal-in flex items-center gap-3 text-[#384b58]" style={{ animationDelay: "60ms" }}>
                <span className="h-px w-8 bg-[#e25a2a]" />
                <span className="mono-label text-[10px] font-semibold">Desktop deployment guide / 64-bit</span>
              </div>
              <div className="max-w-xl pb-2">
                <p className="reveal-in mb-5 font-[IBM_Plex_Mono] text-xs font-medium text-[#e25a2a]" style={{ animationDelay: "120ms" }}>PREPARE → CONFIGURE → VERIFY</p>
                <h1 className="reveal-in max-w-xl text-5xl font-extrabold leading-[0.99] tracking-[-0.075em] text-[#263744] sm:text-6xl lg:text-7xl" style={{ animationDelay: "180ms" }}>
                  Deploy the edition you actually need.
                </h1>
                <p className="reveal-in mt-6 max-w-lg text-base font-medium leading-7 text-[#4f5b5b] sm:text-lg" style={{ animationDelay: "240ms" }}>
                  A clear, administrator-ready path to install Office LTSC 2024 through the official Office Deployment Tool.
                </p>
                <div className="reveal-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "300ms" }}>
                  <a href="#packages" className="action-lift inline-flex items-center justify-center gap-2 bg-[#e25a2a] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_22px_rgba(226,90,42,0.22)]">
                    Download configuration files <Download className="h-4 w-4" />
                  </a>
                  <a href="#route" className="action-lift inline-flex items-center justify-center gap-2 border border-[#6d7772]/35 bg-[#f8f6ef]/80 px-5 py-3.5 text-sm font-extrabold text-[#34444a] backdrop-blur-sm">
                    Review the install route <ArrowDown className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="reveal-in flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#55636a]" style={{ animationDelay: "360ms" }}>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e25a2a]" /> Office LTSC 2024</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e25a2a]" /> Official ODT workflow</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e25a2a]" /> Volume-license configurations</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:py-20">
          <aside className="lg:sticky lg:top-6 lg:h-fit">
            <p className="mono-label text-[10px] font-semibold text-[#e25a2a]">At a glance</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-[-0.055em] text-[#263744]">Your deployment desk.</h2>
            <div className="mt-7 border-l-2 border-[#e25a2a] pl-4">
              <p className="text-sm font-bold text-[#33454d]">Use the official installer engine.</p>
              <p className="mt-2 text-sm leading-6 text-[#69706e]">The batch files call <code className="font-[IBM_Plex_Mono] text-[12px] text-[#33454d]">setup.exe</code> from Microsoft&apos;s Office Deployment Tool. Keep that file beside the XML and batch file.</p>
            </div>
            <div className="mt-8 space-y-2.5 border-t border-[#ded7c9] pt-6 font-[IBM_Plex_Mono] text-[11px] text-[#6a7272]">
              <p><span className="text-[#e25a2a]">01</span> Administrator session</p>
              <p><span className="text-[#e25a2a]">02</span> ODT folder ready</p>
              <p><span className="text-[#e25a2a]">03</span> Select a package</p>
              <p><span className="text-[#e25a2a]">04</span> Run & verify</p>
            </div>
          </aside>

          <div id="route">
            <div className="flex flex-col justify-between gap-4 border-b border-[#ded7c9] pb-7 sm:flex-row sm:items-end">
              <div>
                <p className="mono-label text-[10px] font-semibold text-[#e25a2a]">Installation route</p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.065em] text-[#263744] sm:text-5xl">Four controlled steps.</h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#69706e]">Everything here is designed to be placed in one working folder before you start.</p>
            </div>

            <div className="relative mt-9 space-y-5 before:absolute before:bottom-6 before:left-[23px] before:top-7 before:w-[2px] before:bg-[#e7b7a5] sm:before:left-[31px]">
              <article className="relative grid gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-7">
                <span className="relative z-[1] flex h-12 w-12 items-center justify-center border border-[#e25a2a] bg-[#f8f6ef] font-[IBM_Plex_Mono] text-sm font-semibold text-[#e25a2a] sm:h-16 sm:w-16">01</span>
                <div className="border border-[#ded7c9] bg-[#fcfbf7] p-5 sm:p-6">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><FolderCog className="h-5 w-5 text-[#e25a2a]" /><h3 className="mt-4 text-xl font-extrabold tracking-[-0.04em] text-[#283944]">Make one working folder</h3></div><span className="mono-label text-[9px] text-[#78817f]">Preparation</span></div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#626b69]">Download and extract the official Office Deployment Tool. Put <code className="font-[IBM_Plex_Mono] text-[12px] text-[#34444a]">setup.exe</code>, the chosen XML configuration, and its matching batch file in that same folder.</p>
                </div>
              </article>

              <article className="relative grid gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-7">
                <span className="relative z-[1] flex h-12 w-12 items-center justify-center border border-[#e25a2a] bg-[#f8f6ef] font-[IBM_Plex_Mono] text-sm font-semibold text-[#e25a2a] sm:h-16 sm:w-16">02</span>
                <div className="border border-[#ded7c9] bg-[#fcfbf7] p-5 sm:p-6">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><HardDriveDownload className="h-5 w-5 text-[#e25a2a]" /><h3 className="mt-4 text-xl font-extrabold tracking-[-0.04em] text-[#283944]">Choose the right package</h3></div><span className="mono-label text-[9px] text-[#78817f]">Selection</span></div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#626b69]">Choose <strong>Office Professional Plus</strong> for the core desktop apps. Choose the <strong>Office + Visio + Project suite</strong> only when all three products are licensed for the device.</p>
                </div>
              </article>

              <article className="relative grid gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-7">
                <span className="relative z-[1] flex h-12 w-12 items-center justify-center border border-[#e25a2a] bg-[#f8f6ef] font-[IBM_Plex_Mono] text-sm font-semibold text-[#e25a2a] sm:h-16 sm:w-16">03</span>
                <div className="border border-[#ded7c9] bg-[#fcfbf7] p-5 sm:p-6">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><LaptopMinimal className="h-5 w-5 text-[#e25a2a]" /><h3 className="mt-4 text-xl font-extrabold tracking-[-0.04em] text-[#283944]">Run as administrator</h3></div><span className="mono-label text-[9px] text-[#78817f]">Execution</span></div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#626b69]">Right-click the matching batch file and select <strong>Run as administrator</strong>. The script checks for permission, <code className="font-[IBM_Plex_Mono] text-[12px] text-[#34444a]">setup.exe</code>, and its XML file before launching the configuration.</p>
                </div>
              </article>

              <article className="relative grid gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-7">
                <span className="relative z-[1] flex h-12 w-12 items-center justify-center border border-[#e25a2a] bg-[#f8f6ef] font-[IBM_Plex_Mono] text-sm font-semibold text-[#e25a2a] sm:h-16 sm:w-16">04</span>
                <div className="border border-[#ded7c9] bg-[#fcfbf7] p-5 sm:p-6">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><ShieldCheck className="h-5 w-5 text-[#e25a2a]" /><h3 className="mt-4 text-xl font-extrabold tracking-[-0.04em] text-[#283944]">Confirm and verify</h3></div><span className="mono-label text-[9px] text-[#78817f]">Completion</span></div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#626b69]">Wait for Office Setup to finish, then open an Office app and confirm your organization&apos;s activation and update policy. The provided configurations retain updates and remove older MSI Office installs.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="packages" className="border-y border-[#ded7c9] bg-[#243440] text-[#f9f6ed]">
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <div>
                <p className="mono-label text-[10px] font-semibold text-[#f4855b]">Ready-to-run files</p>
                <h2 className="mt-4 max-w-lg text-4xl font-extrabold leading-[1.02] tracking-[-0.065em] sm:text-5xl">Pick one installation route.</h2>
                <p className="mt-6 max-w-md text-[15px] leading-7 text-[#d2d9d4]">Each option includes a matching batch file and XML configuration. Download both files for the package you intend to install, then put them next to the official <code className="font-[IBM_Plex_Mono] text-[12px] text-white">setup.exe</code>.</p>
                <img src={DIAGRAM_IMAGE} alt="Abstract diagram of the Office Deployment Tool workflow" className="mt-9 w-full max-w-lg border border-white/10 bg-[#eae4d8]" />
              </div>

              <div className="grid gap-5">
                <article className="bg-[#f8f6ef] p-5 text-[#27343a] shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:p-7">
                  <div className="flex flex-col gap-5 border-b border-[#ded7c9] pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div><span className="mono-label text-[10px] font-semibold text-[#e25a2a]">Package 01 / Core office</span><h3 className="mt-3 text-2xl font-extrabold tracking-[-0.05em] text-[#263744]">Office Professional Plus 2024</h3></div>
                    <span className="inline-flex w-fit items-center gap-1.5 border border-[#d7cfc0] px-2.5 py-1 font-[IBM_Plex_Mono] text-[10px] font-semibold text-[#526065]"><FileCode2 className="h-3.5 w-3.5" /> 2 files</span>
                  </div>
                  <div className="grid gap-6 py-6 sm:grid-cols-[1fr_1.12fr]">
                    <div><p className="mono-label text-[9px] font-semibold text-[#71808a]">Included apps</p><div className="mt-3 flex flex-wrap gap-1.5">{officeApps.map((app) => <span key={app} className="border border-[#ded7c9] bg-white px-2 py-1 text-[11px] font-bold text-[#526065]">{app}</span>)}</div></div>
                    <div><p className="mono-label text-[9px] font-semibold text-[#71808a]">Installer command</p><div className="mt-3"><CommandStrip command="setup.exe /configure confMO2024LTSC.xml" copied={copied === "office"} onCopy={() => copyText("setup.exe /configure confMO2024LTSC.xml", setCopied, "office")} /></div></div>
                  </div>
                  <div className="grid gap-x-7 sm:grid-cols-2"><DownloadLink href="/downloads/install-office-ltsc-2024.bat" label="install-office-ltsc-2024.bat" detail="Checks prerequisites, then starts the Office installation." /><DownloadLink href="/downloads/confMO2024LTSC.xml" label="confMO2024LTSC.xml" detail="64-bit Office Professional Plus configuration." /></div>
                </article>

                <article className="bg-[#f8f6ef] p-5 text-[#27343a] shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:p-7">
                  <div className="flex flex-col gap-5 border-b border-[#ded7c9] pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div><span className="mono-label text-[10px] font-semibold text-[#e25a2a]">Package 02 / Expanded suite</span><h3 className="mt-3 text-2xl font-extrabold tracking-[-0.05em] text-[#263744]">Office + Visio + Project 2024</h3></div>
                    <span className="inline-flex w-fit items-center gap-1.5 border border-[#d7cfc0] px-2.5 py-1 font-[IBM_Plex_Mono] text-[10px] font-semibold text-[#526065]"><FileCode2 className="h-3.5 w-3.5" /> 2 files</span>
                  </div>
                  <div className="grid gap-6 py-6 sm:grid-cols-[1fr_1.12fr]">
                    <div><p className="mono-label text-[9px] font-semibold text-[#71808a]">Included products</p><ul className="mt-3 space-y-2 text-sm font-bold text-[#526065]"><li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#e25a2a]" />Office Professional Plus</li><li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#e25a2a]" />Visio Professional</li><li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#e25a2a]" />Project Professional</li></ul></div>
                    <div><p className="mono-label text-[9px] font-semibold text-[#71808a]">Installer command</p><div className="mt-3"><CommandStrip command="setup.exe /configure confMO2024LTSCC.xml" copied={copied === "suite"} onCopy={() => copyText("setup.exe /configure confMO2024LTSCC.xml", setCopied, "suite")} /></div></div>
                  </div>
                  <div className="grid gap-x-7 sm:grid-cols-2"><DownloadLink href="/downloads/install-office-suite-2024.bat" label="install-office-suite-2024.bat" detail="Checks prerequisites, then starts the expanded suite." /><DownloadLink href="/downloads/confMO2024LTSCC.xml" label="confMO2024LTSCC.xml" detail="64-bit Office, Visio, and Project configuration." /></div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="references" className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 border-b border-[#ded7c9] pb-14 lg:grid-cols-[0.85fr_1.15fr] lg:pb-20">
            <div>
              <p className="mono-label text-[10px] font-semibold text-[#e25a2a]">Source & care</p>
              <h2 className="mt-3 max-w-md text-4xl font-extrabold leading-[1.03] tracking-[-0.06em] text-[#263744]">Use licensed software and official tooling.</h2>
            </div>
            <div className="grid gap-4">
              <div className="flex gap-4 border-l-2 border-[#e25a2a] bg-[#f0ece1] p-5"><CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#e25a2a]" /><p className="text-sm leading-6 text-[#52605d]">These configurations are intended for legitimate volume-license deployments. You are responsible for ensuring that your organization has the required Office, Visio, and Project entitlements before installation.</p></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a className="action-lift flex min-h-28 flex-col justify-between border border-[#ded7c9] bg-[#fcfbf7] p-5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e25a2a]" href="https://learn.microsoft.com/en-us/office/ltsc/2024/deploy" target="_blank" rel="noreferrer"><span className="mono-label text-[9px] font-semibold text-[#71808a]">Microsoft Learn</span><span className="flex items-end justify-between gap-3 font-bold text-[#33454d]">Deploy Office LTSC 2024 <ArrowUpRight className="h-4 w-4 text-[#e25a2a]" /></span></a>
                <a className="action-lift flex min-h-28 flex-col justify-between border border-[#ded7c9] bg-[#fcfbf7] p-5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e25a2a]" href="https://www.microsoft.com/en-us/download/details.aspx?id=49117" target="_blank" rel="noreferrer"><span className="mono-label text-[9px] font-semibold text-[#71808a]">Microsoft Download</span><span className="flex items-end justify-between gap-3 font-bold text-[#33454d]">Office Deployment Tool <ExternalLink className="h-4 w-4 text-[#e25a2a]" /></span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-[1] bg-[#eae4d8]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3"><img src={LOGO_IMAGE} alt="" className="h-9 w-9 object-contain" /><span><span className="block text-sm font-extrabold tracking-[-0.035em] text-[#263744]">Office Setup Desk</span><span className="mono-label mt-1 block text-[9px] font-semibold text-[#71808a]">A clear route to deployment</span></span></div>
          <p className="max-w-md text-xs leading-5 text-[#66716f]">This independent guide is not affiliated with or endorsed by Microsoft. Office and Microsoft are trademarks of the Microsoft group of companies.</p>
        </div>
      </footer>
      <p className="sr-only" aria-live="polite">{copied ? "Command copied to clipboard." : ""}</p>
    </div>
  );
}
