"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriceWhereUniqueInput = class PriceWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceWhereUniqueInput.prototype, "experienceId", void 0);
PriceWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceWhereUniqueInput", {
        isAbstract: true
    })
], PriceWhereUniqueInput);
exports.PriceWhereUniqueInput = PriceWhereUniqueInput;
