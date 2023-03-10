"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WardWhereUniqueInput = class WardWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WardWhereUniqueInput.prototype, "id", void 0);
WardWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WardWhereUniqueInput", {
        isAbstract: true
    })
], WardWhereUniqueInput);
exports.WardWhereUniqueInput = WardWhereUniqueInput;
