"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductWhereInput_1 = require("../../../inputs/BrandProductWhereInput");
let DeleteManyBrandProductArgs = class DeleteManyBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], DeleteManyBrandProductArgs.prototype, "where", void 0);
DeleteManyBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBrandProductArgs);
exports.DeleteManyBrandProductArgs = DeleteManyBrandProductArgs;
