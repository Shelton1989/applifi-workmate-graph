"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductUpdateInput_1 = require("../../../inputs/BrandProductUpdateInput");
const BrandProductWhereUniqueInput_1 = require("../../../inputs/BrandProductWhereUniqueInput");
let UpdateBrandProductArgs = class UpdateBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateInput_1.BrandProductUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateInput_1.BrandProductUpdateInput)
], UpdateBrandProductArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], UpdateBrandProductArgs.prototype, "where", void 0);
UpdateBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateBrandProductArgs);
exports.UpdateBrandProductArgs = UpdateBrandProductArgs;
