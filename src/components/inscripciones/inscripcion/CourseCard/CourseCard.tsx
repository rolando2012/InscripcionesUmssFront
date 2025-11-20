
import React from 'react';
import { RiBookMarkedLine } from "react-icons/ri";

interface CourseCardProps {
  title: string;
  code: string;
  level: string;
  tipo: string;
  onViewGroups?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  code, 
  level, 
  tipo,
  onViewGroups 
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-2 
      shadow-md hover:shadow-lg transition-shadow m-0 ml-3 mr-1 mb-3">
      <div className="flex items-start justify-between gap-4">
        {/* Icon and Course Info */}
        <div className="flex items-start gap-4 flex-1">
          {/* Icon */}
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
            <RiBookMarkedLine className="w-8 h-8 text-secondary" />
          </div>

          {/* Course Details */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-primary mb-1">
              {title}
            </h3>
            <p className="text-xs text-gray-500">
              {code} · {level}
            </p>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          {/* Regular Badge */}
          <span className={`px-3 py-1 text-sm rounded-full 
                  ${(tipo == 'Electiva')? 'text-green-600 border border-green-300' 
                  : 'text-gray-600 border border-gray-300'}`}>
            {tipo}
          </span>

          {/* Ver Grupos Button */}
          <button
            onClick={onViewGroups}
            className="py-2 text-sm font-medium text-white rounded-lg transition-colors px-1 bg-primary"
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