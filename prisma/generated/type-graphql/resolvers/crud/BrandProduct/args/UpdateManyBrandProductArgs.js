"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductUpdateManyMutationInput_1 = require("../../../inputs/BrandProductUpdateManyMutationInput");
const BrandProductWhereInput_1 = require("../../../inputs/BrandProductWhereInput");
let UpdateManyBrandProductArgs = class UpdateManyBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateManyMutationInput_1.BrandProductUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateManyMutationInput_1.BrandProductUpdateManyMutationInput)
], UpdateManyBrandProductArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], UpdateManyBrandProductArgs.prototype, "where", void 0);
UpdateManyBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBrandProductArgs);
exports.UpdateManyBrandProductArgs = UpdateManyBrandProductArgs;
