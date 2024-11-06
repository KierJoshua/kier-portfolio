import React, { useState } from 'react';

const NewTechSkillsIcons = ({ icon, title, level, definition }) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className="flex flex-col bg-slate-700 w-full p-4 rounded-lg shadow-lg hover:bg-slate-950 transition-colors duration-300 cursor-pointer"
            onClick={() => setIsClicked(!isClicked)}
        >
            <div className="flex justify-center transform transition-transform duration-200 hover:scale-110">
                <img src={icon} alt={`${title} icon`} className="mb-3 w-16 h-16" />
            </div>

            {isClicked && (
                <div className="text-light-blue text-center mt-4 p-4 rounded-lg bg-slate-800">
                    <h1 className="text-2xl font-bold mb-2">{title}</h1>
                    
                    {/* Circular Progress Indicator */}
                    <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-4">
                        <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                            <path
                                className="text-gray-200"
                                d="M18 2.0845
                                   a 15.9155 15.9155 0 0 1 0 31.831
                                   a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                className="text-light-blue"
                                d="M18 2.0845
                                   a 15.9155 15.9155 0 0 1 0 31.831
                                   a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                strokeDasharray={`${level}, 100`}
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-lg font-bold">{level}%</span>
                    </div>

                    {/* Definition or Description Text */}
                    <p className="text-gray-300 text-sm mt-2 px-2">
                        {definition || `Proficiency: ${level}%`}
                    </p>
                </div>
            )}
        </div>
    );
};

export default NewTechSkillsIcons;
