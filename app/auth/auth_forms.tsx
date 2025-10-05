"use client"

import { 
	SyntheticEvent, 
	useState 
} from "react";

async function login(event: SyntheticEvent, username: string, password: string) {
	event.preventDefault();

	const url = `${process.env.NEXT_PUBLIC_HOST}/user/login`;

	try {
		await fetch(url, {
			method: "POST",
			body: JSON.stringify({
				username: username,
				password: password,
			}),
			headers: {
				"Content-Type": "application/json"
			},
            credentials: 'include'
		});
	} catch(err) {
		console.error(err);
	}
}

export function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    return(
        <form className="bg-white/5 rounded w-[400px] p-5 space-y-3">
            <h1 className="text-2xl">Login</h1>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Username</label>
                <input 
					type="text" 
					placeholder="Username" 
					onChange={e => setUsername(e.target.value)}
					className="bg-white/5 rounded p-2" />
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Password</label>
                <input 
					type="password" 
					placeholder="Password" 
						onChange={e => setPassword(e.target.value)}
					className="bg-white/5 rounded p-2" />
            </div>
            <div className="flex justify-end">
                <button 
					className="w-[100px] py-0.5 bg-blue-700 rounded text-lg hover:cursor-pointer hover:bg-blue-600"
					onClick={e => login(e, username, password)}
				>Login</button>
            </div>
        </form>
    );
}

async function signup(event: SyntheticEvent, email: string, username: string, password: string, confirmPassword: string) {
	event.preventDefault();

	const url = `${process.env.NEXT_PUBLIC_HOST}/register`;
	if(password === confirmPassword) {
		try {
			await fetch(url, {
				method: "POST",
				body: JSON.stringify({
					email: email,
					username: username,
					password: password
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch(err) {
			console.error(err)
		}
	} else {
		alert("Passwords don't match")
	}
}

export function SignupForm() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <form className="bg-white/5 rounded w-[400px] p-5 space-y-3">
            <h1 className="text-2xl">Signup</h1>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Email</label>
                <input 
					type="text" 
					placeholder="Email" 
					className="bg-white/5 rounded p-2" 
					onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Username</label>
                <input 
					type="text" 
					placeholder="Username" 
					className="bg-white/5 rounded p-2" 
					onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Password</label>
                <input 
					type="password" 
					placeholder="Password" 
					className="bg-white/5 rounded p-2" 
					onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-xl">Confirm Password</label>
                <input 
					type="password" 
					placeholder="Confirm Password" 
					className="bg-white/5 rounded p-2" 
					onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
            <div className="flex justify-end">
                <button 
					className="w-[100px] py-0.5 bg-blue-700 rounded text-lg hover:cursor-pointer hover:bg-blue-600"
					onClick={(e) => signup(e, email,username,password,confirmPassword)}
				>Signup</button>
            </div>
        </form>
    );
}
