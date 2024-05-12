import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    // React.useEffect(() => {
    //     window.addEventListener("resize", function() {
    //         setWindowWidth(window.innerWidth)
    //     })
    // }, [])

    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    return (
        // <h1>Window width: {window.innerWidth}</h1>
        <h1>Window width: {windowWidth}</h1>
    )
}
