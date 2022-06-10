"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductWhereUniqueInput_1 = require("../../../inputs/BrandProductWhereUniqueInput");
let FindUniqueBrandProductArgs = class FindUniqueBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], FindUniqueBrandProductArgs.prototype, "where", void 0);
FindUniqueBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBrandProductArgs);
exports.FindUniqueBrandProductArgs = FindUniqueBrandProductArgs;
