import { site } from "@/lib/site";

const icons = {
  facebook: (
    <path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2.1L14 2c-3.3 0-4 2.4-4 4v2.5H8V12h2v10h4V12h2.7l.4-3.5H14z" />
  ),
  instagram: (
    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM21.9 7.1c-.1-1.6-.4-3-1.6-4.2S17.6 1.3 16 1.2C14.3 1.1 9.7 1.1 8 1.2 6.4 1.3 5 1.6 3.8 2.8S2.2 5.5 2.1 7.1c-.1 1.7-.1 6.3 0 8 .1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.7.1 6.3.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.7.1-6.3 0-8zm-2.1 9.8a3.3 3.3 0 01-1.8 1.8c-1.3.5-4.4.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 01-1.8-1.8c-.5-1.3-.4-4.4-.4-5.9s-.1-4.6.4-5.9A3.3 3.3 0 016.2 3.3C7.5 2.8 10.6 2.9 12 2.9s4.6-.1 5.9.4a3.3 3.3 0 011.8 1.8c.5 1.3.4 4.4.4 5.9s.1 4.6-.4 5.9z" />
  ),
  youtube: (
    <path d="M23 7.2a3 3 0 00-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 001 7.2 31 31 0 00.5 12 31 31 0 001 16.8a3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1 31 31 0 00.5-4.8 31 31 0 00-.5-4.8zM9.7 15V9l5.8 3-5.8 3z" />
  ),
};

const labels = { facebook: "Facebook", instagram: "Instagram", youtube: "YouTube" };

type Network = keyof typeof icons;

export function SocialIcon({ name, className = "h-5 w-5" }: { name: Network; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      {icons[name]}
    </svg>
  );
}

export default function Social({
  networks = ["facebook", "instagram", "youtube"],
  className = "",
  iconClassName,
}: {
  networks?: Network[];
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={`-ml-2.5 flex flex-wrap items-center ${className}`}>
      {networks.map((n) => (
        <li key={n}>
          <a href={site.social[n]} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full transition-[opacity,translate] duration-300 hover:-translate-y-0.5 hover:opacity-70">
            <span className="sr-only">{labels[n]}</span>
            <SocialIcon name={n} className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}
