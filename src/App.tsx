import { useCallback, useEffect, useState } from "react";
import { About } from "./components/About";
import { CaseStudyReader, PARTNER_SYNC_CASE_STUDY_PAGE_COUNT } from "./components/CaseStudyReader";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function getCaseStudyPage() {
  const parameters = new URLSearchParams(window.location.search);

  if (parameters.get("case-study") !== "partner-sync") {
    return null;
  }

  const requestedPage = Number(parameters.get("page") ?? "1");
  if (!Number.isFinite(requestedPage)) {
    return 1;
  }

  return Math.min(PARTNER_SYNC_CASE_STUDY_PAGE_COUNT, Math.max(1, Math.trunc(requestedPage)));
}

export default function App() {
  const [caseStudyPage, setCaseStudyPage] = useState<number | null>(getCaseStudyPage);

  useEffect(() => {
    const handleHistoryChange = () => setCaseStudyPage(getCaseStudyPage());
    window.addEventListener("popstate", handleHistoryChange);
    return () => window.removeEventListener("popstate", handleHistoryChange);
  }, []);

  const navigateCaseStudy = useCallback((page: number) => {
    const nextPage = Math.min(PARTNER_SYNC_CASE_STUDY_PAGE_COUNT, Math.max(1, page));
    const url = new URL(window.location.href);
    url.searchParams.set("case-study", "partner-sync");
    url.searchParams.set("page", String(nextPage));
    url.hash = "";
    window.history.pushState({ caseStudy: "partner-sync", page: nextPage }, "", url);
    setCaseStudyPage(nextPage);
  }, []);

  const closeCaseStudy = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("case-study");
    url.searchParams.delete("page");
    url.hash = "work";
    window.history.pushState({}, "", url);
    setCaseStudyPage(null);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => document.querySelector("#work")?.scrollIntoView());
    });
  }, []);

  if (caseStudyPage !== null) {
    return <CaseStudyReader onClose={closeCaseStudy} onPageChange={navigateCaseStudy} page={caseStudyPage} />;
  }

  return (
    <div className="min-h-screen bg-ink text-paper">
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects onOpenCaseStudy={() => navigateCaseStudy(1)} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
