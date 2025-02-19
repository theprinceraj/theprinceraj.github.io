export const ToolIcon = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    return (
        <div className="">
            <Component className="size-10 fill-[url('#tech-icon-gradient')]" />
            <svg className="size-0 absolute">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor="rgb(110 231 183)" />
                    <stop offset="100%" stopColor="rgb(56 189 248)" />
                </linearGradient>
            </svg>
        </div>
    );
};
