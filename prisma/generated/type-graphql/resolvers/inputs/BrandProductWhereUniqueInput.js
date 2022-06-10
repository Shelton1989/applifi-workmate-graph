"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BrandProductWhereUniqueInput = class BrandProductWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductWhereUniqueInput.prototype, "id", void 0);
BrandProductWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductWhereUniqueInput", {
        isAbstract: true
    })
], BrandProductWhereUniqueInput);
exports.BrandProductWhereUniqueInput = BrandProductWhereUniqueInput;
