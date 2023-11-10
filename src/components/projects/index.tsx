import { useEffect, useState } from 'react';
import { getUserData } from "../../services/req";
import { Projects } from "./projects";
import UserData from '../../types/custom';

export default function Index(): JSX.Element {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const user = await getUserData();
            setUserData(user);
        }

        fetchData();
    }, []);

    return (
        <div>
            {userData ? (
                <Projects totalRepos={userData.public_repos} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
