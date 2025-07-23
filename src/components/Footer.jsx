function Footer() {
    return (
        <footer className="flex justify-center items-center gap-3 py-5 bg-black">
            {[
                {
                    href: 'https://www.linkedin.com/in/tomas-necesany/',
                    icon: 'linkedin.png',
                },
                {
                    href: 'https://github.com/PaTTTeX',
                    icon: 'github.png',
                },
                {
                    href: 'https://twitter.com/PattexHomeless',
                    icon: 'twitter.png',
                },
            ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                    <img src={`/photos/icons/${icon}`} alt={icon} className="w-15 rounded-full hover:bg-white transition" />
                </a>
            ))}
        </footer>
    )
}

export default Footer;