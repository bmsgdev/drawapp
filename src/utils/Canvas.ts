import type { CanvasPoint } from "../types/CanvasInterface";
export const drawer = (ctx: CanvasRenderingContext2D, startPoint: CanvasPoint, endPoint: CanvasPoint, color: string, lineWith: number) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWith;
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.stroke();
}