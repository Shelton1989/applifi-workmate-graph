"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyInventoryInputEnvelope_1 = require("../inputs/ProductCreateManyInventoryInputEnvelope");
const ProductCreateOrConnectWithoutInventoryInput_1 = require("../inputs/ProductCreateOrConnectWithoutInventoryInput");
const ProductCreateWithoutInventoryInput_1 = require("../inputs/ProductCreateWithoutInventoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutInventoryInput = class ProductCreateNestedManyWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutInventoryInput_1.ProductCreateWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutInventoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutInventoryInput_1.ProductCreateOrConnectWithoutInventoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutInventoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyInventoryInputEnvelope_1.ProductCreateManyInventoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyInventoryInputEnvelope_1.ProductCreateManyInventoryInputEnvelope)
], ProductCreateNestedManyWithoutInventoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutInventoryInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutInventoryInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutInventoryInput);
exports.ProductCreateNestedManyWithoutInventoryInput = ProductCreateNestedManyWithoutInventoryInput;
