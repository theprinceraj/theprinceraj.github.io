import { twMerge } from "tailwind-merge";
import { ToolIcon } from "./ToolIcon";
import { Fragment } from "react";

interface toolboxItem {
    title: string;
    iconType: React.ElementType;
}

export const ToolboxItemsRow = ({
    items,
    className,
    itemsWrapperClassName,
}: {
    items: toolboxItem[];
    className?: string;
    itemsWrapperClassName?: string;
}) => {
    return (
        <div
            className={twMerge("flex", className)}
            style={{
                maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
            }}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-3", itemsWrapperClassName)}>
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {items.map((item) => (
                            <div
                                key={item.title}
                                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                                <ToolIcon component={item.iconType} />
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};
