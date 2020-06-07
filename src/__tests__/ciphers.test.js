import { sum } from "../sum";
import * as Atbash from "../Ciphers/Atbash";
import * as Base64 from "../Ciphers/Base64";
import * as Caesar from "../Ciphers/Caesar";
import * as FourSquare from "../Ciphers/FourSquare";
import * as Hill from "../Ciphers/Hill";
import * as RailFence from "../Ciphers/RailFence";
import * as Rot13 from "../Ciphers/Rot13";

describe("Cipher tests", () => {
  let PLAIN_TEXT;
  let shift;
  const fourSQRKey_1 = FourSquare.GenRandKey();
  const fourSQRKey_2 = FourSquare.GenRandKey();
  const hillKey = "5 17 4 15";
  const railFenceKey = Math.floor(Math.random() * 26) + 1;

  beforeEach(() => {
    PLAIN_TEXT = "this is a test input to be encrypted by the ciphers";
    shift = Math.floor(Math.random() * 26) + 1;
  });

  describe("Atbash cipher", () => {
    it("Should encrypt a message", () => {
      expect(Atbash.Encrypt(PLAIN_TEXT)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(Atbash.Decrypt(Atbash.Encrypt(PLAIN_TEXT))).toBe(PLAIN_TEXT);
    });

    describe("Base64 cipher", () => {
      it("Should encrypt a message", () => {
        expect(Base64.Encrypt(PLAIN_TEXT)).not.toBe(PLAIN_TEXT);
      });
      it("should decrypt an ecrypted message to its original form", () => {
        expect(Base64.Decrypt(Base64.Encrypt(PLAIN_TEXT))).toBe(PLAIN_TEXT);
      });
    });
  });

  describe("Caesar cipher", () => {
    it("Should encrypt a message", () => {
      expect(Caesar.Encrypt(PLAIN_TEXT, shift)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(Caesar.Decrypt(Caesar.Encrypt(PLAIN_TEXT, shift), shift)).toBe(
        PLAIN_TEXT
      );
    });
  });

  describe("FourSquare cipher", () => {
    it("Should encrypt a message", () => {
      expect(
        FourSquare.Encrypt(PLAIN_TEXT, fourSQRKey_1, fourSQRKey_2)
      ).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        FourSquare.Decrypt(
          FourSquare.Encrypt(PLAIN_TEXT, fourSQRKey_1, fourSQRKey_2),
          fourSQRKey_1,
          fourSQRKey_2
        )
      ).toInclude(PLAIN_TEXT.replace(/\s/g, ""));
    });
  });

  describe("Hill cipher", () => {
    it("Should encrypt a message", () => {
      expect(Hill.Encrypt(PLAIN_TEXT, hillKey)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        Hill.Decrypt(Hill.Encrypt(PLAIN_TEXT, hillKey), hillKey)
      ).toInclude(PLAIN_TEXT.replace(/\s/g, ""));
    });
  });

  describe("Rail fence cipher", () => {
    it("Should encrypt a message", () => {
      expect(RailFence.Encrypt(PLAIN_TEXT, railFenceKey)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        RailFence.Decrypt(
          RailFence.Encrypt(PLAIN_TEXT, railFenceKey),
          railFenceKey
        )
      );
    });
  });

  describe("Rot13 cipher", () => {
    it("Should encrypt a message", () => {
      expect(Rot13.Encrypt(PLAIN_TEXT)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(Rot13.Decrypt(Rot13.Encrypt(PLAIN_TEXT))).toBe(PLAIN_TEXT);
    });
  });
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer",
];

test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain("beer");
});

function doSomethingAndThrow() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(doSomethingAndThrow).toThrow();
  expect(doSomethingAndThrow).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(doSomethingAndThrow).toThrow("you are using the wrong JDK");
  expect(doSomethingAndThrow).toThrow(/JDK/);
});
