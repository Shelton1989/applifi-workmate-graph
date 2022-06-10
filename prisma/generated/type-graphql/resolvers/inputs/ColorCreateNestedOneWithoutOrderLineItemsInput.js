"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateNestedOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateOrConnectWithoutOrderLineItemsInput");
const ColorCreateWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateWithoutOrderLineItemsInput");
const ColorWhereUniqueInput_1 = require("../inputs/ColorWhereUniqueInput");
let ColorCreateNestedOneWithoutOrderLineItemsInput = class ColorCreateNestedOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateWithoutOrderLineItemsInput_1.ColorCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateWithoutOrderLineItemsInput_1.ColorCreateWithoutOrderLineItemsInput)
], ColorCreateNestedOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateOrConnectWithoutOrderLineItemsInput_1.ColorCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateOrConnectWithoutOrderLineItemsInput_1.ColorCreateOrConnectWithoutOrderLineItemsInput)
], ColorCreateNestedOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], ColorCreateNestedOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
ColorCreateNestedOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateNestedOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ColorCreateNestedOneWithoutOrderLineItemsInput);
exports.ColorCreateNestedOneWithoutOrderLineItemsInput = ColorCreateNestedOneWithoutOrderLineItemsInput;
