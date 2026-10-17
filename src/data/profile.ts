// 보여주기용 더미 데이터 — 추후 실제 내용으로 교체
export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "정민수",
  bio: "AI Transformation Consultant",
  avatarUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/minsu8420-bit" },
  { id: "email", title: "Email", url: "mailto:minsu8420@yonsei.ac.kr" },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/%EB%AF%BC%EC%88%98-%EC%A0%95-8633962a6/",
  },
];
