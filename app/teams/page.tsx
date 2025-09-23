import CreateTeamForm from './create_team';
import Link from 'next/link';

interface Team {
    id: number;
    teamName: string;
    teamDetails: string;
    teamNanoId: string;
}

export default async function Page() {

    const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/team/allTeams`);
    const teams = await data.json();

    return(
        <div className="flex justify-center">
            <div className="space-y-2 w-1/2">
                <CreateTeamForm />
                { teams.map((team: Team) => <TeamCard key={team.teamName} team={team}/>) }
            </div>
        </div>
    )
}

function TeamCard({team}: {
    team: Team
}) {
    console.log(team)
    return (
        <div className="p-5 rounded bg-white/5 items-center">
            <Link href={`/teams/team/${team.teamNanoId}`}>
                <div className='w-full flex divide-x items-center'>
                    <div className="w-1/3">
                        <h2 className="text-2xl font-bold">{team.teamName}</h2>
                    </div>
                    <div className="px-2 w-2/3 flex-grow">
                        <p>{team.teamDetails}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

