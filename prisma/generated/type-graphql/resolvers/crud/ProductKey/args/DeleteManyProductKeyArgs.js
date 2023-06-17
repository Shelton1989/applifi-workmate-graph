"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyWhereInput_1 = require("../../../inputs/ProductKeyWhereInput");
let DeleteManyProductKeyArgs = class DeleteManyProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], DeleteManyProductKeyArgs.prototype, "where", void 0);
DeleteManyProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProductKeyArgs);
exports.DeleteManyProductKeyArgs = DeleteManyProductKeyArgs;
