"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductWhereUniqueInput_1 = require("../../../inputs/BrandProductWhereUniqueInput");
let DeleteBrandProductArgs = class DeleteBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], DeleteBrandProductArgs.prototype, "where", void 0);
DeleteBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteBrandProductArgs);
exports.DeleteBrandProductArgs = DeleteBrandProductArgs;
