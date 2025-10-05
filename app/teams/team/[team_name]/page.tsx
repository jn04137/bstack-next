import { TeamCard } from "./team_card"

type ITeam = {
    teamId: number
    teamName: string
    teamNanoId: string
    teamDetails: string
    ownerUsername: string
}

export default async function Page({
    params,
}: {
    params: Promise<{ team_name: string }>
}) {
    const { team_name } = await params
    let team: ITeam = await fetchTeamData(team_name)
    return (
        <div className="flex justify-center">
            <div className="w-1/2 space-y-2">
                <TeamCard teamName={team.teamName} teamDetails={team.teamDetails} ownerUsername={team.ownerUsername}/>
                <AchievmentsSection/>
                <PlayersSection/>
                <CommentsSection/>
            </div>
        </div>
    )
}

async function fetchTeamData(teamNanoId: string): Promise<ITeam> {
    const url = `${process.env.NEXT_PUBLIC_HOST}/team/${teamNanoId}`
    const response = await fetch(url)
    if(!response.ok) {
        console.log("Failed to query team: ", response.status)
    }
    const data: ITeam = await response.json()
    return data
}


function PlayerCard() {
    return(
        <div className="bg-white/5 rounded p-5 grow">
            <div>
                <h2>Player Name</h2>
            </div>
            <div>
                <h3>FaceIt Rank</h3>
            </div>
        </div>
    )
}

function PlayersSection() {
    return(
        <div className="bg-white/5 rounded grow p-5 space-y-2">
            <h2 className="text-xl">Players</h2>
            <div className="flex space-x-2">
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
            </div>
        </div>
    )
}

function AchievmentsSection() {
    return(
        <div className="p-5 bg-white/5 rounded">
            <div>
                <h1 className="text-xl">Achievements</h1>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    )
}

function CommentsSection() {
    return(
        <div className="p-5 bg-white/5 rounded">
            <div>
                <h1 className="text-xl">Comments</h1>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    )
}


