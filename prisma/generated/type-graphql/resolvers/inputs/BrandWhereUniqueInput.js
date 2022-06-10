"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BrandWhereUniqueInput = class BrandWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandWhereUniqueInput.prototype, "id", void 0);
BrandWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandWhereUniqueInput", {
        isAbstract: true
    })
], BrandWhereUniqueInput);
exports.BrandWhereUniqueInput = BrandWhereUniqueInput;
