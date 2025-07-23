// Your tests here
import { pointsForWord }from "../utils";

describe("pointsForWord", () => {
    it("calculates the total point for a word (1 point per vowel, 2per constant)", () =>{

    });

    it("handles uppercase and lowercase input", () =>{
        expect(pointsForWord("tEst")).toBe(7);
    });
});
