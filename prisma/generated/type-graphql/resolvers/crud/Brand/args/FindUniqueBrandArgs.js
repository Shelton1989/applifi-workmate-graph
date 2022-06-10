"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandWhereUniqueInput_1 = require("../../../inputs/BrandWhereUniqueInput");
let FindUniqueBrandArgs = class FindUniqueBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereUniqueInput_1.BrandWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandWhereUniqueInput_1.BrandWhereUniqueInput)
], FindUniqueBrandArgs.prototype, "where", void 0);
FindUniqueBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBrandArgs);
exports.FindUniqueBrandArgs = FindUniqueBrandArgs;
