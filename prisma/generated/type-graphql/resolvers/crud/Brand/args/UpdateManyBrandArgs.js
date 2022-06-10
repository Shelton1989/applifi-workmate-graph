"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandUpdateManyMutationInput_1 = require("../../../inputs/BrandUpdateManyMutationInput");
const BrandWhereInput_1 = require("../../../inputs/BrandWhereInput");
let UpdateManyBrandArgs = class UpdateManyBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandUpdateManyMutationInput_1.BrandUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandUpdateManyMutationInput_1.BrandUpdateManyMutationInput)
], UpdateManyBrandArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereInput_1.BrandWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereInput_1.BrandWhereInput)
], UpdateManyBrandArgs.prototype, "where", void 0);
UpdateManyBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBrandArgs);
exports.UpdateManyBrandArgs = UpdateManyBrandArgs;
