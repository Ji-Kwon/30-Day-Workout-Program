export default function Layout(props){
    const { children } = props

    const header = (
        <header>
            <h1 className="">Gym Program</h1>
            <p className="">30 Day Workout Program</p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://www.jacobwilkinson.ca" target="_blank">Jacob Wilkinson</a></p>
        </footer>
    )

    return(
        <>
            {header}
            {children}
            {footer}
        
        </>
    )
}