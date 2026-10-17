// 보여주기용 더미 데이터 — 추후 실제 내용으로 교체
export type Profile = {
  name: string;
  bio: string;
  avatarText: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "김링크",
  bio: "바이브코딩으로 이것저것 만드는 개발자",
  avatarText: "K",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://blog.naver.com" },
];
