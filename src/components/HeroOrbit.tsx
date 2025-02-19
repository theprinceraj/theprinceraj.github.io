import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
    children,
    sizeInPx,
    rotationInDeg,
    shouldOrbit = false,
    orbitDuration,
    shouldSpin = false,
    spinDuration,
}: PropsWithChildren<{
    sizeInPx: number;
    rotationInDeg: number;
    shouldOrbit?: boolean;
    orbitDuration?: string;
    shouldSpin?: boolean;
    spinDuration?: string;
}>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
            <div
                className={twMerge(shouldOrbit === true && "animate-spin")}
                style={{
                    animationDuration: orbitDuration,
                }}>
                <div
                    className="flex items-start justify-start"
                    style={{
                        transform: `rotate(${rotationInDeg}deg)`,
                        height: `${sizeInPx}px`,
                        width: `${sizeInPx}px`,
                    }}>
                    <div
                        className={twMerge(shouldSpin === true && "animate-spin")}
                        style={{
                            animationDuration: spinDuration,
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
            </div>
        </div>
    );
};
