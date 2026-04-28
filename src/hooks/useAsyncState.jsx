import { useState } from "react"

function useAsyncState() {

    const [loading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState("")
    const [error, setError] = useState("")

    return {
        loading,
        setLoading,
        loadingMessage,
        setLoadingMessage,
        error,
        setError 
    }
}

export default useAsyncState