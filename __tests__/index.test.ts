import { getByText } from "@testing-library/dom";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
let container: HTMLElement;

describe("index.html", () => {
  beforeEach(() => {
    container = new JSDOM(html, { runScripts: "dangerously" }).window.document
      .body;
  });

  it("renders a h1 element", () => {
    const h1El = getByText(container, "Border Radius Previewer");
    expect(h1El).toBeInTheDocument();
  });
});
