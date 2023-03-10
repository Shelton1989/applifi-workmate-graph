"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WardCount = class WardCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], WardCount.prototype, "Users", void 0);
WardCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WardCount", {
        isAbstract: true
    })
], WardCount);
exports.WardCount = WardCount;
