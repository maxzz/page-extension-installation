export function Section1_Policy() {
    return (
        <div className="prose py-4 max-w-full">

            <h3>Privacy Policy</h3>

            <p>
                1. This extension does not store, share or transmit any user data to any remote server.
                All data is stored locally in a cryptographically protected database.
            </p>

            <p>
                2. This extension communicates only with DigitalPersona Workstation,
                a native Windows desktop application helping to manage user credentials and store them
                locally on a user's computer or in the organization's Active Directory (if connected).
                It uses a standard cryptographically protected WebSocket Secure communication protocol
                to a local `loopback` communication endpoint (wss://localhost).
            </p>
            
            <p>
                3. User can use DigitalPersona Workstation to modify or remove stored usernames and passwords at any time.
            </p>

        </div>
    );
}
