import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
// import { recentSessions } from '@/constants';
// import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';

const Page = async () => {
  // const companions = await getAllCompanions({ limit: 3 });
  // const recentSessionsCompanions = await getRecentSessions(10);
  const companions = [
    {
      id: '1',
      name: 'Math Genius',
      subject: 'Math',
      topic: 'Algebra',
      description: 'Helps with algebra problems and concepts.',
      avatarUrl: '/avatars/math-genius.png',
      duration: 30,
      bookmarked: false,
    },
    {
      id: '2',
      name: 'Science Buddy',
      subject: 'Science',
      topic: 'Physics',
      description: 'Explains physics theories and experiments.',
      avatarUrl: '/avatars/science-buddy.png',
      duration: 45,
      bookmarked: true,
    },
    {
      id: '3',
      name: 'History Guide',
      subject: 'History',
      topic: 'World War II',
      description: 'Shares insights about WWII events.',
      avatarUrl: '/avatars/history-guide.png',
      duration: 60,
      bookmarked: false,
    },
  ];

  const recentSessionsCompanions = [
    ...companions,
    {
      id: '4',
      name: 'English Expert',
      subject: 'English',
      topic: 'Grammar',
      description: 'Assists with grammar and writing.',
      avatarUrl: '/avatars/english-expert.png',
      duration: 25,
      bookmarked: false,
    },
    {
      id: '5',
      name: 'Coding Coach',
      subject: 'Computer Science',
      topic: 'JavaScript',
      description: 'Guides through JavaScript basics.',
      avatarUrl: '/avatars/coding-coach.png',
      duration: 40,
      bookmarked: true,
    },
  ];
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
