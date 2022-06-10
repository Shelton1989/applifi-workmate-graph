"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrderLineItemsInput");
const ProductCreateWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateWithoutOrderLineItemsInput");
const ProductUpdateWithoutOrderLineItemsInput_1 = require("../inputs/ProductUpdateWithoutOrderLineItemsInput");
const ProductUpsertWithoutOrderLineItemsInput_1 = require("../inputs/ProductUpsertWithoutOrderLineItemsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutOrderLineItemsInput = class ProductUpdateOneRequiredWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderLineItemsInput_1.ProductCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderLineItemsInput_1.ProductCreateWithoutOrderLineItemsInput)
], ProductUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrderLineItemsInput_1.ProductCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutOrderLineItemsInput_1.ProductCreateOrConnectWithoutOrderLineItemsInput)
], ProductUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutOrderLineItemsInput_1.ProductUpsertWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpsertWithoutOrderLineItemsInput_1.ProductUpsertWithoutOrderLineItemsInput)
], ProductUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrderLineItemsInput_1.ProductUpdateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrderLineItemsInput_1.ProductUpdateWithoutOrderLineItemsInput)
], ProductUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "update", void 0);
ProductUpdateOneRequiredWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ProductUpdateOneRequiredWithoutOrderLineItemsInput);
exports.ProductUpdateOneRequiredWithoutOrderLineItemsInput = ProductUpdateOneRequiredWithoutOrderLineItemsInput;
