'use client';
import axios from "axios"

export default function Home() {
    const signin = async() => {
        const {data} = await axios.get("/api/auth/signin")
        // API Route から返却された URL にリダイレクトする
        window.location.href = data.redirect_url
    }

    return (
        <main>
        <button onClick={() => signin()}>サインイン</button>
        </main>
    )
}