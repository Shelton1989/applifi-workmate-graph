"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateInput_1 = require("../../../inputs/ProductKeyCreateInput");
let CreateProductKeyArgs = class CreateProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateInput_1.ProductKeyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateInput_1.ProductKeyCreateInput)
], CreateProductKeyArgs.prototype, "data", void 0);
CreateProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProductKeyArgs);
exports.CreateProductKeyArgs = CreateProductKeyArgs;
