"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LIST_TYPE;
(function (LIST_TYPE) {
    LIST_TYPE["TRENDING"] = "TRENDING";
    LIST_TYPE["LATEST"] = "LATEST";
    LIST_TYPE["POPULAR"] = "POPULAR";
    LIST_TYPE["FEATURED"] = "FEATURED";
})(LIST_TYPE = exports.LIST_TYPE || (exports.LIST_TYPE = {}));
TypeGraphQL.registerEnumType(LIST_TYPE, {
    name: "LIST_TYPE",
    description: undefined,
});
