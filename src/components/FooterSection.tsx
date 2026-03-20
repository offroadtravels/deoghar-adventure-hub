const FooterSection = () => (
  <footer className="py-10 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Off Road Travels. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          Instagram
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          WhatsApp
        </a>
        <a href="mailto:hello@offroadtravels.in" className="hover:text-foreground transition-colors">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
