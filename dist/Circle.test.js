"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = __importDefault(require("./Circle"));
test("Should calculate the area of circle", function () {
    const circle = new Circle_1.default(2);
    expect(circle.getArea()).toBe(12.566370614359172);
});
