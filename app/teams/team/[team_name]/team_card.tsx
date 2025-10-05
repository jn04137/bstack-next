'use client'

import { useState } from "react"

export function TeamCard({teamName, teamDetails, ownerUsername}: {
    teamName: string,
    teamDetails: string,
    ownerUsername: string
}) {
    const [editable, setEditable] = useState(false);

    return(
        <div className="rounded bg-white/5 p-5 space-y-2">
            <div className="flex justify-between w-full">
                <TitleSection
                    teamName={teamName}
                    ownerUsername={ownerUsername}
                    editable={editable}
                />
                <EditButton
                    editable={editable}
                    setEditable={setEditable}
                />
            </div>
            <DescriptionSection
                teamDetails={teamDetails}
                editable={editable}
            />
            <LeagueSection editable={editable} />
        </div>
    )
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

function TitleSection({teamName, ownerUsername, editable}: {
    teamName: string,
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
                className="text-2xl font-bold bg-white/5 rounded px-2 py-0.5"
                defaultValue={teamName}
            />
            <h2 className="text-sm italic">Owned by {ownerUsername}</h2>
        </div>
    );
}

function DescriptionSection({teamDetails, editable}: {
    teamDetails: string,
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

function LeagueSection({editable}: {
    editable: boolean
}) {

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
                <label htmlFor="ESEALeague">Select Team's ESEA League:</label>
                <select className="bg-white/5 py-2" id="ESEALeague" name="ESEALeague">
                    <option className="bg-white/5 py-2" value="Intermediate">Intermediate</option>
                    <option className="bg-white/5 py-2" value="Advanced">Advanced</option>
                </select>
            </div>
        </div>
    )
}
