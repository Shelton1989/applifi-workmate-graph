"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyInventoryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyInventoryInput_1 = require("../inputs/ProductCreateManyInventoryInput");
let ProductCreateManyInventoryInputEnvelope = class ProductCreateManyInventoryInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateManyInventoryInput_1.ProductCreateManyInventoryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateManyInventoryInputEnvelope.prototype, "data", void 0);
ProductCreateManyInventoryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyInventoryInputEnvelope", {
        isAbstract: true
    })
], ProductCreateManyInventoryInputEnvelope);
exports.ProductCreateManyInventoryInputEnvelope = ProductCreateManyInventoryInputEnvelope;
