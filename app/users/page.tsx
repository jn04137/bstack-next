interface User {
    username: string;
}

export default async function Page() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/public/users`);
    const users = await data.json();

    return(
        <div className="space-y-2">
            <h1 className="text-4xl font-bold">Users</h1>
            { users.map((user: User) => <UserCard key={user.username} user={user}/>) }
        </div>
    )
}

function UserCard({user}: {
    user: User
}) {
    return (
        <div className="p-5 rounded bg-white/5 space-y-2">
            <div>
                <h2 className="text-2xl font-bold">{user.username}</h2>
            </div>
        </div>
    )
}
