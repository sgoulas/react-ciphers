import * as atbash from "./atbash";
import * as base64 from "./base64";
import * as caesar from "./caesar";
import * as fourSquare from "./fourSquare";
import * as hill from "./hill";
import * as railFence from "./railFence";
import * as rot13 from "./rot13";
import cipherExecutor from "../utils/cipherExecutor";

describe("Cipher tests", () => {
  const PLAIN_TEXT = "this is a test input to be encrypted by the ciphers";
  const shift = 20;
  const fourSQRKey_1 = "RVPBMNQCUALDEOFITHXSZYWKG";
  const fourSQRKey_2 = "EWYSBIRUNVGTZOCMQDFAPKXHL";
  const hillKey = "68 13 27 45";
  const railFenceKey = 2;

  describe("Atbash cipher", () => {
    it("Should encrypt a message", () => {
      expect(cipherExecutor(atbash.Encrypt)(PLAIN_TEXT)({})).toBe(
        "gsrh rh z gvhg rmkfg gl yv vmxibkgvw yb gsv xrksvih"
      );
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        cipherExecutor(atbash.Decrypt)(atbash.Encrypt(PLAIN_TEXT))({})
      ).toBe(PLAIN_TEXT);
    });
  });

  describe("Base64 cipher", () => {
    it("Should encrypt a message", () => {
      expect(cipherExecutor(base64.Encrypt)(PLAIN_TEXT)({})).toBe(
        "dGhpcyBpcyBhIHRlc3QgaW5wdXQgdG8gYmUgZW5jcnlwdGVkIGJ5IHRoZSBjaXBoZXJz"
      );
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        cipherExecutor(base64.Decrypt)(base64.Encrypt(PLAIN_TEXT))({})
      ).toBe(PLAIN_TEXT);
    });
  });

  describe("Caesar cipher", () => {
    it("Should encrypt a message", () => {
      expect(cipherExecutor(caesar.Encrypt)(PLAIN_TEXT)({ shift })).toBe(
        "nbcm cm u nymn chjon ni vy yhwlsjnyx vs nby wcjbylm"
      );
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        cipherExecutor(caesar.Decrypt)(caesar.Encrypt(PLAIN_TEXT, shift))({
          shift: 20,
        })
      ).toBe(PLAIN_TEXT);
    });
  });

  describe("FourSquare cipher", () => {
    it("Should encrypt a message", () => {
      expect(
        cipherExecutor(fourSquare.Encrypt)(PLAIN_TEXT)({
          fourSQRKey_1,
          fourSQRKey_2,
        })
      ).toBe("HNCFCFBMPAXNFZXAXOMWPCVDGOSSVSKFAYBUEVVAHX");
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        cipherExecutor(fourSquare.Decrypt)(
          "HNCFCFBMPAXNFZXAXOMWPCVDGOSSVSKFAYBUEVVAHX"
        )({
          fourSQRKey_1,
          fourSQRKey_2,
        })
      ).toInclude(PLAIN_TEXT.replace(/\s/g, ""));
    });
  });

  describe("Hill cipher", () => {
    it("Should encrypt a message", () => {
      expect(cipherExecutor(hill.Encrypt)(PLAIN_TEXT)({ hillKey })).toBe(
        "fwymymnxmispnmvrszqzzrtnhxsrjwhvifgytszppn"
      );
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        cipherExecutor(hill.Decrypt)(
          "fwymymnxmispnmvrszqzzrtnhxsrjwhvifgytszppn"
        )({ hillKey })
      ).toInclude(PLAIN_TEXT.replace(/\s/g, ""));
    });
  });

  describe("Rail fence cipher", () => {
    it("Should encrypt a message", () => {
      expect(
        cipherExecutor(railFence.Encrypt)(PLAIN_TEXT)({ railFenceKey })
      ).toBe("tiiaetnutbecytdyhcpeshsstsiptoenrpebteihr");
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        cipherExecutor(railFence.Decrypt)(
          "tiiaetnutbecytdyhcpeshsstsiptoenrpebteihr"
        )({ railFenceKey })
      ).toBe("thisisatestinputtobeencryptedbytheciphers");
    });
  });

  describe("Rot13 cipher", () => {
    it("Should encrypt a message", () => {
      expect(cipherExecutor(rot13.Encrypt)(PLAIN_TEXT)({})).toBe(
        "guvf vf n grfg vachg gb or rapelcgrq ol gur pvcuref"
      );
    });
    it("should decrypt an ecrypted message to its original form", () => {
      expect(
        cipherExecutor(rot13.Decrypt)(
          "guvf vf n grfg vachg gb or rapelcgrq ol gur pvcuref"
        )({})
      ).toBe(PLAIN_TEXT);
    });
  });
});
