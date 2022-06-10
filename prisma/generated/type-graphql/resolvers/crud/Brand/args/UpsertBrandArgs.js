"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateInput_1 = require("../../../inputs/BrandCreateInput");
const BrandUpdateInput_1 = require("../../../inputs/BrandUpdateInput");
const BrandWhereUniqueInput_1 = require("../../../inputs/BrandWhereUniqueInput");
let UpsertBrandArgs = class UpsertBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereUniqueInput_1.BrandWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandWhereUniqueInput_1.BrandWhereUniqueInput)
], UpsertBrandArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateInput_1.BrandCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandCreateInput_1.BrandCreateInput)
], UpsertBrandArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandUpdateInput_1.BrandUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandUpdateInput_1.BrandUpdateInput)
], UpsertBrandArgs.prototype, "update", void 0);
UpsertBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertBrandArgs);
exports.UpsertBrandArgs = UpsertBrandArgs;
