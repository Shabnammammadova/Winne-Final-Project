

export const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen gap-2">
            <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
        </div>
    )
}
