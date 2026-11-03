// A template re-mounts on every navigation, so each page fades and slides in when it opens
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
