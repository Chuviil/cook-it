import {router, useRootNavigationState, useSegments} from 'expo-router';
import React, {useEffect} from 'react';

const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
    return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
    const navigation = useRootNavigationState();
    const segments = useSegments();

    useEffect(() => {
        const inAuthGroup = segments[0] === 'auth';

        if (navigation.stale) return;

        if (
            // If the user is not signed in and the initial segment is not anything in the auth group.
            !user &&
            !inAuthGroup
        ) {
            // Redirect to the sign-in page.
            router.replace('/auth/intro');
        } else if (user && inAuthGroup) {
            // Redirect away from the sign-in page.
            router.replace('/');
        }
    }, [user, segments, navigation]);
}

export function Provider({children}) {
    const [user, setAuth] = React.useState(null);

    useProtectedRoute(user);

    return (
        <AuthContext.Provider
            value={{
                login: (user) => setAuth(user),
                logout: () => setAuth(null),
                user,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
