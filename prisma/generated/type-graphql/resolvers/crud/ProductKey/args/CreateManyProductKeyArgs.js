"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateManyInput_1 = require("../../../inputs/ProductKeyCreateManyInput");
let CreateManyProductKeyArgs = class CreateManyProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyCreateManyInput_1.ProductKeyCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProductKeyArgs.prototype, "data", void 0);
CreateManyProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProductKeyArgs);
exports.CreateManyProductKeyArgs = CreateManyProductKeyArgs;
