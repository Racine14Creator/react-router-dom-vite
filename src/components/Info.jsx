
import { useParams } from 'react-router-dom';

const Info = () => {
    const { memberName } = useParams();
    const teamsMembers = [
        { name: 'Alice Johnson', slug: 'alice_johnson', role: 'Project Manager', bio: 'Experienced project manager with 10 years in software development.' },
        { name: 'Bob Smith', slug: 'bob_smith', role: 'Lead Developer', bio: 'Full-stack developer specialized in React and Node.js.' },
        { name: 'Charlie Brown', slug: 'charlie', role: 'UI/UX Designer', bio: 'Creative designer focused on user-centered design principles.' },
        { name: 'Diana Prince', slug: 'diana', role: 'QA Engineer', bio: 'Quality assurance expert with strong attention to detail.' },
    ];

    const member = teamsMembers.find(m => m.slug === memberName);

    if (!member) {
        return <div>Member not found</div>;
    }

    return (
        <div className="member-info">
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.bio}</p>
        </div>
    )
}

export default Info