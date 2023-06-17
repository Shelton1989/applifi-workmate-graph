"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyUpdateManyMutationInput_1 = require("../../../inputs/ProductKeyUpdateManyMutationInput");
const ProductKeyWhereInput_1 = require("../../../inputs/ProductKeyWhereInput");
let UpdateManyProductKeyArgs = class UpdateManyProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateManyMutationInput_1.ProductKeyUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateManyMutationInput_1.ProductKeyUpdateManyMutationInput)
], UpdateManyProductKeyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], UpdateManyProductKeyArgs.prototype, "where", void 0);
UpdateManyProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProductKeyArgs);
exports.UpdateManyProductKeyArgs = UpdateManyProductKeyArgs;
