import * as atbash from "../Ciphers/atbash";
import * as base64 from "../Ciphers/base64";
import * as caesar from "../Ciphers/caesar";
import * as fourSquare from "../Ciphers/fourSquare";
import * as hill from "../Ciphers/hill";
import * as railFence from "../Ciphers/railFence";
import * as rot13 from "../Ciphers/rot13";

describe("Cipher tests", () => {
  const PLAIN_TEXT = "this is a test input to be encrypted by the ciphers";
  const shift = Math.floor(Math.random() * 26) + 1;
  const fourSQRKey_1 = fourSquare.GenRandKey();
  const fourSQRKey_2 = fourSquare.GenRandKey();
  const hillKey = "5 17 4 15";
  const railFenceKey = Math.floor(Math.random() * 26) + 1;

  describe("Atbash cipher", () => {
    it("Should encrypt a message", () => {
      expect(atbash.Encrypt(PLAIN_TEXT)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(atbash.Decrypt(atbash.Encrypt(PLAIN_TEXT))).toBe(PLAIN_TEXT);
    });
  });

  describe("Base64 cipher", () => {
    it("Should encrypt a message", () => {
      expect(base64.Encrypt(PLAIN_TEXT)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(base64.Decrypt(base64.Encrypt(PLAIN_TEXT))).toBe(PLAIN_TEXT);
    });
  });

  describe("Caesar cipher", () => {
    it("Should encrypt a message", () => {
      expect(caesar.Encrypt(PLAIN_TEXT, shift)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(caesar.Decrypt(caesar.Encrypt(PLAIN_TEXT, shift), shift)).toBe(
        PLAIN_TEXT
      );
    });
  });

  describe("FourSquare cipher", () => {
    it("Should encrypt a message", () => {
      expect(
        fourSquare.Encrypt(PLAIN_TEXT, fourSQRKey_1, fourSQRKey_2)
      ).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        fourSquare.Decrypt(
          fourSquare.Encrypt(PLAIN_TEXT, fourSQRKey_1, fourSQRKey_2),
          fourSQRKey_1,
          fourSQRKey_2
        )
      ).toInclude(PLAIN_TEXT.replace(/\s/g, ""));
    });
  });

  describe("Hill cipher", () => {
    it("Should encrypt a message", () => {
      expect(hill.Encrypt(PLAIN_TEXT, hillKey)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        hill.Decrypt(hill.Encrypt(PLAIN_TEXT, hillKey), hillKey)
      ).toInclude(PLAIN_TEXT.replace(/\s/g, ""));
    });
  });

  describe("Rail fence cipher", () => {
    it("Should encrypt a message", () => {
      expect(railFence.Encrypt(PLAIN_TEXT, railFenceKey)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        railFence.Decrypt(
          railFence.Encrypt(PLAIN_TEXT, railFenceKey),
          railFenceKey
        )
      );
    });
  });

  describe("Rot13 cipher", () => {
    it("Should encrypt a message", () => {
      expect(rot13.Encrypt(PLAIN_TEXT)).not.toBe(PLAIN_TEXT);
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(rot13.Decrypt(rot13.Encrypt(PLAIN_TEXT))).toBe(PLAIN_TEXT);
    });
  });
});
