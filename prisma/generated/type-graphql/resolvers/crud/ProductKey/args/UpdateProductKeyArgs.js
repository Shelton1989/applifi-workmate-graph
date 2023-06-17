"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyUpdateInput_1 = require("../../../inputs/ProductKeyUpdateInput");
const ProductKeyWhereUniqueInput_1 = require("../../../inputs/ProductKeyWhereUniqueInput");
let UpdateProductKeyArgs = class UpdateProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateInput_1.ProductKeyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateInput_1.ProductKeyUpdateInput)
], UpdateProductKeyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], UpdateProductKeyArgs.prototype, "where", void 0);
UpdateProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateProductKeyArgs);
exports.UpdateProductKeyArgs = UpdateProductKeyArgs;
