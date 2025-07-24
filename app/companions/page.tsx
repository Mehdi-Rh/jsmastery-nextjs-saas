// import { getAllCompanions } from '@/lib/actions/companion.actions';
import CompanionCard from '@/components/CompanionCard';
import { getSubjectColor } from '@/lib/utils';
// import SearchInput from '@/components/SearchInput';
// import SubjectFilter from '@/components/SubjectFilter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  // const filters = await searchParams;
  // const subject = filters.subject ? filters.subject : '';
  // const topic = filters.topic ? filters.topic : '';

  // const companions = await getAllCompanions({ subject, topic });
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

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          {/* <SearchInput />
          <SubjectFilter /> */}
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
