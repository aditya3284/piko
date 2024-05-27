import { useState } from "react";

const useSignUp = () => {
	const [isloading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const signUp = async (username, email, password) => {
		setError(null);
		setIsLoading(true);

		const response = await fetch("/api/v1/user/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, email, password }),
		});
		if (!response.ok) {
			const data = await response.json();
			setError(data.message);
		}

		setIsLoading(false);

		return response.ok;
	};

	return { signUp, error, isloading };
};

export default useSignUp;
