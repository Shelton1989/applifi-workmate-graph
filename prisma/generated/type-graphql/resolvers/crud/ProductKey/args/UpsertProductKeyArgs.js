"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateInput_1 = require("../../../inputs/ProductKeyCreateInput");
const ProductKeyUpdateInput_1 = require("../../../inputs/ProductKeyUpdateInput");
const ProductKeyWhereUniqueInput_1 = require("../../../inputs/ProductKeyWhereUniqueInput");
let UpsertProductKeyArgs = class UpsertProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], UpsertProductKeyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateInput_1.ProductKeyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateInput_1.ProductKeyCreateInput)
], UpsertProductKeyArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateInput_1.ProductKeyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateInput_1.ProductKeyUpdateInput)
], UpsertProductKeyArgs.prototype, "update", void 0);
UpsertProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertProductKeyArgs);
exports.UpsertProductKeyArgs = UpsertProductKeyArgs;
