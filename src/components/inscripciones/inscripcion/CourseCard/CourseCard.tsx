
import React from 'react';

interface CourseCardProps {
  title: string;
  code: string;
  level: string;
  onViewGroups?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  code, 
  level, 
  onViewGroups 
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        {/* Icon and Course Info */}
        <div className="flex items-start gap-4 flex-1">
          {/* Icon */}
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg 
              className="w-6 h-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>

          {/* Course Details */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-500">
              {code} · {level}
            </p>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          {/* Regular Badge */}
          <span className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-full">
            Regular
          </span>

          {/* Ver Grupos Button */}
          <button
            onClick={onViewGroups}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
            style={{ backgroundColor: 'var(--color-primary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Ver Grupos
          </button>
        </div>
      </div>
    </div>
  );
};