'use client'

import { useEffect, useState } from "react"

export function TeamCard({teamName, teamDetails, ownerUsername}: {
    teamName: string,
    teamDetails: string,
    ownerUsername: string
}) {
    const [editable, setEditable] = useState(false);

    const [teamNameEdit, setTeamNameEdit] = useState(teamName);
    const [teamDetailEdit, setTeamDetailEdit] = useState(teamDetails);

    return(
        <div className="rounded bg-white/5 p-5 space-y-2">
            <div className="flex space-x-2 justify-between w-full">
                <TitleSection
                    teamName={teamName}
                    ownerUsername={ownerUsername}
                    setTeamNameEdit={setTeamNameEdit}
                    editable={editable}
                />
                <EditButton
                    editable={editable}
                    setEditable={setEditable}
                />
            </div>
            <DescriptionSection
                teamDetails={teamDetails}
                setTeamDetailsEdit={setTeamDetailEdit}
                editable={editable}
            />
            <LeagueSection editable={editable} />
        </div>
    )
}

async function updateTeam(teamName: string, teamDetails: string, eseaDivision: number) {

    try {
        const req = await fetch(`${process.env.NEXT_PUBLIC_HOST}/team/updateTeam`, {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({
                teamName,
                teamDetails,
                eseaDivision
            })
        });
    } catch(err) {
        console.warn(err)
    }
}


function EditButton({editable, setEditable}: {
    editable: boolean,
    setEditable: React.Dispatch<React.SetStateAction<boolean>>
}) {
    if(!editable) {
        return(
            <div>
                <button
                    className="bg-white/5 px-4 py-0.5 rounded hover:cursor-pointer"
                    onClick={() => setEditable(!editable)}
                >
                    Edit
                </button>
            </div>
        );
    }
    return(
        <div>
            <div className="flex space-x-2">
                <button
                    className="bg-blue-500 px-4 py-0.5 rounded hover:cursor-pointer"
                >
                    Save
                </button>
                <button
                    className="bg-red-500 px-4 py-0.5 rounded hover:cursor-pointer"
                    onClick={() => setEditable(!editable)}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

function TitleSection({teamName, setTeamNameEdit, ownerUsername, editable}: {
    teamName: string,
    setTeamNameEdit: React.Dispatch<React.SetStateAction<string>>,
    ownerUsername: string,
    editable: boolean
}) {
    if (!editable) {
        return(
            <div>
                <h1 className="text-2xl font-bold">{teamName}</h1>
                <h2 className="text-sm italic">Owned by {ownerUsername}</h2>
            </div>
        );
    }

    return(
        <div className="w-full">
            <input
                name="teamName"
                className="w-full text-2xl font-bold bg-white/5 rounded px-2 py-0.5"
                defaultValue={teamName}
                onChange={e => setTeamNameEdit(e.target.value)}
            />
            <h2 className="text-sm italic">Owned by {ownerUsername}</h2>
        </div>
    );
}

function DescriptionSection({teamDetails, setTeamDetailsEdit, editable}: {
    teamDetails: string,
    setTeamDetailsEdit: React.Dispatch<React.SetStateAction<string>>,
    editable: boolean
}) {

    if(!editable) {
        return(
            <div>
                <p>{teamDetails}</p>
            </div>
        );
    }

    return(
        <div>
            <textarea
                className="bg-white/5 w-full rounded p-2"
                defaultValue={teamDetails}
            >
            </textarea>
        </div>
    );
}

async function getESEADivisions(setESEADivisions: React.Dispatch<React.SetStateAction<IESEADivision[]>>
) {
    const req = await fetch(`${process.env.NEXT_PUBLIC_HOST}/team/eseaDivisions`)
    const eseaDivisions = await req.json();
    setESEADivisions(eseaDivisions)
}

interface IESEADivision {
    id: number
    eseaDivision: string
}

function LeagueSection({editable}: {
    editable: boolean
}) {
    const [eseaDivisions, setESEADivisions] = useState<IESEADivision[]>([]) 

    useEffect(() => {
        getESEADivisions(setESEADivisions)
    }, [])

    console.log(eseaDivisions)

    if(!editable) {
        return(
            <div>
                <h1 className="text-2xl font-bold">Leagues</h1>
                <h2 className="text-lg">ESEA</h2>
            </div>
        )
    }
        
    return(
        <div>
            <h1 className="text-xl">Leagues</h1>
            <h2 className="text-lg">ESEA</h2>
            <div className="flex flex-col">
                <select className="bg-white/5 py-2 p-2" id="ESEALeague" name="ESEALeague">
                    {eseaDivisions.map((division: IESEADivision) => {
                        return <option key={division.id} className="bg-white/5 w-full py-2" value={division.id}>{division.eseaDivision}</option>
                    })}
                    <option className="bg-white/5 py-2" value="Advanced">Advanced</option>
                </select>
            </div>
        </div>
    )
}
