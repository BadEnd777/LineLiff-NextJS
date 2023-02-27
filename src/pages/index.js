import { useEffect, useState } from 'react';

const Home = () => {
    const [liff, setLiff] = useState(null);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!liff) {
            import('@line/liff').then((liff) => {
                setLiff(liff);
                liff.init({ liffId: process.env.LIFF_ID }).then(() => {
                    if (liff.isLoggedIn()) {
                        liff.getProfile().then((profile) => {
                            setProfile(profile);
                        }).catch((error) => {
                            setError(error);
                        });
                    }
                }).catch((error) => {
                    setError(error);
                });
            });
        }
    }, [liff]);

    const SendMessage = () => {
        liff.sendMessages([
            {
                type: 'text',
                text: 'Hello, World!',
            },
        ]).then(() => {
            setError('Message sent');
        }).catch((error) => {
            setError(error.message);
        });
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
                <img 
                    src={profile.pictureUrl}
                    alt={profile.displayName}
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        marginBottom: 20,
                    }}
                />
                <div style={{ fontSize: 24, fontWeight: 'bold' }}>{profile.displayName}</div>
                <div style={{ fontSize: 16, color: '#999' }}>{profile.statusMessage}</div>
                <div
                    style={{
                        backgroundColor: '#2D3748',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: 5,
                        marginTop: 20,
                    }}
                >
                    {profile.userId}
                </div>
                <button
                    onClick={SendMessage}
                    style={{
                        backgroundColor: '#00B900',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: 5,
                        marginTop: 20,
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default Home;