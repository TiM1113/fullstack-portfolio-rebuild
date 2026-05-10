import { Code2, FileText } from "lucide-react";
import { GithubIcon, GithubSchoolIcon } from "@/components/icons";
import type { SocialIconName } from "@/data/site-content";

export function SiteSocialIcon({
  icon,
  className,
}: {
  icon: SocialIconName;
  className?: string;
}) {
  switch (icon) {
    case "github":
      return <GithubIcon className={className} />;
    case "githubSchool":
      return <GithubSchoolIcon className={className} />;
    case "code":
      return <Code2 className={className} strokeWidth={1.5} />;
    case "resume":
      return <FileText className={className} strokeWidth={1.5} />;
  }
}
