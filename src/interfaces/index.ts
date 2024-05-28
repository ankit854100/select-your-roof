interface IAppBarProps {
    mode: string,
    toggleTheme: () => void
}
interface ISettingsProps {
    color: string;
    thickness: number;
    onColorChange: (color: string) => void;
    onThicknessChange: (thickness: number) => void;
    setShowSettings: (arg: boolean) => void
}

interface Point {
    x: number;
    y: number;
}

interface LineSegment {
    start: Point;
    end: Point;
    color: string;
    thickness: number;
}

interface ICanvasProps {
    imageUrl: string;
    color: string;
    thickness: number;
    setShowSettings: (args: boolean) => void;
}

export type { IAppBarProps, Point, ISettingsProps, LineSegment, ICanvasProps}

