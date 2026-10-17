import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center px-6 py-16 sm:px-8 sm:py-24">
      <main className="flex w-full max-w-sm flex-col">
        <ProfileHeader profile={profile} />
        <ul className="mt-12 flex flex-col gap-4 sm:mt-14">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
