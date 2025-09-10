'use client'

import { SyntheticEvent, useState } from 'react';

export default function CreateTeamForm() {
    const [visible, setVisible] = useState(false);

    return(
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">Teams</h1>
                <ShowFormButton visible={visible} setVisibility={setVisible} />
            </div>
            <Form visible={visible} setVisible={setVisible}/>
        </div>
    )
}

function createTeam(e: SyntheticEvent) {
    e.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_HOST}/team/createTeam`
    // const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/public/teams`);

    console.log("Create team button clicked");
}

function Form({visible, setVisible}: {
    visible: boolean,
    setVisible: any
}) {

    if(visible) {
        return(
            <form className="p-5 rounded bg-white/5 space-y-2">
                <h1 className="text-2xl">Create a Team</h1>
                <div className="space-y-2">
                    <div className="flex flex-col space-y-1.5">
                        <label className="text-xl">team name</label>
                        <input className="p-2 rounded bg-white/5" name="teamName" placeholder="team name"/>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <label className="text-xl">team description</label>
                        <input className="p-2 rounded bg-white/5" name="teamName" placeholder="team description"/>
                    </div>
                </div>
                <div className="flex justify-end space-x-2">
                    <button 
                        className="bg-white/10 rounded py-1.5 px-4 hover:cursor-pointer hover:bg-white/15"
                        onClick={e => createTeam(e)}
                    >
                        Create
                    </button>
                    <button
                        className="bg-white/5 rounded py-1.5 px-4 hover:cursor-pointer hover:bg-white/10"
                        onClick={() => setVisible(!visible)}>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}

function ShowFormButton({visible, setVisibility}: {
    visible: boolean,
    setVisibility: any
}) {
    if(!visible) {
        return(
            <button
                className="bg-white/5 rounded p-2 hover:cursor-pointer hover:bg-white/10"
                onClick={() => setVisibility(!visible)}>
                Create Team
            </button>
        );
    }
}
