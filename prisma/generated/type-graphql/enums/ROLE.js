"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ROLE;
(function (ROLE) {
    ROLE["SUPER_ADMIN"] = "SUPER_ADMIN";
    ROLE["ADMIN"] = "ADMIN";
    ROLE["CRITIC"] = "CRITIC";
    ROLE["USER"] = "USER";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
TypeGraphQL.registerEnumType(ROLE, {
    name: "ROLE",
    description: undefined,
});
