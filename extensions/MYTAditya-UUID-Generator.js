// UUID v4 Generator extension for Scratch.
// by MYTAditya aka Mastered YT Aditya.
// https://github.com/MYTAditya
// This extension is licensed under MIT License.

/**
 * MIT License
 * 
 * Copyright (c) 2025 Mastered YT Aditya
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class MYTAUUIDGenerator {
    getInfo() {
        return {
            id: 'mytauuidGenerator',
            name: 'MYTA UUID Generator',
            color1: '#a9e43a',
            color2: '#84b02b',
            color3: '#567419',
            blocks: [
                {
                    opcode: 'UUID', 
                    blockType: 'reporter', 
                    text: 'generate UUID v4',
                    disableMonitor: true
                }
            ]
        };
    }

    UUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

Scratch.extensions.register(new MYTAUUIDGenerator());
