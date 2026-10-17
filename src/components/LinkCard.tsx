import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
};

export default function LinkCard({ link }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-16 w-full items-center justify-center rounded-2xl border border-zinc-300 bg-white px-5 text-base font-medium transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500"
    >
      {link.title}
    </a>
  );
}
