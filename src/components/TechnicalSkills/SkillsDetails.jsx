import React from 'react';
import { useParams } from 'react-router-dom';

const SkillDetails = () => {
  const { skillName } = useParams();

  return (
    <div className="py-10 bg-slate-800 text-white"> 
      <h1 className="text-3xl font-bold">{skillName} Details</h1>
      <p>Details about {skillName} go here.</p>
    </div>
  );
};

export default SkillDetails;
