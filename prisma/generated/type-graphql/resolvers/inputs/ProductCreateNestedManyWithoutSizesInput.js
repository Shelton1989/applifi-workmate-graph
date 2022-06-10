"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutSizesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutSizesInput_1 = require("../inputs/ProductCreateOrConnectWithoutSizesInput");
const ProductCreateWithoutSizesInput_1 = require("../inputs/ProductCreateWithoutSizesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutSizesInput = class ProductCreateNestedManyWithoutSizesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutSizesInput_1.ProductCreateWithoutSizesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutSizesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutSizesInput_1.ProductCreateOrConnectWithoutSizesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutSizesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutSizesInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutSizesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutSizesInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutSizesInput);
exports.ProductCreateNestedManyWithoutSizesInput = ProductCreateNestedManyWithoutSizesInput;
