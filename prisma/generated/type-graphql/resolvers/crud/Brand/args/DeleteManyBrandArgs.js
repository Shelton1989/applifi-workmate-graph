"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandWhereInput_1 = require("../../../inputs/BrandWhereInput");
let DeleteManyBrandArgs = class DeleteManyBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereInput_1.BrandWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereInput_1.BrandWhereInput)
], DeleteManyBrandArgs.prototype, "where", void 0);
DeleteManyBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBrandArgs);
exports.DeleteManyBrandArgs = DeleteManyBrandArgs;
