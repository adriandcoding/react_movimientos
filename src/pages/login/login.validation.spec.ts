import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("login validation", () => {
  it("should return validation succeeded when both field are informed", () => {
    // Arrange
    const credentials: Credentials = {
      username: "username",
      password: "password",
    };

    // Act
    const result = validateForm(credentials);
    // Assert
    expect(result.succeeded).toBeTruthy();
  });

  it("should return validation failed when user is empty", () => {
    // Arrange
    const credentials: Credentials = {
      username: "",
      password: "password",
    };

    // Act
    const result = validateForm(credentials);
    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.password).toBe("");
    expect(result.errors.username).toBe("Username is required");
  });
  it("should return validation failed when password is empty", () => {
    // Arrange
    const credentials: Credentials = {
      username: "username",
      password: "",
    };
    // Act
    const result = validateForm(credentials);
    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.password).toBe("Password is required");
    expect(result.errors.username).toBe("");
  });
  it("should return validation failed when both fields are empty", () => {
    // Arrange
    const credentials: Credentials = {
      username: "",
      password: "",
    };
    // Act
    const result = validateForm(credentials);
    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.password).toBe("Password is required");
    expect(result.errors.username).toBe("Username is required");
  });
});