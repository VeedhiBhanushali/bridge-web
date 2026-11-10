const WaitlistCta = () => {
  const SURVEY_FORM_URL = "https://forms.gle/dSHh2QcMUfAjEroB8";

  return (
    <section className="pt-8 pb-20 md:pt-10 md:pb-28 relative bg-cream" id="waitlist">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#main-banner"
            className="bg-primary border border-primary rounded-xl text-18 font-medium hover:bg-primaryDark text-white py-3.5 px-8 transition-all duration-300 shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5"
          >
            Join Waitlist
          </a>
          <a
            href={SURVEY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-border rounded-xl text-18 font-medium hover:bg-primary hover:text-white hover:border-primary text-midnight_text py-3.5 px-8 transition-all duration-300"
          >
            Help shape Bridge
          </a>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCta;
