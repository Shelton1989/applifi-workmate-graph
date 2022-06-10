"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateInput_1 = require("../../../inputs/BrandCreateInput");
let CreateBrandArgs = class CreateBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateInput_1.BrandCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandCreateInput_1.BrandCreateInput)
], CreateBrandArgs.prototype, "data", void 0);
CreateBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateBrandArgs);
exports.CreateBrandArgs = CreateBrandArgs;
