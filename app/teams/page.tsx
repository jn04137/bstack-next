import CreateTeamForm from './create_team';

interface Team {
    teamName: string;
    teamDetails: string;
}

export default async function Page() {

    const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/public/teams`);
    const teams = await data.json();

    return(
        <div className="space-y-2">
            <CreateTeamForm />
            { teams.map((team: Team) => <TeamCard key={team.teamName} team={team}/>) }
        </div>
    )
}

function TeamCard({team}: {
    team: Team
}) {
    return (
        <div className="p-5 rounded bg-white/5 space-y-2">
            <div>
                <h2 className="text-2xl font-bold">{team.teamName}</h2>
            </div>
            <div>
                <p>{team.teamDetails}</p>
            </div>
        </div>
    )
}

