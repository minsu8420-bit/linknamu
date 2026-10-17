import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
};

export default function LinkCard({ link }: Props) {
  // mailto: 등은 새 탭으로 열면 빈 탭이 남으므로 웹 링크만 새 탭으로 연다
  const isWebLink = link.url.startsWith("http");

  return (
    <a
      href={link.url}
      target={isWebLink ? "_blank" : undefined}
      rel={isWebLink ? "noopener noreferrer" : undefined}
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-5 text-[15px] font-medium text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 active:bg-white/[0.08]"
    >
      {link.title}
    </a>
  );
}
