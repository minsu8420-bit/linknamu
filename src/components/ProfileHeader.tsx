import Image from "next/image";
import type { Profile } from "@/data/profile";

type Props = {
  profile: Profile;
};

export default function ProfileHeader({ profile }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 바깥 테두리 링 + 아래로 떨어지는 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-gradient-to-b from-white/40 to-white/5 p-[3px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)]">
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          width={128}
          height={128}
          preload
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-white">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-sm font-medium tracking-wide text-slate-400">
        {profile.bio}
      </p>
    </header>
  );
}
