export const SectionHeader = ({
    heading1,
    heading2,
    paragraph,
}: {
    heading1: string;
    heading2: string;
    paragraph: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
                    {heading1}
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{heading2}</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/50 mt-4 max-w-md mx-auto">{paragraph}</p>
        </>
    );
};
