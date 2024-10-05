import React from 'react';
import LessonButton from './LessonButton';
import { useLesson } from '../../contexts/LessonContext';

interface LearningPathProps {
  sectionNumber: number;
}

const LearningPath: React.FC<LearningPathProps> = ({ sectionNumber }) => {
  const { startLesson } = useLesson();

  return (
    <div className="mb-20">
      <div className="flex flex-col items-center space-y-4">
        <LessonButton
          active={true}
          size={38}
          className="w-20 h-20"
          tooltipContent={
            <>
              <div className="text-black font-bold mb-2">Pair letters and sounds</div>
              <div className="text-gray-600 text-sm mb-4">Lesson 1 of 4</div>
              <button 
                className="w-full bg-[#58cc02] text-white font-bold py-3 px-6 rounded-2xl
                  shadow-[0_5px_0_#58a700] hover:bg-[#58cc02]/90
                  active:shadow-none active:translate-y-[5px]
                  transition-all duration-150 ease-in-out"
                onClick={startLesson}
              >
                START +10 XP
              </button>
            </>
          }
          index={0}
        />
        <LessonButton size={32} className="w-16 h-16 relative right-16" index={1}/>
        <LessonButton size={32} className="w-16 h-16 relative right-20" index={2} />
        <LessonButton
          className="w-20 h-20 relative right-24"
          icon={
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/path/0ae912c0b7a66354a850e6733ef653cb.svg"
              alt="Chest"
              className="w-16 h-16"
            />
          }
          index={3}
        />
        <LessonButton size={32} className="w-16 h-16 relative right-20" index={4} />
        <div className="w-24 h-24 flex items-center justify-center">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f4b1c683214cf55f5ddea4535b983745.svg"
            alt="Duolingo Owl"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-[#afafaf] mb-4">Pair letters and sounds</p>
        <button className="bg-[#8e4dc3] text-white font-bold py-2 px-6 rounded-2xl
          shadow-[0_5px_0_#6f2dbd] hover:bg-[#8e4dc3]/90
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out">
          JUMP HERE?
        </button>
      </div>
    </div>
  );
};

export default LearningPath;