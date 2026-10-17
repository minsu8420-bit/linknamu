import type { Profile } from "@/data/profile";

type Props = {
  profile: Profile;
};

export default function ProfileHeader({ profile }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div
        role="img"
        aria-label={`${profile.name} 프로필 사진`}
        className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-zinc-200 bg-zinc-200 text-6xl font-bold text-zinc-700 select-none sm:h-40 sm:w-40 sm:text-7xl dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
      >
        {profile.avatarText}
      </div>
      <h1 className="mt-6 text-2xl font-semibold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        {profile.bio}
      </p>
    </header>
  );
}
