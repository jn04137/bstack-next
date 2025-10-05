export default async function Page() {
    return(
        <div className="flex justify-center pt-10">
            <div className="w-1/3 space-y-4">
                <CreatedBy/>
                <About/>
            </div>
        </div>
    );
}

async function About() {
    return(
        <div className="bg-white/5 rounded p-5 space-y-2">
            <h1 className="text-2xl font-bold">About</h1>
            <p>
                This application is a side project that I've been wanting to create a while now. I'm hoping that
                the web app will pop off and allow CS2 teams to recruit players and players to find teams they
                can gel with.
            </p>
            <p>
                I used to play a lot of CS during my time in highschool. I had gotten to Supreme in CS in 2015 before
                the well known ranked reset (I mostly only grinded Dust II and Cache because I was tactically inept).
            </p>
            <p>
                Over the past two years, I've been writing the app in Go, Javascript, Java, and going
                back and forth between these three languages (I had some small stints with Ruby and Elixir
                for the backend).
            </p>
        </div>
    )
}

async function CreatedBy() {
    return(
        <div className="bg-white/5 rounded p-5 space-y-2">
            <div>
                <h1 className="text-2xl font-bold">Creator</h1>
                <p>Jonathan Nguyen</p>
            </div>
            <div>
                <h2 className="text-lg font-bold">Background</h2>
                <p>Employed at Mastercard as a Software Engineer for almost 3 years.</p>
            </div>
        </div>
    )
}
