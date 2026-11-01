"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const file = process.argv[2];
const text = file ? fs_1.default.readFileSync(file, 'utf8') : fs_1.default.readFileSync(0, 'utf8');
const lines = text.split('\n').length;
const words = text.trim() ? text.trim().split(/\s+/).length : 0;
const chars = text.length;
console.log(lines, words, chars, file || '-');
