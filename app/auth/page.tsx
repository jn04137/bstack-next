import { LoginForm, SignupForm } from "./auth_forms";

export default async function Page() {
    return(
        <div className="flex justify-center grow pt-10">
            <div className="space-y-4">
                <LoginForm />
                <SignupForm />
            </div>
        </div>
    );
}

