"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandUpdateInput_1 = require("../../../inputs/BrandUpdateInput");
const BrandWhereUniqueInput_1 = require("../../../inputs/BrandWhereUniqueInput");
let UpdateBrandArgs = class UpdateBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandUpdateInput_1.BrandUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandUpdateInput_1.BrandUpdateInput)
], UpdateBrandArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereUniqueInput_1.BrandWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandWhereUniqueInput_1.BrandWhereUniqueInput)
], UpdateBrandArgs.prototype, "where", void 0);
UpdateBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateBrandArgs);
exports.UpdateBrandArgs = UpdateBrandArgs;
