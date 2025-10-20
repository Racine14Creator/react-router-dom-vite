import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Team = () => {
    const teamsMembers = [
        { name: 'Alice Johnson', slug: 'alice_johnson', role: 'Project Manager' },
        { name: 'Bob Smith', slug: 'bob_smith', role: 'Lead Developer' },
        { name: 'Charlie Brown', slug: 'charlie', role: 'UI/UX Designer' },
        { name: 'Diana Prince', slug: 'diana', role: 'QA Engineer' },
    ];
  return (
    <div>
        <h1 className="">Team and members</h1>
        <p>
        Our team is composed of dedicated professionals committed to excellence in every project we undertake.
        </p>
        <ul>
            {teamsMembers.map((member, index) => (
                <Link to={`/about/team/${member.slug}`} key={index}>
                    <li>
                        <strong>{member.name}</strong> - {member.role}
                    </li>
                </Link>
            ))}
        </ul>
        <Outlet/>
    </div>
  )
}

export default Team
