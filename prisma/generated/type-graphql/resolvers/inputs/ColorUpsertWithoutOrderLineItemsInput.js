"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpsertWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateWithoutOrderLineItemsInput");
const ColorUpdateWithoutOrderLineItemsInput_1 = require("../inputs/ColorUpdateWithoutOrderLineItemsInput");
let ColorUpsertWithoutOrderLineItemsInput = class ColorUpsertWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateWithoutOrderLineItemsInput_1.ColorUpdateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorUpdateWithoutOrderLineItemsInput_1.ColorUpdateWithoutOrderLineItemsInput)
], ColorUpsertWithoutOrderLineItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateWithoutOrderLineItemsInput_1.ColorCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateWithoutOrderLineItemsInput_1.ColorCreateWithoutOrderLineItemsInput)
], ColorUpsertWithoutOrderLineItemsInput.prototype, "create", void 0);
ColorUpsertWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpsertWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ColorUpsertWithoutOrderLineItemsInput);
exports.ColorUpsertWithoutOrderLineItemsInput = ColorUpsertWithoutOrderLineItemsInput;
