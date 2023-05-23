export interface IPoint {
    x: number,
    y: number
}

export interface IBoundingPoints {
    topLeft: IPoint;
    topRight: IPoint;
    bottomRight: IPoint;
    bottomLeft: IPoint;
}

export interface IBoundingBevelledPoints {
    top: {
        left: IPoint;
        right: IPoint;
    };
    right: {
        top: IPoint;
        bottom: IPoint;
    };
    bottom: {
        left: IPoint;
        right: IPoint;
    };
    left: {
        top: IPoint;
        bottom: IPoint;
    };
    
}

export interface IBoundingCoordinates {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export interface IBoundingPaddedCoordinates extends IBoundingCoordinates {
    padding: number;
}

export interface IBoundingBevelledCoordinates extends IBoundingCoordinates {
    bevel: number;
}

export function getBoundingPoints(boundingCoordinates: IBoundingCoordinates): IBoundingPoints {
    return {
        topLeft: {
            x: boundingCoordinates.left,
            y: boundingCoordinates.top
        },
        topRight: {
            x: boundingCoordinates.right,
            y: boundingCoordinates.top
        },
        bottomRight: {
            x: boundingCoordinates.right,
            y: boundingCoordinates.bottom
        },
        bottomLeft: {
            x: boundingCoordinates.left,
            y: boundingCoordinates.bottom
        }
    }
}

export function getBoungindPaddedCoordinates(
    coordinates: IBoundingCoordinates,
    padding: number = 0
): IBoundingPaddedCoordinates {
    return {
      top: coordinates.top - padding,
      right: coordinates.right + padding,
      bottom: coordinates.bottom + padding,
      left: coordinates.left - padding,
      padding: padding,
    };
}

export function getBoundingPaddedPoints(boundingCoordinates: IBoundingCoordinates, padding: number): IBoundingPoints {
    const boundingPaddedCoordinates = getBoungindPaddedCoordinates(boundingCoordinates, padding);
    return {
        topLeft: {
            x: boundingPaddedCoordinates.left,
            y: boundingPaddedCoordinates.top
        },
        topRight: {
            x: boundingPaddedCoordinates.right,
            y: boundingPaddedCoordinates.top
        },
        bottomRight: {
            x: boundingPaddedCoordinates.right,
            y: boundingPaddedCoordinates.bottom
        },
        bottomLeft: {
            x: boundingPaddedCoordinates.left,
            y: boundingPaddedCoordinates.bottom
        }
    }
}

export function getBoundingBevelledCoordinates(
    paddedCoordinates: IBoundingPaddedCoordinates,
    bevel: number
): IBoundingBevelledCoordinates {
    return {
      top: paddedCoordinates.top + bevel,
      right: paddedCoordinates.right - bevel,
      bottom: paddedCoordinates.bottom - bevel,
      left: paddedCoordinates.left + bevel,
      bevel: bevel,
    };
}

export function getBoundingBevelledPoints(boundingCoordinates: IBoundingCoordinates, padding: number, bevel: number): IBoundingBevelledPoints {
    const boundingPaddedCoordinates = getBoungindPaddedCoordinates(boundingCoordinates, padding);
    const boundingBevelledCoordinates = getBoundingBevelledCoordinates(boundingPaddedCoordinates, bevel);
    return {
        top: {
            left: {
                x: boundingBevelledCoordinates.left,
                y: boundingPaddedCoordinates.top
            },
            right: {
                x: boundingBevelledCoordinates.right,
                y: boundingPaddedCoordinates.top
            },
        },
        right: {
            top: {
                x: boundingPaddedCoordinates.right,
                y: boundingBevelledCoordinates.top
            },
            bottom: {
                x: boundingPaddedCoordinates.right,
                y: boundingBevelledCoordinates.bottom
            },
        },
        bottom: {
            left: {
                x: boundingBevelledCoordinates.left,
                y: boundingPaddedCoordinates.bottom
            },
            right: {
                x: boundingBevelledCoordinates.right,
                y: boundingPaddedCoordinates.bottom
            },
        },
        left: {
            top: {
                x: boundingPaddedCoordinates.left,
                y: boundingBevelledCoordinates.top
            },
            bottom: {
                x: boundingPaddedCoordinates.left,
                y: boundingBevelledCoordinates.bottom
            },
        }
    }
}
