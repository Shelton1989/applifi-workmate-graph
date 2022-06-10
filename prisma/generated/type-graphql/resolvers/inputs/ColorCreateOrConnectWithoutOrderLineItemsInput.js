"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateOrConnectWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateWithoutOrderLineItemsInput");
const ColorWhereUniqueInput_1 = require("../inputs/ColorWhereUniqueInput");
let ColorCreateOrConnectWithoutOrderLineItemsInput = class ColorCreateOrConnectWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], ColorCreateOrConnectWithoutOrderLineItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateWithoutOrderLineItemsInput_1.ColorCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateWithoutOrderLineItemsInput_1.ColorCreateWithoutOrderLineItemsInput)
], ColorCreateOrConnectWithoutOrderLineItemsInput.prototype, "create", void 0);
ColorCreateOrConnectWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateOrConnectWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ColorCreateOrConnectWithoutOrderLineItemsInput);
exports.ColorCreateOrConnectWithoutOrderLineItemsInput = ColorCreateOrConnectWithoutOrderLineItemsInput;
