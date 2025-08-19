import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import SkillsSection from '@/components/SkillsSection';
import TimelineSection from '@/components/TimelineSection';
import ContactsSection from '@/components/ContactsSection';
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <TimelineSection />
      <SkillsSection />
      <ContactsSection />
    </>
  );
}
