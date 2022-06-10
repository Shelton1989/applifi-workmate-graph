"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutBaseProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyBaseProductInputEnvelope_1 = require("../inputs/ProductCreateManyBaseProductInputEnvelope");
const ProductCreateOrConnectWithoutBaseProductInput_1 = require("../inputs/ProductCreateOrConnectWithoutBaseProductInput");
const ProductCreateWithoutBaseProductInput_1 = require("../inputs/ProductCreateWithoutBaseProductInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutBaseProductInput = class ProductCreateNestedManyWithoutBaseProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutBaseProductInput_1.ProductCreateWithoutBaseProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutBaseProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutBaseProductInput_1.ProductCreateOrConnectWithoutBaseProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutBaseProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyBaseProductInputEnvelope_1.ProductCreateManyBaseProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyBaseProductInputEnvelope_1.ProductCreateManyBaseProductInputEnvelope)
], ProductCreateNestedManyWithoutBaseProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutBaseProductInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutBaseProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutBaseProductInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutBaseProductInput);
exports.ProductCreateNestedManyWithoutBaseProductInput = ProductCreateNestedManyWithoutBaseProductInput;
