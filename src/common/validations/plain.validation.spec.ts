import {
  isValidIban,
  isPositiveNumber,
  isDateAfterToday,
  isValidEmail,
  isFieldInformed,
} from "./plain.validation";

describe("plain.validation", () => {
  describe("isValidIban specs", () => {
    it("should return true for valid IBAN", () => {
      //arrange
      const iban = "AL35202111090000000001234567";
      //act
      const result = isValidIban(iban);
      //assert
      expect(result).toBeTruthy();
    });
    it("should return false for invalid IBAN", () => {
      //arrange
      const iban = "ES60 0049 1500 0512 3456 78922";
      //act
      const result = isValidIban(iban);
      //assert
      expect(result).toBeFalsy();
    });
    it("should return false for empty string", () => {
      //arrange
      const iban = "";
      //act
      const result = isValidIban(iban);
      //assert
      expect(result).toBeFalsy();
    });
  });
  describe("isPositiveNumber specs", () => {
    it("should return true for positive number", () => {
      //arrange
      const amount = 10;
      //act
      const result = isPositiveNumber(amount);
      //assert
      expect(result).toBeTruthy();
    });
    it("should return false for negative number", () => {
      //arrange
      const amount = -10;
      //act
      const result = isPositiveNumber(amount);
      //assert
      expect(result).toBeFalsy();
    });
    it("should return false for zero", () => {
      //arrange
      const amount = 0;
      //act
      const result = isPositiveNumber(amount);
      //assert
      expect(result).toBeFalsy();
    });
  });
  describe("isDateAfterToday specs", () => {
    it("should return true for date after today", () => {
      //arrange
      const date = new Date();
      date.setDate(date.getDate() + 1);
      //act
      const result = isDateAfterToday(date);
      //assert
      expect(result).toBeTruthy();
    });
    it("should return false for date before today", () => {
      //arrange
      const date = new Date(new Date().getTime() - 1000 * 60 * 60 * 24);
      //act
      const result = isDateAfterToday(date);
      //assert
      expect(result).toBeFalsy();
    });
    it("should return false for date equal to today", () => {
      //arrange
      const date = new Date();
      //act
      const result = isDateAfterToday(date);
      //assert
      expect(result).toBeFalsy();
    });
  });
  describe("isValidEmail specs", () => {
    it("should return true for valid email", () => {
      //arrange
      const email = "test@example.com";
      //act
      const result = isValidEmail(email);
      //assert
      expect(result).toBeTruthy();
    });
    it("should return false for invalid email", () => {
      //arrange
      const email = "testexample.com";
      //act
      const result = isValidEmail(email);
      //assert
      expect(result).toBeFalsy();
    });
    it("should return false for empty string", () => {
      //arrange
      const email = "";
      //act
      const result = isValidEmail(email);
      //assert
      expect(result).toBeFalsy();
    });
  });
  describe("isFieldInformed specs", () => {
    it("should return true for non-empty string", () => {
      //arrange
      const field = "test";
      //act
      const result = isFieldInformed(field);
      //assert
      expect(result).toBeTruthy();
    });
    it("should return false for empty string", () => {
      //arrange
      const field = "";
      //act
      const result = isFieldInformed(field);
      //assert
      expect(result).toBeFalsy();
    });
  });
});
