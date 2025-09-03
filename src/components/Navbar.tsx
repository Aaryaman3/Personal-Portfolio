import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container-portfolio">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
            Aaryaman Bajaj
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors ${
                  location.pathname === link.href
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <button className="text-muted-foreground hover:text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;