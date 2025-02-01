import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
interface drawingState {
    color: string,
    lineWidth: number,
    isDrawing: boolean,
    isErayser: boolean
};

export const useDrawingStore = defineStore('drawing', {
    state: (): drawingState => ({
        color: '#000000',
        lineWidth: 5,
        isDrawing: false,
        isErayser: false
    }),
    actions: {
        setColor(color: string) {
            this.color = color;
        },
        setLineWidth(lineWidth: number) {
            this.lineWidth = lineWidth;
        },
        setIsDrawing(isDrawing: boolean) {
            this.isDrawing = isDrawing;
        },
        setIsErayser(isErayser: boolean) {
            this.isErayser = isErayser;
        }
    }
});