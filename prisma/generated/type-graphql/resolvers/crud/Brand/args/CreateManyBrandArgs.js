"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateManyInput_1 = require("../../../inputs/BrandCreateManyInput");
let CreateManyBrandArgs = class CreateManyBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandCreateManyInput_1.BrandCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBrandArgs.prototype, "data", void 0);
CreateManyBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBrandArgs);
exports.CreateManyBrandArgs = CreateManyBrandArgs;
