const app = require("./app");
const jwt = require("jsonwebtoken");

test("it should get the proper jwt", () => {
    const result = app.auth("tveronezi", "tveronezi");
    jwt.verify(result.accessToken, app.publicKey, {
        algorithms: [app.algorithm]
    });
    const decoded = jwt.decode(result.accessToken);
    expect(decoded.groups.join(",")).toBe("todo");
    expect(decoded.upn).toBe("tveronezi");
    app.refresh(result.refreshToken);
});