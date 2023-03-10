"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ROLE;
(function (ROLE) {
    ROLE["SUPER_ADMIN"] = "SUPER_ADMIN";
    ROLE["ADMIN"] = "ADMIN";
    ROLE["USER"] = "USER";
    ROLE["WORKSPACE_OWNER"] = "WORKSPACE_OWNER";
    ROLE["WORKSPACE_ADMIN"] = "WORKSPACE_ADMIN";
    ROLE["WORKSPACE_USER"] = "WORKSPACE_USER";
    ROLE["WARD_ADMIN"] = "WARD_ADMIN";
    ROLE["WARD_HOST_OR_HOSTESS"] = "WARD_HOST_OR_HOSTESS";
    ROLE["WARD_USER"] = "WARD_USER";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
TypeGraphQL.registerEnumType(ROLE, {
    name: "ROLE",
    description: undefined,
});
