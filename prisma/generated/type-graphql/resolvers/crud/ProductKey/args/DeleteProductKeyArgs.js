"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyWhereUniqueInput_1 = require("../../../inputs/ProductKeyWhereUniqueInput");
let DeleteProductKeyArgs = class DeleteProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], DeleteProductKeyArgs.prototype, "where", void 0);
DeleteProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteProductKeyArgs);
exports.DeleteProductKeyArgs = DeleteProductKeyArgs;
