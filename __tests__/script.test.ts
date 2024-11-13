import { formatBorderRadiusText } from "../script";

describe("Script functions", () => {
  test("Should format the text", () => {
    const formatedText = formatBorderRadiusText("12px");
    expect(formatedText).toBe("border-radius: 12px;");
  });
});
