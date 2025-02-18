import { PropsWithChildren } from "react";

export const HeroOrbit = ({
    children,
    sizeInPx,
    rotationInDeg,
}: PropsWithChildren<{ sizeInPx: number; rotationInDeg: number }>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className="flex items-start justify-start"
                style={{
                    transform: `rotate(${rotationInDeg}deg)`,
                    height: `${sizeInPx}px`,
                    width: `${sizeInPx}px`,
                }}>
                <div
                    className="inline-flex"
                    style={{
                        transform: `rotate(${rotationInDeg * -1}deg)`,
                    }}>
                    {children}
                </div>
            </div>
        </div>
    );
};
