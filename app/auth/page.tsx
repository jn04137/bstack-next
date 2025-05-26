
export default async function Page() {
    return(
        <div className="flex justify-center grow pt-10">
            <div className="space-y-4">
                <LoginForm />
                <SignupForm />
            </div>
        </div>
    )
}

async function LoginForm() {
    return(
        <form className="bg-white/5 rounded w-[400px] p-5 space-y-3">
            <h1 className="text-2xl">Login</h1>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Username</label>
                <input type="text" placeholder="Username" className="bg-white/5 rounded p-2" />
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Password</label>
                <input type="password" placeholder="Password" className="bg-white/5 rounded p-2" />
            </div>
            <div className="flex justify-end">
                <button className="w-[100px] py-0.5 bg-blue-700 rounded text-lg hover:cursor-pointer hover:bg-blue-600">Login</button>
            </div>
        </form>
    );
}

async function SignupForm() {
    return(
        <form className="bg-white/5 rounded w-[400px] p-5 space-y-3">
            <h1 className="text-2xl">Signup</h1>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Username</label>
                <input type="text" placeholder="Username" className="bg-white/5 rounded p-2" />
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Password</label>
                <input type="password" placeholder="Password" className="bg-white/5 rounded p-2" />
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="bg-white/5 rounded p-2" />
            </div>
            <div className="flex justify-end">
                <button className="w-[100px] py-0.5 bg-blue-700 rounded text-lg hover:cursor-pointer hover:bg-blue-600">Signup</button>
            </div>
        </form>
    );
}
