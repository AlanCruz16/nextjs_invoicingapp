"use client";

export default function Error({ error }: { error: Error }) {
    return (
        <div className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
            <h2 className="text-xl font-semibold">Something went wrong!</h2>
            <p>{error.message}</p>
        </div>


    )
}