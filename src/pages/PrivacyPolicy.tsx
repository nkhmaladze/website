const PrivacyPolicy = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <div className="flex items-center gap-4 border-b px-6 py-4">
      <a href="/" className="text-sm text-muted-foreground hover:text-foreground">← Back</a>
      <h1 className="text-lg font-semibold">Privacy Policy</h1>
    </div>
    <iframe
      src="/privacy-policy.pdf"
      className="flex-1 w-full"
      style={{ minHeight: "calc(100vh - 65px)" }}
      title="Privacy Policy"
    />
  </div>
);

export default PrivacyPolicy;
