"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyWhereUniqueInput_1 = require("../../../inputs/ProductKeyWhereUniqueInput");
let FindUniqueProductKeyArgs = class FindUniqueProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], FindUniqueProductKeyArgs.prototype, "where", void 0);
FindUniqueProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProductKeyArgs);
exports.FindUniqueProductKeyArgs = FindUniqueProductKeyArgs;
