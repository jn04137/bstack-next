'use client';

import { useEffect, useState } from "react";

type IUserInfo = {
    username: string
    userNanoId: string
}

export function AuthButton() {
    const [isLoading, setIsLoading] = useState(true);

    let request;
    let [userInfo, setUserInfo] = useState<IUserInfo | null>();

    useEffect(() => {
        async function fetchData() {
            try {
                request = await fetch(`${process.env.NEXT_PUBLIC_HOST}/user/protected/userSession`, {
                    method: "GET",
                    credentials: "include",
                });
                userInfo = await request.json()
                setUserInfo(userInfo)
            } catch(e) {
                console.warn(e)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    if(isLoading) {
        return(
            <div className="animate-pulse">
                <div className="size-2 w-[200px] rounded-full bg-white/5"></div>
            </div>
        )
    }
    
    if(userInfo) {
        return(
            <div>
                Logged in as {userInfo.username}
            </div>
        )
    } 
    
    return(
        <div>
            <a href="/auth">
                Login
            </a>
        </div>
    )
}
