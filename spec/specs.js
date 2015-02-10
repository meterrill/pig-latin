describe("pigLatin", function() {
  it("adds 'ay' to the end of a word if it begins with a vowel", function() {
    expect(pigLatin("epicodus")).to.equal("epicodusay");
  });

  it("moves the first letter of a word beginning with one consonant to the end of the word, and then also appends 'ay'", function() {
    expect(pigLatin("javascript")).to.equal("avascriptjay");
  });

  it("moves any consonants at the beginning of a word to the end of the word, and then appends 'ay'", function() {
    expect(pigLatin("string")).to.equal("ingstray");
  });

  it("treats 'qu' as a consonant if it is in the beginning consonants", function() {
    expect(pigLatin("queen")).to.equal("eenquay");
  });
});
