const SkeletonSwiper = () =>
{
    return (
        <div className="p-2">
            <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="animate-pulse flex flex-shrink-0 items-center justify-center bg-transparent h-16 w-16 rounded">
                    <div class="animate-pulse rounded-full bg-sky-700 h-10 w-10"></div>
                </div>
                <div className="flex-grow flex flex-col ml-4">
                    <div class="animate-pulse space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-sky-700 rounded col-span-2"></div>
                            <div class="h-2 bg-sky-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-sky-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonSwiper;