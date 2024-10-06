import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUnits, fetchLessons } from '../utils/api';
import LearningPath from '../components/Learn/LearningPath';
import Sidebar from '../components/Sidebar/Sidebar';
import AuthModal from '../components/Auth/AuthModal';
import LessonInterface from '../components/Learn/LessonInterface';
import { LessonProvider, useLesson } from '../contexts/LessonContext';

const LearnContent: React.FC = () => {
  const { isLessonStarted } = useLesson();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<"login" | "signup">("signup");

  const unitsQuery = useQuery({
    queryKey: ['units', 1],
    queryFn: () => fetchUnits(1)
  });

  const lessonsQuery = useQuery({
    queryKey: ['lessons', unitsQuery.data?.[0]?.id],
    queryFn: () => fetchLessons(unitsQuery.data?.[0]?.id),
    enabled: !!unitsQuery.data?.[0]?.id
  });

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        {isLessonStarted ? (
          <LessonInterface />
        ) : (
          <>
            <header className="bg-[#58cc02] rounded-2xl p-4 mb-8">
              <div className="flex items-center">
                <button className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <div>
                  <p className="text-xs font-bold mb-1">SECTION 1, UNIT {unitsQuery.data?.[0]?.order}</p>
                  <h1 className="text-2xl font-bold">{unitsQuery.data?.[0]?.name}</h1>
                </div>
              </div>
            </header>
            {lessonsQuery.data && <LearningPath lessons={lessonsQuery.data} />}
          </>
        )}
      </div>
      <Sidebar openAuthModal={openAuthModal} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
};

const Learn: React.FC = () => (
  <LessonProvider>
    <LearnContent />
  </LessonProvider>
);

export default Learn;