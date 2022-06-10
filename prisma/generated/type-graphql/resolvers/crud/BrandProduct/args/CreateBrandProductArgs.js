"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateInput_1 = require("../../../inputs/BrandProductCreateInput");
let CreateBrandProductArgs = class CreateBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateInput_1.BrandProductCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateInput_1.BrandProductCreateInput)
], CreateBrandProductArgs.prototype, "data", void 0);
CreateBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateBrandProductArgs);
exports.CreateBrandProductArgs = CreateBrandProductArgs;
