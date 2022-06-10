"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REACTION_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var REACTION_TYPE;
(function (REACTION_TYPE) {
    REACTION_TYPE["LIKE"] = "LIKE";
    REACTION_TYPE["LOVE"] = "LOVE";
    REACTION_TYPE["DISLIKE"] = "DISLIKE";
})(REACTION_TYPE = exports.REACTION_TYPE || (exports.REACTION_TYPE = {}));
TypeGraphQL.registerEnumType(REACTION_TYPE, {
    name: "REACTION_TYPE",
    description: undefined,
});
