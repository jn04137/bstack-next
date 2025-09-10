
export default async function Page({
    params,
}: {
    params: Promise<{ team_name: string }>
}) {
    const { team_name } = await params
    return (
        <div> Current team: {team_name}</div>
    )
}
