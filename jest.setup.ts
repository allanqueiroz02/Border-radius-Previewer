import { TextEncoder, TextDecoder } from "util";
import "@testing-library/jest-dom";

Object.assign(global, { TextDecoder, TextEncoder });

// Outra forma
// import { TextEncoder, TextDecoder } from 'util'
// global.TextEncoder = TextEncoder
// @ ts-expect-error
// global.TextDecoder = TextDecoder
