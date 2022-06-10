"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateInput_1 = require("../../../inputs/BrandProductCreateInput");
const BrandProductUpdateInput_1 = require("../../../inputs/BrandProductUpdateInput");
const BrandProductWhereUniqueInput_1 = require("../../../inputs/BrandProductWhereUniqueInput");
let UpsertBrandProductArgs = class UpsertBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], UpsertBrandProductArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateInput_1.BrandProductCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateInput_1.BrandProductCreateInput)
], UpsertBrandProductArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateInput_1.BrandProductUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateInput_1.BrandProductUpdateInput)
], UpsertBrandProductArgs.prototype, "update", void 0);
UpsertBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertBrandProductArgs);
exports.UpsertBrandProductArgs = UpsertBrandProductArgs;
