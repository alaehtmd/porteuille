import React from 'react';
import './about.css'; // Assurez-vous que le chemin est correct

const Skills = ({ skills }) => {
    return (
        <div className="skills">
            {skills.map((skill, index) => (
                <div className="skill" key={index}>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ height: `${skill.level}%` }}>
                            {skill.level}%
                        </div>
                    </div>
                    <div className="skill-name">{skill.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Skills;