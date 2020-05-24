import { useState, useEffect } from "react"

export default function useReactfire() {
  const [reactfire, setReactfire] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getReactfire = async () => {
      if (typeof window !== "undefined") {
        const app = await import("reactfire")
        setReactfire(app)
        // setIsLoading(false)
      }
    }
    getReactfire()
  }, [reactfire])
  return reactfire
}
